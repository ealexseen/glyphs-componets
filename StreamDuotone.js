"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M512 224v64a16 16 0 01-16 16H80a16 16 0 01-16-16v-64a16 16 0 0116-16h416a16 16 0 0116 16z",
  opacity: ".4"
})), 'StreamDuotone', '0 0 512 512');

exports["default"] = _default;