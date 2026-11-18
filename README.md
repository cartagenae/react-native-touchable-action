# React Native Touchable Action

###### A customizable floating action button for React Native projects using Expo, with JavaScript and TypeScript support.

| iOS | Android |
| :---: | :---: |
| ![iOS demonstration](https://github.com/cartagenae/react-native-touchable-action/assets/6395465/ccb5b029-b5a7-4782-9a68-a05561763bb1) | ![Android demonstration](https://github.com/cartagenae/react-native-touchable-action/assets/6395465/f1198ec9-df99-4e88-9a57-578d7143c040) |

## Features

- JavaScript (`.js`/`.jsx`) and TypeScript (`.ts`/`.tsx`) support from one package
- Bundled TypeScript declarations; no separate `@types` package required
- Type-checked icon names associated with the chosen icon family
- 14 Expo vector icon families
- Customizable button and icon sizes, colors, pressed-state colors, shadow, and position
- React Native `Pressable`-based `onPress` callback

## Installation

```bash
npm install react-native-touchable-action
```

Or:

```bash
yarn add react-native-touchable-action
```

This package is intended for React Native applications using Expo and uses `@expo/vector-icons`. Ensure your application has compatible React and React Native versions.

## JavaScript and TypeScript imports

### JavaScript (JSX)

```jsx
import FloatingActionButton from 'react-native-touchable-action';
```

### TypeScript (TSX)

```tsx
import FloatingActionButton, {
  type FloatingActionButtonProps,
} from 'react-native-touchable-action';
```

You can also use the named component export:

```tsx
import { FloatingActionButton } from 'react-native-touchable-action';
```

The package provides compiled JavaScript through `dist/index.js` and TypeScript declarations through `dist/index.d.ts`. JavaScript users do not need TypeScript installed to use the component.

## Usage

### JavaScript example

```jsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FloatingActionButton from 'react-native-touchable-action';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>React Native Touchable Action</Text>
      <FloatingActionButton
        IconSource="Ionicons"
        iconName="rocket"
        onPress={() => console.log('You pressed the rocket button')}
        style={{ position: 'absolute', bottom: 75, right: 50 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

### TypeScript example

```tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FloatingActionButton, {
  type FloatingActionButtonProps,
} from 'react-native-touchable-action';

export default function App() {
  const handlePress: NonNullable<FloatingActionButtonProps['onPress']> = () => {
    console.log('You pressed the rocket button');
  };

  return (
    <View style={styles.container}>
      <Text>React Native Touchable Action</Text>
      <FloatingActionButton
        IconSource="Ionicons"
        iconName="rocket"
        onPress={handlePress}
        buttonColor="#480ca8"
        buttonColorPressed="#6a4c93"
        buttonSize={65}
        iconColor="#edf6f9"
        iconColorPressed="#e2eafc"
        shaded
        style={{ position: 'absolute', bottom: 75, right: 50 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

In TypeScript, `iconName` is checked against the selected `IconSource` icon family. For example, `IconSource="Ionicons"` expects a valid Ionicons name.

## Icon reference

Find icon names at the [Expo Vector Icons directory](https://icons.expo.fyi/).

![Expo icons reference](https://user-images.githubusercontent.com/6395465/138818042-1aad09f6-53a0-4975-987a-073ca4f7039d.png)

### Supported icon families

| `IconSource` | `IconSource` |
| :--- | :--- |
| `AntDesign` | `MaterialCommunityIcons` |
| `Entypo` | `MaterialIcons` |
| `EvilIcons` | `Octicons` |
| `Feather` | `SimpleLineIcons` |
| `FontAwesome` | `Zocial` |
| `FontAwesome5` | `Ionicons` |
| `Fontisto` | `Foundation` |

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :---: | :--- | :--- |
| `IconSource` | One of the 14 icon families above | Yes | — | Selects the icon family |
| `iconName` | Icon name valid for the selected family | Yes | — | Icon to display |
| `onPress` | `PressableProps['onPress']` | No | — | Callback when the button is pressed |
| `buttonColor` | `string` | No | `#480ca8` | Button background color |
| `buttonColorPressed` | `string` | No | `#6a4c93` | Button background color while pressed |
| `buttonSize` | `number` | No | `65` | Circular button width and height |
| `iconSize` | `number` | No | Calculated | Icon size, independent of button size |
| `iconColor` | `string` | No | `#edf6f9` | Icon color |
| `iconColorPressed` | `string` | No | `#e2eafc` | Icon color while pressed |
| `shaded` | `boolean` | No | `false` | Adds a shadow while not pressed |
| `style` | `StyleProp<ViewStyle>` | No | — | Additional React Native view styling |

**Default icon size:** When `iconSize` is omitted, it is calculated as `Math.round(buttonSize * 0.45)`. With the default `buttonSize={65}`, the icon size is `29`.

## Customization

### Icon source and name

```tsx
<FloatingActionButton IconSource="Ionicons" iconName="rocket" />
```

### Press handler

```tsx
<FloatingActionButton
  IconSource="Ionicons"
  iconName="rocket"
  onPress={() => console.log('Button pressed')}
/>
```

### Button colors

```tsx
buttonColor="#0F044C"
buttonColorPressed="#693C72"
```

| Button Color | Button Color Pressed |
| :---: | :---: |
| ![Button color](https://github.com/cartagenae/react-native-touchable-action/assets/6395465/f4f4e2eb-3f23-43f2-9370-ab29ddf24c89) | ![Pressed button color](https://github.com/cartagenae/react-native-touchable-action/assets/6395465/461722b4-a1f1-4447-8ef6-195e0787967e) |

### Button size

```tsx
buttonSize={75}
```

| Button Size 75 | Button Size 55 |
| :---: | :---: |
| ![Button size 75](https://github.com/cartagenae/react-native-touchable-action/assets/6395465/a6cd92cd-4e84-4eca-9c66-16b001b08555) | ![Button size 55](https://github.com/cartagenae/react-native-touchable-action/assets/6395465/f3e8a40b-6181-46dd-89ba-4eb49aa080e3) |

### Icon size

`iconSize` changes the glyph size without changing the button's dimensions.

```tsx
iconSize={35}
```

| Icon Size 50 | Icon Size 35 |
| :---: | :---: |
| ![Icon size 50](https://github.com/cartagenae/react-native-touchable-action/assets/6395465/ab76f0b2-039d-4cb6-89a1-cb4b4be367c3) | ![Icon size 35](https://github.com/cartagenae/react-native-touchable-action/assets/6395465/63220fcd-b598-4ab1-94f2-5b46f6184d67) |

### Icon colors

```tsx
iconColor="#edf6f9"
iconColorPressed="#c9ccd5"
```

| Icon Color | Icon Color Pressed |
| :---: | :---: |
| ![Icon color](https://github.com/cartagenae/react-native-touchable-action/assets/6395465/88de584d-85cd-4731-8630-6418a492d7ba) | ![Pressed icon color](https://github.com/cartagenae/react-native-touchable-action/assets/6395465/62c7c0ed-e8d0-4c98-9abe-6a04f07539e6) |

### Shadow

Enable the button's shadow with `shaded={true}`. The shadow is removed while pressed. The effect is most noticeable on light backgrounds.

```tsx
shaded={true}
```

| Shaded | Not Shaded |
| :---: | :---: |
| ![Shaded button](https://github.com/cartagenae/react-native-touchable-action/assets/6395465/f3800c2b-8304-49e7-83e0-5a3d4584a8f0) | ![Unshaded button](https://github.com/cartagenae/react-native-touchable-action/assets/6395465/e2f2b19d-d34a-48d7-ba14-c0078899ac38) |

### Position and styling

Pass a React Native view style using `style`:

```tsx
style={{ position: 'absolute', bottom: 75, right: 50 }}
```

### Complete customization example

```tsx
import FloatingActionButton from 'react-native-touchable-action';

<FloatingActionButton
  IconSource="Ionicons"
  iconName="rocket"
  onPress={() => console.log('You pressed the rocket button')}
  style={{ position: 'absolute', bottom: 75, right: 50 }}
  buttonColor="#0F044C"
  buttonColorPressed="#693C72"
  buttonSize={75}
  iconSize={35}
  iconColor="#edf6f9"
  iconColorPressed="#c9ccd5"
  shaded={true}
/>
```

## TypeScript definitions

The npm package includes compiled JavaScript and generated TypeScript declaration files:

```json
{
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts"
}
```

The component is available as both a default and named export, and `FloatingActionButtonProps` is exported as a TypeScript type.

## License

Licensed under the **MIT License**. See the [LICENSE](https://github.com/cartagenae/react-native-touchable-action/blob/main/LICENSE) file.
