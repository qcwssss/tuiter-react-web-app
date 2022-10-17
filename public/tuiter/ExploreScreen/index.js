import ExploreComponent from "./ExploreComponent.js";

const ExploreScreen = () => {
    return(`
        ${ExploreComponent()}
    `);
};

$('#wd-explore-screen').append(ExploreScreen);

export default ExploreScreen;