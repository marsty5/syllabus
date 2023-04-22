import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel(){
        this.transitionTo('exercises.deploy.1');
    }
});