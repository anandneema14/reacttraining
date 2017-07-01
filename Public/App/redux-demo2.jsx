var redux=require('redux');
console.log('start redux example');

var stateDefault={
    name:'1',
    hobbies:[],
    dept:[]
};
var nextHobbyId=1;
var deptId=1;

var reduser=(stat=stateDefault,action)=>{

    switch(action.type){
        case 'CHANGE_NAME':
        return {
            ...stat,
            name:action.name
        };
        case 'ADD_HOBBY':
        return {
            ...stat,
            hobbies:[
                ...stat.hobbies,
                {
                    id:nextHobbyId++,
                    hobby:action.hobby
                }
            ]           
        };
        
         case 'ADD_DEPT':
        return {
            ...stat,
            dept:[
                ...stat.dept,
                {
                    id:deptId++,
                    dept:action.deptName
                }
            ]           
        };
        default:
        return stat;
    }
};

var store=redux.createStore(reduser,redux.compose(
    window.devToolsExtension?window.devToolsExtension():f=>f
)
);

// var currentState=store.getState();

var us=store.subscribe(()=>{
    var currentState=store.getState();
    console.log('currentState',currentState, currentState.name);
})
//  var State=store.getState();
// console.log('currentState',State, State.name);

store.dispatch({
    type:'ADD_DEPT',
    deptName:'Police'
});
store.dispatch({
    type:'CHANGE_NAME',
    name:'Indi'
});
// console.log('currentState',store.getState());
store.dispatch({
    type:'ADD_HOBBY',
    hobby:'Running'
});
store.dispatch({
    type:'CHANGE_NAME',
    name:'USA'
});




// console.log('currentState',store.getState());