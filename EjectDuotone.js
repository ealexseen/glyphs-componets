"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M448 384v64a32 32 0 01-32 32H32a32 32 0 01-32-32v-64a32 32 0 0132-32h384a32 32 0 0132 32z",
  opacity: ".4"
})), 'EjectDuotone', '0 0 448 512');

exports["default"] = _default;