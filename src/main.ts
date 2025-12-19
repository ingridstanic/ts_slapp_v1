import "./scss/style.scss";
import {
  getStopInfoFromGeoLocation,
  getStopInfoFromUser,
} from "./services/getStopLookUp";

const success = async (pos: GeolocationPosition) => {
  console.log(pos.coords.longitude + pos.coords.latitude);

  const coords = pos.coords.longitude + pos.coords.latitude;

  const data = await getStopInfoFromGeoLocation(coords);

  console.log(data);
};

const error = (error: GeolocationPositionError) => {
  console.log(error.message);
};

navigator.geolocation.getCurrentPosition(success, error);

document
  .getElementById("searchJourney")
  ?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const destInput = document.getElementById("destination");
    if (!destInput) return;

    const destination = (destInput as HTMLInputElement).value;

    const data = await getStopInfoFromUser(destination);

    console.log(data);

    // getJourney(destination);

    // createHtml(data.);

    //behöver plocka ut id för geolocation och desination...
  });
