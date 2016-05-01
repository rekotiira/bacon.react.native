"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.fromIds = exports.fromClasses = exports.fromClass = exports.fromBacon = exports.bind = exports.bindProps = exports.getProps = exports.setProps = exports.classes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _baconReact = require("bacon.react.base");

var Base = _interopRequireWildcard(_baconReact);

var _baconjs = require("baconjs");

var _baconjs2 = _interopRequireDefault(_baconjs);

var _reactNative = require("react-native");

var _reactNative2 = _interopRequireDefault(_reactNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// Helpers

var classesImmediate = function classesImmediate(cs) {
  var result = "";
  for (var i = 0, n = cs.length; i < n; ++i) {
    var a = cs[i];
    if (a) {
      if (result) result += " ";
      result += a;
    }
  }
  return result;
};

//

var classes = exports.classes = function classes() {
  for (var _len = arguments.length, cs = Array(_len), _key = 0; _key < _len; _key++) {
    cs[_key] = arguments[_key];
  }

  return { className: cs.find(function (c) {
      return c instanceof _baconjs2.default.Observable;
    }) ? (0, Base.default)(cs, classesImmediate) : classesImmediate(cs) };
};

//

var setProps = exports.setProps = function setProps(template) {
  var dispose = null;
  return function (e) {
    if (dispose) {
      dispose();
      dispose = null;
    }
    if (e) {
      dispose = _baconjs2.default.combineTemplate(template).subscribe(function (ev) {
        if (ev.hasValue()) {
          var _template = ev.value();
          for (var k in _template) {
            e[k] = _template[k];
          }
        } else if (ev.isError()) {
          config.onError(ev.error);
        } else {
          dispose = null;
        }
      });
    }
  };
};

var getProps = exports.getProps = function getProps(template) {
  return function (_ref) {
    var target = _ref.target;

    for (var k in template) {
      template[k].set(target[k]);
    }
  };
};

var bindProps = exports.bindProps = function bindProps(_ref2) {
  var _ref3;

  var ref = _ref2.ref;
  var mount = _ref2.mount;

  var template = _objectWithoutProperties(_ref2, ["ref", "mount"]);

  return _ref3 = {}, _defineProperty(_ref3, ref && "ref" || mount && "mount", setProps(template)), _defineProperty(_ref3, ref || mount, getProps(template)), _ref3;
};

var bind = exports.bind = function bind(template) {
  return _extends({}, template, { onChange: getProps(template) });
};

// Export from Base

var fromBacon = exports.fromBacon = Base.fromBacon;
var fromClass = exports.fromClass = Base.fromClass;
var fromClasses = exports.fromClasses = Base.fromClasses;
var fromIds = exports.fromIds = Base.fromIds;
var config = exports.config = Base.config

// Native components

;["ActivityIndicatorIOS", "DatePickerIOS", "DrawerLayoutAndroid", "Image", "ListView", "MapView", "Modal", "Navigator", "NavigatorIOS", "PickerIOS", "Picker", "ProgressBarAndroid", "ProgressViewIOS", "RefreshControl", "ScrollView", "SegmentedControlIOS", "Slider", "SliderIOS", "StatusBar", "Switch", "TabBarIOS", "Text", "TextInput", "ToolbarAndroid", "TouchableHighlight", "TouchableNativeFeedback", "TouchableOpacity", "TouchableWithoutFeedback", "View", "ViewPagerAndroid", "WebView"].forEach(function (c) {
  return Base.default[c] = fromClass(_reactNative2.default[c]);
});

// TabBarIOS.Item has to be specified separately it's a sub-item
Base.default.TabBarIOS.Item = fromClass(_reactNative2.default.TabBarIOS.Item);

exports.default = Base.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9iYWNvbi5yZWFjdC5uYXRpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0lBQWUsSTs7QUFDZjs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUlBLElBQU0sbUJBQW1CLFNBQW5CLGdCQUFtQixLQUFNO0FBQzdCLE1BQUksU0FBUyxFQUFiO0FBQ0EsT0FBSyxJQUFJLElBQUUsQ0FBTixFQUFTLElBQUUsR0FBRyxNQUFuQixFQUEyQixJQUFFLENBQTdCLEVBQWdDLEVBQUUsQ0FBbEMsRUFBcUM7QUFDbkMsUUFBTSxJQUFJLEdBQUcsQ0FBSCxDQUFWO0FBQ0EsUUFBSSxDQUFKLEVBQU87QUFDTCxVQUFJLE1BQUosRUFDRSxVQUFVLEdBQVY7QUFDRixnQkFBVSxDQUFWO0FBQ0Q7QUFDRjtBQUNELFNBQU8sTUFBUDtBQUNELENBWEQ7Ozs7QUFlTyxJQUFNLDRCQUFVLFNBQVYsT0FBVTtBQUFBLG9DQUFJLEVBQUo7QUFBSSxNQUFKO0FBQUE7O0FBQUEsU0FDcEIsRUFBQyxXQUFZLEdBQUcsSUFBSCxDQUFRO0FBQUEsYUFBSyxhQUFhLGtCQUFNLFVBQXhCO0FBQUEsS0FBUixJQUNFLElBdkJILElBdUJHLFVBQUUsRUFBRixFQUFNLGdCQUFOLENBREYsR0FFRSxpQkFBaUIsRUFBakIsQ0FGZixFQURvQjtBQUFBLENBQWhCOzs7O0FBT0EsSUFBTSw4QkFBVyxTQUFYLFFBQVcsV0FBWTtBQUNsQyxNQUFJLFVBQVUsSUFBZDtBQUNBLFNBQU8sYUFBSztBQUNWLFFBQUksT0FBSixFQUFhO0FBQ1g7QUFDQSxnQkFBVSxJQUFWO0FBQ0Q7QUFDRCxRQUFJLENBQUosRUFBTztBQUNMLGdCQUFVLGtCQUFNLGVBQU4sQ0FBc0IsUUFBdEIsRUFBZ0MsU0FBaEMsQ0FBMEMsY0FBTTtBQUN4RCxZQUFJLEdBQUcsUUFBSCxFQUFKLEVBQW1CO0FBQ2pCLGNBQU0sWUFBVyxHQUFHLEtBQUgsRUFBakI7QUFDQSxlQUFLLElBQU0sQ0FBWCxJQUFnQixTQUFoQjtBQUNFLGNBQUUsQ0FBRixJQUFPLFVBQVMsQ0FBVCxDQUFQO0FBREY7QUFFRCxTQUpELE1BSU8sSUFBSSxHQUFHLE9BQUgsRUFBSixFQUFrQjtBQUN2QixpQkFBTyxPQUFQLENBQWUsR0FBRyxLQUFsQjtBQUNELFNBRk0sTUFFQTtBQUNMLG9CQUFVLElBQVY7QUFDRDtBQUNGLE9BVlMsQ0FBVjtBQVdEO0FBQ0YsR0FsQkQ7QUFtQkQsQ0FyQk07O0FBdUJBLElBQU0sOEJBQVcsU0FBWCxRQUFXO0FBQUEsU0FBWSxnQkFBYztBQUFBLFFBQVosTUFBWSxRQUFaLE1BQVk7O0FBQ2hELFNBQUssSUFBTSxDQUFYLElBQWdCLFFBQWhCO0FBQ0UsZUFBUyxDQUFULEVBQVksR0FBWixDQUFnQixPQUFPLENBQVAsQ0FBaEI7QUFERjtBQUVELEdBSHVCO0FBQUEsQ0FBakI7O0FBS0EsSUFBTSxnQ0FBWSxTQUFaLFNBQVk7QUFBQTs7QUFBQSxNQUFFLEdBQUYsU0FBRSxHQUFGO0FBQUEsTUFBTyxLQUFQLFNBQU8sS0FBUDs7QUFBQSxNQUFpQixRQUFqQjs7QUFBQSw0Q0FDcEIsT0FBTyxLQUFQLElBQWdCLFNBQVMsT0FETCxFQUNlLFNBQVMsUUFBVCxDQURmLDBCQUVwQixPQUFPLEtBRmEsRUFFTCxTQUFTLFFBQVQsQ0FGSztBQUFBLENBQWxCOztBQUlBLElBQU0sc0JBQU8sU0FBUCxJQUFPO0FBQUEsc0JBQ2IsUUFEYSxJQUNILFVBQVUsU0FBUyxRQUFULENBRFA7QUFBQSxDQUFiOzs7O0FBS0EsSUFBTSxnQ0FBWSxLQUFLLFNBQXZCO0FBQ0EsSUFBTSxnQ0FBWSxLQUFLLFNBQXZCO0FBQ0EsSUFBTSxvQ0FBYyxLQUFLLFdBQXpCO0FBQ0EsSUFBTSw0QkFBVSxLQUFLLE9BQXJCO0FBQ0EsSUFBTSwwQkFBUyxLQUFLOzs7O0FBQXBCLENBSU4sQ0FBQyxzQkFBRCxFQUF5QixlQUF6QixFQUEwQyxxQkFBMUMsRUFDRCxPQURDLEVBQ1EsVUFEUixFQUNvQixTQURwQixFQUMrQixPQUQvQixFQUN3QyxXQUR4QyxFQUVELGNBRkMsRUFFZSxXQUZmLEVBRTRCLFFBRjVCLEVBRXNDLG9CQUZ0QyxFQUdELGlCQUhDLEVBR2tCLGdCQUhsQixFQUdvQyxZQUhwQyxFQUlELHFCQUpDLEVBSXNCLFFBSnRCLEVBSWdDLFdBSmhDLEVBSTZDLFdBSjdDLEVBS0QsUUFMQyxFQUtTLFdBTFQsRUFLc0IsTUFMdEIsRUFLOEIsV0FMOUIsRUFNRCxnQkFOQyxFQU1pQixvQkFOakIsRUFNdUMseUJBTnZDLEVBT0Qsa0JBUEMsRUFPbUIsMEJBUG5CLEVBUUQsTUFSQyxFQVFPLGtCQVJQLEVBUTJCLFNBUjNCLEVBUXNDLE9BUnRDLENBUThDO0FBQUEsU0FqRmhDLElBaUZxQyxTQUFFLENBQUYsSUFBTyxVQUFVLHNCQUFHLENBQUgsQ0FBVixDQUFaO0FBQUEsQ0FSOUM7OztBQXpFYyxJQW9GZixTQUFFLFNBQUYsQ0FBWSxJQUFaLEdBQW1CLFVBQVUsc0JBQUcsU0FBSCxDQUFhLElBQXZCLENBQW5COztrQkFwRmUsSSIsImZpbGUiOiJiYWNvbi5yZWFjdC5uYXRpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQiwgKiBhcyBCYXNlIGZyb20gXCJiYWNvbi5yZWFjdC5iYXNlXCJcbmltcG9ydCBCYWNvbiBmcm9tIFwiYmFjb25qc1wiXG5pbXBvcnQgUk4gZnJvbSBcInJlYWN0LW5hdGl2ZVwiXG5cbi8vIEhlbHBlcnNcblxuY29uc3QgY2xhc3Nlc0ltbWVkaWF0ZSA9IGNzID0+IHtcbiAgbGV0IHJlc3VsdCA9IFwiXCJcbiAgZm9yIChsZXQgaT0wLCBuPWNzLmxlbmd0aDsgaTxuOyArK2kpIHtcbiAgICBjb25zdCBhID0gY3NbaV1cbiAgICBpZiAoYSkge1xuICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgcmVzdWx0ICs9IFwiIFwiXG4gICAgICByZXN1bHQgKz0gYVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8vXG5cbmV4cG9ydCBjb25zdCBjbGFzc2VzID0gKC4uLmNzKSA9PlxuICAoe2NsYXNzTmFtZTogKGNzLmZpbmQoYyA9PiBjIGluc3RhbmNlb2YgQmFjb24uT2JzZXJ2YWJsZSlcbiAgICAgICAgICAgICAgICA/IEIoY3MsIGNsYXNzZXNJbW1lZGlhdGUpXG4gICAgICAgICAgICAgICAgOiBjbGFzc2VzSW1tZWRpYXRlKGNzKSl9KVxuXG4vL1xuXG5leHBvcnQgY29uc3Qgc2V0UHJvcHMgPSB0ZW1wbGF0ZSA9PiB7XG4gIGxldCBkaXNwb3NlID0gbnVsbFxuICByZXR1cm4gZSA9PiB7XG4gICAgaWYgKGRpc3Bvc2UpIHtcbiAgICAgIGRpc3Bvc2UoKVxuICAgICAgZGlzcG9zZSA9IG51bGxcbiAgICB9XG4gICAgaWYgKGUpIHtcbiAgICAgIGRpc3Bvc2UgPSBCYWNvbi5jb21iaW5lVGVtcGxhdGUodGVtcGxhdGUpLnN1YnNjcmliZShldiA9PiB7XG4gICAgICAgIGlmIChldi5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBldi52YWx1ZSgpXG4gICAgICAgICAgZm9yIChjb25zdCBrIGluIHRlbXBsYXRlKVxuICAgICAgICAgICAgZVtrXSA9IHRlbXBsYXRlW2tdXG4gICAgICAgIH0gZWxzZSBpZiAoZXYuaXNFcnJvcigpKSB7XG4gICAgICAgICAgY29uZmlnLm9uRXJyb3IoZXYuZXJyb3IpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcG9zZSA9IG51bGxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFByb3BzID0gdGVtcGxhdGUgPT4gKHt0YXJnZXR9KSA9PiB7XG4gIGZvciAoY29uc3QgayBpbiB0ZW1wbGF0ZSlcbiAgICB0ZW1wbGF0ZVtrXS5zZXQodGFyZ2V0W2tdKVxufVxuXG5leHBvcnQgY29uc3QgYmluZFByb3BzID0gKHtyZWYsIG1vdW50LCAuLi50ZW1wbGF0ZX0pID0+XG4gICh7W3JlZiAmJiBcInJlZlwiIHx8IG1vdW50ICYmIFwibW91bnRcIl06IHNldFByb3BzKHRlbXBsYXRlKSxcbiAgICBbcmVmIHx8IG1vdW50XTogZ2V0UHJvcHModGVtcGxhdGUpfSlcblxuZXhwb3J0IGNvbnN0IGJpbmQgPSB0ZW1wbGF0ZSA9PlxuICAoey4uLnRlbXBsYXRlLCBvbkNoYW5nZTogZ2V0UHJvcHModGVtcGxhdGUpfSlcblxuLy8gRXhwb3J0IGZyb20gQmFzZVxuXG5leHBvcnQgY29uc3QgZnJvbUJhY29uID0gQmFzZS5mcm9tQmFjb25cbmV4cG9ydCBjb25zdCBmcm9tQ2xhc3MgPSBCYXNlLmZyb21DbGFzc1xuZXhwb3J0IGNvbnN0IGZyb21DbGFzc2VzID0gQmFzZS5mcm9tQ2xhc3Nlc1xuZXhwb3J0IGNvbnN0IGZyb21JZHMgPSBCYXNlLmZyb21JZHNcbmV4cG9ydCBjb25zdCBjb25maWcgPSBCYXNlLmNvbmZpZ1xuXG4vLyBOYXRpdmUgY29tcG9uZW50c1xuXG47W1wiQWN0aXZpdHlJbmRpY2F0b3JJT1NcIiwgXCJEYXRlUGlja2VySU9TXCIsIFwiRHJhd2VyTGF5b3V0QW5kcm9pZFwiLFxuXCJJbWFnZVwiLCBcIkxpc3RWaWV3XCIsIFwiTWFwVmlld1wiLCBcIk1vZGFsXCIsIFwiTmF2aWdhdG9yXCIsXG5cIk5hdmlnYXRvcklPU1wiLCBcIlBpY2tlcklPU1wiLCBcIlBpY2tlclwiLCBcIlByb2dyZXNzQmFyQW5kcm9pZFwiLFxuXCJQcm9ncmVzc1ZpZXdJT1NcIiwgXCJSZWZyZXNoQ29udHJvbFwiLCBcIlNjcm9sbFZpZXdcIixcblwiU2VnbWVudGVkQ29udHJvbElPU1wiLCBcIlNsaWRlclwiLCBcIlNsaWRlcklPU1wiLCBcIlN0YXR1c0JhclwiLFxuXCJTd2l0Y2hcIiwgXCJUYWJCYXJJT1NcIiwgXCJUZXh0XCIsIFwiVGV4dElucHV0XCIsXG5cIlRvb2xiYXJBbmRyb2lkXCIsIFwiVG91Y2hhYmxlSGlnaGxpZ2h0XCIsIFwiVG91Y2hhYmxlTmF0aXZlRmVlZGJhY2tcIixcblwiVG91Y2hhYmxlT3BhY2l0eVwiLCBcIlRvdWNoYWJsZVdpdGhvdXRGZWVkYmFja1wiLFxuXCJWaWV3XCIsIFwiVmlld1BhZ2VyQW5kcm9pZFwiLCBcIldlYlZpZXdcIl0uZm9yRWFjaChjID0+IEJbY10gPSBmcm9tQ2xhc3MoUk5bY10pKVxuXG4vLyBUYWJCYXJJT1MuSXRlbSBoYXMgdG8gYmUgc3BlY2lmaWVkIHNlcGFyYXRlbHkgaXQncyBhIHN1Yi1pdGVtXG5CLlRhYkJhcklPUy5JdGVtID0gZnJvbUNsYXNzKFJOLlRhYkJhcklPUy5JdGVtKVxuXG5leHBvcnQgZGVmYXVsdCBCXG4iXX0=