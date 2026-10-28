(function () {
  'use strict';
  var steps = [
    ['01 - Поставь цель', 'Расскажи, чего хочешь достичь, и сформулируй свою цель. Неважно, насколько она большая — начни с желаемого результата.'],
    ['02 - Доверь план ИИ', 'ИИ проанализирует твою цель, разделит её на небольшие задачи и составит понятный пошаговый план действий.'],
    ['03 - Настрой свой маршрут', 'Измени сроки, задачи и темп выполнения. Подстрой готовый план под свои возможности, привычки и ритм жизни.'],
    ['04 - Двигайся к результату', 'Выполняй задачи, отмечай свой прогресс и следи за результатами. Каждый выполненный шаг приближает тебя к цели.']
  ];
  var tabs = document.querySelectorAll('.tabs [role="tab"]');
  var title = document.getElementById('panel-title');
  var text = document.getElementById('panel-text');
  function select(i) {
    tabs.forEach(function (t, k) {
      var on = k === i;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
    });
    title.textContent = steps[i][0];
    text.textContent = steps[i][1];
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
})();
