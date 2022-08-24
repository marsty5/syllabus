import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: 'Page structure & Title',
            description: 'Create the structure of an HTML page and give it a title'
        },
        {
            title: 'Welcome!',
            description: 'Add an h1 element, and write "Welcome!"'
        },
        {
            title: 'Tagline',
            description: 'Add an h3 element to act as the tagline of your page!'
        },
        {
            title: 'My favorite songs are...',
            description: 'Create a list with three of your favorite songs'
        },
        {
            title: 'Dive into CSS!',
            description: 'Create a css file by creating a file named “example5.css” in the same folder as your .html file.'
        },
        {
            title: 'HTML + CSS = <3!',
            description: 'Import your css file in the head of your HTML page, by utilising the link tag.'
        },
        {
            title: 'CSS tag selectors!',
            description: 'Create an “li” selector in your css file and set the color attribute to blue. Similarly, create a “h1” and “h2” tag selector and set the color to red. (Hint: Use comma ,)'
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
