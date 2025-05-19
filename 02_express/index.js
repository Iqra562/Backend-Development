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

app.get('/',(req,res)=>{
    res.send('hello from express')

})
app.get('/about',(req,res)=>{
    res.send('this is about data')

})



app.listen(port,()=>{
    console.log('port is running ')
})