import followItemsData from "./who.js"
import WhoToFollowListItem from "./WhoToFollowListItem.js"

const WhoToFollowList = () => {
    return(`
        <ul class="list-group">
            ${followItemsData?.map(item => {
                return WhoToFollowListItem(item);
            }).join('')}
        </ul>
    `);
}

$('#wd-follow').append(WhoToFollowList(followItemsData));

export default WhoToFollowList;
