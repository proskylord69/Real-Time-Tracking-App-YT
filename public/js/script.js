const socket = io();

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            socket.emit("send-location", { latitude, longitude });
        },
        (error) => {
            switch (error.code) {
                case 1:
                    console.error("Permission denied by the user.");
                    break;
                case 2:
                    console.error("Position unavailable. Ensure GPS is enabled and try again.");
                    break;
                case 3:
                    console.error("Timeout expired. Please try again.");
                    break;
                default:
                    console.error("An unknown error occurred.");
                    break;
            }
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }
    );
} else {
    console.error("Geolocation is not supported by this browser.");
}

// Initialize the map
const map = L.map("map").setView([0, 0], 16); 

// Add tile layer to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "XYZ's map",
}).addTo(map);


const markers={};

socket.on("receive-location",(data)=>{
    const {id,latitude,longitude}=data;
    map.setView([latitude,longitude]);
    if(markers[id]){
        markers[id].setLatLng([latitude,longitude])
    }
    else{
        markers[id]=L.marker([latitude,longitude]).addTo(map);
    }
});

socket.on("user-disconnected",(id)=>{
        if(markers[id]){
            map.removeLayer(markers[id]);
            delete markers[id];
        }
})