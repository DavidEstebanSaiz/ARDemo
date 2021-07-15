let lat = null;
let lng = null;

window.onload = () => {
  //DECLARAR LEMENTOS
  navigator.geolocation.getCurrentPosition(function (position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    let places = staticLoadPlaces();
    renderPlaces(places);
  });

  //DEBUG CAMARA

  window.onload = function () {
    var camera = document.getElementById("camera");
    const crd_longitude = document.getElementById("crd_longitude");
    const crd_latitude = document.getElementById("crd_latitude");
    const zero_crd_longitude = document.getElementById("zero_crd_longitude");
    const zero_crd_latitude = document.getElementById("zero_crd_latitude");
    const camera_p_x = document.getElementById("camera_p_x");
    const camera_p_z = document.getElementById("camera_p_z");
    const compass_heading = document.getElementById("compass_heading");
    const camera_angle = document.getElementById("camera_angle");
    const geohash_7chars = document.getElementById("geohash_7chars");

    camera.addEventListener("componentchanged", function (evt) {
      switch (evt.detail.name) {
        case "rotation":
          //console.log('camera rotation changed', evt.detail.newData);
          var compassRotation = camera.components["compass-rotation"],
            lookControls = camera.components["look-controls"];
          camera_angle.innerText = evt.detail.newData.y;
          if (lookControls) {
            yaw_angle.innerText = THREE.Math.radToDeg(
              lookControls.yawObject.rotation.y
            );
          }
          if (compassRotation) {
            compass_heading.innerText = compassRotation.heading;
          }
          break;
        case "position":
          //console.log('camera position changed', evt.detail.newData);
          var gpsPosition = camera.components["gps-position"];
          camera_p_x.innerText = evt.detail.newData.x;
          camera_p_z.innerText = evt.detail.newData.z;
          if (gpsPosition) {
            if (gpsPosition.crd) {
              crd_longitude.innerText = gpsPosition.crd.longitude;
              crd_latitude.innerText = gpsPosition.crd.latitude;

              var hash = Geohash.encode(
                gpsPosition.crd.latitude,
                gpsPosition.crd.longitude,
                7
              );
              geohash_7chars.innerText = hash;
            }
            if (gpsPosition.zeroCrd) {
              zero_crd_longitude.innerText = gpsPosition.zeroCrd.longitude;
              zero_crd_latitude.innerText = gpsPosition.zeroCrd.latitude;
            }
          }

          break;
      }
    });
  };
};

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
    },
    {
      name: "Magnemite",
      location: {
        lat: lat + 0.00091,
        lng: lng - 0.00032,
      },
    },
    {
      name: "Magnemite",
      location: {
        lat: lat + 0.00002,
        lng: lng + 0.00008,
      },
    },
    {
      name: "Magnemite",
      location: {
        lat: lat + 0.00002,
        lng: +0.00003,
      },
    },
    {
      name: "Magnemite",
      location: {
        lat: lat - 0.00024,
        lng: lng + 0.00034,
      },
    },
    {
      name: "Magnemite",
      location: {
        lat: lat - 0.00105,
        lng: lng + 0.00065,
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
      "gps-entity-place",
      `latitude: ${latitude}; longitude: ${longitude};`
    );
    //model.setAttribute("gltf-model", "./public/scene.gltf");
    model.setAttribute("rotation", "0 180 0");
    model.setAttribute("animation-mixer", "");
    model.setAttribute("scale", "0.5 0.5 0.5");

    model.addEventListener("loaded", () => {
      window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
    });

    scene.appendChild(model);
  });
}
