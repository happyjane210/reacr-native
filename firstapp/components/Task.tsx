import { View, Text, StyleSheet } from "react-native"

export default function Task(){
    return (
        <View style={styles.container}>
            <Text>This is Task Component</Text>
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