import Ember from 'ember';

export function addOne([val]) {
  return ++val;
}

export default Ember.Helper.helper(addOne);
