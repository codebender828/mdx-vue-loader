"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('loader-utils'),
    getOptions = _require.getOptions;

var mdx = require('@mdx-js/mdx');

module.exports = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(content) {
    var callback, options, result, code;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            callback = this.async();
            options = Object.assign({}, getOptions(this), {
              filepath: this.resourcePath
            });
            _context.prev = 2;
            _context.next = 5;
            return mdx(content, _objectSpread({}, options, {
              skipExport: true
            }));

          case 5:
            result = _context.sent;
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", callback(_context.t0));

          case 11:
            code = "// vue babel plugin doesn't support the pragma replacement\nimport { mdx } from 'mdx-vue'\nlet h;\n".concat(result, "\n\nexport default {\n  name: 'Mdx',\n  inject: ['components'],\n  computed: {\n    components() {\n      console.log(this.components())\n      return this.components()\n    }\n  },\n  render(vueCreateElement) {\n    h = mdx.bind({vueCreateElement})\n    return MDXContent({ components: this.components })\n  }\n}\n   ");
            return _context.abrupt("return", callback(null, code));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 8]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();