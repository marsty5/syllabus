// TODO: Change to Deploy to Github

import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: 'Account',
            description: 'Create a free Neocities account <a href="https://neocities.org/" target="_blank">here</a>.'
        },
        {
            title: 'Upload',
            description: 'Click "Start building". You can now drag and drop all your html/js/css files in the upload section.'
        },
        {
            title: 'Open',
            description: 'Click the "***.neocities.org" link found in the at the top of the upload page.'
        },
        {
            title: 'Share!',
            description: 'Share the link with your friends, and show off!'
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
