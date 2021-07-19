let lat = null;
let lng = null;

AFRAME.registerComponent("origami", {
  init: function () {
    const origami = document.querySelectorAll(".origami");
    const origamiBg = document.getElementById("video-oribami-bg");
    this.videoOrigami = document.getElementById("video-origami");
    this.origamiContainer = document.getElementById("video-origami-container");

    this.onOrigamiClick = this.onOrigamiClick.bind(this);
    this.onOrigamiBgClick = this.onOrigamiBgClick.bind(this);
    for (var i = 0; i < origami.length; ++i) {
      origami[i].addEventListener("click", this.onOrigamiClick);
    }
    origamiBg.addEventListener("click", this.onOrigamiBgClick);
  },
  onOrigamiClick: function (evt) {
    console.log("HOLAS");
    this.origamiContainer.style.display = "flex";
    this.videoOrigami.currentTime = 0;
    this.videoOrigami.play();
  },
  onOrigamiBgClick: function (evt) {
    this.origamiContainer.style.display = "none";
    this.videoOrigami.currentTime = 0;
    this.videoOrigami.pause();
  },
});

window.onload = () => {
  console.log("HOLASAMIGO");
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
