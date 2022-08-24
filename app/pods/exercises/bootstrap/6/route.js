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
            title: 'CSS',
            description: 'Let\'s make our website beautiful! Start by creating a file named "profile.css" and place it in the same folder as your .html and connect them together!'
        },
        {
            title: 'Color & Background color',
            description: 'Use the "background-color", "color", "font-weight" CSS properties to achieve a similar result as the provided example. If you need help with the colors, try inspecting them or looking at CSS tab.'
        },
        {
            title: 'Profile picture back pattern',
            description: 'To set the background pattern behind the profile picture, use the "background-image" attribute and set it to any image you like. Alternatively, feel free to use the pattern found in the links section!'
        },
        {
            title: 'Adding animations',
            description: 'To animate some of your elements, you can use animate.css, import it as any other css link, and use classes animated, and pulse to make something stand out and infinite to repeat it forever.'
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
