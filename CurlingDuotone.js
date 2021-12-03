"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M0 416a96 96 0 0096 96h448a96 96 0 0096-96v-32H0zm544-176H96a96 96 0 00-96 96v16h640v-16a96 96 0 00-96-96z",
  opacity: ".4"
})), 'CurlingDuotone', '0 0 640 512');

exports["default"] = _default;