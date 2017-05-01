import {Router} from 'express';
import * as routeServices from '../../service/fareServices'

let router=Router();

router.post('/getDetails', function (request,response,next) {
    let fromPlace=request.body.fromPlace;
    let toPlace=request.body.toPlace;

    routeServices.readFromPlaces(fromPlace,toPlace)
        .then(routeDetail=>{
            response.json({routeDetail:routeDetail});
        })
        .catch(error=>{
            response.status(500).json({error:error});
        })
});

export default router;