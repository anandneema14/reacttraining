var React=require('react');
var WeatherData = React.createClass({
    render: function () {
      var location = this.props.location;    
var temp = this.props.temp;  
      return (
        <div>
          <h1> {location}!</h1>        
            <h1> {temp}!</h1>     
        </div>
      );
    }
});

module.exports=WeatherData;
