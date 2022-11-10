import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: "Youtube video",
            description: "Προσθέστε ένα youtube video της αγαπημένης σας δραστηριότητας.",
            information: "❗Ψάξτε το πως στο Google!"
        },
        {
            title: "Προσθέστε ένα hyperlink 'Ανοίξτε το βίντεο στο youtube'.",
            description: "Συνδιάστε το element 'p' με το element 'α' για να το καταφέρετε. Χρησιμοποιήστε το Google!"
        },
        {
            title: "Έξτρα! Προσθέστε μια εικόνα gif",
            description: "Μπορείτε να βρείτε gifs κάτω από τις 'Χρήσιμες Σελίδες'"
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
