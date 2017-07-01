var React=require('react');
var ReactDOM=require('react-dom');
var Weather=require('GR');
var {Route,Router,IndexRoute,hashHistory}=require('react-router');
var Main=require('Main');
var AboutUs=require('About');
var Services=require('Services');
var LocateUS=require('LocateUS');

var firstName = 'Amarjeet';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <Route path="About" component={AboutUs}/>
    <Route path="Services" component={Services}/>
    <Route path="LocateUS" component={LocateUS}/>
      <IndexRoute component={Weather}/>
      </Route>

      </Router>,
  
  document.getElementById('app')
);
