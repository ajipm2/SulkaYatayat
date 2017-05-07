import databaseconfiguration from '../knexfile';
import knex from 'knex';

let knexconfig = knex(databaseconfiguration.development);

export function readRoute(fromRoute, toRoute)
{
    return new Promise((resolve,reject)=>{
        knexconfig('Routes').where({RouteStart:fromRoute,RouteEnd:toRoute}).select('*')
            .then(selectedRoute=>{
                resolve(selectedRoute);
            })
            .catch(error=>{
                reject(error);
            })
    })
}
