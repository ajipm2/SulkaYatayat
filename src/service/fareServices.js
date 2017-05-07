import * as placesModel from "../models/FareModel"
import * as routeDetails from "../models/placeModel";

export function readFromPlaces(fromRoute,toRoute) {
    return placesModel.readRoute(fromRoute,toRoute);
}

export function Fare() {
    return routeDetails.listFare();
}