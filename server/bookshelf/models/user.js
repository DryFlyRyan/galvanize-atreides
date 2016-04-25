var Bookshelf = require('../../database');

require('./userPermission');

var User = Bookshelf.Model.extend({
  tableName: 'users',
  permission: function() {
    return this.hasMany('UserPermission')
  }
})

module.exports = Bookshelf.model('User', User)
