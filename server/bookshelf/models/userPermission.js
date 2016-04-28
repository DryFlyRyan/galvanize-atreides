var Bookshelf = require('../../database');

require('./user');
require('./campus');
require('./userRole');

var UserPermission = Bookshelf.Model.extend({
  tableName: 'user_permissions',
  User: function() {
    return this.belongsTo('User', 'user_id')
  },
  Campus: function() {
    return this.belongsTo('Campus', 'campus_id')
  },
  RoleLookup: function() {
    return this.belongsTo('RoleLookup', 'role_id')
  }
});

module.exports = Bookshelf.model('UserPermission', UserPermission)
