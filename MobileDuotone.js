"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M0 384v80a48 48 0 0048 48h224a48 48 0 0048-48v-80zm160 96a32 32 0 1132-32 32 32 0 01-32 32z",
  opacity: ".4"
})), 'MobileDuotone', '0 0 320 512');

exports["default"] = _default;