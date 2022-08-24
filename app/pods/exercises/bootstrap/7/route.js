import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: 'Create a new page',
            description: 'In the same folder as the profile.html page, create a new file called index.html'
        },
        {
            title: 'Add the <head>',
            description: 'Be sure bootstrap is included in your <head>'
        },
        {
            title: 'Add the navbar',
            description: 'Replicate the navbar of the profile page'
        },
        {
            title: 'Add a jumbotron',
            description: 'Create a jumbotron element with a container, a row, and a single column'
        },
        {
            title: 'Add headings',
            description: 'Add the classes "display-3" and "display-1" to create a heading and a sub-heading'
        },
        {
            title: 'Add a background-image',
            description: 'Find an image you like, add it to your folder, and put it as the background-image of your jumbotron element'
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
