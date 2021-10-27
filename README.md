# React Native Floating Action Button

###### A simple floating action button component for any React Native project using Expo

## How to use
#### Copy the entire FloatingActionButton.js from this repository

https://user-images.githubusercontent.com/6395465/138796848-4c63ddc3-3d40-4780-8b22-5eb0657ac6f4.mov

---

#### Create a FloatingActionButton.js component file and paste it there

https://user-images.githubusercontent.com/6395465/138798075-6f9659cd-1f3a-4101-b146-0355a6f595f3.mov

---

#### Import and code in your floating action button

https://user-images.githubusercontent.com/6395465/138800685-8761f2b2-d6ea-45e4-8f06-c857905ba7cc.mov

---

## Reference

> For a list of IconSources and iconNames, please refer to https://icons.expo.fyi

<img width="1791" alt="expo icons reference" src="https://user-images.githubusercontent.com/6395465/138818042-1aad09f6-53a0-4975-987a-073ca4f7039d.png">

#### Basic Usage
```
<FloatingActionButton
  IconSource='Ionicons'
  iconName='rocket'
  onPress={() => {
    console.log('You pressed the rocket button');
  }}
/>
```

### Props:
#### IconSource (required)
> type: String
###### The source of the icon
---
#### iconName (required)
> type: String
###### The name of the icon
---
#### onPress
> type: Object({Function})
###### The action when the user presses the button
---
#### buttonColor
> type: String<br/>
> <br/>
> Default: #480ca8
###### The color of the button

##### Example:
```
<FloatingActionButton
  IconSource='Ionicons'
  iconName='rocket'
  onPress={() => {
    console.log('You pressed the rocket button');
  }}
  buttonColor='#0F044C'
/>
```
---
#### buttonColorPressed
> type: String<br/>
> <br/>
> Default: #6a4c93
###### The color of the button when pressed in

##### Example:
```
<FloatingActionButton
  IconSource='Ionicons'
  iconName='rocket'
  onPress={() => {
    console.log('You pressed the rocket button');
  }}
  buttonColor='#0F044C'
  buttonColorPressed='#693C72'
/>
```
---
#### buttonSize
> type: Object({Number})<br/>
> <br/>
> Default: 65
###### The size of the button

##### Example
```
<FloatingActionButton
  IconSource='Ionicons'
  iconName='rocket'
  onPress={() => {
    console.log('You pressed the rocket button');
  }}
  buttonColor='#0F044C'
  buttonColorPressed='#693C72'
  buttonSize={75}
/>
```
---
#### iconSize
> type: Object({Number})<br/>
> <br/>
> Default: 40
###### The size of the icon inside the button.
###### This only changes the size of the icon inside the button, not the size of the button itself
---
#### iconColor
> type: String<br/>
> <br/>
> Default: #edf6f9
###### The color of the icon inside the button
---
#### iconColorPressed
> type: String<br/>
> <br/>
> Default: #e2eafc
###### The color of the icon color when the button is pressed
---
#### shaded
> type: Object({Boolean})<br/>
> <br/>
> Default: false
###### The shadow underneath the button when not pressed in

## License

React Native Floating Action Button is under the **MIT License**. See bundled <a href='https://github.com/cartagenae/react-native-floating-action-button/blob/main/LICENSE' alt='license file'>**LICENSE**</a> file for details.
