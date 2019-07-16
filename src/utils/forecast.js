const request=require('request')

const forecast =(lat,long,call)=>{
 const url='https://api.darksky.net/forecast/27468051ad8515b81e747084269ee397/'+lat+','+long+'?units=si'

 request({url,json:true},(err,data)=>{
  if(err){
      call('not able to connect',undefined)
  }else if(data.body.error)
  {
      call('provide valid location',undefined)
  }else{
      call(undefined,{
        timezone:data.body.timezone,
        temperature:data.body.currently.temperature,
        pressure:data.body.currently.pressure,
        rainProb:data.body.currently.precipProbability,
        summary:data.body.currently.summary,
        windspeed:data.body.currently.windSpeed,
        degree1max:data.body.daily.data[1].temperatureHigh,
        degree1min:data.body.daily.data[1].temperatureLow,
        degree2max:data.body.daily.data[2].temperatureHigh,
        degree2min:data.body.daily.data[2].temperatureLow,
        degree3max:data.body.daily.data[3].temperatureHigh,
        degree3min:data.body.daily.data[3].temperatureLow,
        degree4max:data.body.daily.data[4].temperatureHigh,
        degree4min:data.body.daily.data[4].temperatureLow,
        degree5max:data.body.daily.data[5].temperatureHigh,
        degree5min:data.body.daily.data[5].temperatureLow,
        degree6max:data.body.daily.data[6].temperatureHigh,
        degree6min:data.body.daily.data[6].temperatureLow,
        summary1:data.body.daily.data[1].summary,
        summary2:data.body.daily.data[2].summary,
        summary3:data.body.daily.data[3].summary,
        summary4:data.body.daily.data[4].summary,
        summary5:data.body.daily.data[5].summary,
        summary6:data.body.daily.data[6].summary,
       
        img1:data.body.daily.data[0].icon,
        img2:data.body.daily.data[1].icon,
        img3:data.body.daily.data[2].icon,
        img4:data.body.daily.data[3].icon,
        img5:data.body.daily.data[4].icon,
        img6:data.body.daily.data[5].icon,
        img7:data.body.daily.data[6].icon,



      })
  }

})
}

module.exports=forecast
 

 