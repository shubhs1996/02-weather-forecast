const request= require('request')


const geocode=(addresss,call)=>{
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+addresss+'.json?access_token=pk.eyJ1Ijoic2hzaW5naDIwOTYiLCJhIjoiY2p4eWo5dG04MDI3aTNvcW1mMmRiZnAzbyJ9.NciNXJkbhjtQFFX8puuYiQ&limit=1'

request({url,json:true},(err,data)=>{

    if(err){
        call('unable to coonect',undefined)
    }else if(data.body.errorr)
    {
        call('Unable to find location.Provide valid address',undefined)
    }else if(!data.body.features[0]){
        call('Unable to find location.Provide valid address',undefined)
    }
    else{
        call(undefined,{
          long:data.body.features[0].center[0],
          lat:data.body.features[0].center[1],
          location:data.body.features[0].place_name
        })
    }

})

}


module.exports=geocode