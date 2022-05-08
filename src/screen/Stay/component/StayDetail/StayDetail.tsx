import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../../../../components/base/text';

type item = {
  itemLabel: string;
  itemDetail: string;
};

type StayDetailProps = {
  sectionTitle: string;
  items?: item[];
};

const StayDetail: React.FC<StayDetailProps> = ({sectionTitle, items}) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text styles={styles.sectionTitle}>{sectionTitle}</Text>
      </View>

      <View style={styles.actionIconContainer}>
        <Text styles={styles.actionIcon}>... </Text>
      </View>
      <View style={styles.itemContainer}>
        {items?.map(item => (
          <View style={styles.item}>
            <Text>{item.itemLabel}</Text>
            <Text>{item.itemDetail}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
    padding: 16,
    marginBottom: 16,
  },
  title: {
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
    fontSize: 12,
  },
  itemContainer: {marginLeft: 16, marginTop: 32},
  sectionTitle: {fontSize: 16, color: 'white', padding: 8},
  actionIconContainer: {
    borderTopRightRadius: 8,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  actionIcon: {fontSize: 16, color: 'navy', padding: 8},
});

export default StayDetail;
