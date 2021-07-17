let lat = null;
let lng = null;
/*
AFRAME.registerComponent("info-panel", {
  init: function () {
    console.log("HOLAS", this.el);
    this.el.addEventListener("click", function (evt) {
      console.log("HOLASPASA222");
    });
  },
});
*/

window.onload = () => {
  console.log("HOLASAMIGO");
  const el = document
    .getElementById("itemMesh")
    .addEventListener("click", function (evt) {
      alert("CLICK");
    });

  const constraints = {
    video: {
      facingMode: "environment",
    },
  };

  const video = document.querySelector("video");

  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    video.srcObject = stream;
  });
};
/*

window.onload = () => {
  
  const constraints = {
    video: {
      facingMode: "environment",
    },
  };

  const video = document.querySelector("video");

  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    video.srcObject = stream;
  });

  //DECLARAR LEMENTOS
  navigator.geolocation.getCurrentPosition(function (position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    let places = staticLoadPlaces();
    //renderPlaces(places);
  });

  //CLICK EN MESH
  //const holas = document.querySelector("a-entity").object3D;
  //console.log("HOLAS", holas);
};

function onMeshClick(ev) {
  console.log("HOLASCOMPADRE");
}

function generateRandomInt(min, max) {
  const randomnum = Math.random() * (max - min);
  return randomnum.toFixed(6);
}

function staticLoadPlaces() {
  const randomSpace = 0.000013;
  return [
    {
      name: "Magnemite",
      location: {
        lat: lat - 0.00022,
        lng: lng + 0.00022,
      },
      position: {
        x: 1,
        y: 1,
        z: 1,
      },
    },
  ];
}

function renderPlaces(places) {
  let scene = document.querySelector("a-scene");

  places.forEach((place) => {
    let latitude = place.location.lat;
    let longitude = place.location.lng;

    let model = document.createElement("a-entity");
    model.setAttribute(
      "position",
      //`latitude: ${latitude}; longitude: ${longitude};`
      `${place.position.x} ${place.position.y} ${place.position.z}`
    );
    model.setAttribute("gltf-model", "./assets/magnemite/scene.gltf");
    model.setAttribute("rotation", "0 180 0");
    model.setAttribute("animation-mixer", "");
    model.setAttribute("scale", "0.1 0.1 0.1");

    model.addEventListener("loaded", () => {
      window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
    });

    scene.appendChild(model);
  });
}
*/
