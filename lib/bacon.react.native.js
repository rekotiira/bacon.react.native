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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9iYWNvbi5yZWFjdC5uYXRpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0lBQWUsSTs7QUFDZjs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFNLG1CQUFtQixTQUFuQixnQkFBbUIsS0FBTTtBQUM3QixNQUFJLFNBQVMsRUFBYjtBQUNBLE9BQUssSUFBSSxJQUFFLENBQU4sRUFBUyxJQUFFLEdBQUcsTUFBbkIsRUFBMkIsSUFBRSxDQUE3QixFQUFnQyxFQUFFLENBQWxDLEVBQXFDO0FBQ25DLFFBQU0sSUFBSSxHQUFHLENBQUgsQ0FBVjtBQUNBLFFBQUksQ0FBSixFQUFPO0FBQ0wsVUFBSSxNQUFKLEVBQ0UsVUFBVSxHQUFWO0FBQ0YsZ0JBQVUsQ0FBVjtBQUNEO0FBQ0Y7QUFDRCxTQUFPLE1BQVA7QUFDRCxDQVhEOzs7O0FBZU8sSUFBTSw0QkFBVSxTQUFWLE9BQVU7QUFBQSxvQ0FBSSxFQUFKO0FBQUksTUFBSjtBQUFBOztBQUFBLFNBQ3BCLEVBQUMsV0FBWSxHQUFHLElBQUgsQ0FBUTtBQUFBLGFBQUssYUFBYSxrQkFBTSxVQUF4QjtBQUFBLEtBQVIsSUFDRSxJQXRCSCxJQXNCRyxVQUFFLEVBQUYsRUFBTSxnQkFBTixDQURGLEdBRUUsaUJBQWlCLEVBQWpCLENBRmYsRUFEb0I7QUFBQSxDQUFoQjs7OztBQU9BLElBQU0sOEJBQVcsU0FBWCxRQUFXLFdBQVk7QUFDbEMsTUFBSSxVQUFVLElBQWQ7QUFDQSxTQUFPLGFBQUs7QUFDVixRQUFJLE9BQUosRUFBYTtBQUNYO0FBQ0EsZ0JBQVUsSUFBVjtBQUNEO0FBQ0QsUUFBSSxDQUFKLEVBQU87QUFDTCxnQkFBVSxrQkFBTSxlQUFOLENBQXNCLFFBQXRCLEVBQWdDLFNBQWhDLENBQTBDLGNBQU07QUFDeEQsWUFBSSxHQUFHLFFBQUgsRUFBSixFQUFtQjtBQUNqQixjQUFNLFlBQVcsR0FBRyxLQUFILEVBQWpCO0FBQ0EsZUFBSyxJQUFNLENBQVgsSUFBZ0IsU0FBaEI7QUFDRSxjQUFFLENBQUYsSUFBTyxVQUFTLENBQVQsQ0FBUDtBQURGO0FBRUQsU0FKRCxNQUlPLElBQUksR0FBRyxPQUFILEVBQUosRUFBa0I7QUFDdkIsaUJBQU8sT0FBUCxDQUFlLEdBQUcsS0FBbEI7QUFDRCxTQUZNLE1BRUE7QUFDTCxvQkFBVSxJQUFWO0FBQ0Q7QUFDRixPQVZTLENBQVY7QUFXRDtBQUNGLEdBbEJEO0FBbUJELENBckJNOztBQXVCQSxJQUFNLDhCQUFXLFNBQVgsUUFBVztBQUFBLFNBQVksZ0JBQWM7QUFBQSxRQUFaLE1BQVksUUFBWixNQUFZOztBQUNoRCxTQUFLLElBQU0sQ0FBWCxJQUFnQixRQUFoQjtBQUNFLGVBQVMsQ0FBVCxFQUFZLEdBQVosQ0FBZ0IsT0FBTyxDQUFQLENBQWhCO0FBREY7QUFFRCxHQUh1QjtBQUFBLENBQWpCOztBQUtBLElBQU0sZ0NBQVksU0FBWixTQUFZO0FBQUE7O0FBQUEsTUFBRSxHQUFGLFNBQUUsR0FBRjtBQUFBLE1BQU8sS0FBUCxTQUFPLEtBQVA7O0FBQUEsTUFBaUIsUUFBakI7O0FBQUEsNENBQ3BCLE9BQU8sS0FBUCxJQUFnQixTQUFTLE9BREwsRUFDZSxTQUFTLFFBQVQsQ0FEZiwwQkFFcEIsT0FBTyxLQUZhLEVBRUwsU0FBUyxRQUFULENBRks7QUFBQSxDQUFsQjs7QUFJQSxJQUFNLHNCQUFPLFNBQVAsSUFBTztBQUFBLHNCQUNiLFFBRGEsSUFDSCxVQUFVLFNBQVMsUUFBVCxDQURQO0FBQUEsQ0FBYjs7OztBQUtBLElBQU0sZ0NBQVksS0FBSyxTQUF2QjtBQUNBLElBQU0sZ0NBQVksS0FBSyxTQUF2QjtBQUNBLElBQU0sb0NBQWMsS0FBSyxXQUF6QjtBQUNBLElBQU0sNEJBQVUsS0FBSyxPQUFyQjtBQUNBLElBQU0sMEJBQVMsS0FBSzs7OztBQUFwQixDQUlOLENBQUMsc0JBQUQsRUFBeUIsZUFBekIsRUFBMEMscUJBQTFDLEVBQ0QsT0FEQyxFQUNRLFVBRFIsRUFDb0IsU0FEcEIsRUFDK0IsT0FEL0IsRUFDd0MsV0FEeEMsRUFFRCxjQUZDLEVBRWUsV0FGZixFQUU0QixRQUY1QixFQUVzQyxvQkFGdEMsRUFHRCxpQkFIQyxFQUdrQixnQkFIbEIsRUFHb0MsWUFIcEMsRUFJRCxxQkFKQyxFQUlzQixRQUp0QixFQUlnQyxXQUpoQyxFQUk2QyxXQUo3QyxFQUtELFFBTEMsRUFLUyxXQUxULEVBS3NCLGdCQUx0QixFQUt3QyxNQUx4QyxFQUtnRCxXQUxoRCxFQU1ELGdCQU5DLEVBTWlCLG9CQU5qQixFQU11Qyx5QkFOdkMsRUFPRCxrQkFQQyxFQU9tQiwwQkFQbkIsRUFRRCxNQVJDLEVBUU8sa0JBUlAsRUFRMkIsU0FSM0IsRUFRc0MsT0FSdEMsQ0FROEM7QUFBQSxTQWhGaEMsSUFnRnFDLFNBQUUsQ0FBRixJQUFPLFVBQVUsQ0FBVixDQUFaO0FBQUEsQ0FSOUM7O2tCQXhFYyxJIiwiZmlsZSI6ImJhY29uLnJlYWN0Lm5hdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCLCAqIGFzIEJhc2UgZnJvbSBcImJhY29uLnJlYWN0LmJhc2VcIlxuaW1wb3J0IEJhY29uIGZyb20gXCJiYWNvbmpzXCJcblxuLy8gSGVscGVyc1xuXG5jb25zdCBjbGFzc2VzSW1tZWRpYXRlID0gY3MgPT4ge1xuICBsZXQgcmVzdWx0ID0gXCJcIlxuICBmb3IgKGxldCBpPTAsIG49Y3MubGVuZ3RoOyBpPG47ICsraSkge1xuICAgIGNvbnN0IGEgPSBjc1tpXVxuICAgIGlmIChhKSB7XG4gICAgICBpZiAocmVzdWx0KVxuICAgICAgICByZXN1bHQgKz0gXCIgXCJcbiAgICAgIHJlc3VsdCArPSBhXG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuLy9cblxuZXhwb3J0IGNvbnN0IGNsYXNzZXMgPSAoLi4uY3MpID0+XG4gICh7Y2xhc3NOYW1lOiAoY3MuZmluZChjID0+IGMgaW5zdGFuY2VvZiBCYWNvbi5PYnNlcnZhYmxlKVxuICAgICAgICAgICAgICAgID8gQihjcywgY2xhc3Nlc0ltbWVkaWF0ZSlcbiAgICAgICAgICAgICAgICA6IGNsYXNzZXNJbW1lZGlhdGUoY3MpKX0pXG5cbi8vXG5cbmV4cG9ydCBjb25zdCBzZXRQcm9wcyA9IHRlbXBsYXRlID0+IHtcbiAgbGV0IGRpc3Bvc2UgPSBudWxsXG4gIHJldHVybiBlID0+IHtcbiAgICBpZiAoZGlzcG9zZSkge1xuICAgICAgZGlzcG9zZSgpXG4gICAgICBkaXNwb3NlID0gbnVsbFxuICAgIH1cbiAgICBpZiAoZSkge1xuICAgICAgZGlzcG9zZSA9IEJhY29uLmNvbWJpbmVUZW1wbGF0ZSh0ZW1wbGF0ZSkuc3Vic2NyaWJlKGV2ID0+IHtcbiAgICAgICAgaWYgKGV2Lmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGV2LnZhbHVlKClcbiAgICAgICAgICBmb3IgKGNvbnN0IGsgaW4gdGVtcGxhdGUpXG4gICAgICAgICAgICBlW2tdID0gdGVtcGxhdGVba11cbiAgICAgICAgfSBlbHNlIGlmIChldi5pc0Vycm9yKCkpIHtcbiAgICAgICAgICBjb25maWcub25FcnJvcihldi5lcnJvcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwb3NlID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvcHMgPSB0ZW1wbGF0ZSA9PiAoe3RhcmdldH0pID0+IHtcbiAgZm9yIChjb25zdCBrIGluIHRlbXBsYXRlKVxuICAgIHRlbXBsYXRlW2tdLnNldCh0YXJnZXRba10pXG59XG5cbmV4cG9ydCBjb25zdCBiaW5kUHJvcHMgPSAoe3JlZiwgbW91bnQsIC4uLnRlbXBsYXRlfSkgPT5cbiAgKHtbcmVmICYmIFwicmVmXCIgfHwgbW91bnQgJiYgXCJtb3VudFwiXTogc2V0UHJvcHModGVtcGxhdGUpLFxuICAgIFtyZWYgfHwgbW91bnRdOiBnZXRQcm9wcyh0ZW1wbGF0ZSl9KVxuXG5leHBvcnQgY29uc3QgYmluZCA9IHRlbXBsYXRlID0+XG4gICh7Li4udGVtcGxhdGUsIG9uQ2hhbmdlOiBnZXRQcm9wcyh0ZW1wbGF0ZSl9KVxuXG4vLyBFeHBvcnQgZnJvbSBCYXNlXG5cbmV4cG9ydCBjb25zdCBmcm9tQmFjb24gPSBCYXNlLmZyb21CYWNvblxuZXhwb3J0IGNvbnN0IGZyb21DbGFzcyA9IEJhc2UuZnJvbUNsYXNzXG5leHBvcnQgY29uc3QgZnJvbUNsYXNzZXMgPSBCYXNlLmZyb21DbGFzc2VzXG5leHBvcnQgY29uc3QgZnJvbUlkcyA9IEJhc2UuZnJvbUlkc1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IEJhc2UuY29uZmlnXG5cbi8vIE5hdGl2ZSBjb21wb25lbnRzXG5cbjtbXCJBY3Rpdml0eUluZGljYXRvcklPU1wiLCBcIkRhdGVQaWNrZXJJT1NcIiwgXCJEcmF3ZXJMYXlvdXRBbmRyb2lkXCIsXG5cIkltYWdlXCIsIFwiTGlzdFZpZXdcIiwgXCJNYXBWaWV3XCIsIFwiTW9kYWxcIiwgXCJOYXZpZ2F0b3JcIixcblwiTmF2aWdhdG9ySU9TXCIsIFwiUGlja2VySU9TXCIsIFwiUGlja2VyXCIsIFwiUHJvZ3Jlc3NCYXJBbmRyb2lkXCIsXG5cIlByb2dyZXNzVmlld0lPU1wiLCBcIlJlZnJlc2hDb250cm9sXCIsIFwiU2Nyb2xsVmlld1wiLFxuXCJTZWdtZW50ZWRDb250cm9sSU9TXCIsIFwiU2xpZGVyXCIsIFwiU2xpZGVySU9TXCIsIFwiU3RhdHVzQmFyXCIsXG5cIlN3aXRjaFwiLCBcIlRhYkJhcklPU1wiLCBcIlRhYkJhcklPUy5JdGVtXCIsIFwiVGV4dFwiLCBcIlRleHRJbnB1dFwiLFxuXCJUb29sYmFyQW5kcm9pZFwiLCBcIlRvdWNoYWJsZUhpZ2hsaWdodFwiLCBcIlRvdWNoYWJsZU5hdGl2ZUZlZWRiYWNrXCIsXG5cIlRvdWNoYWJsZU9wYWNpdHlcIiwgXCJUb3VjaGFibGVXaXRob3V0RmVlZGJhY2tcIixcblwiVmlld1wiLCBcIlZpZXdQYWdlckFuZHJvaWRcIiwgXCJXZWJWaWV3XCJdLmZvckVhY2goYyA9PiBCW2NdID0gZnJvbUNsYXNzKGMpKVxuXG5leHBvcnQgZGVmYXVsdCBCXG4iXX0=