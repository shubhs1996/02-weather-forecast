const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const pathdir=path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../templates/views')
const partialpath=path.join(__dirname,'../templates/partials')


const app =express()
const port =process.env.PORT||3000

app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(partialpath)

app.use(express.static(pathdir))


app.get('',(req,res)=>{
    res.render('index',{
        title:'WEATHER APP',
        name:'shubham singh'
    })
})

app.get('/contact',(req,res)=>{
    res.render('contact',{
        title:'help me out',
        name:'shubham singh'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'provide location name...!'
        })
    }
  const address=req.query.address
   geocode(address,(err,{lat,long,location})=>{
      if(err){
        return res.send({err})
      }
        
       
       
       forecast(lat,long,(err,foredata)=>{
        if(err){
            return res.send({err})
        }

        res.send({
           forecast:foredata,
           location:location,
           address:req.query.address
        })
        


       })


   })
})


app.listen(port,()=>{ 
    console.log('listening on port '+port)
})

