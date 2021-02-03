const API_KEY="aa9d540d82a6fbfd6faabff827e1d3ab";
const COORDS = 'coords';

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longtitude = position.coords.longtitude;
    const coordsObj={
        latitude,
        longtitude
    };
    saveCoords(coordsObj);
}

function handleGeoError() {
    console.log("Cant access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loaderCords = localStorage.getItem(COORDS);
    if(loadCoords === null){
        askForCoords();
    } else {

    }
}

function init() {
    loadCoords();
}

init();