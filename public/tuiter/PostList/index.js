import postList from "./posts.js";
import PostItem from "./PostItem.js"

const renderPostList = () => {
    return (`
    <div>
        ${postList.map(item => {
                return PostItem(item);
            }).join(``) 
        }
    </div>

    `)
}

$('#wd-post-list').append(renderPostList());

export default renderPostList;