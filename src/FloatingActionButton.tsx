import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons';
import { useState, type ComponentProps, type ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  type PressableProps,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

const iconSets = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} as const;

type IconSource = keyof typeof iconSets;

type IconName<Source extends IconSource> = ComponentProps<(typeof iconSets)[Source]>['name'];

export type FloatingActionButtonProps = {
  [Source in IconSource]: {
    IconSource: Source;
    iconName: IconName<Source>;
    buttonColor?: string;
    buttonColorPressed?: string;
    buttonSize?: number;
    iconSize?: number;
    iconColor?: string;
    iconColorPressed?: string;
    onPress?: PressableProps['onPress'];
    shaded?: boolean;
    style?: StyleProp<ViewStyle>;
  };
}[IconSource];

const DEFAULT_ICON_COLOR = '#edf6f9';
const DEFAULT_ICON_COLOR_PRESSED = '#e2eafc';
const DEFAULT_BUTTON_COLOR = '#480ca8';
const DEFAULT_BUTTON_COLOR_PRESSED = '#6a4c93';
const DEFAULT_BUTTON_SIZE = 65;
// Icon fonts draw taller than `size`. Keep the glyph well inside the circle.
const DEFAULT_ICON_SCALE = 0.45;

export default function FloatingActionButton(props: FloatingActionButtonProps) {
  const {
    buttonColor,
    buttonColorPressed,
    buttonSize,
    iconSize,
    iconColor,
    iconColorPressed,
    onPress,
    shaded,
    style,
  } = props;
  const [pressedIn, setPressedIn] = useState(false);

  const color = pressedIn
    ? iconColorPressed
      ? iconColorPressed
      : DEFAULT_ICON_COLOR_PRESSED
    : iconColor
      ? iconColor
      : DEFAULT_ICON_COLOR;
  const resolvedButtonSize = buttonSize ? buttonSize : DEFAULT_BUTTON_SIZE;
  const size = iconSize ? iconSize : Math.round(resolvedButtonSize * DEFAULT_ICON_SCALE);

  return (
    <Pressable
      style={[
        style,
        styles.container,
        pressedIn
          ? {
              backgroundColor: buttonColorPressed ? buttonColorPressed : DEFAULT_BUTTON_COLOR_PRESSED,
              shadowOpacity: 0,
              elevation: 0,
            }
          : {
              backgroundColor: buttonColor ? buttonColor : DEFAULT_BUTTON_COLOR,
              shadowOpacity: shaded === true ? 0.35 : 0,
              elevation: shaded === true ? 20 : 0,
            },
            {
              height: resolvedButtonSize,
              width: resolvedButtonSize,
              borderRadius: resolvedButtonSize / 2,
            },
      ]}
      onPressIn={() => setPressedIn(true)}
      onPressOut={() => setPressedIn(false)}
      onPress={onPress}
    >
      {renderIcon(props, color, size)}
    </Pressable>
  );
}

function renderIcon(props: FloatingActionButtonProps, color: string, size: number): ReactNode {
  const glyphStyle: TextStyle = {
    lineHeight: size,
    textAlign: 'center',
    includeFontPadding: false,
  };

  switch (props.IconSource) {
    case 'AntDesign':
      return <AntDesign name={props.iconName} color={color} size={size} style={glyphStyle} />;
    case 'Entypo':
      return <Entypo name={props.iconName} color={color} size={size} style={glyphStyle} />;
    case 'EvilIcons':
      return <EvilIcons name={props.iconName} color={color} size={size} style={glyphStyle} />;
    case 'Feather':
      return <Feather name={props.iconName} color={color} size={size} style={glyphStyle} />;
    case 'FontAwesome':
      return <FontAwesome name={props.iconName} color={color} size={size} style={glyphStyle} />;
    case 'FontAwesome5':
      return <FontAwesome5 name={props.iconName} color={color} size={size} style={glyphStyle} />;
    case 'Fontisto':
      return <Fontisto name={props.iconName} color={color} size={size} style={glyphStyle} />;
    case 'Foundation':
      return <Foundation name={props.iconName} color={color} size={size} style={glyphStyle} />;
    case 'Ionicons':
      return <Ionicons name={props.iconName} color={color} size={size} style={glyphStyle} />;
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons name={props.iconName} color={color} size={size} style={glyphStyle} />
      );
    case 'MaterialIcons':
      return <MaterialIcons name={props.iconName} color={color} size={size} style={glyphStyle} />;
    case 'Octicons':
      return <Octicons name={props.iconName} color={color} size={size} style={glyphStyle} />;
    case 'SimpleLineIcons':
      return <SimpleLineIcons name={props.iconName} color={color} size={size} style={glyphStyle} />;
    case 'Zocial':
      return <Zocial name={props.iconName} color={color} size={size} style={glyphStyle} />;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    shadowColor: 'black',
    shadowOffset: {
      height: 10,
      width: 5,
    },
    shadowRadius: 10,
    opacity: 1,
  },
});
