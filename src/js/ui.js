document.addEventListener('DOMContentLoaded', function() {
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  getKlasemen_inggris();
  getKlasemen_spanyol();
  getKlasemen_prancis();
  getKlasemen_jerman();
  getAllStandings_inggris();
  getAllStandings_spanyol();
  getAllStandings_prancis();
  getAllStandings_jerman();
});

