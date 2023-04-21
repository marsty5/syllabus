import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            description: "Now, we're going to write code in index.html inside the 'website-2' folder",
        },
        {
            title: "The structure of the website",
            description: "Create the structure of an HTML page.",
            information: ""
        },
        {
            title: "Connect with Bootstrap",
            description: "Add an element 'link' within <head> to connect your file with Bootstrap.",
            information: "❗You can find the link for Bootstrap under the page 'Useful Links' (on the top line of this page)."
        },
        {
            title: "Container",
            description: "Create a div element with class=”container”. Within the div tags, we're going to write the content of the whole website."
        },
        {
            title: "Row",
            description: "Create a div element with class=”row”, within the container that we just created."
        },
        {
            title: "Columns",
            description: "Create two div elements within the element 'row'.",
            information: "Experiment with the size of the columns, till it looks like the result on the right side."
        },
        {
            title: 'Your Content',
            description: "Add the content within the tags of the columns, to produce the same result that you see on the right side."
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
