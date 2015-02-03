/**@jsx*/
var React = require('react');
var fetch = require('node-fetch');
module.exports = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    var data = this.props.data || {};
    data.target = data.target ||{url: "http://google.com", name: "google..."}
    return data;
  },
  handleBtnAcceptClick: function handleBtnAcceptClick(){
    console.log('Call action');
    fetch('http://httpbin.org/post', { method: 'POST', body: 'a=1' }).then(
      function(s){console.log(s);},
      function(err){console.log(err);}
    );
    //$.post( 'http://localhost:8080/alerts/'+ alert.id/ +'/accept', {id: alert.id});
  },
  render: function() {
    var alert = this.state;
    return (
      <div className={"alert alert-"+alert.type}>
        <button type="button" className="close" onClick={this.handleBtnAcceptClick}>
          <span >&times;</span>
        </button>
        <strong>{alert.code}</strong>
        &nbsp;{alert.msg}
        &nbsp;<a href={alert.target.url} className="alert-link">{alert.target.name}</a>
      </div>

    );
  }
});
