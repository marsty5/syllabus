import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: 'Simple Functions',
            description: 'Create a function using "function nameOfFunction(){ /* javascript code here */ }"'
        },
        {
            title: 'Using simple functions',
            description: 'You can use a function by adding "nameOfFunction()" !'
        },
        {
            title: 'Functions with parameters',
            description: 'You can pass in parameters to the function to make it more generic using "function nameOfFunction(param1,param2){ /* javascript code here */ }"'
        },
        {
            title: 'Using functions with parameters',
            description: 'Use a function with input parameters using "nameOfFunction(1,2)". Note param1 will be replaced with the value "1", and so on.'
        },
        {
            title: 'if statements',
            description: 'if statements add logic to your code! e.g. "If it\'s raining. Wear coat, else wear jumper"'
        },
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
