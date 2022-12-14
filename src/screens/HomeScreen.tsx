import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RootStackNavProps} from '../models/rootStackParamList';

interface HomeScreenProps {}

type Props = RootStackNavProps<'HomeScreen'> & HomeScreenProps;

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
