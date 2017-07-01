var React=require('react');
var GreeterForm=require('GF');
var GreeterMessage=require('GM');

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!'
    };
  },
  getInitialState: function () {
    return {
        name: this.props.name,
        message: this.props.message,
        email: this.props.name,
        password: this.props.message,
        contry: this.props.contry

    };
  },
  handleNewData: function (updates) {
    this.setState(updates);
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;
  var county=this.state.contry;
  var mail=this.state.email;
  var password=this.state.password;
  
    return (
      <div>
        <GreeterMessage name={name} message={message} contry2={county} email={mail}  password={password}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

module.exports=Greeter;