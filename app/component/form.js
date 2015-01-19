var React = require('react');
var Input = require('./input');
module.exports = React.createClass({
  render: function() {
    // The ref attribute adds a reference to the component to
    // this.refs when the component is mounted.
    return (
      <Input name="pierre" data={this.props.data.metadata.pierre}/>
    );
  }
});