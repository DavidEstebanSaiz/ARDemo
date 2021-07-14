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

function staticLoadPlaces() {
  return [
    {
      name: "Magnemite",
      location: {
        lat: lat + 0.0002,
        lng: lng,
      },
    },
    {
      name: "Magnemite",
      location: {
        lat: lat + 0.00001,
        lng: lng,
      },
    },
    {
      name: "Magnemite",
      location: {
        lat: lat + 0.00002,
        lng: lng,
      },
    },
    {
      name: "Magnemite",
      location: {
        lat: lat + 0.00003,
        lng: lng,
      },
    },
    {
      name: "Magnemite",
      location: {
        lat: lat + 0.00004,
        lng: lng,
      },
    },
    {
      name: "Magnemite",
      location: {
        lat: lat + 0.00005,
        lng: lng,
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
