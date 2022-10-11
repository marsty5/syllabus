import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            description: "Τώρα βρισκόμαστε μέσα στο αρχείο index.html",
        },
        {
            title: "Η δομή της σελίδας",
            description: "Δημιουργήστε τη δομή της HTML σελίδας.",
            information: "❗Χρησιμοποιήστε τα elements που μάθαμε: <html>...</html>, <head>...</head>, <body>...</body>"
        },
        {
            title: "Το element 'title'",
            description: "Βάλτε τίτλο πάνω στο tab της σελίδας σας.",
            information: "❗Πως: προσθέστε το element 'title' στο head κομμάτι της σελίδας."
        },
        {
            title: "Επικεφαλίδα",
            description: "Προσθέστε μια Επικεφαλίδα στο περιεχόμενο της σελίδας. Χρησιμοποιήστε το element 'h2' στο body κομμάτι της σελίδας."

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
