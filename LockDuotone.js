"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M152 224H72v-72C72 68.2 140.2 0 224 0s152 68.2 152 152v72h-80v-72a72 72 0 00-144 0z",
  opacity: ".4"
})), 'LockDuotone', '0 0 448 512');

exports["default"] = _default;