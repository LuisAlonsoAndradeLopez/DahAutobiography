var sidebar = document.getElementsByClassName('sidebar')[0];
var whoAmIContent = document.getElementsByClassName('who-am-i-content')[0];
var projectsContent = document.getElementsByClassName('projects-content')[0];
var profilesContent = document.getElementsByClassName('profiles-content')[0];

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