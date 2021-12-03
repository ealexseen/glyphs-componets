"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M464 160h-80v64h64v224H224v-64h-64v80a48 48 0 0048 48h256a48 48 0 0048-48V208a48 48 0 00-48-48z",
  opacity: ".4"
})), 'BringForwardDuotone', '0 0 512 512');

exports["default"] = _default;