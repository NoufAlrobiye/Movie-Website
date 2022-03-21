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
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Details
</button>
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