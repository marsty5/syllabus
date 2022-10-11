// TODO: Change to Deploy to Github

import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: 'Ακολουθήστε τα βήματα στη δεξιά στήλη 👉',
            description: 'Ξεκινήστε με τη δημιουργία του λογαριασμού σας στο https://github.com'
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
