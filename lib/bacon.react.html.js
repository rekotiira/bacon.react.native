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

;["ActivityIndicatorIOS", "DatePickerIOS", "DrawerLayoutAndroid", "Image", "ListView", "MapView", "Modal", "Navigator", "NavigatorIOS", "PickerIOS", "Picker", "ProgressBarAndroid", "ProgressViewIOS", "RefreshControl", "ScrollView", "SegmentedControlIOS", "Slider", "SliderIOS", "StatusBar", "Switch", "TabBarIOS", "TabBarIOS.Item", "Text", "TextInput", "ToolbarAndroid", "TouchableHighlight", "TouchableNativeFeedback", "TouchableOpacity", "TouchableWithoutFeedback", "View", "ViewPagerAndroid", "WebView"].forEach(function (c) {
  return Base.default[c] = fromClass(c);
});

exports.default = Base.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9iYWNvbi5yZWFjdC5odG1sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztJQUFlLEk7O0FBQ2Y7Ozs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTSxtQkFBbUIsU0FBbkIsZ0JBQW1CLEtBQU07QUFDN0IsTUFBSSxTQUFTLEVBQWI7QUFDQSxPQUFLLElBQUksSUFBRSxDQUFOLEVBQVMsSUFBRSxHQUFHLE1BQW5CLEVBQTJCLElBQUUsQ0FBN0IsRUFBZ0MsRUFBRSxDQUFsQyxFQUFxQztBQUNuQyxRQUFNLElBQUksR0FBRyxDQUFILENBQVY7QUFDQSxRQUFJLENBQUosRUFBTztBQUNMLFVBQUksTUFBSixFQUNFLFVBQVUsR0FBVjtBQUNGLGdCQUFVLENBQVY7QUFDRDtBQUNGO0FBQ0QsU0FBTyxNQUFQO0FBQ0QsQ0FYRDs7OztBQWVPLElBQU0sNEJBQVUsU0FBVixPQUFVO0FBQUEsb0NBQUksRUFBSjtBQUFJLE1BQUo7QUFBQTs7QUFBQSxTQUNwQixFQUFDLFdBQVksR0FBRyxJQUFILENBQVE7QUFBQSxhQUFLLGFBQWEsa0JBQU0sVUFBeEI7QUFBQSxLQUFSLElBQ0UsSUF0QkgsSUFzQkcsVUFBRSxFQUFGLEVBQU0sZ0JBQU4sQ0FERixHQUVFLGlCQUFpQixFQUFqQixDQUZmLEVBRG9CO0FBQUEsQ0FBaEI7Ozs7QUFPQSxJQUFNLDhCQUFXLFNBQVgsUUFBVyxXQUFZO0FBQ2xDLE1BQUksVUFBVSxJQUFkO0FBQ0EsU0FBTyxhQUFLO0FBQ1YsUUFBSSxPQUFKLEVBQWE7QUFDWDtBQUNBLGdCQUFVLElBQVY7QUFDRDtBQUNELFFBQUksQ0FBSixFQUFPO0FBQ0wsZ0JBQVUsa0JBQU0sZUFBTixDQUFzQixRQUF0QixFQUFnQyxTQUFoQyxDQUEwQyxjQUFNO0FBQ3hELFlBQUksR0FBRyxRQUFILEVBQUosRUFBbUI7QUFDakIsY0FBTSxZQUFXLEdBQUcsS0FBSCxFQUFqQjtBQUNBLGVBQUssSUFBTSxDQUFYLElBQWdCLFNBQWhCO0FBQ0UsY0FBRSxDQUFGLElBQU8sVUFBUyxDQUFULENBQVA7QUFERjtBQUVELFNBSkQsTUFJTyxJQUFJLEdBQUcsT0FBSCxFQUFKLEVBQWtCO0FBQ3ZCLGlCQUFPLE9BQVAsQ0FBZSxHQUFHLEtBQWxCO0FBQ0QsU0FGTSxNQUVBO0FBQ0wsb0JBQVUsSUFBVjtBQUNEO0FBQ0YsT0FWUyxDQUFWO0FBV0Q7QUFDRixHQWxCRDtBQW1CRCxDQXJCTTs7QUF1QkEsSUFBTSw4QkFBVyxTQUFYLFFBQVc7QUFBQSxTQUFZLGdCQUFjO0FBQUEsUUFBWixNQUFZLFFBQVosTUFBWTs7QUFDaEQsU0FBSyxJQUFNLENBQVgsSUFBZ0IsUUFBaEI7QUFDRSxlQUFTLENBQVQsRUFBWSxHQUFaLENBQWdCLE9BQU8sQ0FBUCxDQUFoQjtBQURGO0FBRUQsR0FIdUI7QUFBQSxDQUFqQjs7QUFLQSxJQUFNLGdDQUFZLFNBQVosU0FBWTtBQUFBOztBQUFBLE1BQUUsR0FBRixTQUFFLEdBQUY7QUFBQSxNQUFPLEtBQVAsU0FBTyxLQUFQOztBQUFBLE1BQWlCLFFBQWpCOztBQUFBLDRDQUNwQixPQUFPLEtBQVAsSUFBZ0IsU0FBUyxPQURMLEVBQ2UsU0FBUyxRQUFULENBRGYsMEJBRXBCLE9BQU8sS0FGYSxFQUVMLFNBQVMsUUFBVCxDQUZLO0FBQUEsQ0FBbEI7O0FBSUEsSUFBTSxzQkFBTyxTQUFQLElBQU87QUFBQSxzQkFDYixRQURhLElBQ0gsVUFBVSxTQUFTLFFBQVQsQ0FEUDtBQUFBLENBQWI7Ozs7QUFLQSxJQUFNLGdDQUFZLEtBQUssU0FBdkI7QUFDQSxJQUFNLGdDQUFZLEtBQUssU0FBdkI7QUFDQSxJQUFNLG9DQUFjLEtBQUssV0FBekI7QUFDQSxJQUFNLDRCQUFVLEtBQUssT0FBckI7QUFDQSxJQUFNLDBCQUFTLEtBQUs7Ozs7QUFBcEIsQ0FJTixDQUFDLHNCQUFELEVBQXlCLGVBQXpCLEVBQTBDLHFCQUExQyxFQUNELE9BREMsRUFDUSxVQURSLEVBQ29CLFNBRHBCLEVBQytCLE9BRC9CLEVBQ3dDLFdBRHhDLEVBRUQsY0FGQyxFQUVlLFdBRmYsRUFFNEIsUUFGNUIsRUFFc0Msb0JBRnRDLEVBR0QsaUJBSEMsRUFHa0IsZ0JBSGxCLEVBR29DLFlBSHBDLEVBSUQscUJBSkMsRUFJc0IsUUFKdEIsRUFJZ0MsV0FKaEMsRUFJNkMsV0FKN0MsRUFLRCxRQUxDLEVBS1MsV0FMVCxFQUtzQixnQkFMdEIsRUFLd0MsTUFMeEMsRUFLZ0QsV0FMaEQsRUFNRCxnQkFOQyxFQU1pQixvQkFOakIsRUFNdUMseUJBTnZDLEVBT0Qsa0JBUEMsRUFPbUIsMEJBUG5CLEVBUUQsTUFSQyxFQVFPLGtCQVJQLEVBUTJCLFNBUjNCLEVBUXNDLE9BUnRDLENBUThDO0FBQUEsU0FoRmhDLElBZ0ZxQyxTQUFFLENBQUYsSUFBTyxVQUFVLENBQVYsQ0FBWjtBQUFBLENBUjlDOztrQkF4RWMsSSIsImZpbGUiOiJiYWNvbi5yZWFjdC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEIsICogYXMgQmFzZSBmcm9tIFwiYmFjb24ucmVhY3QuYmFzZVwiXG5pbXBvcnQgQmFjb24gZnJvbSBcImJhY29uanNcIlxuXG4vLyBIZWxwZXJzXG5cbmNvbnN0IGNsYXNzZXNJbW1lZGlhdGUgPSBjcyA9PiB7XG4gIGxldCByZXN1bHQgPSBcIlwiXG4gIGZvciAobGV0IGk9MCwgbj1jcy5sZW5ndGg7IGk8bjsgKytpKSB7XG4gICAgY29uc3QgYSA9IGNzW2ldXG4gICAgaWYgKGEpIHtcbiAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgIHJlc3VsdCArPSBcIiBcIlxuICAgICAgcmVzdWx0ICs9IGFcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vL1xuXG5leHBvcnQgY29uc3QgY2xhc3NlcyA9ICguLi5jcykgPT5cbiAgKHtjbGFzc05hbWU6IChjcy5maW5kKGMgPT4gYyBpbnN0YW5jZW9mIEJhY29uLk9ic2VydmFibGUpXG4gICAgICAgICAgICAgICAgPyBCKGNzLCBjbGFzc2VzSW1tZWRpYXRlKVxuICAgICAgICAgICAgICAgIDogY2xhc3Nlc0ltbWVkaWF0ZShjcykpfSlcblxuLy9cblxuZXhwb3J0IGNvbnN0IHNldFByb3BzID0gdGVtcGxhdGUgPT4ge1xuICBsZXQgZGlzcG9zZSA9IG51bGxcbiAgcmV0dXJuIGUgPT4ge1xuICAgIGlmIChkaXNwb3NlKSB7XG4gICAgICBkaXNwb3NlKClcbiAgICAgIGRpc3Bvc2UgPSBudWxsXG4gICAgfVxuICAgIGlmIChlKSB7XG4gICAgICBkaXNwb3NlID0gQmFjb24uY29tYmluZVRlbXBsYXRlKHRlbXBsYXRlKS5zdWJzY3JpYmUoZXYgPT4ge1xuICAgICAgICBpZiAoZXYuaGFzVmFsdWUoKSkge1xuICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZXYudmFsdWUoKVxuICAgICAgICAgIGZvciAoY29uc3QgayBpbiB0ZW1wbGF0ZSlcbiAgICAgICAgICAgIGVba10gPSB0ZW1wbGF0ZVtrXVxuICAgICAgICB9IGVsc2UgaWYgKGV2LmlzRXJyb3IoKSkge1xuICAgICAgICAgIGNvbmZpZy5vbkVycm9yKGV2LmVycm9yKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3Bvc2UgPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9wcyA9IHRlbXBsYXRlID0+ICh7dGFyZ2V0fSkgPT4ge1xuICBmb3IgKGNvbnN0IGsgaW4gdGVtcGxhdGUpXG4gICAgdGVtcGxhdGVba10uc2V0KHRhcmdldFtrXSlcbn1cblxuZXhwb3J0IGNvbnN0IGJpbmRQcm9wcyA9ICh7cmVmLCBtb3VudCwgLi4udGVtcGxhdGV9KSA9PlxuICAoe1tyZWYgJiYgXCJyZWZcIiB8fCBtb3VudCAmJiBcIm1vdW50XCJdOiBzZXRQcm9wcyh0ZW1wbGF0ZSksXG4gICAgW3JlZiB8fCBtb3VudF06IGdldFByb3BzKHRlbXBsYXRlKX0pXG5cbmV4cG9ydCBjb25zdCBiaW5kID0gdGVtcGxhdGUgPT5cbiAgKHsuLi50ZW1wbGF0ZSwgb25DaGFuZ2U6IGdldFByb3BzKHRlbXBsYXRlKX0pXG5cbi8vIEV4cG9ydCBmcm9tIEJhc2VcblxuZXhwb3J0IGNvbnN0IGZyb21CYWNvbiA9IEJhc2UuZnJvbUJhY29uXG5leHBvcnQgY29uc3QgZnJvbUNsYXNzID0gQmFzZS5mcm9tQ2xhc3NcbmV4cG9ydCBjb25zdCBmcm9tQ2xhc3NlcyA9IEJhc2UuZnJvbUNsYXNzZXNcbmV4cG9ydCBjb25zdCBmcm9tSWRzID0gQmFzZS5mcm9tSWRzXG5leHBvcnQgY29uc3QgY29uZmlnID0gQmFzZS5jb25maWdcblxuLy8gTmF0aXZlIGNvbXBvbmVudHNcblxuO1tcIkFjdGl2aXR5SW5kaWNhdG9ySU9TXCIsIFwiRGF0ZVBpY2tlcklPU1wiLCBcIkRyYXdlckxheW91dEFuZHJvaWRcIixcblwiSW1hZ2VcIiwgXCJMaXN0Vmlld1wiLCBcIk1hcFZpZXdcIiwgXCJNb2RhbFwiLCBcIk5hdmlnYXRvclwiLFxuXCJOYXZpZ2F0b3JJT1NcIiwgXCJQaWNrZXJJT1NcIiwgXCJQaWNrZXJcIiwgXCJQcm9ncmVzc0JhckFuZHJvaWRcIixcblwiUHJvZ3Jlc3NWaWV3SU9TXCIsIFwiUmVmcmVzaENvbnRyb2xcIiwgXCJTY3JvbGxWaWV3XCIsXG5cIlNlZ21lbnRlZENvbnRyb2xJT1NcIiwgXCJTbGlkZXJcIiwgXCJTbGlkZXJJT1NcIiwgXCJTdGF0dXNCYXJcIixcblwiU3dpdGNoXCIsIFwiVGFiQmFySU9TXCIsIFwiVGFiQmFySU9TLkl0ZW1cIiwgXCJUZXh0XCIsIFwiVGV4dElucHV0XCIsXG5cIlRvb2xiYXJBbmRyb2lkXCIsIFwiVG91Y2hhYmxlSGlnaGxpZ2h0XCIsIFwiVG91Y2hhYmxlTmF0aXZlRmVlZGJhY2tcIixcblwiVG91Y2hhYmxlT3BhY2l0eVwiLCBcIlRvdWNoYWJsZVdpdGhvdXRGZWVkYmFja1wiLFxuXCJWaWV3XCIsIFwiVmlld1BhZ2VyQW5kcm9pZFwiLCBcIldlYlZpZXdcIl0uZm9yRWFjaChjID0+IEJbY10gPSBmcm9tQ2xhc3MoYykpXG5cbmV4cG9ydCBkZWZhdWx0IEJcbiJdfQ==