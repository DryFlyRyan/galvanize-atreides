var Bookshelf = require('../../database');

require('./userPermission');

var UserRole = Bookshelf.Model.extend({
  tableName: 'user_roles',
  UserPermission: function() {
    return this.hasMany('UserPermission')
  }
});

module.exports = Bookshelf.model('UserRole', UserRole)
