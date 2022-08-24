import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: 'Adding javascript',
            description: 'This exercise builds on top the bootstrap profile exercise! Lets add some javascript magic!'
        },
        {
            title: 'Include code-at-uni.js',
            description: 'Include "code-at-uni.js" file just before "</body>". This includes some javascript libraries we will be using later on.'
        },
        {
            title: 'Your own js',
            description: 'Create a file named "exercise5.js" in the same folder as your .html file, and include it under the "code-at-uni.js"'
        },
        {
            title: 'Zoom!',
            description: 'We can utilise a library called "zoom" to zoom into pictures by adding "data-action="zoom" on each img tag."'
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
