import { Router } from 'express';
import IndexCtrl from '../controller/IndexController'

const router = Router();
router.post('/', IndexCtrl.OrdersCtrl.create);
router.get('/', IndexCtrl.OrdersCtrl.findAll);
router.get('/:id', IndexCtrl.OrdersCtrl.findOne);
router.put('/:id', IndexCtrl.OrdersCtrl.update);
router.delete('/:id', IndexCtrl.OrdersCtrl.remove);
router.get('/rawSQL/:id', IndexCtrl.OrdersCtrl.rawSQL);

export default router;