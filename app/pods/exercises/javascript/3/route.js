import Ember from 'ember';

export default Ember.Route.extend({
    steps: [
        {
            title: 'Add jQuery',
            description: 'jQuery is a javascript library. Javascript libraries provide you with extra functionality to speed up your development. Priority applies, so yo use jQuery, you need to add it before your code.'
        },
        {
            title: 'Empty div',
            description: 'Create an empty div and assign the id="result".'
        },
        {
            title: 'Insert content with JS',
            description: 'Insert "nom nom nom" in div with id="result" using "$("#result").html("nom nom nom");"'
        },
        {
            title: 'Sandwich image',
            description: 'Create an empty div and and assign the id="sandwich". Add a style="display:non" to hide it by default'
        },
        {
            title: 'Display image',
            description: 'Display an element if it\'s hidden, using "$("#sandwich").attr("style","");"'
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
