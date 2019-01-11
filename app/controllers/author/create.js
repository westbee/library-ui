import Controller from '@ember/controller';

export default Controller.extend({
  // reset() {
  //   this.setProperties({
  //     first: '',
  //     last: ''
  //   });
  // },

  actions: {
    // changeFirst(value) {
    //   this.set('first', value);
    // }
    saveAuthor(ev) {
      ev.preventDefault();

      let author = this.store.createRecord('author', this.model);

      author.save()
        .then(() => {
          this.transitionToRoute('author');
        });
    }
  }
});
