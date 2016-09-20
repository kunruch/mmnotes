/*jshint unused:false */


var STORAGE_KEY = 'default-note';

export default {
  fetch: function () {
    return localStorage.getItem(STORAGE_KEY) || '# MM Notes';
  },
  save: function (note) {
    localStorage.setItem(STORAGE_KEY, note);
  }
}
