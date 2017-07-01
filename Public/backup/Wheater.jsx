var Welcome=React.createClass({
    getDefaultProps:function(){
        return{
            name:'React',
            city:'This is default'
        };
    },
    getInitialState:function(){
    return{
        name:this.props.name,
        dept:this.props.ttt
    };
    },
    onButtonClick:function(e){
        e.preventDefault();
        var usr=this.refs.name.value;
        var dept=this.refs.dept.value;
        this.setState({
        name:usr,
        dept:dept        
        });
    },
    render:function(){
        var name=this.state.name;        
        var dept=this.state.dept;
        return(
            <div>
               <h1>Hello {name}</h1>
               <h1>Hello {dept}</h1>
               <form onSubmit={this.onButtonClick}>
                   <input type="Text" ref="name"/>
                     <input type="Text" ref="dept"/>
                   <button>Set Name</button>
                   </form>
            </div>
        );
    }
});

var firstName='Prabhakar';
ReactDOM.render(
    <Welcome name={firstName} />,
     document.getElementById('app')
);
