module.exports = Backbone.Model.extend({
  "subject": "alerte",
  metadata: require('../config/metadata').alerte,
  getField: function getFieldByName(name){
      return {
        name: name,
        value: this.get(name),
        metdata: this.metadata[name]
      };
  },
  toJSON: function(){
    return  merge(
    {metadata: this.metadata},
      Backbone.Model.prototype.toJSON.call(this)
    );
  }
});
