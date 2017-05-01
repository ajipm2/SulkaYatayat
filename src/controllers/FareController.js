/**
 * Created by Dell on 4/27/2017.
 */
import * as routeService from '../service/placeService'
import {Router} from 'express'

let router=Router();

router.get('/', function(request, response, next) {
    routeService.readRoute()
        .then(routeList=>{
            response.json({routeList:routeList});

        })

        .catch(err=>{
            response.json({error:err});
        })


});

export default router;