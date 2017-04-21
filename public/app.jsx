var LightningCounter = React.createClass({
    getInitialState: function () {
        return {
            strikes: 0
        };
    },

    timerTick: function(){
        this.setState({
            strikes: this.state.strikes + 100
        });
    },

    componentDidMount: function(){
        setInterval(this.timerTick, 1000);
    },

    render: function() {
        return(
            <h1>{this.state.strikes}</h1>
        );
    }
});

var LightningCounterDisplay = React.createClass({
    render: function() {
        var divStyle = {
            width: 250,
            textAlign: "center",
            backgroundColor: "black",
            padding: 40,
            fontFamily: "sans-serif",
            color: "#999",
            borderRadius: 10
        };

        return(
            <div style={divStyle}>
                <LightningCounter/>
            </div>
        );
    }
});

ReactDOM.render(
    <LightningCounterDisplay/>,
    document.querySelector("#container")
);