import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: "Δημιουργία CSS αρχείου!",
            description: "Δημιουργήστε το φάκελο 'css' αν δεν τον έχετε ήδη. Μέσα στο 'css' φάκελο, δημιουργήστε ένα αρχείο με το όνομα style.css."
        },
        {
            title: "Συνδέστε τα html και css αρχεία σας!",
            description: "Στο html αρχείο, μέσα στο head element, προσθέστε το element <link href='./css/style.css' rel='stylesheet'>"
        },
        {
            title: "Βάρτε χρώμα στην επικεφαλίδα",
            description: "Στο css αρχείο μας, προσθέστε το element 'h2' και δώστε του χρώμα μωβ."
        },
        {
            title: "Κάντε το 'Οι δραστηριότητες μου' bold",
            description: "❗Ψάξτε στο Google το εξής: 'how to make element bold css'"
        },
        {
            title: "'Κάντε τα numeric points χρώμα πράσινο",
            description: "❓Υπάρχουν δύο τρόποι. Μπορείτε να τους βρείτε;"
        },
        {
            title: "Βάλτε τη φόρμα σε κουτί (boarder)!",
            description: "❓Πως θα το ξάξετε στο Google;"
        },
        {
            title: "Κάντε όλο το περιεχόμενο centered",
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
