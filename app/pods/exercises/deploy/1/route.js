import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: 'Create your Github account'
        },
         {
            title: 'Verify your Github account'
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
