import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: 'Include Bootstrap CDN',
            description: 'Continuing from the previous example, include both Bootstrap CDNs in the <head> section. Both these links are provided in the links section.'
        },
        {
            title: 'Sidebar',
            description: 'Create a sidebar section 4 columns wide where the information about yourself will be added. if you\'ve already done a similar column in your previous exercise, just make it 4 columns this time.'
        },
        {
            title: 'Main content',
            description: 'Create a content section 8 columns wide, where more information about yourself will be added'
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
