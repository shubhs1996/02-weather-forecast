const degree1max=document.querySelector('#degree-1-max')
const degree1min=document.querySelector('#degree-1-min')
const degree2max=document.querySelector('#degree-2-max')
const degree2min=document.querySelector('#degree-2-min')
const degree3max=document.querySelector('#degree-3-max')
const degree3min=document.querySelector('#degree-3-min')
const degree4max=document.querySelector('#degree-4-max')
const degree4min=document.querySelector('#degree-4-min')
const degree5max=document.querySelector('#degree-5-max')
const degree5min=document.querySelector('#degree-5-min')
const degree6max=document.querySelector('#degree-6-max')
const degree6min=document.querySelector('#degree-6-min')
const summary1 =document.querySelector('#summary1')
const summary2=document.querySelector('#summary2')
const summary3 =document.querySelector('#summary3')
const summary4 =document.querySelector('#summary4')
const summary5 =document.querySelector('#summary5')
const summary6=document.querySelector('#summary6')

const weatherForm= document.querySelector('form')
const search=document.querySelector('input')
const message=document.querySelector('#message-1')
const location1=document.querySelector("#location")
const degree =document.querySelector("#degree")
const rainprob=document.querySelector("#rainprob")
const windspeed=document.querySelector("#windspeed")
const pressure =document.querySelector("#pressure")
const summary =document.querySelector('#summary')



//fixed location
fetch('http://localhost:8000/weather?address=New%20Delhi').then((response)=>{
  response.json().then((data)=>{



  location1.textContent=data.location,
  degree.textContent = Math.round( data.forecast.temperature )+' C',
  rainprob.textContent=(data.forecast.rainProb)*100+'%',
  windspeed.textContent=data.forecast.windspeed+'km/h',
  pressure.textContent=data.forecast.pressure+'Pa',
  summary.textContent=data.forecast.summary,
  degree1min.textContent=Math.round( data.forecast.degree1min )+' C',
  degree1max.textContent=Math.round( data.forecast.degree1max )+' C',
  degree2min.textContent=Math.round( data.forecast.degree2min )+' C',
  degree2max.textContent=Math.round( data.forecast.degree2max )+' C',
  degree3min.textContent=Math.round( data.forecast.degree3min )+' C',
  degree3max.textContent=Math.round( data.forecast.degree3max )+' C',
  degree4min.textContent=Math.round( data.forecast.degree4min )+' C',
  degree4max.textContent=Math.round( data.forecast.degree4max )+' C',
  degree5min.textContent=Math.round( data.forecast.degree5min )+' C',
  degree5max.textContent=Math.round( data.forecast.degree5max )+' C',
  degree6min.textContent=Math.round( data.forecast.degree6min )+' C',
  degree6max.textContent=Math.round( data.forecast.degree6max )+' C',
  summary1.textContent=data.forecast.summary1,
  summary2.textContent=data.forecast.summary2,
  summary3.textContent=data.forecast.summary3,
  summary4.textContent=data.forecast.summary4,
  summary5.textContent=data.forecast.summary5,
  summary6.textContent=data.forecast.summary6,
  document.getElementById('img1').src='images/icons/'+data.forecast.img1+'.svg',
  document.getElementById('img2').src='images/icons/'+data.forecast.img2+'.svg',
  document.getElementById('img3').src='images/icons/'+data.forecast.img3+'.svg',
  document.getElementById('img4').src='images/icons/'+data.forecast.img4+'.svg',
  document.getElementById('img5').src='images/icons/'+data.forecast.img5+'.svg',
  document.getElementById('img6').src='images/icons/'+data.forecast.img6+'.svg',
  document.getElementById('img7').src='images/icons/'+data.forecast.img7+'.svg',
  

  message.textContent=""



  })
})







//user location
weatherForm.addEventListener('submit',(e)=>{

    e.preventDefault()
    
    const locations= search.value
    message.textContent="loading....."
    const url='http://localhost:8000/weather?address='+locations

    fetch(url).then((response)=>{
        response.json().then((data)=>{

      if(data.error)
      {
          message.textContent=data.error
      }
      
      else {
        location1.textContent=data.location,
        degree.textContent = Math.round( data.forecast.temperature )+' C',
        rainprob.textContent=(data.forecast.rainProb)*100+'%',
        windspeed.textContent=data.forecast.windspeed+'km/h',
        pressure.textContent=data.forecast.pressure+'Pa',
        summary.textContent=data.forecast.summary,
        degree1min.textContent=Math.round( data.forecast.degree1min )+' C',
        degree1max.textContent=Math.round( data.forecast.degree1max )+' C',
        degree2min.textContent=Math.round( data.forecast.degree2min )+' C',
        degree2max.textContent=Math.round( data.forecast.degree2max )+' C',
        degree3min.textContent=Math.round( data.forecast.degree3min )+' C',
        degree3max.textContent=Math.round( data.forecast.degree3max )+' C',
        degree4min.textContent=Math.round( data.forecast.degree4min )+' C',
        degree4max.textContent=Math.round( data.forecast.degree4max )+' C',
        degree5min.textContent=Math.round( data.forecast.degree5min )+' C',
        degree5max.textContent=Math.round( data.forecast.degree5max )+' C',
        degree6min.textContent=Math.round( data.forecast.degree6min )+' C',
        degree6max.textContent=Math.round( data.forecast.degree6max )+' C',
        summary1.textContent=data.forecast.summary1,
        summary2.textContent=data.forecast.summary2,
        summary3.textContent=data.forecast.summary3,
        summary4.textContent=data.forecast.summary4,
        summary5.textContent=data.forecast.summary5,
        summary6.textContent=data.forecast.summary6,
        document.getElementById('img1').src='images/icons/'+data.forecast.img1+'.svg',
        document.getElementById('img2').src='images/icons/'+data.forecast.img2+'.svg',
        document.getElementById('img3').src='images/icons/'+data.forecast.img3+'.svg',
        document.getElementById('img4').src='images/icons/'+data.forecast.img4+'.svg',
        document.getElementById('img5').src='images/icons/'+data.forecast.img5+'.svg',
        document.getElementById('img6').src='images/icons/'+data.forecast.img6+'.svg',
        document.getElementById('img7').src='images/icons/'+data.forecast.img7+'.svg',
        

        message.textContent=""

      }
    console.log(data)
    
        })
    })



})