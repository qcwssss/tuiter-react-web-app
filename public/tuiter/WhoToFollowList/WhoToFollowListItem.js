import followItemsData from "./who.js";

const WhoToFollowListItem = (who) => {
    return(
    ` 
    <li class="list-group-item">
        <div class="row">
            <div class="col-2 ">
                <img src="../../img/${who.avatarIcon}" style="height: 45px">
            </div>
            <div class="col-4 ps-2">

                <div class="fw-bolder">
                    ${who.userName}
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <div class="text-secondary">
                    @${who.handle}
                </div>
            </div>
            <div class="col ">
                <button class="float-end mt-2 rounded-pill btn btn-primary">Follow</button>
            </div>
        </div>
    </li>
    `)
}

export default WhoToFollowListItem;