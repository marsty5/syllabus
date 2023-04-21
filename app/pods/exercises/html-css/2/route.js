import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            description: "Now, we're going to write code in index.html",
        },
        {
            title: "The structure of the website",
            description: "Create the structure of an HTML page.",
            information: "❗Use the elements we learned: <html>...</html>, <head>...</head>, <body>...</body>"
        },
        {
            title: "The element 'title'",
            description: "Add a title on the browser tab of the website.",
            information: "❗How: add the element 'title' within the head tags of the file."
        },
        {
            title: "Heading",
            description: "Add a heading in the body of the page. Use the element 'h2' in the body of the page."

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
