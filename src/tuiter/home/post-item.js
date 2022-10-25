import React from "react";
import postList from "./post-list.json"
import ActionBar from "./action-bar"
import '@fortawesome/fontawesome-free/css/all.css';

// inline style
const blue = {color:'#2E9AFE'}


// helper functions
const renderTuit = (post) => {
    if (post.reference !== undefined) {
        if (post.handle === 'SpaceX') {
            return (<p> {post.tuit} &#8594; <span style={blue}>{post.reference}</span></p>);
        } else if (post.handle === 'nypost') {
            return (`
            Grimes seen reading Karl Marx following split with world's richest man Elon Musk!
            <span style="color:#3f86f2">${post.reference}</span>
            `);
        }
    } else {
        return (<p className="mb-1">{post.tuit}</p>);
    }
}

const retuit = (post) => {
    const retweetBy = <div className="ms-3 mb-0 text-secondary fw-bold">
        <i className="fa-solid fa-retweet p-2"></i> {post.retuitedBy} Retweeted</div>;
    return (post.retuitedBy !== undefined && 
        post.retuitedBy !== post.author) && retweetBy;
}

const showThread = (post) => {
    return (post.thread && 
        <div className="mt-2">
            <p style={blue}>show this thread</p>
        </div>
    )
}

const reshareTuit = (post) => {
    return (post.isTuitInside && insideTuit(post.content))
}

const insideTuit = (post) => {
    return(
        <div className="border rounded p-2">
            <div className="row">
                <div className="col-1 ps-2">
                    <img width={30} className=" rounded-circle" 
                    src={`/img/${post.icon}`} alt={`${post.handle}`}/>
                </div>
                <div className="col-11 ps-1">
                    {showTitle(post)}
                </div>
            </div>
            <div className="mt-1">
                {renderTuit(post)}
            </div>
        </div>
    )
}

const showTitle = (post) => {
    return(
        <div className="fw-normal">
           <span className="fw-bolder">{post.author}</span> <i className="fa-solid fa-circle-check" style={blue}></i>
            <span className="ms-1 text-secondary">@{post.handle} • {post.time}</span>
        </div>
    )
}


const PostItem = (
    {
        post = postList[0]
    }
) => {
return(
        <div className="row pt-4 border border-light">
                {retuit(post)}
                <div className="col-2 ps-3 ">
                    <img width={80}  className="rounded-circle mx-auto d-block" 
                    src={`/img/${post.icon}`} alt={`${post.handle}`}/>
                </div>
                <div className="col-10 ">
                    <div className="row">
                        <div className="col-11">
                            {showTitle(post)}
                            <div className="mt-1">
                                {renderTuit(post)}
                            </div>
                            {reshareTuit(post)}
                            {post.image ? 
                                <div className="card border border-secondary mb-3 mt-2">
                                    <img src={`/img/${post.image}`} className="card-img" alt={`${post.handle}`}/>
                                </div> 
                            : ''}
                                <ActionBar post={post} />
                                {showThread(post)}
                        </div>
                        <div className="col-1">
                            <i className="fa-solid fa-ellipsis text-secondary"></i>
                        </div>
                    </div>
                </div>

        </div>
    );
};
export default PostItem;