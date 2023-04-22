import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('exercises', {path: '/'}, function(){
    this.route('html-css', function() {
      this.route('1');
      this.route('2');
      this.route('3');
      this.route('4');
      this.route('5');
    });
    this.route('javascript', function() {
      this.route('1');
      this.route('2');
      this.route('3');
      this.route('4');
      this.route('5');
      this.route('6');
    });
    this.route('deploy', function() {
      this.route('1');
      this.route('2');
      this.route('3');
    });
    this.route('bootstrap', function() {
      this.route('1');
      this.route('2');
      this.route('3');
      this.route('4');
      this.route('5');
      this.route('6');
      this.route('7');
    });
  });
  this.route('result', {path:'result'}, function() {
    this.route('html-css', function() {
      this.route('1');
      this.route('2');
      this.route('3');
      this.route('4');
      this.route('5');
    });
    this.route('javascript', function(){
      this.route('1');
      this.route('2');
      this.route('3');
      this.route('4');
      this.route('5');
      this.route('6');
    });
    this.route('bootstrap', function(){
      this.route('1');
      this.route('2');
      this.route('3');
      this.route('4');
      this.route('5');
      this.route('6');
      this.route('7');
    });
    this.route('deploy', function() {
      this.route('1');
      this.route('2');
      this.route('3');
    });
  });
  this.route('links', {path: 'links'});
  this.route('extra-material');
});

export default Router;
