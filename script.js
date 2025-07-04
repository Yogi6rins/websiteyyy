document.getElementById('form_cari').addEventListener('submit', function(e) {
    e.preventDefault();

var query = document.getElementById('search-query').value;
var iframe = document.getElementById('pencarian');

iframe.src="https://www.detik.com/search/searchall?query=" + encodeURIComponent(query);
});