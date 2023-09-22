const express=require('express')
const app=express();
const cors=require('cors');
const port=process.env.PORT || 8001;

const places=require('./data/travelling_place.json');
const hotel=require('./data/place_booking.json')

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
app.get('/bookingHotel',(req,res)=>{
    res.send(hotel)
})
app.get('/bookingHotel/:id',(req,res)=>{
    const id=req.params.id;
    const selectedHotel=hotel.find(n=>n.id==id);
    res.send(selectedHotel);
})

app.listen(port,()=>{
    console.log('daily news server runninng ',port)
})