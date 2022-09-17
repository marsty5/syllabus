import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: "Δημιουργία html αρχείου",
            description: "Μέσα στο φάκελο steam-academy/, δημιουργήστε ένα νέο φάκελο 'final-website', και εντός του φακέλου δημιουργήστε το αρχείο 'index.html'.",
            information: ""
        },
        {
            title: "Η δομή της σελίδας",
            description: "Δημιουργήστε τη δομή της HTML σελίδας.",
            information: ""
        },
        {
            title: "Σύνδεση με το Bootstrap",
            description: "Προσθέστε δύο elements 'link' στο <head> για να συνδεθεί με το κώδικα του Bootstrap.",
            information: "❗Μπορείτε να βρείτε τα 2 links για το Bootstrap στα 'Χρήσιμες Σελίδες' (από το μενού της σελίδας μας)."
        },
        {
            title: "Το container",
            description: "Δημιουργήστε ένα div element με class=”container”. Μεταξύ των tags, θα γράψουμε όλο το περιεχόμενο της σελίδας μας."
        },
        {
            title: "Το row",
            description: "Δημιουργήστε ένα div element με class=”row”, μέσα στο container που μόλις δημιουργήσαμε."
        },
        {
            title: "Tα columns",
            description: "Δημιουργήστε δύο div elements μέσα στο element 'row'.",
            information: "Πειραματιστείτε με το μέγεθος των στηλών για να μοιάζει όσο πιο πολύ γίνεται με το αποτέλεσμα στην οθόνη."
        },
        {
            title: 'Περιεχόμενο',
            description: "Προσθέστε το περιεχόμενο μεταξύ των tags των columns, για να παράξετε κάτι παρόμοιο με αυτό στην οθόνη."
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
