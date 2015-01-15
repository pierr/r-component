var React = require('react');
module.exports = React.createClass({
  handleChange: function(e) {
    console.log(e);
    this.setState({userInput: e.target.value});
  },
  render: function() {
    // The ref attribute adds a reference to the component to
    // this.refs when the component is mounted.
    return (
      <div class="input-group">
        <input type="text" ref="myTextInput" onChange={this.handleChange} value={this.props.name} />
      </div>
    );
  }
});
