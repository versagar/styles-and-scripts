// Disable right-click context menu
document.addEventListener('contextmenu', event => event.preventDefault());
// Disable F12 key and Ctrl+Shift+I combo
document.addEventListener('keydown', event => {
    if (event.keyCode === 123 || (event.ctrlKey && event.shiftKey && event.keyCode === 73)) {
        event.preventDefault();
    }
});

document.getElementById("updates").innerHTML = '<object type="text/html" data="updateindex.html" width="100%" height="400vh"></object>';
function openNav() {
    document.getElementById("mySidenav").style.width = "20%";
    document.getElementById("mySidenav").style.backgroundColor = "rgba(0,0,0,0.7)"
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openOv() {
    document.getElementById("myOv").style.width = "20%";
    document.getElementById("myFeed").style.width = "80%";
    document.getElementById("openOv").style.display = "none";
}
function closeOv() {
    document.getElementById("myOv").style.width = "0";
    document.getElementById("myFeed").style.width = "100%";
    document.getElementById("openOv").style.display = "inline";
}
var c = 0;
var a = 0;
var b = 0;
function openForm() {
   
    if (a == 0) {
        a = 1;
        b = 1;
        openSagar();
        document.getElementById("form").style.display = "block";
        document.getElementById("guideFrame").src = "https://docs.google.com/forms/d/e/1FAIpQLSdPYLXazozE5HBf9LSb7frOYMblCh5PnoVQeiBv1dNdhJTTAA/viewform?";
        document.getElementById("formBtn").innerHTML = "Close Form";
        document.getElementById("footer").style.display = "none";
        document.getElementById("wbody").style.height = "calc(100vh - 12vmin)";
    } else {
        a = 0;
        document.getElementById("form").style.display = "none";
        document.getElementById("formBtn").innerHTML = "Open Form";
        document.getElementById("footer").style.display = "block";
        document.getElementById("wbody").style.height = "calc(100vh - 26vmin)";
    }
}

function openSagar() {
    
    if (b == 0) {

        b = 1;
        a = 1;
        openForm();
        document.getElementById("form").style.display = "block";
        document.getElementById("guideFrame").src = "dtbs/saga&1214.html";
        document.getElementById("sagarBtn").innerHTML = "Close Profile";
        document.getElementById("footer").style.display = "none";
        document.getElementById("wbody").style.height = "calc(100vh - 12vmin)";
    } else {
        b = 0;
        document.getElementById("form").style.display = "none";
        document.getElementById("sagarBtn").innerHTML = "Open Profile";
        document.getElementById("footer").style.display = "block";
        document.getElementById("wbody").style.height = "calc(100vh - 26vmin)";
    }

}

function openCpnotice() {

if (c == 0) {
    c = 1;
    document.getElementById("cpnotice").style.display = "block";
    
} else {
    c = 0;
    document.getElementById("cpnotice").style.display = "none";
   
}
}
