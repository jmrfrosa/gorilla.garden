const BaseModel = require('./BaseModel');

class Gorilla extends BaseModel {
  static get tableName() {
    return 'gorillas';
  }
}

module.exports = Gorilla;