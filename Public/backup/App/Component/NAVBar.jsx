var React=require('react');
var {Link,IndexLink}=require('react-router');

var NavBar = React.createClass({
  render: function () {
    return (
        <div>
     <h3>NavBar</h3>
     <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
     <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
     <Link to="/Services" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Services</Link>
     <Link to="/Locate" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Locate</Link>
     </div>
    )
  }
});

module.exports=NavBar;
