'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WSMultiSelect = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _imports = require('../imports');

var _wsDropdown = require('../ws-dropdown/ws-dropdown');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WSMultiSelect = exports.WSMultiSelect = function (_WSDropdown) {
  _inherits(WSMultiSelect, _WSDropdown);

  function WSMultiSelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WSMultiSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WSMultiSelect.__proto__ || Object.getPrototypeOf(WSMultiSelect)).call.apply(_ref, [this].concat(args))), _this), Object.defineProperty(_this, 'onKeyUp', {
      enumerable: true,
      writable: true,
      value: function value(event) {
        event.stopPropagation();

        _this.setState({ filter: event.target.value });
      }
    }), Object.defineProperty(_this, 'onFocus', {
      enumerable: true,
      writable: true,
      value: function value(event) {
        event.stopPropagation();
        _this.open();
      }
    }), Object.defineProperty(_this, 'onBlur', {
      enumerable: true,
      writable: true,
      value: function value(event) {
        event.stopPropagation();

        setTimeout(function () {
          return _this.close();
        }, 50);
      }
    }), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WSMultiSelect, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.select = this;
      this.input.addEventListener('keyup', this.onKeyUp);
      this.input.addEventListener('focus', this.onFocus);
      this.input.addEventListener('blur', this.onBlur);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.input.removeEventListener('keyup', this.onKeyUp);
      this.input.removeEventListener('focus', this.onFocus);
      this.input.removeEventListener('blur', this.onBlur);
    }
  }, {
    key: 'setValue',
    value: function setValue(item) {
      var value = [].concat(_toConsumableArray(this.state.value), [item]);

      _get(WSMultiSelect.prototype.__proto__ || Object.getPrototypeOf(WSMultiSelect.prototype), 'setValue', this).call(this, value);
    }
  }, {
    key: 'removeItem',
    value: function removeItem(item) {
      item.selected = false;
      item.stored = false;
      var value = this.state.value.filter(function (i) {
        return i !== item;
      });
      _get(WSMultiSelect.prototype.__proto__ || Object.getPrototypeOf(WSMultiSelect.prototype), 'setValue', this).call(this, value);
    }
  }, {
    key: 'renderTrigger',
    value: function renderTrigger() {
      var _this2 = this;

      return _imports.React.createElement(
        'div',
        { className: 'input-wrapper' },
        _imports.React.createElement('input', { type: 'text', placeholder: this.props.placeholder, ref: function ref(element) {
            _this2.input = element;
          } }),
        _imports.React.createElement('span', { className: 'icon icon24 icon-magnifiying-glass' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var jsx = _get(WSMultiSelect.prototype.__proto__ || Object.getPrototypeOf(WSMultiSelect.prototype), 'render', this).call(this);
      return _imports.React.createElement(
        'div',
        { className: 'ws-multi-select' },
        jsx,
        _imports.React.createElement(
          'ul',
          { className: 'selected-items' },
          this.state.value.map(function (item, index) {
            return _imports.React.createElement(
              'li',
              { key: 'selected-item-' + index },
              _imports.React.createElement(
                'span',
                { className: 'text' },
                item.label
              ),
              _imports.React.createElement('span', { className: 'icon icon16 icon-cross', onClick: function onClick() {
                  return _this3.removeItem(item);
                } })
            );
          })
        )
      );
    }
  }]);

  return WSMultiSelect;
}(_wsDropdown.WSDropdown);

Object.defineProperty(WSMultiSelect, 'defaultProps', {
  enumerable: true,
  writable: true,
  value: _extends({}, _wsDropdown.WSDropdown.defaultProps, {
    filtered: true
  })
});