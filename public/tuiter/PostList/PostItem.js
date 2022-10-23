const renderContent = (item) => {
    return item.hasContent ? `            <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text mb-0"> ${item.content}
        </p>
    <p class="card-text">${item.secondary} </p>
</div>` : ''
    
}

const renderTuit = (item) => {
    if (item.handle === 'elonmusk') {
        return (`Amazing show about <span style="color:#3f86f2">${item.reference}</span>
        mission!`);
    } else if (item.handle === 'nypost') {
        return (`
        Grimes seen reading Karl Marx following split with world's richest man Elon Musk!
        <span style="color:#3f86f2">${item.reference}</span>
        `);
    } else {
        return ``;
    }
}

const PostItem = (item) => {
    return(`
    
        <div class="row pt-4 border border-secondary">
            <div class="col-1 ps-2">
                <img class="rounded-circle" src="../../img/${item.icon}"
                    style="width:40px; height: 40px; object-fit: cover;">
            </div>
            <div class="col-11">
                <div class="row">
                    <div class="col-11">
                        <div class="fw-bolder">
                            ${item.author}
                            <i class="fa-solid fa-circle-check"></i>
                            <span class="text-secondary">@${item.handle} - ${item.time}</span>
                        </div>
                        <div class="fw-normal">
                            ${renderTuit(item)}

                        </div>

                        <div class="card border border-secondary mb-3 mt-2">
                            <img src="../../img/${item.image}" class="card-img-top">
                            ${renderContent(item)}
                        </div>
                        <ul class="list-group list-group-horizontal"
                            style="justify-content: space-between; list-style-type: none;">
                            <li>
                                <i class="fa-regular fa-comment p-2"> </i> ${item.chat}
                            </li>
                            <li>
                                <i class="fa-solid fa-retweet p-2"></i> ${item.retuit}
                            </li>
                            <li class="wd-like">
                                <i class="fa-regular fa-heart p-2"></i> <span> ${item.likes}</span>
                            </li>
                            <li>
                                <i class="fa-solid fa-share-from-square p-2"></i>
                            </li>
                        </ul>
                    </div>
                    <div class="col-1">
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
            </div>
        </div>
    `);
}

export default PostItem;

$('#wd-post-item').append(PostItem)