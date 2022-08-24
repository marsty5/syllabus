import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: 'Page structure & title',
            description: 'Create the structure of an HTML page and give it a title'
        },
        {
            title: 'Youtube video',
            description: 'Add a youtube trailer of your favorite movie!'
        },
        {
            title: 'Link to it',
            description: 'Add a clickable link that takes you to the Youtube video, just below the video above.'
        },
        {
            title: 'Relevant videos!',
            description: 'Add a list of three relevant videos from Youtube. Make sure you use the <ul> and <li> tags.'
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
