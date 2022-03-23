
console.log("here is movies");

const moviesKey ="aa93ad635b1986680a6be8659849a0a2"
const imgPath = "https://image.tmdb.org/t/p/original/"

axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${moviesKey}`)
  .then(function (response) {
    // handle success
    console.log(response.data.results);
    document.getElementById("Trending").innerHTML=response.data.results.map(item => 
      `
        
      <div class="col-md-3 col-sm-6 mt-3">
      <div class="card my-3">
         <img src=${imgPath+item.poster_path}>
          <div class="card-body">
            <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="MoviesDetails(${item.id})">
Details
</button>
<a class="nav-link" href="#"><i class="bi bi-bookmark-fill" onclick="watchList(${item.id})"></i></a>
           <a class="nav-link" href="#"><i class="bi bi-heart-fill" onclick="FavList(${item.id}"></i></a>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      ...
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
  </div>
</div>
</div>
          </div>
        </div>
      </div>
      `
        
        )
  })


  //Get Movies
  let actionCard = document.getElementById("Action");
  MoviesCat(28,actionCard);

  let Adventure = document.getElementById("Adventure")
  MoviesCat(12,Adventure);

  let ComedyCard = document.getElementById("Comedy")
  MoviesCat(35,Comedy);

  let DramaCard = document.getElementById("Drama")
  MoviesCat(18,Drama);

  function MoviesCat (id,card){
    axios
    .get(`https://api.themoviedb.org/3/discover/movie?api_key=aa93ad635b1986680a6be8659849a0a2&with_genres=${id}`)
    .then ((res)=> {console.log(res.data.results)

      card.innerHTML = res.data.results.map(item=>
        `
        
        <div class="col-md-3 col-sm-6 mt-3">
        <div class="card my-3">
           <img src=${imgPath+item.poster_path}>
            <div class="card-body">
              <!-- Button trigger modal -->
       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="MoviesDetails(${item.id})">
        Details
      </button>
             <a class="nav-link" href="#"><i class="bi bi-bookmark-fill" onclick="watchList(${item.id})"></i></a>
             <a class="nav-link" href="#"><i class="bi bi-heart-fill" onclick="FavList(${item.id}"></i></a>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
        `
        ).join('')
    })
  }

//Movies Details 
function MoviesDetails(movie_id){
  console.log(movie_id,"id");

  axios
  .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=aa93ad635b1986680a6be8659849a0a2&append_to_response=videos,similar,credits`)
  .then((res) => {console.log(res.data)
    let item = res.data;
    let char = item.credits.cast;
    var charNames = [];
    for (var i = 0; i < 4; i++){
      charNames.push(char[i].name);
    }
    let genre = res.data.genres;
    var genreList = genre.map((genre) =>{
      return genre.name;
    });

    let video = res.data.videos.results;
    console.log(video);
    let similarMovies = res.data.similar.results;
    console.log(similarMovies);
    var similarMoviesList = similarMovies.map((element) =>{
      return element;
    })

    document.getElementById("#exampleModal").innerHTML = 
    `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${item.title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div> 
    `
  }
  )

}