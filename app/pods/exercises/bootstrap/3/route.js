import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: 'Sidebar',
            description: 'This exercise builds on top of the previous exercise! Lets add some content in the first four columns!'
        },
        {
            title: 'Section structure',
            description: 'Use the <div class="card"></div> element to create each section. Inside the card, you can use the "card-block" class for the main content.'
        },
        {
            title: 'Section content',
            description: 'To create a title, you can use <h4 class="card-title"></h4>. Similarly "<p class=”card-text”></p>" lets you to create the fancy text in each section!'
        },
        {
            title: 'Profile picture',
            description: 'Add a square image of yourself in the sidebar on the left. Play around with bootstrap\'s image classes found in the links section to get the circular effect!, if you prefer the polaroid, we won\'t judge'
        },
        {
            title: 'Information',
            description: 'Add your location, university, and favourite things'
        },
        {
            title: 'Skills',
            description: 'Add some progress bars to showcase your different skills, you can even make them animated!'
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
