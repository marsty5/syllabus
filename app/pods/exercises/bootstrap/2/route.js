import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: "Now we're focusing on the left column of the website!",
            description: "The left column had 3 boxes. We're going to use a class called 'card' from boostrap, to give these boxes the styling from bootstrap."
        },
        {
            title: "Create the first card",
            description: "",
            information: "❗Google 'card boostrap' and open the getbootstrap website to find information on how to write it."
        },
        {
            title: "Small icons",
            description: "The small icons for Linkedin, Instagram etc, come from another css file that's available on the interest, called 'font awesome'.",
            information: "❗Google 'linkedin font awesome' and open the fontawesome website."
        },
        {
            title: "Create the second card",
            description: "Go to https://fontawesome.com/ and find the small icons that you want to use."
        },
        {
            title: "Create the third card",
            description: "The third card contains elements with a class called 'progress bars'.",
            information: "❗Google 'progress bars bootstrap' and open the boostrap page to find more information."
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
