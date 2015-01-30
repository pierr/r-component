var React = require('react'),
  mui = require('material-ui'),
  RaisedButton = mui.RaisedButton,
  FlatButton = mui.FlatButton,LeftNav= mui.LeftNav,
  MenuItem = mui.MenuItem,
  Page = require('./Page');


var Main = React.createClass({
  getInitialState: function() {
   return {menuDocked: false};
 },
  _handleDockButtonClick: function(){
    this.refs.dockedLeftNav.toggle();
  },
  render: function() {
  var menuItems = [
    { route: 'rodolphe', text: 'Rodolphe' },
    { route: 'components', text: 'Components' },
    { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
  {
     type: MenuItem.Types.LINK,
     payload: 'https://github.com/Kleegroup/focus',
     text: 'Focus'
  },
];
    return (
      <div className="example-page">
       <LeftNav ref="dockedLeftNav" menuItems={menuItems} docked={this.state.menuDocked} />

        <h1>material-ui</h1>
        <h2>example project</h2>
        <Page data={this.props.data}></Page>
        <FlatButton label="ToggleMenu" primary={true} onTouchTap={this._handleDockButtonClick} />
        <FlatButton label="Primary" primary={true} />
        <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />
      </div>
    );
  },

  _handleTouchTap: function() {
    alert('1-2-3-4-5');
  }

});

module.exports = Main;
