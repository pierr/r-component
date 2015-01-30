var Form = require('./form');
var Input = require('./input');
var React = require('react');

module.exports = React.createClass({
  editButton: function(){
    if(this.props.hasEdit){
      return (<button>EDIT</button>);
    }
  },
  getDefaultProps : function() {
      return {
        "hasEdit" : true,
        "hasSave"  : false,
        "isModelToLoad": true
      };
  },
  renderInputs: function renderInputs(){
    var inputs ={};
    for(var key in this.props.data ){
      inputs[key] = <Input name={key} data={this.props.data.metadata[key]}/>;
    }
    return inputs;
  },
  render: function() {
    // The ref attribute adds a reference to the component to
    // this.refs when the component is mounted.
    return (
      <div class="page">
        <form>
          
          {this.renderInputs()}
        </form>
      </div>
    );
  }
});
