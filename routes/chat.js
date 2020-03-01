const express=require('express');
const router=express.Router(); 


const chat=require('../controllers/chat');
// const user_cont=require('../controllers/user');

router.get('/find',chat.getFind);

router.post('/find',chat.display);

router.post('/display',chat.send);

router.get('/postreget',chat.display);



// router.get('/indirectdisplay',chat.displayIndirect);
// router.get('/products',shop_cont.getProduct);

// router.get('/cart',user_cont.userIdForEachLink,shop_cont.getCart);

module.exports=router;