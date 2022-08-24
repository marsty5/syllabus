import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel(){
        this.transitionTo('exercises.html-css.1');
    }
});
