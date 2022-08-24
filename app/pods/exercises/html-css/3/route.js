import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: 'Page structure',
            description: 'Create the structure of an HTML page'
        },
        {
            title: 'Title',
            description: 'Add a title element in the head section of your page'
        },
        {
            title: 'Form element',
            description: 'Create a form element in the body section of your page'
        },
        {
            title: 'Input element',
            description: 'Add a name, surname input fields with a description on the left hand side, in the form element above.'
        },
        {
            title: 'Checkbox input',
            description: 'Add three of your favorite movies and a checkbox input next to each one.'
        },
        {
            title: 'Other input types',
            description: 'Experiment with the different types of inputs found on the "W3Schools input types" resource in the links section.'
        },
        {
            title: 'Submit button',
            description: 'Add a submit button that submits the form above at the end (inside) of your form tag.'
        },
        {
            title: 'Extra exercise',
            description: 'Add action to your form, to navigate your form submission to a Google search.'
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
