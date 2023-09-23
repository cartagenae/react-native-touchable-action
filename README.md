# React Native Floating Action Button

###### A simple floating action button component for any React Native project using Expo

## Installation

```
npm install --save react-native-touchable-action
```
or
```
yarn add --save react-native-touchable-action
```

---

## Reference

> For a list of IconSources and iconNames, please refer to https://icons.expo.fyi

<img width="1791" alt="expo icons reference" src="https://user-images.githubusercontent.com/6395465/138818042-1aad09f6-53a0-4975-987a-073ca4f7039d.png">

##

#### Basic Usage
```
import FloatingActionButton from 'react-native-touchable-action';
```

> To position your floating action, use the React Native style prop
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
<br />
<br />
<p>&emsp;<img width="115" alt="Button Color" src="https://user-images.githubusercontent.com/6395465/139001982-17a326a7-1438-410a-ab01-9e084181db7a.png">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<img width="115" alt="Button Color Pressed" src="https://user-images.githubusercontent.com/6395465/139001988-7f9de534-637e-41f2-ad42-d1aa07f2f1fe.png"></p>
<p>&emsp;&emsp;Button Color&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Button Color Pressed</p>
<br />

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
<br />
<br />
<p>&emsp;&ensp;<img width="105" alt="Button Size 75" src="https://user-images.githubusercontent.com/6395465/139000330-ce9189d8-2023-413a-aa13-5c6f22f363c0.png">&emsp;&emsp;&emsp;&emsp;&emsp;<img width="125" alt="Button Size 55" src="https://user-images.githubusercontent.com/6395465/139000318-120dcbf4-e794-4747-9570-ee763b9e3547.png"></p>
<p>&emsp;&ensp;Button Size 75&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Button Size 55</p>
<br />

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
###### This only changes the size of the icon inside the button, not the size of the button itself<br />
<br />
<p>&emsp;<img width="105" alt="Icon Size 50" src="https://user-images.githubusercontent.com/6395465/138997150-99aa6f00-a7af-46c9-9b68-484332bb9cd1.png">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;<img width="105" alt="Icon Size 35" src="https://user-images.githubusercontent.com/6395465/138997158-f36dfa88-d5d8-48b0-b8e6-c81f654e0354.png"></p>
<p>&emsp;&ensp;Icon Size 50&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Icon Size 35</p>
<br />

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
<br />
<br />
<p>&emsp;&emsp;&emsp;&ensp;<img width="42" alt="Icon Color" src="https://user-images.githubusercontent.com/6395465/138996043-ace2d03e-7424-4e72-b57f-ec28768f8ab9.png">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;<img width="42" alt="Icon Color Pressed" src="https://user-images.githubusercontent.com/6395465/138996049-3d820c1a-6eaf-4492-aff0-24c10125bfc8.png"></p>
<p>&emsp;&emsp;&ensp;Icon Color&emsp;&emsp;&emsp;&emsp;&ensp;Icon Color Pressed</p>
<br />

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
<br />
<br />
<p><img width="110" alt="Shaded" src="https://user-images.githubusercontent.com/6395465/138994543-6ca5a2d5-b6c2-495b-8f1a-cddf4c99ee81.png">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<img width="110" alt="Not Shaded" src="https://user-images.githubusercontent.com/6395465/138994576-907d004b-04e4-4d94-a8d1-614e02dce40d.png"></p>
<p>&emsp;&ensp;Shaded&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Not Shaded</p>
<br />

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

React Native Floating Action Button is under the **MIT License**. See bundled <a href='https://github.com/cartagenae/react-native-floating-action-button/blob/main/LICENSE' alt='license file'>**LICENSE**</a> file for details.
