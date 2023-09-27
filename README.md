# React Native Touchable Action

###### A simple floating action button component for any React Native project using Expo

iOS                 | Android
:------------------:|:------------------:
![iOSMainDemonstration](https://github.com/cartagenae/react-native-touchable-action/assets/6395465/ccb5b029-b5a7-4782-9a68-a05561763bb1) | ![AndroidMainDemonstration](https://github.com/cartagenae/react-native-touchable-action/assets/6395465/f1198ec9-df99-4e88-9a57-578d7143c040)


---

## Installation

```
npm install --save react-native-touchable-action
```
or
```
yarn add react-native-touchable-action
```

---

## Reference

> For a list of IconSources and iconNames, please refer to https://icons.expo.fyi

<img width="1791" alt="expo icons reference" src="https://user-images.githubusercontent.com/6395465/138818042-1aad09f6-53a0-4975-987a-073ca4f7039d.png">

##

#### Basic Usage

> To position your floating action, use the React Native style prop
```
import FloatingActionButton from 'react-native-touchable-action';
```
```
<FloatingActionButton
  IconSource='Ionicons'
  iconName='rocket'
  onPress={() => {
    console.log('You pressed the rocket button');
  }}
  style={{
    position='absolute',
    bottom=75,
    right=50,
  }}
/>
```

### Props:
#### IconSource (required)
> type: String
###### The source of the icon
```
IconSource='Ionicons'
```
##

#### iconName (required)
> type: String
###### The name of the icon
```
iconName='rocket'
```
##

#### onPress
> type: Object({Function})
###### The action when the user presses the button
```
onPress={() => {
  console.log('You pressed the rocket button');
}
```
##

#### buttonColor
> type: String - Default: #480ca8
###### The color of the button
```
buttonColor='#0F044C'
```
##### Example:
```
<FloatingActionButton
  IconSource='Ionicons'
  iconName='rocket'
  onPress={() => {
    console.log('You pressed the rocket button');
  }}
  style={{
    position: 'absolute',
    bottom: 75,
    right: 50,
  }}
  buttonColor='#0F044C'
/>
```

##

#### buttonColorPressed
> type: String - Default: #6a4c93
###### The color of the button when pressed in

<img width="115" alt="ButtonColor" src="https://github.com/cartagenae/react-native-touchable-action/assets/6395465/f4f4e2eb-3f23-43f2-9370-ab29ddf24c89"> | <img width="115" alt="ButtonColorPressed" src="https://github.com/cartagenae/react-native-touchable-action/assets/6395465/461722b4-a1f1-4447-8ef6-195e0787967e">
:------------------:|:------------------:
 ButtonColor        | ButtonColorPressed

```
buttonColorPressed='#693C72'
```

##### Example:
```
<FloatingActionButton
  IconSource='Ionicons'
  iconName='rocket'
  onPress={() => {
    console.log('You pressed the rocket button');
  }}
  style={{
    position: 'absolute',
    bottom: 75,
    right: 50,
  }}
  buttonColor='#0F044C'
  buttonColorPressed='#693C72'
/>
```

##

#### buttonSize
> type: Object({Number}) - Default: 65
###### The size of the button

<img width="105" alt="Size75" src="https://github.com/cartagenae/react-native-touchable-action/assets/6395465/a6cd92cd-4e84-4eca-9c66-16b001b08555"> | <img width="125" alt="Size55" src="https://github.com/cartagenae/react-native-touchable-action/assets/6395465/f3e8a40b-6181-46dd-89ba-4eb49aa080e3">
:--------------:|:--------------:
 Button Size 75 | Button Size 55

```
buttonSize={75}
```

##### Example
```
<FloatingActionButton
  IconSource='Ionicons'
  iconName='rocket'
  onPress={() => {
    console.log('You pressed the rocket button');
  }}
  style={{
    position: 'absolute',
    bottom: 75,
    right: 50,
  }}
  buttonColor='#0F044C'
  buttonColorPressed='#693C72'
  buttonSize={75}
/>
```

##

#### iconSize
> type: Object({Number}) - Default: 40
###### The size of the icon inside the button.
###### This only changes the size of the icon inside the button, not the size of the button itself

<img width="105" alt="Icon50" src="https://github.com/cartagenae/react-native-touchable-action/assets/6395465/ab76f0b2-039d-4cb6-89a1-cb4b4be367c3"> | <img width="105" alt="Icon35" src="https://github.com/cartagenae/react-native-touchable-action/assets/6395465/63220fcd-b598-4ab1-94f2-5b46f6184d67">
:------------:|:------------:
 Icon Size 50 | Icon Size 35

```
iconSize={35}
```

##### Example
```
<FloatingActionButton
  IconSource='Ionicons'
  iconName='rocket'
  onPress={() => {
    console.log('You pressed the rocket button');
  }}
  style={{
    position: 'absolute',
    bottom: 75,
    right: 50,
  }}
  buttonColor='#0F044C'
  buttonColorPressed='#693C72'
  buttonSize={75}
  iconSize={35}
/>
```

##

#### iconColor
> type: String - Default: #edf6f9
###### The color of the icon inside the button
```
iconColor='#edf6f9'
```

##### Example
```
<FloatingActionButton
  IconSource='Ionicons'
  iconName='rocket'
  onPress={() => {
    console.log('You pressed the rocket button');
  }}
  style={{
    position: 'absolute',
    bottom: 75,
    right: 50,
  }}
  buttonColor='#0F044C'
  buttonColorPressed='#693C72'
  buttonSize={75}
  iconSize={35}
  iconColor='#edf6f9'
/>
```

##

#### iconColorPressed
> type: String - Default: #e2eafc
###### The color of the icon color when the button is pressed

<img width="42" alt="IconColor" src="https://github.com/cartagenae/react-native-touchable-action/assets/6395465/88de584d-85cd-4731-8630-6418a492d7ba"> | <img width="42" alt="IconColorPressed" src="https://github.com/cartagenae/react-native-touchable-action/assets/6395465/62c7c0ed-e8d0-4c98-9abe-6a04f07539e6">
:------------------:|:------------------:
 Icon color         | Icon Color Pressed

```
iconColorPressed='#c9ccd5'
```

##### Example
```
<FloatingActionButton
  IconSource='Ionicons'
  iconName='rocket'
  onPress={() => {
    console.log('You pressed the rocket button');
  }}
  style={{
    position: 'absolute',
    bottom: 75,
    right: 50,
  }}
  buttonColor='#0F044C'
  buttonColorPressed='#693C72'
  buttonSize={75}
  iconSize={35}
  iconColor='#edf6f9'
  iconColorPressed='#c9ccd5'
/>
```

##

#### shaded
> type: Object({Boolean}) - Default: false
###### The shadow underneath the button when not pressed in. Works best in Light Mode

<img width="110" alt="Shaded" src="https://github.com/cartagenae/react-native-touchable-action/assets/6395465/f3800c2b-8304-49e7-83e0-5a3d4584a8f0"> | <img width="110" alt="NotShaded" src="https://github.com/cartagenae/react-native-touchable-action/assets/6395465/e2f2b19d-d34a-48d7-ba14-c0078899ac38">
:----------:|:----------:
 Shaded     | Not Shaded

```
shaded={true}
```

##### Example
```
<FloatingActionButton
  IconSource='Ionicons'
  iconName='rocket'
  onPress={() => {
    console.log('You pressed the rocket button');
  }}
  style={{
    position: 'absolute',
    bottom: 75,
    right: 50,
  }}
  buttonColor='#0F044C'
  buttonColorPressed='#693C72'
  buttonSize={75}
  iconSize={35}
  iconColor='#edf6f9'
  iconColorPressed='#c9ccd5'
  shaded={true}
/>
```

## License

React Native Floating Action Button is under the **MIT License**. See bundled <a href='https://github.com/cartagenae/react-native-touchable-action/blob/main/LICENSE' alt='license file'>**LICENSE**</a> file for details.
