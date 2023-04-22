import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: 'Re-Publish your website'
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
