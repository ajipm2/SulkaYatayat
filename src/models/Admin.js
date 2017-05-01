import dbConfig from '../knexfile';
import knexJs from 'knex';

let knex = knexJs(dbConfig.development);

export function verifyUser(checkUser){
     return new Promise((resolve, reject) => {
         knex('Users').where({AdminName:checkUser.user, password:checkUser.password}).select('AdminName')
            .then(res=>{
                console.log(res);
                if(res[0].AdminName=='Admin')
                {
                    return resolve(res);
                }
                resolve(res);
            })
            .catch(err=>{
                reject(err);
            });
    });
}








