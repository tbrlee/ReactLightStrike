var LightningCounter = React.createClass({
    render: function() {
        return(
            <h1>Hello!</h1>
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