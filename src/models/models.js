import bookshelf from '../Database.js';

export const MUser = bookshelf.Model.extend({
  tableName: 'tb_User'
})

export const MClient = bookshelf.Model.extend({
  tableName: 'tb_Client',
  family: function() {
    return this.belongsTo(MFamily, 'familyId');
  },

  user: function() {
    return this.belongsTo(MUser, 'id');
  }
});

export const MFamily = bookshelf.Model.extend({
  tableName: 'tb_Family',
  members: function() {
    return this.hasMany(MClient, 'familyId');
  }
});

export const MFamilyRequests = bookshelf.Model.extend({
  tableName: 'tb_FamilyRequests',
  idAttribute: 'clientId',
  idAttributes: ['clientId', 'familyId'],

  client: function() {
    return this.belongsTo(MClient, 'clientId');
  },

  family: function() {
    return this.belongsTo(MFamily, 'familyId');
  }
});
