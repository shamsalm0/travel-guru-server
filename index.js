const express=require('express')
const app=express();
const cors=require('cors');
const port=process.env.PORT || 8001;

const places=require('./data/travelling_place.json');

app.use(cors())

app.get('/',(req,res)=>{
    res.send('News api running')
});

app.get('/travellingPlaces',(req,res)=>{
    res.send(places)
})

app.get('/travellingPlaces/:id',(req,res)=>{
    const id=req.params.id;
    const selectedPlaces=places.find(n=>n.id==id);
    console.log(selectedPlaces,'hi')
    res.send(selectedPlaces);
})

app.listen(port,()=>{
    console.log('daily news server runninng ',port)
})