import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: "Δημιουργία html αρχείου",
            description: "Μέσα στον ίδιο φάκελο 'website-1', δημιουργήστε ένα νέο αρχείο και αποθηκεύστε το ως 'index2.html'.",
            information: ""
        },
        {
            title: "Η δομή της σελίδας",
            description: "Δημιουργήστε τη δομή της HTML σελίδας.",
            information: "❗Θυμηθείτε τα elements: html, head, body, title."
        },
        {
            title: "Τίτλος 'Τι κάνω όταν...'",
            description: "Δημιουργήστε ένα τίτλο h3."
        },
        {
            title: "'... χειμωνιάζει'",
            description: "Δημιουργήστε μια λίστα (bullet-points) με 2-3 δραστηριότητες που κάνετε το χειμώνα."
        },
        {
            title: "'... καλοκαιριάζει'",
            description: "Δημιουργήστε μια λίστα (bullet-points) με 2-3 δραστηριότητες που κάνετε το καλοκαίρι."
        },
        {
            title: "Δημιουργία CSS αρχείου!",
            description: "Δημιουργήστε το φάκελο 'css' αν δεν τον έχετε ήδη. Μέσα στο 'css' φάκελο, δημιουργήστε ένα αρχείο με το όνομα style.css."
        },
        {
            title: "Συνδέστε τα html και css αρχεία σας!",
            description: "Στο html αρχέιο, μέσα στο head element, προσθέστε το element <link href='css/style.css' rel='stylesheet'>"
        },
        {
            title: "CSS selector πάνω στο h3 element",
            description: "Αλλάξτε το χρώμα του τίτλου σε κόκκινο"
        },
        {
            title: "CSS selector πάνω στα li elements",
            description: "Αλλάξτε το χρώμα όλων των αντικειμένων της λίστας σε πράσινο."
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
