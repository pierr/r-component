/**@jsx*/
var React = require('react');
var fetch = require('node-fetch');
var Alert = require('./Alert');

module.exports = React.createClass({
  getInitialState: function(){
    return{
      alerts:[
        {id:1, msg: "Hello", code: "Security", ttl: 10},
        {id:2, msg: "Hello2", code: "Security", ttl: 10},
        {id:3, msg: "Hello3", code: "Security", ttl: 10},
        {id:4, msg: "Hello4", code: "Security", ttl: 10},
        {id:5, msg: "Hello5", code: "Security", ttl: 10},
        {id:6, msg: "Hello6", code: "Security", ttl: 10},
      ]
    };
  },
  handleBtnReloadClick: function handleBtnAcceptClick(){
    console.log('click sur le bouton reload.');
  },
  /*
  *
  */
  renderAlerts: function(){
    return this.state.alerts.map(function(alert){
      return <Alert data={alert}/>;
    });
  },
  render: function() {
    var alert = this.props.alert;
    // The ref attribute adds a reference to the component to
    // this.refs when the component is mounted.

    return (
      <ul>
        {this.renderAlerts()}
      </ul>
    );
  }
});
