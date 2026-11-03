(function () {
  'use strict';
  var steps = [
    ['01 - Поставь цель', 'Расскажи, чего хочешь достичь, и сформулируй свою цель. Неважно, насколько она большая — начни с желаемого результата.'],
    ['02 - Разбей на задачи', 'Раздели цель на конкретные действия — вручную или с помощью ИИ. Маленькие шаги легче начать и выполнить.'],
    ['03 - Настрой под себя', 'Выбери сроки, приоритеты и фильтры, чтобы видеть только то, что важно прямо сейчас.'],
    ['04 - Двигайся к результату', 'Отмечай выполненное и следи за прогрессом. Каждый шаг приближает тебя к цели.']
  ];
  var tabs = document.querySelectorAll('.tabs [role="tab"]');
  var title = document.getElementById('panel-title');
  var text = document.getElementById('panel-text');
  var panel = document.getElementById('panel');
  function select(i) {
    tabs.forEach(function (t, k) {
      var on = k === i;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
    });
    title.textContent = steps[i][0];
    text.textContent = steps[i][1];
    panel.classList.remove('swap'); void panel.offsetWidth; panel.classList.add('swap');
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(i); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (n === null) return;
      n = (n + tabs.length) % tabs.length;
      select(n); tabs[n].focus();
    });
  });
  select(0);
  panel.classList.remove('swap');

  var items = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  items.forEach(function (el) { io.observe(el); });
})();
