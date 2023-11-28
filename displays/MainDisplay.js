import { StyleSheet, Text, View } from 'react-native';

export default function MainDisplay() {
  return (
    <View style={styles.container}>
        <Text>MainDisplay</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 2
  },
});