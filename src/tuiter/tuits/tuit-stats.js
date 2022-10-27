import { React } from 'react';

const statsStyle = {
    justifyContent: "space-between",
    listStyleType: "none"
}

const TuitStats = (args) => {
    return(
        <ul className="list-group list-group-horizontal text-secondary" style={statsStyle}>
            <li>
                <i className="fa-regular fa-comment p-2"> </i> {args.post.replies}
            </li>
            <li>
                <i className="fa-solid fa-retweet p-2"></i> {args.post.retuits}
            </li>
            <li className="wd-like">
                <i className={`fa-heart p-2 ${args.post.liked ? 'text-danger fa-solid': 'fa-regular'}`}></i> <span> {args.post.likes}</span>
            </li>
            <li>
                <i className="fa-regular fa-share-from-square p-2"></i>
            </li>
        </ul>
    )
}

export default TuitStats;
