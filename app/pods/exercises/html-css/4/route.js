import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: "Youtube video",
            description: "Add a youtube video of your favorite activity.",
            information: "❗Search Google on how to do it!"
        },
        {
            title: "Add a hyperlink 'Open this video on youtube'.",
            description: "Connect the element 'p' with the element 'α' to achieve this. Google it!"
        },
        {
            title: "Extra! Add an image gif",
            description: "You can find how to add gifs under the 'Useful Links' page"
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
