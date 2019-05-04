const express = require('express');
const router = express.Router();

//to get the list of all carriers from db 
router.get('/carriers',(req,resp)=>{
    resp.send({"message":"Hello World!"});
});

router.post('/carriers',(req,res)=>{
res.send({type:"POST"});
});


//to update an existing carrier in db
router.put('/carriers/:id',(req,res)=>{
    console.log("id:"+req.params.id);
    console.log(req.body);

    res.send({type:"PUT"});
});

//to delete a carrier from db
router.delete('/carriers/:id',(req,res)=>{
  res.send({type:"DELETE"});
});

module.exports = router;