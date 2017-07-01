var React=require('react');
var WeatherForm=require('GF');
var WeatherData=require('GM');
var OpenWeather=require('OpenWeather');


var Weather = React.createClass({ 
  getInitialState: function () {
    return {       
        isLoading:false
    };
  },
  handleSearch: function(location){
    
var that = this;

this.setState({isLoading:true});

OpenWeather.getTemp(location.location).then(function(res){

that.setState({
  location: res.name,
  temp:res.main.temp,
  isLoading:false
});
},function(errprMessage){
  alert(errprMessage);
});
  },
  handleNewData: function (updates) {
    this.setState(updates);
  },
  render: function () {
    var {location, temp,isLoading} = this.state;   

    function renderMessage(){
if(isLoading){
  return <h1>Fetching.....</h1>;
}else if(temp && location){
  return <WeatherData location={location} temp={temp}/>;
}

    }  
    return (
      <div>     
        <WeatherForm onNewData ={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports=Weather;