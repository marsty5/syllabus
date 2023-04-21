import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: "We're now focusing on the right column!",
            description: ""
        },
        {
            title: "Create the first card",
            description: ""
        },
        {
            title: "Create the second card",
            description: ""
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
