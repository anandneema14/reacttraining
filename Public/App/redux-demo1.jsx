var redux=require('redux');
console.log('start redux example');
var reduser=(stat={ name:'Anonymous'},action)=>{
return stat;
};

var store=redux.createStore(reduser);
var currentState=store.getState();
console.log(currentState.name);
