import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['browser-tabs'],
  html: true,
  css: true,
  js: true,
  actions:{
      selectTab(val){
          this.sendAction('action',val);
      }
  }
});
