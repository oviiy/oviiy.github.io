(function () {
  var tabs = Array.from(document.querySelectorAll('.portfolio-tab'));
  if (tabs.length !== 2) return;

  function activate(id, focusTab, updateUrl) {
    if (id !== 'research' && id !== 'projects') id = 'research';
    tabs.forEach(function (tab) {
      var selected = tab.getAttribute('aria-controls') === id;
      var panel = document.getElementById(tab.getAttribute('aria-controls'));
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      panel.hidden = !selected;
      if (selected && focusTab) tab.focus();
    });
    if (updateUrl) history.replaceState(null, '', '#' + id);
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () {
      activate(tab.getAttribute('aria-controls'), false, true);
    });
    tab.addEventListener('keydown', function (event) {
      var next = null;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === null) return;
      event.preventDefault();
      activate(tabs[next].getAttribute('aria-controls'), true, true);
    });
  });

  window.addEventListener('hashchange', function () {
    activate(location.hash.slice(1), false, false);
  });
  activate(location.hash.slice(1), false, false);
})();
