//= require jquery
//= require handlebars.runtime
//= require ember
//= require app
//= require_tree .

App.ApplicationRoute = Ember.Route.extend({
  events: {
    showModal: function(name, options) {
      this.render(name, {
        into: 'application',
        outlet: 'modal'
      });
    },

    dismissModal: function() {
      this.clearOutlet('application', 'modal');
    }
  },

  // TODO: Fix this in Ember. This is a workaround.
  clearOutlet: function(container, outlet) {
    parentView = this.router._lookupActiveView(container);
    parentView.disconnectOutlet(outlet);
  }
});