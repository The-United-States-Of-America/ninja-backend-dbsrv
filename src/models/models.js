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

  organizations: function() {
    return this.belongsToMany(MOrganization, 'tb_RefUserOrganization', 'userId', 'organizationId');
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

  specializations: function(){
    return this.belongsToMany(MTaxonomy, 'tb_RefProviderTaxonomy', 'providerId', 'taxonomyCode');
  },

  organizations: function() {
    return this.belongsToMany(MOrganization, 'tb_RefUserOrganization', 'userId', 'organizationId');
  },

  user: function() {
    return this.belongsTo(MUser, 'id');
  }
});

/**
 * Administrator model, references user.
 */
export const MAdministrator = bookshelf.Model.extend({
  tableName: 'tb_Administrator',

  organization: function() {
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
  },

  providers: function() {
    return this.belongsToMany(MProvider, 'tb_RefUserOrganization', 'organizationId', 'userId');
  },

  clients: function() {
    return this.belongsToMany(MClient, 'tb_RefUserOrganization', 'organizationId', 'userId');
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
 * Taxonomy model, houses code and metadata for taxonomy data
 */
export const MTaxonomy = bookshelf.Model.extend({
  tableName: 'tb_Taxonomy',
  idAttribute: 'code'
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

/**
 * Organization invites relational model.
 */
export const MOrganizationRequests = bookshelf.Model.extend({
  tableName: 'tb_OrganizationRequests',
  idAttribute: 'userId',
  idAttributes: ['userId', 'organizationId'],

  user: function() {
    return this.belongsTo(MUser, 'userId');
  },

  organization: function() {
    return this.belongsTo(MOrganization, 'organizationId');
  }
});

/**
 * Appointments relational model.
 */
export const MAppointments = bookshelf.Model.extend({
  tableName: 'tb_Appointments',
  idAttribute: 'clientId',
  idAttributes: ['clientId', 'providerId', 'dateRequested'],

  client: function() {
    return this.belongsTo(MClient, 'clientId');
  },

  provider: function() {
    return this.belongsTo(MProvider, 'providerId');
  }
});
