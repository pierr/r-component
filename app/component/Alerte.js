/**@jsx*/
var React = require('react');
var Input = require('./input');
module.exports = React.createClass({
  propTypes: {
    alerte: React.PropTypes.object.isRequired
  },
  handleButtonAckClick: function handleButtonAckClick(){
    console.log('Ack on the server the alerte');
  },
  render: function() {
    var alerte = this.props.alerte;
    // The ref attribute adds a reference to the component to
    // this.refs when the component is mounted.

    return (
      <li className={alerte.type}
          data-id={alerte.id}>
          <label>
            {alerte.text}
          </label>
          <button className="ack" onClick={this.handleButtonAckClick} />
        </li>

    );
  }
});
