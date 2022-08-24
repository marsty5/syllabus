import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return {
            tab: 'result'
        };
    },
    actions: {
        selectTab(tab){
            this.set('currentModel.tab',tab);
        }
    }
});
