import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: 'Hide personal info',
            description: 'Hide your personal info by utilising "display:none" in css.'
        },
        {
            title: 'Button',
            description: 'Add a button that will show/hide your personal info, and style it using bootstrap'
        },
        {
            title: 'JS Function!',
            description: 'Create javascript function named "toggleInfo" and use the jQuery .is(), .slideUp(), .slideDown() functions to show/hide the information! (Hint: You will need to add "helper" ID\'s)'
        },
        {
            title: 'Connect them up',
            description: 'use the onClick="toggleInfo()" to execute your JS function.'
        },
        {
            title: 'logic, logic, logic',
            description: '(optional). Add more logic into the button by changing the text in the button from "Show" to "Hide" and vice verca when clicked.'
        },
        {
            title: 'Random',
            description: '(optinal). Use "Math.random()" in javascript that creates a random number, to change the grumpiness meter when you click on it. Try it out on the right!'
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
