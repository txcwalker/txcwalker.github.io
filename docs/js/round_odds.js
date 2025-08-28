(function () {
  function byId(id){ return document.getElementById(id); }

  const select = byId('teamSelect');
  const btn    = byId('searchButton');
  const table  = byId('oddsTable');

  if (!select || !btn || !table) return;

  btn.addEventListener('click', () => {
    const chosen = Array.from(select.selectedOptions).map(o => o.value);
    const rows = document.querySelectorAll('#oddsTable .team-row');

    if (chosen.length === 0) {
      rows.forEach(r => r.style.display = 'none');
      table.style.display = 'none';
      return;
    }

    rows.forEach(r => {
      const t = r.getAttribute('data-team');
      r.style.display = chosen.includes(t) ? '' : 'none';
    });
    table.style.display = '';
  });

  // Simple sorter
  window.sortTable = function(colIdx){
    const tbody = table.tBodies[0];
    const rows = Array.from(tbody.querySelectorAll('tr')).filter(r => r.style.display !== 'none');
    const asc = !table.dataset.sortAsc || table.dataset.sortAsc === 'false';
    rows.sort((a,b) => {
      const ta = a.cells[colIdx].innerText.trim().replace(/[^\d.\-]/g,'');
      const tb = b.cells[colIdx].innerText.trim().replace(/[^\d.\-]/g,'');
      const na = ta === '' ? a.cells[colIdx].innerText : parseFloat(ta);
      const nb = tb === '' ? b.cells[colIdx].innerText : parseFloat(tb);
      if (na < nb) return asc ? -1 : 1;
      if (na > nb) return asc ? 1 : -1;
      return 0;
    });
    rows.forEach(r => tbody.appendChild(r));
    table.dataset.sortAsc = asc ? 'true' : 'false';
  };
})();
