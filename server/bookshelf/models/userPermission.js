var Bookshelf = require('../../database');

require('./user');
require('./campus');
require('./userRole');

var UserPermission = Bookshelf.Model.extend({
  tableName: 'user_permissions',
  user: function() {
    return this.belongsTo('User', 'user_id')
  },
  campus: function() {
    return this.belongsTo('Campus', 'campus_id')
  },
  roleLookup: function() {
    return this.belongsTo('RoleLookup', 'role_id')
  }
});

module.exports = Bookshelf.model('UserPermission', UserPermission)
