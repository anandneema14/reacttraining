var axios=require('axios');

const Open_Weather='http://Api.openweathermap.org/data/2.5/weather?appid=831b83a916b954d6a95036f3cda18336';

module.exports={
    getTemp:function(location){
        alert(location);
        var encoderLoc=encodeURIComponent(location);
       
        
        var requestUrl=`${Open_Weather}&q=${encoderLoc}`;

        return axios.get(requestUrl).then(function(res){
            debugger;
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }
            else{
              return res.data;
            }
        },
        function(res)
        {
            throw new Error(res.data.message);
        }
        );
    }
}
