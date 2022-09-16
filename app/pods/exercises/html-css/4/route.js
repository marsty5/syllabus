import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: "Youtube video",
            description: "Προσθέστε ένα youtube video της αγαπημένης σας δραστηριότητας.",
            information: "❗Ψάξτε το 'πως' στο Google!"
        },
        {
            title: "Προσθέστε ένα hyperlink 'Ανοίξτε το βίντεο στο youtube'.",
            description: "Συνδιάστε το element 'p' με το element 'α' για να το καταφέρετε. Χρησιμοποιήστε το Google!"
        },
        {
            title: "Έξτρα! Δημιουργείστε μια λίστα με 3 youtube videos των αγαπημένων σας ταινιών.",
            description: "Συνδιάστε τα elements που μάθαμε: ul, li."
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
