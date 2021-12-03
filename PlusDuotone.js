"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M176 448a32 32 0 0032 32h32a32 32 0 0032-32V304h-96zm64-416h-32a32 32 0 00-32 32v144h96V64a32 32 0 00-32-32z",
  opacity: ".4"
})), 'PlusDuotone', '0 0 448 512');

exports["default"] = _default;