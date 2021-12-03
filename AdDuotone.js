"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M464 112v288H48V112h416m0-48H48a48 48 0 00-48 48v288a48 48 0 0048 48h416a48 48 0 0048-48V112a48 48 0 00-48-48z",
  opacity: ".4"
})), 'AdDuotone', '0 0 512 512');

exports["default"] = _default;