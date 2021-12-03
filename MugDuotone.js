"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M448 64h-32v288-32h32a128 128 0 000-256zm0 192h-32V128h32a64 64 0 010 128z",
  opacity: ".4"
})), 'MugDuotone', '0 0 576 512');

exports["default"] = _default;