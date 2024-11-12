var sidebar = document.getElementsByClassName('sidebar')[0];
var whoAmIContent = document.getElementsByClassName('who-am-i-content')[0];
var projectsContent = document.getElementsByClassName('projects-content')[0];
var profilesContent = document.getElementsByClassName('profiles-content')[0];
var selectedProjectImageVisualizator = document.getElementsByClassName('selected-project-image-visualizator-div')[0];

//Show project images buttons
var showSMPUVImagesButton = document.getElementsById('showSMPUVImagesButton');
var showSPGERImagesButton = document.getElementsById('showSPGERImagesButton');
var showRenovacionLISImagesButton = document.getElementsById('showRenovacionLISImagesButton');
var showLaCopiaDeBlockbusterParaPrograSeguraImagesButton = document.getElementsById('showLaCopiaDeBlockbusterParaPrograSeguraImagesButton');
var showItaliaPizzaImagesButton = document.getElementsById('showItaliaPizzaImagesButton');
var showDevClothesShopImagesButton = document.getElementsById('showDevClothesShopImagesButton');
var showDahAutobiographyImagesButton = document.getElementsById('showDahAutobiographyImagesButton');

function sidebarCloseButtonOnClick() {
    sidebar.style.display = "none";
}

function showSidebarButtonOnClick() {
    sidebar.style.display = "block";
}

function whoAmIButtonOnClick() {
    whoAmIContent.style.display = "flex";
    projectsContent.style.display = "none";
    profilesContent.style.display = "none";
}

function projectsButtonOnClick() {
    whoAmIContent.style.display = "none";
    projectsContent.style.display = "flex";
    profilesContent.style.display = "none";
}

function profilesButtonOnClick() {
    whoAmIContent.style.display = "none";
    projectsContent.style.display = "none";
    profilesContent.style.display = "flex";
}

//Show project images buttons onclicks
function showSMPUVImagesButtonOnClick() {
    selectedProjectImageVisualizator.style.display = "absolute";
}

function showSPGERImagesButtonOnClick() {

}

function showRenovacionLISImagesButtonOnClick() {

}

function showLaCopiaDeBlockbusterParaPrograSeguraImagesButtonOnClick() {

}

function showItaliaPizzaImagesButtonOnClick() {

}

function showDevClothesShopImagesButtonOnClick() {

}

function showDahAutobiographyImagesButtonOnClick() {

}

function selectedProjectImageVisualizatorCloseButtonOnClick() {
    selectedProjectImageVisualizator.style.display = "none";
}

