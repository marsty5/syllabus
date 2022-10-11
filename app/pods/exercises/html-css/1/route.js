import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: "Δημιουργήστε τους φακέλους της ιστοσελίδας μας",
            description: "Δείτε τη πρώτη εικόνα δεξία 👉"
        },
        {
            title: "Ανοίξτε την εφαρμογή Sublime ",
            description: "Διπλό κλικ στο εικονίδιο του Sublime."
        },
        {
            title: "Ανοίξτε το φάκελο της ιστοσελίδας μέσα στο Sublime",
            description: "Ακολουθήστε τις οδηγίες στην δεύτερη και τρίτη εικόνα δεξία 👉",
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
