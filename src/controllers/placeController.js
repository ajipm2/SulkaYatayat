import * as placeService from '../service/placeService';
import {Router} from 'express';

let router=Router();

router.get('/getPlaces', function(request, response, next) {
    let fromPlaceList;
    placeService.readFromPlaces()
        .then(placeList=>{
            fromPlaceList=placeList;
            return placeService.readToPlaces();
        })
        .then(toPlace=>{
            response.render('place',{fromPlace:fromPlaceList,toPlace:toPlace});
        })
        .catch(err=>{
            response.json({error:err});
        })
});

export default router;
