import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: "Επικεντρωνόμστε στην δεξιά στήλη!",
            description: ""
        },
        {
            title: "Δημιουργία της πρώτης κάρτας",
            description: ""
        },
        {
            title: "Δημιουργία της δεύτερης κάρτας",
            description: ""
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
