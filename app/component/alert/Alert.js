/**@jsx*/
var React = require('react');
var Input = require('./input');
var $ = require('zepto');
module.exports = React.createClass({
  propTypes: {
    alert: React.PropTypes.object.isRequired
  },
  getDefaultProps: function(){
      return {
        className: this.props.alert.code
      }
  },
  handleBtnAcceptClick: function handleBtnAcceptClick(){
    $.post( 'http://localhost:8080/alerts/'+ alert.id/ +'/accept', {id: alert.id});
  },
  render: function() {
    var alert = this.props.alert;
    // The ref attribute adds a reference to the component to
    // this.refs when the component is mounted.

    return (
      <li className={this.props.className}
          data-id={alert.id}>
          <label>
            Code: {alert.code} , Message: {alert.msg}
          </label>
          <button className="ack" onClick={this.handleBtnAcceptClick} />
        </li>

    );
  }
});
