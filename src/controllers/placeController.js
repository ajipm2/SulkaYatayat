import * as placeService from '../service/placeService';
import {Router} from 'express';

let router=Router();

router.get('/getInfo', function(request, response, next) {
    placeService.ListPlace()
        .then(List=>{
            console.log(List);
            response.render('place',{PlaceList:List});
        })
        .catch(err=>{
            response.json({error:err});
        })
});

export default router;
