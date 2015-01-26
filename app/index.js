require('./config');
var React = require('react');
var pierre = {pierre: "Pierre Besson", metadata: {pierre: "DO_PRENOM"}, context: [{label: "test", value: 1}, {label: "test2", value:2}]};
var Form = require('./component/form');
var SearchInput = require('./component/search-input');
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
        <SearchInput data={this.props.data.context} />
        <Form data={this.props.data} />
        <button value={this.props.name} onClick={this.handleClick} />
      </div>
    );
  }
});
React.render(
  <MyComponent name="pierre" data={pierre}/>,
  document.getElementById('example')
);
