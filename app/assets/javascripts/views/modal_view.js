App.ModalView = Ember.View.extend({
  layoutName: "modal_view",

  didInsertElement: function() {
    var self = this;

    this._windowKeyUp = function(e) {
      self.windowKeyUp(e);
    };

    $(window).on('keyup', this._windowKeyUp);
  },

  willDestroyElement: function() {
    $(window).off('keyup', this._windowKeyUp);
  },

  windowKeyUp: function(e) {
    if (e.keyCode === 27) { // ESC
      this.get('controller').send('dismissModal');
    }
  }
});