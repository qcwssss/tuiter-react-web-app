import PostItem from "./post-item";
import postList from "./post-list.json"

const HomeComponent = () => {
    return(
        <div >
            {
                postList.map(post =>
                <PostItem
                key={post._id} post={post}/> )
            }
        </div>
        );
    };
    
export default HomeComponent;
