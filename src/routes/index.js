import express  from 'express';
const router = express.Router();
import productsRoute from './products.js';

router.use('/products',productsRoute);
router.get('/',(req,res)=>{
	return res.send('hello word');
});


export default router;
