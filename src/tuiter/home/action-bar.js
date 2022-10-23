import { React } from 'react';

const actionStyle = {
    justifyContent: "space-between",
    listStyleType: "none"
}

const ActionBar = (props) => {
    return(
        <ul className="list-group list-group-horizontal text-secondary" style={actionStyle}>
            <li>
                <i className="fa-regular fa-comment p-2"> </i> {props.post.chat}
            </li>
            <li>
                <i className="fa-solid fa-retweet p-2"></i> {props.post.retuit}
            </li>
            <li className="wd-like">
                <i className="fa-regular fa-heart p-2"></i> <span> {props.post.likes}</span>
            </li>
            <li>
                <i className="fa-solid fa-share-from-square p-2"></i>
            </li>
        </ul>
    )
}

export default ActionBar;
