"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M256 32l32 128v112a16 16 0 01-16 16h-96a16 16 0 01-16-16V160l32-128z",
  opacity: ".4"
})), 'BoxAltDuotone', '0 0 448 512');

exports["default"] = _default;