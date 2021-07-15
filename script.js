let lat = null;
let lng = null;

window.onload = () => {
  navigator.geolocation.getCurrentPosition(function (position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    let places = staticLoadPlaces();
    renderPlaces(places);
  });
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
        lat: lat + generateRandomInt(-randomSpace, randomSpace),
        lng: lng + generateRandomInt(-randomSpace, randomSpace),
      },
    },
    {
      name: "Magnemite",
      location: {
        lat: lat + generateRandomInt(-randomSpace, randomSpace),
        lng: lng + generateRandomInt(-randomSpace, randomSpace),
      },
    },
    {
      name: "Magnemite",
      location: {
        lat: lat + generateRandomInt(-randomSpace, randomSpace),
        lng: lng + generateRandomInt(-randomSpace, randomSpace),
      },
    },
    {
      name: "Magnemite",
      location: {
        lat: lat + generateRandomInt(-randomSpace, randomSpace),
        lng: lng + generateRandomInt(-randomSpace, randomSpace),
      },
    },
    {
      name: "Magnemite",
      location: {
        lat: lat + generateRandomInt(-randomSpace, randomSpace),
        lng: lng + generateRandomInt(-randomSpace, randomSpace),
      },
    },
    {
      name: "Magnemite",
      location: {
        lat: lat + generateRandomInt(-randomSpace, randomSpace),
        lng: lng + generateRandomInt(-randomSpace, randomSpace),
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
    model.setAttribute("gltf-model", "./assets/magnemite/scene.gltf");
    model.setAttribute("rotation", "0 180 0");
    model.setAttribute("animation-mixer", "");
    model.setAttribute("scale", "0.5 0.5 0.5");

    model.addEventListener("loaded", () => {
      window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
    });

    scene.appendChild(model);
  });
}
