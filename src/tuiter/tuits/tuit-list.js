import React from "react";
import { useSelector } from 'react-redux';
import TuitItem from "./tuit-item";



const TuitList = () => {
    const postsArray = useSelector(state => state.tuits);

    return(
        <div>
            {
                postsArray.map((post) => 
                    <TuitItem key={post._id} post={post}/>
                )
            }
        </div>
        );
    };
export default TuitList;