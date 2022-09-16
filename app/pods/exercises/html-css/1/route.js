import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: "Δημιουργία html αρχείου",
            description: "Δημιουργήστε ένα φάκελο 'website-1', και εντός του φακέλου δημιουργήστε ένα αρχείο και αποθηκεύστε το ως 'index.html'.",
            information: ""
        },
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
            description: "Προσθέστε ένα τίτλο στο περιεχόμενο της σελίδας. Χρησιμοποιήστε το element 'h2' στο body κομμάτι της σελίδας."

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
