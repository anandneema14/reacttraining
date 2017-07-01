var React=require('react');
var GreeterMessage = React.createClass({
    render: function () {
      var name = this.props.name;
      var message = this.props.message;
      var email=this.props.email;
      var password=this.props.password;
      var contry1=this.props.contry2;

      return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{message}</p>
          <p>{email}</p>
          <p>{password}</p>
          <p>{contry1}</p>
        </div>
      );
    }
});

module.exports=GreeterMessage;
