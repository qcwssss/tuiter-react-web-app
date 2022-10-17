import NavigationSidebar from "../NavigationSidebar/index.js";
import renderPostList from "../PostList/index.js";
import PostSummaryList from './../PostSummaryList/index.js';


const HomeScreen = () => {
    return (`
    <div class="row">
        <div class="col-2">
            ${NavigationSidebar()}
        </div>
        <div class="col">
            ${renderPostList()}
        </div>
        <div class="col-4">
            ${PostSummaryList()}
        </div>
    </div>
    `)
}

$('#wd-home-screen').append(HomeScreen)


export default HomeScreen;
