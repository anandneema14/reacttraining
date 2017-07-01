var Welcome=React.createClass({
    getDefaultProps:function(){
        return{
            name:'React',
            city:'This is default'
        };
    },
    render:function(){
        var name=this.props.name;
        var city=this.props.city;
        return(
            <div>
               <h1>Hello {name}</h1>
               <h1>Hello {city}</h1>
            </div>
        );
    }
});

var firstName='Prabhakar';
ReactDOM.render(
    <Welcome name={firstName} />,
     document.getElementById('app')
);
