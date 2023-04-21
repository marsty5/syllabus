import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: "Create our website folders",
            description: "Follow the isntructions on the first two pictures on the right side 👉"
        },
        {
            title: "Open the Sublime app",
            description: "Double click on the Sublime icon on your computer."
        },
        {
            title: "Open the main folder of your website on Sublime",
            description: "Follow the instructions on the 3rd picture 👉",
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
