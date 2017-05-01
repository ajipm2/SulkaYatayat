import * as placesModel from "../models/FareModel"

export function readFromPlaces(fromRoute,toRoute) {
    return placesModel.readRoute(fromRoute,toRoute);
}