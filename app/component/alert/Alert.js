/**@jsx*/
var React = require('react');
var fetch = require('node-fetch');
module.exports = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return this.props.data;
  },
  handleBtnAcceptClick: function handleBtnAcceptClick(){
    fetch('http://httpbin.org/post', { method: 'POST', body: 'a=1' }).then(

    );
    //$.post( 'http://localhost:8080/alerts/'+ alert.id/ +'/accept', {id: alert.id});
  },
  render: function() {
    var alert = this.state;
    return (
      <li className={this.props.className} data-id={alert.id}>
          <label>
            Code: {alert.code} , Message: {alert.msg}
          </label>
          <button className="ack" onClick={this.handleBtnAcceptClick} />
      </li>

    );
  }
});
