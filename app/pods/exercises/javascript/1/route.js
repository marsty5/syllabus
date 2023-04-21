import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: "It's coming soon",
            description: ''
        }
    ],
    model(){
        return {
            tab: 'result',
            steps: this.get('steps')
        };
    },
    actions: {
        selectTab(tab){
            this.set('currentModel.tab',tab);
        }
    }
});