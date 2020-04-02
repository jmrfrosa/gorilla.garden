const { Model } = require('objection');
const BaseModel = require('./BaseModel');

class Gorilla extends BaseModel {
  static get tableName() {
    return 'gorillas';
  }

  // Input validation. Whenever a model instance is created
  // either explicitly or implicitly it is checked against this schema.
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'gender', 'email', 'password'],
      properties: {
        id:                 { type: 'integer' },
        name:               { type: 'string', minLength: 1, maxLength: 255 },
        gender:             { type: 'string', minLength: 1, maxLength: 1 },
        email:              { type: 'string', minLength: 1, maxLength: 255 },
        password:           { type: 'string', minLength: 1 },
        parent_relation_id: { type: ['integer', 'null'] },
      }
    };
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    // Importing models here is a one way to avoid require loops.
    const Relation = require('./Relation');

    return {
      parentRelation: {
        relation: Model.BelongsToOneRelation,
        modelClass: Relation,
        join: {
          from: 'gorillas.parent_relation_id',
          to: 'relations.id'
        }
      }
    };
  }

}

module.exports = Gorilla;