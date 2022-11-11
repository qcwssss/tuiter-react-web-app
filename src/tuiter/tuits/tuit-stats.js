import { React } from 'react';
import { useDispatch } from "react-redux";
import { updateTuitThunk } from '../../services/tuits-thunks';

const statsStyle = {
    justifyContent: "space-between",
    listStyleType: "none"
}



const TuitStats = (args) => {
    const tuit = args.post;
    const dispatch = useDispatch();
    
    // const updateTuitLikes = () => {
    //     dispatch(updateTuitThunk(
    //         {...tuit, likes: tuit.likes + 1}
    //         )
    // }

    return(
        <ul className="list-group list-group-horizontal text-secondary" style={statsStyle}>
            <li>
                <i className="fa-regular fa-comment p-2"> </i> {args.post.replies}
            </li>
            <li>
                <i className="fa-solid fa-retweet p-2"></i> {args.post.retuits}
            </li>
            <li className="wd-like">
                <i  
                onClick={() => {
                    dispatch(updateTuitThunk({
                        ...tuit, 
                        likes: tuit.likes + 1,
                        liked: true
                    }));
                }}
                className={`fa-heart p-2 ${args.post.liked ? 'text-danger fa-solid': 'fa-regular'}`}></i>
                <span> {args.post.likes}</span>
            </li>
            <li>
                <i 
                onClick={() => {
                    dispatch(updateTuitThunk({
                        ...tuit, 
                        dislikes: tuit.dislikes + 1,
                    }));
                }}
                className="fa-regular fa-thumbs-down p-2">
                </i>
                <span> {args.post.dislikes}</span>
            </li>
            <li>
                <i className="fa-regular fa-share-from-square p-2"></i>
            </li>

        </ul>
    )
}

export default TuitStats;
