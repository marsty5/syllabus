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
            title: "Navigation bar",
            description: "Προσθέστε τη γραμμή του μενού, στην αρχή της σελίδας",
            information: ""
        },
        {
            title: "Footer",
            description: "Προσθέστε τη γραμμή του footer, στο τέλος της σελίδας.",
            information: "❗Χρησιμοποιήστε το 'card-footer' class μέσα στη κάρτα που θέλετε."
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
