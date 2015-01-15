var React = require('react');
var MyComponent = React.createClass({
  handleClick: function() {
    // Explicitly focus the text input using the raw DOM API.
    this.refs.myTextInput.getDOMNode().focus();
  },
  render: function() {
    // The ref attribute adds a reference to the component to
    // this.refs when the component is mounted.
    return (
      <div>
        <input type="text" ref="myTextInput" value={this.props.name} />
        <button value={this.props.name} onClick={this.handleClick} />
      </div>
    );
  }
});

React.render(
  <MyComponent name="pierre"/>,
  document.getElementById('example')
);
