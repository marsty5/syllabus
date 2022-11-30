import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: "Επικεντρωνόμστε στην αριστερά στήλη!",
            description: "Η αριστερά στήλη έχει 3 κουτιά. To boostrap μας παρέχει κώδικα για Αυτά λέγονται 'cards' "
        },
        {
            title: "Δημιουργία της πρώτης κάρτας",
            description: "",
            information: "❗Ψάξτε 'card boostrap' στο Google και ανοίξτε τη σελίδα του getbootstrap για να βρείτε πως να το γράψετε."
        },
        {
            title: "Μικρά Εικονίδια",
            description: "Τα μικρά εικονίδια του Linkedin, Instagram κλπ, προέρχονται από το σελίδα 'font awesome'.",
            information: "❗Ψάξτε στο Google 'linkedin font awesome' και ανοίξτε τη σελίδα από το fontawesome."
        },
        {
            title: "Δημιουργία της δεύτερης κάρτας",
            description: "Πηγαίνεται στο https://fontawesome.com/ και βρείτε τα εικονίδια που θέλετε να χρησιμοιποιήσετε."
        },
        {
            title: "Δημιουργία της τρίτης κάρτας",
            description: "Η τρίτη κάρτα περιέχει 'progress bars'.",
            information: "❗Ψάξτε στο Google 'progress bars bootstrap' και ανοίξτε τη σελίδα από το boostrap."
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
