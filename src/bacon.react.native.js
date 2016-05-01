import B, * as Base from "bacon.react.base"
import Bacon from "baconjs"
import RN from "react-native"

// Helpers

const classesImmediate = cs => {
  let result = ""
  for (let i=0, n=cs.length; i<n; ++i) {
    const a = cs[i]
    if (a) {
      if (result)
        result += " "
      result += a
    }
  }
  return result
}

//

export const classes = (...cs) =>
  ({className: (cs.find(c => c instanceof Bacon.Observable)
                ? B(cs, classesImmediate)
                : classesImmediate(cs))})

//

export const setProps = template => {
  let dispose = null
  return e => {
    if (dispose) {
      dispose()
      dispose = null
    }
    if (e) {
      dispose = Bacon.combineTemplate(template).subscribe(ev => {
        if (ev.hasValue()) {
          const template = ev.value()
          for (const k in template)
            e[k] = template[k]
        } else if (ev.isError()) {
          config.onError(ev.error)
        } else {
          dispose = null
        }
      })
    }
  }
}

export const getProps = template => ({target}) => {
  for (const k in template)
    template[k].set(target[k])
}

export const bindProps = ({ref, mount, ...template}) =>
  ({[ref && "ref" || mount && "mount"]: setProps(template),
    [ref || mount]: getProps(template)})

export const bind = template =>
  ({...template, onChange: getProps(template)})

// Export from Base

export const fromBacon = Base.fromBacon
export const fromClass = Base.fromClass
export const fromClasses = Base.fromClasses
export const fromIds = Base.fromIds
export const config = Base.config

// Native components

;["ActivityIndicatorIOS", "DatePickerIOS", "DrawerLayoutAndroid",
"Image", "ListView", "MapView", "Modal", "Navigator",
"NavigatorIOS", "PickerIOS", "Picker", "ProgressBarAndroid",
"ProgressViewIOS", "RefreshControl", "ScrollView",
"SegmentedControlIOS", "Slider", "SliderIOS", "StatusBar",
"Switch", "TabBarIOS", "Text", "TextInput",
"ToolbarAndroid", "TouchableHighlight", "TouchableNativeFeedback",
"TouchableOpacity", "TouchableWithoutFeedback",
"View", "ViewPagerAndroid", "WebView"].forEach(c => B[c] = fromClass(RN[c]))

// TabBarIOS.Item has to be specified separately it's a sub-item
B.TabBarIOS.Item = fromClass(RN.TabBarIOS.Item)

export default B
