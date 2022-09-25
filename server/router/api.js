const router = require('express').Router();
const Product = require('../model/products');
const Users =require('../model/users');


router.get('/', async (req, res) => {
    //res.send("working application...");
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(503).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const { name, desc, price ,img} = req.body;
    const product = new Product({ name: name, desc: desc, price: price,img:img });
    try {
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id',async(req,res)=>{
    const id=req.params.id;
    try{
       const productREcord= await Product.findOne({_id:id});
       res.status(200).json(productREcord);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    console.log(id);
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({message:'successfully record delete'});

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.put('/:id',async(req,res)=>{
    const id =req.params.id
    //console.log(id)
    //console.log(req.body)
    const{name,desc,price}=req.body
    try{
    await Product.findByIdAndUpdate(id,{name:name,desc:desc,price:price})
    res.status(200).json({message:"succefully updated"})
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

router.post('/login',async(req,res)=>{
    const {username,password}=req.body
    console.log(username,password)
    const userRecord =await Users.findOne({username:username})
    console.log(userRecord)
    if(userRecord !==null){
        if(userRecord.password==password){
            res.json(userRecord)
        }else{
            res.json({message:"wrong credential"})
        }

    }else{
        res.json({message:"wrong credential"})
    }

})

router.get('/test',(req,res)=>{
    const username='ravi'
    const password='123'
   const usererecord= new Users({username:username,password:password})
   usererecord.save();
});

router.post('/cart',async(req,res)=>{
    const ids=req.body.ids
    //console.log(ids);
    const cartrecords =await Product.find({_id:{$in:ids}})
    res.json(cartrecords)
})


module.exports = router;