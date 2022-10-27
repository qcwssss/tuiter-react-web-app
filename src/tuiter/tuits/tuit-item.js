import React from "react";
import TuitStats from './tuit-stats';
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";


// style variable
const blue = {color:'#2E9AFE'}

const showTitle = (post) => {
    return(
        <div className="fw-normal">
           <span className="fw-bolder">{post.userName}</span> <i className="fa-solid fa-circle-check" style={blue}></i>
            <span className="ms-1 text-secondary">{post.handle} • {post.time}</span>
        </div>
    )
}

const TuitItem = (props) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
            <div className="row pt-4 border border-light">
                <div className="col-2 ps-3 ">
                    <img width={60}  className="rounded-circle mx-auto d-block" 
                    src={`/img/${props.post.image}`} alt={`${props.post.handle}`}/>
                </div>
                <div className="col-10 ">
                    <div className="row">
                        <div className="col-11">
                            <i className="bi bi-x-lg float-end" 
                            onClick={() => deleteTuitHandler(props.post._id)}></i>
                            {showTitle(props.post)}
                            <div className="mt-1">
                                <p>{props.post.tuit}</p>
                            </div>
                                <TuitStats post={props.post} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
export default TuitItem;