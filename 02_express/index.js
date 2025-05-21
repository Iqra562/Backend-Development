import express from 'express';

const app = express()
const port = 3000;

app.use(express.json())

let data= []
let nextId = 1

app.post('/sendData',(req,res)=>{
    const {name,price} = req.body
    const newData = {id:nextId++,name,price};
    data.push(newData)
    res.status(201).send(newData)

})

app.get('/getData',(req,res)=>{
    res.status(200).send(data);
})
app.get('/data/:id',(req,res)=>{
 const element=data.find(element => element.id === parseInt(req.params.id)); //anything which comes from params it will be in string format
 if(!element){
    return res.status(404).send('data not found')
 }
 res.status(200).send(element)


})

app.put('/updateData/:id',(req,res)=>{
  const element=data.find(element => element.id === parseInt(req.params.id));  
 if(!element){
    return res.status(404).send('data not found')
 }
 const {name,price}  =req.body
 element.name = name
 element.price = price
 res.send(200).send(element)

})

app.delete('/deleteData/:id',(req,res)=>{
    const index = data.findIndex(t =>t.id === parseInt(req.params.id))
    if(index === -1){
        return res.status(404).send('data not found to delte');

    }
    data.splice(index,1)
      res.status(204).send('data deleted');


})

app.get('/',(req,res)=>{
    res.send('hello from express')

})
app.get('/about',(req,res)=>{
    res.send('this is about data')

})



app.listen(port,()=>{
    console.log('port is running ')
})