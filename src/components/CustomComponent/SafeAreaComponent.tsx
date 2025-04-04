import React from 'react';
import {SafeAreaView, StyleSheet, ViewStyle} from 'react-native';

interface SafeAreaComponentProps {
  children: React.ReactNode;
  style?: ViewStyle;
  edges?: ('top' | 'bottom')[]; // optional edge config
}

const SafeAreaComponent: React.FC<SafeAreaComponentProps> = ({
  children,
  style,
}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SafeAreaComponent;
