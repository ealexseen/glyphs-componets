"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M528 0H48A48 48 0 000 48v320a48 48 0 0048 48h480a48 48 0 0048-48V48a48 48 0 00-48-48zm-16 352H64V64h448z",
  opacity: ".4"
})), 'DesktopDuotone', '0 0 576 512');

exports["default"] = _default;