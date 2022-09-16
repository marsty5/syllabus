import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: "Η δομή της σελίδας ",
            description: "Δημιουργήστε τη δομή της HTML σελίδας.",
            information: ""
        },
        {
            title: "Το element 'title'",
            description: "Βάλτε τίτλο πάνω στο tab της σελίδας σας.",
            information: " Πως: προσθέστε το element 'title' στο head κομμάτι της σελίδας."
        },
        {
            title: "Επικεφαλίδα",
            description: "Προσθέστε ένα τίτλο στο περιεχόμενο της σελίδας. Χρησιμοποιήστε το element 'h2' στο body κομμάτι της σελίδας.",
            information: ""
        },
        {
            title: "Παράγραφος",
            description: "Προσθέστε το element 'p' στο body κομμάτι της σελίδας.",
            information: ""
        },
        {
            title: "Εικόνα",
            description: "Προσθέστε το element 'img', συνδέοντας το με ένα λινκ σε μια εικόνα μέσα στο attribute 'src'.",
            information: ""
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
