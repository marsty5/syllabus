import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: 'Mother of Functions',
            description: 'Create a function named "makeSandwich" which calls all previously created functions.'
        },
        {
            title: 'Button',
            description: 'Add a button in your HTML\'s body that calls the "makeSandwich" function using onClick="makeSandwich()"'
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
