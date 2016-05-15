'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(_config2.default.mongodbUrl);
var objectId = _mongoose2.default.Types.ObjectId;
var Account = _mongoose2.default.model('account', new _mongoose.Schema());
var Service = _mongoose2.default.model('service', new _mongoose.Schema());
var Build = _mongoose2.default.model('build', new _mongoose.Schema());

exports.default = {
  objectId: objectId,
  Account: Account,
  Service: Service,
  Build: Build
};