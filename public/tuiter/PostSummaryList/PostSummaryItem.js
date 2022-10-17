const  PostSummaryItem = (item) => {
    return(`
    <li class="list-group-item">
        <div class="row">
            <div class="col-8 ">
                <div class="text-secondary">
                    ${item.topic}
                </div>
                <div class="fw-bolder">
                    ${item.userName}
                    <i class="fa-solid fa-circle-check"></i>
                    <span class="text-secondary">- ${item.time}</span>
                </div>
                <div class="fw-bolder">
                    ${item.title}
                </div>
            </div>
            <div class="col ">
                <img class="float-end rounded" src="../../img/${item.image}" style="height: 100px">
            </div>
        </div>
    </li>

    `);
}

export default PostSummaryItem;