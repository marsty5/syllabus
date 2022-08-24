import Ember from 'ember';
/*
Create a contact me section
Choose a contact form of your liking from the “Bootstrap contact form” link in the links section
Adapt the HTML code to add an email, name, and reason of contact inputs
Finally add a button that submits the contact form and add an onclick=”alert(‘submitted’)” HTML attribute
Click the button and see what happens!
 */
export default Ember.Route.extend({
    steps: [
        {
            title: 'Navbar',
            description: 'Add the top navigation bar with a title and a link. Check Bootstrap\'s Navbar documentation found in the links section.'
        },
        {
            title: 'Section grey area',
            description: 'To create the grey bottom section, you can use  "card-footer" class inside the card you want.'
        },
        {
            title: 'Add fonts!',
            description: 'Download the fonts zip provided in the links section, and place the fonts directory in the same folder as your .html file.'
        },
        {
            title: 'Icons',
            description: 'Add a few icons to decorate your description and your information. You can use icons by adding <i> tags with font-awesome classes. e.g: "<i class="fa fa-twitter"></i>".  More information found in the font awesome link in the links section.'
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
