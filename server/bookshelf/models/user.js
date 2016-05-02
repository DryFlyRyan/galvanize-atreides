var Bookshelf = require('../../database');

require('./userPermission');

var User = Bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  Permission: function() {
    return this.hasMany('UserPermission')
  }
})

module.exports = Bookshelf.model('User', User)
