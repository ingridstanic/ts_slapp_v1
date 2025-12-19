import type { Trip } from "../models/Trip";

export const createHtml = (trip: Trip) => {
  const section = document.getElementById("journeyContainer");

  if (section) {
    section.innerHTML = "";
  }

  trip.journeys.forEach((journey) => {
    journey.legs.forEach((leg) => {
      const name = document.createElement("h2");
      name.innerHTML = leg.leg.name;

      name.appendChild(name);
    });
  });
};
