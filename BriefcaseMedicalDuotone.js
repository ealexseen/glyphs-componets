"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M192 128h-64V80a48 48 0 0148-48h160a48 48 0 0148 48v48h-64V96H192z",
  opacity: ".4"
})), 'BriefcaseMedicalDuotone', '0 0 512 512');

exports["default"] = _default;