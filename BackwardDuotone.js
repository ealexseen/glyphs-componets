"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M512 96v320c0 27.39-31.9 41.79-52.51 24.59L288 297.69v-83.38L459.49 71.45C480.1 54.25 512 68.65 512 96z",
  opacity: ".4"
})), 'BackwardDuotone', '0 0 512 512');

exports["default"] = _default;