import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: 'Extending Ex5',
            description: 'We will be building on the previous exercise, so make sure you have the same files open.'
        },
        {
            title: 'ID\'s',
            description: 'Add an HTML attribute of id="welcome" on the "Welcome" h1 element. Also add an HTML attribute of id="tagline" on the tagline h3 element.'
        },
        {
            title: 'Classes',
            description: 'Add an html attribute of class=”bluecolor” for your top two favorite songs, and class=”redcolor” for the third one.'
        },
        {
            title: 'HTML + CSS = <3!',
            description: 'Import your css file in the head of your HTML page, by utilising the link tag.'
        },
        {
            title: 'Starting clean',
            description: 'Comment out any CSS code of the previous exercise using. /* your css code */'
        },
        {
            title: 'CSS id selectors!',
            description: 'Create a “welcome” id selector and set the color attribute to green, and font-size attribute to 50px. Similarly, Create a “tagline” id selector and set the color attribute to orange, and font-weight to bold.'
        },
        {
            title: 'CSS class selectors!',
            description: 'Create a “bluecolor” class selector in your css file and set the color attribute to blue. Similarly, create a “redcolor” class selector and set the color to red'
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
