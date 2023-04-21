// TODO: Change to Deploy to Github

import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: 'Follow the steps on the right side 👉',
            description: 'Begin with creating an account on Github https://github.com'
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
