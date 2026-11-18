/* Espaço D'Liras — interações do site */
(function () {
  "use strict";

  var topo = document.querySelector(".topo");
  var botao = document.querySelector(".nav__abrir");
  var menu = document.getElementById("menu");
  var links = menu ? Array.prototype.slice.call(menu.querySelectorAll('a[href^="#"]')) : [];

  /* ---- menu mobile ---- */
  function fecharMenu() {
    if (!menu || !botao) return;
    menu.classList.remove("aberto");
    botao.setAttribute("aria-expanded", "false");
  }

  if (botao && menu) {
    botao.addEventListener("click", function () {
      var aberto = menu.classList.toggle("aberto");
      botao.setAttribute("aria-expanded", aberto ? "true" : "false");
    });

    links.forEach(function (link) {
      link.addEventListener("click", fecharMenu);
    });

    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !botao.contains(e.target)) fecharMenu();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") fecharMenu();
    });
  }

  /* ---- sombra do topo ao rolar ---- */
  function aoRolar() {
    if (topo) topo.classList.toggle("topo--fixo", window.scrollY > 12);
  }
  aoRolar();
  window.addEventListener("scroll", aoRolar, { passive: true });

  /* ---- link ativo conforme a seção visível ---- */
  var secoes = links
    .map(function (l) { return document.querySelector(l.getAttribute("href")); })
    .filter(Boolean);

  if ("IntersectionObserver" in window && secoes.length) {
    var observadorSecao = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        links.forEach(function (l) {
          l.classList.toggle("ativo", l.getAttribute("href") === "#" + entrada.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    secoes.forEach(function (s) { observadorSecao.observe(s); });
  }

  /* ---- animação de entrada ---- */
  var alvos = document.querySelectorAll(
    ".secao .pill, .painel, .galeria .foto, .contato, .hero__destaques li, .plano"
  );

  if ("IntersectionObserver" in window) {
    var observador = new IntersectionObserver(function (entradas, obs) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visivel");
          obs.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    Array.prototype.forEach.call(alvos, function (el, i) {
      el.classList.add("revelar");
      el.style.transitionDelay = Math.min(i % 4, 3) * 70 + "ms";
      observador.observe(el);
    });
  }

  /* ---- botão flutuante recua quando o rodapé aparece ---- */
  var zap = document.querySelector(".zap-flutuante");
  var rodape = document.querySelector(".rodape");
  if (zap && rodape && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        zap.classList.toggle("zap-flutuante--oculto", e.isIntersecting);
      });
    }, { threshold: 0.15 }).observe(rodape);
  }

  /* ---- ano do rodapé ---- */
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
})();
