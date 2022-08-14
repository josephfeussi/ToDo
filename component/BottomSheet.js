import React, {useRef, useState} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const BottomSheet = ({refRBSheet}) => {
  //const refRBSheet = useRef();

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={false}
      height={400}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        draggableIcon: {
          backgroundColor: '#000',
        },
      }}>
      <Text>here is my text </Text>
    </RBSheet>
  );
};

export default BottomSheet;
