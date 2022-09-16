import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: "Φόρμα",
            description: "Δημιουργήστε μια φόρμα με το element 'form'.",
            information: ""
        },
        {
            title: "Text input",
            description: "Προσθέστε δύο πεδία δεδομένων που δέχονται κείμενο, για να ζητήσετε το όνομα και επίθετο. Χρησιμοποιήστε τα elements 'p' και 'input' για να τα καταφέρετε.",
            information: "❗Ψάξτε στο Google το εξής: 'html input types', και βρέστε πως να γράψετε το element 'input', τύπου 'text', στο html αρχείο σας!"
        },
        {
            title: "Checkbox input",
            description: "Προσθέστε τρία πεδία δεδομένων για να προσφέρετε multiple-choice επιλογές για την αγαπημένη σας ταινία. ",
            information: "❗Χρησιμοποιήστε το Google για να μάθετε πως να γράψετε το element 'input', τύπου 'checkbox', στο html αρχείο σας!"
        },
        {
            title: "Άλλοι τύποι input",
            description: "Δοκιμάστε να βρείτε τους τύπους input που χρησιμοποιήθηκαν για το χρώμα και τηλέφωνο.",
            information: "Πειραματιστείτε με διαφορετικούς τύπους του element 'input', με βάση το τι βρήκατε στο google."
        },
        {
            title: "Submit input",
            description: "Προσθέστε ένα submit button that submits the form above at the end (inside) of your form tag.",
            information: ""
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
