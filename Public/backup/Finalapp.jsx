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
          <textarea ref="message" placeholder="Enter message"></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});

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

var firstName = 'Amarjeet';

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
