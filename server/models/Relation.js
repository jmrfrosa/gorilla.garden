const BaseModel = require('./BaseModel');

class Relation extends BaseModel {
  static get tableName() {
    return 'relations';
  }

  // Input validation. Whenever a model instance is created
  // either explicitly or implicitly it is checked against this schema.
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['gorilla_a_id', 'gorilla_b_id'],
      properties: {
        id:           { type: 'integer' },
        gorilla_a_id: { type: 'integer' },
        gorilla_b_id: { type: 'integer' },
      }
    };
  }

}