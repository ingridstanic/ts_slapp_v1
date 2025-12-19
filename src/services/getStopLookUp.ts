import type { Trip } from "../models/Trip";

export const getStopInfoFromGeoLocation = async (coords: number) => {
  const response = await fetch(
    "https://journeyplanner.integration.sl.se/v2stop-finder?name_sf=" +
      coords +
      "&any_obj_filter_sf=2&type_sf=coord"
  );

  const data: Trip = await response.json();

  return data;
};

export const getStopInfoFromUser = async (search: string) => {
  const response = await fetch(
    "https://journeyplanner.integration.sl.se/v2stop-finder?name_sf=" +
      search +
      "&any_obj_filter_sf=2&type_sf=any"
  );

  const data: Trip = await response.json();

  return data;
};
