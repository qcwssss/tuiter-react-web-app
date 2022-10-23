import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <a className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="fa-solid fa-house"></i> Home
            </a>
            <a className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="fa-solid fa-hashtag"></i> Explore
            </a>
            <a className={`list-group-item ${active === 'notifications'?'active':''}`}>
                <i className="fa-solid fa-bell"></i> Notifications
            </a>
            <a className={`list-group-item ${active === 'messages'?'active':''}`}>
                <i className="fa-solid fa-envelope"></i> Messages
            </a>
            <a className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                <i className="fa-solid fa-bookmark"></i> Bookmarks
            </a>
            <a className={`list-group-item ${active === 'lists'?'active':''}`}>
                <i className="fa-solid fa-list"></i> Lists
            </a>
            <a className={`list-group-item ${active === 'profile'?'active':''}`}>
                <i className="fa-solid fa-user"></i> Profile
            </a>
            <a className={`list-group-item ${active === 'more'?'active':''}`}>
                <i className="fa-solid fa-plus"></i> More
            </a>
        </div>
    )
};

export default NavigationSidebar;
