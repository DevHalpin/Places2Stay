import React from 'react';
import Text from '../../../../components/base/text/Text';
import {StyleSheet, View, ViewStyle as RNViewStyleProps} from 'react-native';

type SectionHeaderProps = {
  title: string;
  description?: string;
  styles?: RNViewStyleProps;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  styles: style,
}) => {
  return (
    <View style={style}>
      <Text styles={styles.text}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {fontSize: 24, letterSpacing: 1, marginBottom: 8},
});

export default SectionHeader;
