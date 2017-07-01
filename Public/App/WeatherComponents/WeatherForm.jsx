var React=require('react');
var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var location = this.refs.location.value;
   

    if (location.length > 0) {
      this.refs.location.value = '';
      updates.location = location;
    }
     
    this.props.onNewData(updates);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="location" placeholder="Enter name"/>
        </div>        
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});

module.exports=WeatherForm;