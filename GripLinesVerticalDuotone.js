"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M192 16v480a16 16 0 01-16 16h-32a16 16 0 01-16-16V16a16 16 0 0116-16h32a16 16 0 0116 16z",
  opacity: ".4"
})), 'GripLinesVerticalDuotone', '0 0 192 512');

exports["default"] = _default;