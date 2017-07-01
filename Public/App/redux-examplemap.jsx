var redux = require('redux');
var axios = require('axios');

console.log('Starting redux example');

var startLocationFetch=()=>{
    return{
      type:'START_LOCATION_FETCH'
    };
};
var completeLocationFetch=(url)=>{
    return{
        type:'COMPLETE_LOCATION_FETCH',
        url
    }
};


var mapReducer = (state = {isFetching: false, url: undefined} , action) => {
  switch (action.type) {
    case 'START_LOCATION_FETCH':
      return{
                    isFetching: true,
          url: undefined
        };      
    case 'COMPLETE_LOCATION_FETCH':
     return{
          isFetching: false,
          url: action.url
        };
    default:
      return state;
  }
};


var fetchLocation=()=>{
    store.dispatch(startLocationFetch());
debugger;
    axios.get('http://ipinfo.io').then(function(res){
        var loc=res.data.loc;
        var baseurl='http://maps.google.co.in?q='
        store.dispatch(completeLocationFetch(baseurl+loc));
    });
};


var reducer = redux.combineReducers({
  map: mapReducer
});

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
fetchLocation();


// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

if(state.map.isFetching){
document.getElementById('app').innerHTML = 'Loading...';
}
else if(state.map.url){
    document.getElementById('app').innerHTML = '<a href="'+state.map.url+'" target="_blank">View UR Loc</a>';
}
});


 
