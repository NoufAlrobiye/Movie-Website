
 var myModal = document.getElementById('myModal')
 var myInput = document.getElementById('myInput')

 myModal.addEventListener('shown.bs.modal', function () {
 myInput.focus()
})


//get_req
const axios = require('axios');

axios.get('http://webcode.me')
.then(resp => {
    console.log(resp.data);
});

/*get the movies by search 
$(document).ready(() => {
    $('#searchForm'). on('submit', (e) =>{
        e.preventDefault();
        let searchText = $('#searchText').val();
        getMovies(searchText);
    });
});

function getMovies (searchText) {
 axios.get('http://www.omdbapi.com/?apikey=4d34075e' + '&s='+ searchText)
 .then((response) => {
   console.log(response);
 })
}
*/