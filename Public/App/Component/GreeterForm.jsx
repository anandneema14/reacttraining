var React=require('react');
var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    var email=this.refs.email.value;
      var password=this.refs.password.value;
      var contry=this.refs.contry.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    if (email.length > 0) {
      this.refs.email.value = '';
      updates.email = email;
    }

    if (password.length > 0) {
      this.refs.password.value = '';
      updates.password = password;
    }
     if (contry.length > 0) {
      this.refs.contry.value = '';
      updates.contry = contry;
    }

    this.props.onNewData(updates);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter name"/>
        </div>
         <div>
          <input type="text" ref="email" placeholder="Enter email"/>
        </div>
         <div>
          <input type="password" ref="password" placeholder="Enter passw0rd"/>
        </div>
         <div>
          <input type="text" ref="contry" placeholder="Enter country"/>
        </div>
        <div>
          {/*<textarea ref="message" placeholder="Enter message"></textarea>*/}
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});

module.exports=GreeterForm;