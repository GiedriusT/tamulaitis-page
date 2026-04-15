/* global window, document */
(function () {
  /*
  Codeblocks are rendered server-side, without React hydration. To keep the
  "click to enable scrolling" UX, `ArticleCodeblock` outputs `data-*` hooks
  and a CSS-module class name in `data-activated-class`.

  This script is loaded on every page and:
  - on click: finds the nearest `[data-codeblock-overlay]`, then the parent
    `[data-codeblock]`, then toggles the activation class on the content
  - on scroll: removes activation from all codeblocks, but only when the
    scroll happens outside of `[data-codeblock-content]`
  */
  if (window.__articleCodeblockInit) return;
  window.__articleCodeblockInit = true;

  document.addEventListener('click', function (event) {
    var target = event.target;
    if (!target || !target.closest) return;
    var overlay = target.closest('[data-codeblock-overlay]');
    if (!overlay) return;
    var root = overlay.closest('[data-codeblock]');
    if (!root) return;
    var content = root.querySelector('[data-codeblock-content]');
    if (!content) return;
    var cls = content.getAttribute('data-activated-class') || '';
    if (!cls) return;
    content.classList.add(cls);
  });

  window.addEventListener('scroll', function () {
    document.querySelectorAll('[data-codeblock-content]').forEach(function (el) {
      var cls = el.getAttribute('data-activated-class') || '';
      if (!cls) return;
      el.classList.remove(cls);
    });
  });
})();

