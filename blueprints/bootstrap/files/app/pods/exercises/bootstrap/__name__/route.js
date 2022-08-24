import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: 'Page structure',
            description: 'Create the structure of an HTML page'
        },
        {
            title: 'Title',
            description: 'Add a title element in the head section of your page'
        },
        {
            title: '',
            description: ''
        },
        {
            title: '',
            description: ''
        },
        {
            title: '',
            description: ''
        },
        {
            title: '',
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
