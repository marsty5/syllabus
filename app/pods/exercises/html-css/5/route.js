import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: "Create a CSS file!",
            description: "Within the css folder, create a file with the name style.css."
        },
        {
            title: "Connect the html and css files!",
            description: "Within the html file, within the head element, add the element <link href='./css/style.css' rel='stylesheet'>"
        },
        {
            title: "Add text color to the heading",
            description: "Within css, add the element 'h2' and give it a purple color."
        },
        {
            title: "Make 'My activities' bold",
            description: "❗Search in Google the following: 'how to make element bold css'"
        },
        {
            title: "Make numeric points green",
            description: "❓There are 2 ways to do so. Can you find them?"
        },
        {
            title: "Make the heading centered",
            description: "❗Google it: 'how to center an element css"
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
