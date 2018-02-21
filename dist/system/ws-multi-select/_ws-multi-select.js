System.register(['../imports', '../ws-dropdown/dropdown-menu'], function (_export, _context) {
  "use strict";

  var React, Component, PropTypes, DropdownMenu, _typeof, _createClass, WSMultiSelect;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_imports) {
      React = _imports.React;
      Component = _imports.Component;
      PropTypes = _imports.PropTypes;
    }, function (_wsDropdownDropdownMenu) {
      DropdownMenu = _wsDropdownDropdownMenu.DropdownMenu;
    }],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };

      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('WSMultiSelect', WSMultiSelect = function (_Component) {
        _inherits(WSMultiSelect, _Component);

        function WSMultiSelect(props) {
          _classCallCheck(this, WSMultiSelect);

          var _this = _possibleConstructorReturn(this, (WSMultiSelect.__proto__ || Object.getPrototypeOf(WSMultiSelect)).call(this, props));

          Object.defineProperty(_this, 'onKeyUp', {
            enumerable: true,
            writable: true,
            value: function value(event) {
              event.stopPropagation();

              _this.setState({ filter: event.target.value });
            }
          });
          Object.defineProperty(_this, 'handlePropagation', {
            enumerable: true,
            writable: true,
            value: function value(type, data) {
              if (type === 'change') {
                _this.close();
                var value = [].concat(_toConsumableArray(_this.state.value), [data]);
                _this.setState({ value: value });
              } else if (type === 'change-size') {
                _this.adjustSize(data);
              }
            }
          });

          _this.state = _this.createState(props);
          return _this;
        }

        _createClass(WSMultiSelect, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
            this.input.addEventListener('keyup', this.onKeyUp);
          }
        }, {
          key: 'componentWillReceiveProps',
          value: function componentWillReceiveProps(props) {
            this.setState(this.createState(props));
          }
        }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            this.input.removeEventListener('keyup', this.onKeyUp);
          }
        }, {
          key: 'adjustSize',
          value: function adjustSize(newSize) {
            this.dropdownContainer.style.height = newSize + 'px';
          }
        }, {
          key: 'createState',
          value: function createState(props) {
            var items = this.enrichItems(props.items);

            if (props.value) {
              if (!Array.isArray(props.value)) {
                props.value = [props.value];
              }
              props.value.forEach(function (value) {
                items.find(function (item) {
                  return item.value === value;
                }).selected = true;
              });
            }
            return {
              items: items,
              visible: props.initialVisible,
              value: props.value
            };
          }
        }, {
          key: 'enrichItems',
          value: function enrichItems(items) {
            return items.map(function (item) {
              if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
                return item;
              }
              return { label: item, value: item };
            });
          }
        }, {
          key: 'render',
          value: function render() {
            var _this2 = this;

            var regex = new RegExp('/' + this.state.filter + '/', 'i');
            var filteredItems = this.state.items.filter(function (item) {
              return regex.test(item.label);
            });

            return React.createElement(
              'div',
              { className: 'dropdown', ref: function ref(element) {
                  if (element) {
                    _this2.element = element;
                  }
                } },
              React.createElement('input', { type: 'text', ref: function ref(element) {
                  _this2.input = element;
                } }),
              React.createElement(
                'div',
                {
                  className: 'dropdown-container ' + this.props.orientation,
                  style: { width: this.props.width || '100%' },
                  ref: function ref(element) {
                    if (element) {
                      _this2.dropdownContainer = element;
                    }
                  }
                },
                React.createElement(DropdownMenu, { items: filteredItems })
              ),
              React.createElement('div', { className: 'dropdown-arrow' })
            );
          }
        }]);

        return WSMultiSelect;
      }(Component));

      _export('WSMultiSelect', WSMultiSelect);

      Object.defineProperty(WSMultiSelect, 'propTypes', {
        enumerable: true,
        writable: true,
        value: {
          items: PropTypes.array,
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array])
        }
      });
      Object.defineProperty(WSMultiSelect, 'defaultProps', {
        enumerable: true,
        writable: true,
        value: {
          items: [],
          value: null
        }
      });
    }
  };
});