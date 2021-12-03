"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M256 320a96 96 0 1096 96 96 96 0 00-96-96zm0 128a32 32 0 1132-32 32 32 0 01-32 32z",
  opacity: ".4"
})), 'DollyEmptyDuotone', '0 0 576 512');

exports["default"] = _default;