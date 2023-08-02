const express=require('express')
const app=express();
const cors=require('cors');
const port=process.env.PORT || 8001;

const placesImg=require('./data/travelling_place.json');

app.use(cors())

app.get('/',(req,res)=>{
    res.send('News api running')
});

app.get('/travellingPlaces',(req,res)=>{
    res.send(placesImg)
})


app.listen(port,()=>{
    console.log('daily news server runninng ',port)
})