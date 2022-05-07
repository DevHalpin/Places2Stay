import * as React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle as RNTextStyleProps,
  ViewStyle as RNViewStyleProps,
} from 'react-native';

type CustomProps = {
  styles?: RNTextStyleProps & RNViewStyleProps;
  variant?: string;
};

type TextProps = CustomProps & RNTextProps;

const Text: React.FC<TextProps> = ({children, styles}) => {
  return <RNText style={styles}>{children}</RNText>;
};

export default Text;
