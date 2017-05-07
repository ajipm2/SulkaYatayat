import databaseconfiguration from '../knexfile';
import knex from 'knex';

let knexconfig = knex(databaseconfiguration.development);

export function readFromPlaces()
{
    return new Promise((resolve,reject)=>{
        knexconfig('place').select('From')
            .then(placeList=>{
                resolve(placeList);
            })
            .catch(error=>{
                reject(error);
            })
    })
}
export function listPlace()
{
    return new Promise((resolve,reject)=>{
        knexconfig('place').select('*')
            .then(placeList=>{
                resolve(placeList);
            })
            .catch(error=>{
                reject(error);
            })
    })
}

export function readToPlaces()
{
    return new Promise((resolve,reject)=>{
        knexconfig('place').select('To')
            .then(placeList=>{
                resolve(placeList);
            })
            .catch(error=>{
                reject(error);
            })
    })
}


export function searchByFromPlaces(placeName) {
    return new Promise((resolve, reject) => {
        knexconfig('place').where('From', '%'+placeName+'%')
            .then(searchedFromPlaces => {
                resolve(searchedFromPlaces);
            })
            .catch(err => {
                reject(err);
            })
    })
}

export function searchByToPlaces(placeName) {
    return new Promise((resolve, reject) => {
        knexconfig('place').where('To', '%'+placeName+'%')
            .then(searchedToPlaces => {
                resolve(searchedToPlaces);
            })
            .catch(err => {
                reject(err);
            })
    })
}

export function listFare()
{
    return new Promise((resolve,reject)=>{
        knexconfig('Routes').select('*')
            .then(fareList=>{
                resolve(fareList);
            })
            .catch(error=>{
                reject(error);
            })
    })
}