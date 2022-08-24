import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: 'Page structure & Title',
            description: 'Create the structure of an HTML page and give it a title'
        },
        {
            title: 'Including Bootstrap',
            description: 'Include both Bootstrap CDNs in the <head> section. These links are provided in the links section.'
        },
        {
            title: 'The container!',
            description: 'Create a div element with a class=”container”. This is where all of your content will be added.'
        },
        {
            title: 'The row',
            description: 'Create a div element with a class=”row”, inside the element created above.'
        },
        {
            title: 'Creating columns',
            description: 'Create two div elements inside the element created above and use bootstrap’s column classes to create the interface shown on the right hand side.'
        },
        {
            title: 'Content. Content. Content.',
            description: 'Add some content in your elements above!'
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
