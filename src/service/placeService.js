import * as routeDetails from "../models/placeModel"

export function readFromPlaces() {
    return routeDetails.readFromPlaces();

}


export function readToPlaces() {
    return routeDetails.readToPlaces();

}

export function searchByFromPlaces(placeName) {
    return routeDetails.searchByFromPlaces(placeName);
}

export function searchByToPlaces(placeName) {
    return routeDetails.searchByToPlaces(placeName);
}