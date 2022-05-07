import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  ViewStyle as RNViewStyleProps,
} from 'react-native';
import Text from '../../../../components/base/text';

type PlaceCtaProps = {
  image?: number;
  title: string;
  location?: string;
  imageLabel?: string;
  styles?: RNViewStyleProps;
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 200,
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    marginBottom: 4,
  },
  location: {
    fontSize: 16,
    color: 'darkgrey',
  },
  imageOverlayText: {
    position: 'absolute',
    zIndex: 1,
    right: -0.2,
    top: -0.2,
    backgroundColor: 'orange',
    padding: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

const PlaceCta: React.FC<PlaceCtaProps> = ({
  styles: style,
  image,
  title,
  location,
  imageLabel,
}) => (
  <View style={[styles.container, style]} testID="placeCta">
    <View style={styles.imageOverlayText}>
      <Text>{imageLabel}</Text>
    </View>
    <Image source={image} style={styles.image} />
    <Text styles={styles.title}>{title}</Text>
    <Text styles={styles.location}>{location}</Text>
  </View>
);

export default PlaceCta;
