/**
 * Created by Dell on 4/27/2017.
 */
import * as routeService from '../service/fareServices'
import {Router} from 'express'

let router=Router();

router.get('/getfare', function(request, response, next) {
    routeService.Fare()
        .then(List=>{
            console.log(List);
            response.render('fare',{FareList:List});
        })
        .catch(err=>{
            response.json({error:err});
        })
});

export default router;