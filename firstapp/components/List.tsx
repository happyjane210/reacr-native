import { View, Text, StyleSheet } from "react-native"

export default function List(
){
    return (
        <View style={styles.container}>
            <Text>This is List Component</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });