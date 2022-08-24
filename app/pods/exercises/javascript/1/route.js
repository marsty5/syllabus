import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: 'Page structure & Title',
            description: 'Create the structure of an HTML page and give it a title'
        },
        {
            title: 'Dive into Javascript!',
            description: 'Create a js file by creating a file named “js-example1.js in the same folder as your .html file.'
        },
        {
            title: 'Variables in JS',
            description: 'Create a variable "typeOfBread" and assign the value "white bread". Create two more variables, one "numberOfSalamiSlices" that stores an integer number, and "butter" that stores a boolean value.'
        },
        {
            title: 'Addition',
            description: 'You can add numbers together by using the "+" operator. e.g. "var newValue = 2 + 3;"'
        },
        {
            title: 'Display results',
            description: 'With javascript you can use a number of different methods to display data to the users. One popular way is by showing a popup! Use alert() to show the variable "numberOfSalamiSlices"'
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
