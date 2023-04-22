import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: 'Publish your website for the first time'
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
