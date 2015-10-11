import bookshelf from '../Database.js';

/**
 * User supermodel, houses type and id.
 */
export const MUser = bookshelf.Model.extend({
  tableName: 'tb_User'
});

/**
 * Client model, references user.
 */
export const MClient = bookshelf.Model.extend({
  tableName: 'tb_Client',
  family: function() {
    return this.belongsTo(MFamily, 'familyId');
  },

  user: function() {
    return this.belongsTo(MUser, 'id');
  }
});

/**
 * Provider model, references user.
 */
export const MProvider = bookshelf.Model.extend({
  tableName: 'tb_Provider',

  user: function() {
    return this.belongsTo(MUser, 'id');
  }
});

/**
 * Administrator model, references user.
 */
export const MAdministrator = bookshelf.Model.extend({
  tableName: 'tb_Administrator',

  family: function() {
    return this.belongsTo(MOrganization, 'organizationId');
  },

  user: function() {
    return this.belongsTo(MUser, 'id');
  }
});

/**
 * Organization model, houses name and id and address
 */
export const MOrganization = bookshelf.Model.extend({
  tableName: 'tb_Organization',
  admins: function() {
    return this.hasMany(MAdministrator, 'organizationId');
  }
});

/**
 * Family model, houses name and id
 */
export const MFamily = bookshelf.Model.extend({
  tableName: 'tb_Family',
  members: function() {
    return this.hasMany(MClient, 'familyId');
  }
});

/**
 * Family invites relational model.
 */
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
