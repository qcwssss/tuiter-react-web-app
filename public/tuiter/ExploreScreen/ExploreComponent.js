import PostSummaryList from '../PostSummaryList/index.js'

const ExploreComponent = () => {
    return(`
    <div class="position-relative">
    <div class="row">
                <!-- search field and cog -->
                <div class="col-10">
                    <input class="form-control rounded-pill ps-5 " placeholder="Search Tuiter">
                    <span class="position-absolute wd-search-tuiter">
                    <i class="fa-solid fa-magnifying-glass" style="color: grey"></i>
                            </span>
                </div>
                <div class="col">
                    <i class="fa-solid fa-gear fa-lg pt-3"></i>
                </div>
            </div>
           </div>
           <ul class="nav m-2 nav-tabs">
                <!-- tabs -->
                <li class="nav-item">
                <a class="nav-link active" href="#">
                    For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1">Sports</a>
                </li>
                <li class="nav-item d-none d-lg-block">
                    <a class="nav-link disabled" href="#" tabindex="-1">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="position-relative">
           <img src="../../img/spaceship.jpg" alt="spaceship" style="width:100%">
           <h2 class="position-absolute bottom-0 left-0 px-2 text-white fw-bolder">SpaceX's Ship</h2>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
