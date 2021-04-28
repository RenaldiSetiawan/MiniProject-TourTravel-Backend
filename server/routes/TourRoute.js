import { Router } from 'express';
import IndexCtrl from '../controller/IndexController'

const router = Router();
router.post('/', IndexCtrl.TourCtrl.create); //create 
router.get('/', IndexCtrl.TourCtrl.findAll);
router.get('/:id', IndexCtrl.TourCtrl.findOne);
router.put('/:id', IndexCtrl.TourCtrl.update); // update
router.delete('/:id', IndexCtrl.TourCtrl.remove); // delete
router.get('/rawSQL/:id', IndexCtrl.TourCtrl.rawSQL);

export default router;