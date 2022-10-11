import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: "Παράγραφος",
            description: "Προσθέστε το element 'p' στο body κομμάτι της σελίδας.",
            information: ""
        },
        {
            title: "Εικόνα",
            description: "Προσθέστε το element 'img', συνδέοντας το με ένα λινκ σε μια εικόνα μέσα στο attribute 'src'.",
            information: "❗Ψάξτε στο Google το εξής: 'img html' για να βρείτε πως να το γράψετε."
        },
        {
            title: "Λίστα",
            description: "Προσθέστε μια αριθμημένη λίστα όπου σε σειρά προτεραιότητας, καταγράφετε τις αγαπημένες σας δραστηριότητες. Χρησιμοποιήστε τα elements 'ol' και 'li'."
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
