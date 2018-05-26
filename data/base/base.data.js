const { ObjectID } = require('mongodb');

class BaseData {
    constructor(db, modelClass, validator) {
        this.db = db;
        this.modelClass= modelClass;
        this.validator = validator;
        this.collectionName = this._getCollectionName();
        this.collection = this.db.collection(this.collectionName);
    }

    _getCollectionName() {
        return this.modelClass.name.toLowerCase() + 's';
    }
}