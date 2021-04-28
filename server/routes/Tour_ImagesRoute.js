import { Router } from 'express';
import IndexCtrl from '../controller/IndexController'

const router = Router();
router.post('/', IndexCtrl.Tour_ImagesCtrl.create);
router.get('/', IndexCtrl.Tour_ImagesCtrl.findAll);
router.get('/:id', IndexCtrl.Tour_ImagesCtrl.findOne);
router.put('/:id', IndexCtrl.Tour_ImagesCtrl.update);
router.delete('/:id', IndexCtrl.Tour_ImagesCtrl.remove);
router.get('/rawSQL/:id', IndexCtrl.Tour_ImagesCtrl.rawSQL);

export default router;