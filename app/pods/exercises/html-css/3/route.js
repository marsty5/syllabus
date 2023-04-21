import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: "Paragraph",
            description: "Add the element 'p' within the body of the website.",
            information: ""
        },
        {
            title: "Image",
            description: "Add the element 'img', which shows an image from Google. To do that, add a link to an image within the attribute 'src' of the img element.",
            information: "❗Google the following: 'img html' to find how to write it."
        },
        {
            title: "List",
            description: "Add a numeric list, where you add your favorite activities on a priority order. Use the elements 'ol' και 'li'."
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
