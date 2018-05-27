const { ObjectID } = require('mongodb');

class BaseData {
    constructor(db, modelClass, validator) {
        this.db = db;
        this.modelClass= modelClass;
        this.validator = validator;
        this.collectionName = this._getCollectionName();
        this.collection = this.db.collection(this.collectionName);
    }

    filterBy(props) {
        return this.collection.find(props)
            .toArray();
    }

    findById(id) {
        return this.collection.findOne({
            _id: new ObjectID(id)
        });
    }

    findByName(name) {
        return this.collection.findOne({
            name: name
        });
    }

    _getCollectionName() {
        return this.modelClass.name.toLowerCase() + 's';
    }
}

module.exports = BaseData;