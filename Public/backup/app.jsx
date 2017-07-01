var Welcome=React.createClass({
    render:function(){
        return(
            <div>
                <p>test</p>
            </div>
        );
    }
});

ReactDom.render(
    <Welcome/>,
     document.getElementById('app')
);
