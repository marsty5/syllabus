import Ember from 'ember';
/*
Create a contact me section
Choose a contact form of your liking from the “Bootstrap contact form” link in the links section
Adapt the HTML code to add an email, name, and reason of contact inputs
Finally add a button that submits the contact form and add an onclick=”alert(‘submitted’)” HTML attribute
Click the button and see what happens!
 */
export default Ember.Route.extend({
    steps: [
        {
            title: 'Δημιουργία style.css',
            description: 'Δημιουργήστε το style.css σας και αρχίστε να κάνετε αλλαγές στα χρώματα!'
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
