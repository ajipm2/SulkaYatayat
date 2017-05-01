import {Router} from 'express';
import * as routeServices from '../../service/placeService'

let router=Router();

router.get('/readFromPlace', function (request,response,next) {
    routeServices.readFromPlaces()
        .then(Routes=>{
            response.json({AllFromRoutes:Routes});
        })
        .catch(error=>{
            response.status(500).json({error:error});
        })
});

router.get('/readToPlace', function (request,response,next) {
    routeServices.readToPlaces()
        .then(Routes=>{
            response.json({AllToRoutes:Routes});
        })
        .catch(error=>{
            response.status(500).json({error:error});
        })
});

router.post('/placeFromSearch',function (req,res,next) {
    let searchedName=req.body.searchedFromPlaces;
        routeServices.searchByFromPlaces(searchedName)
        .then(response=>{
            res.json({searchedFromPlaces:response});
        })
        .catch(err=>{
            res.json({data: 'Database Error', error: err});
        })
});


router.post('/placeToSearch',function (req,res,next) {
    let searchedName=req.body.searchedFromPlaces;
    routeServices.searchByToPlaces(searchedName)
        .then(response=>{
            res.json({searchedFromPlaces:response});
        })
        .catch(err=>{
            res.json({data: 'Database Error', error: err});
        })
});
export default router;