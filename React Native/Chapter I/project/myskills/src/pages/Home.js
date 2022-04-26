import React from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform,
    TouchableOpacity
} from 'react-native';

export function Home(){
  return(
    <>
       <View style={styles.container}>
        <Text style={styles.title}>
            Bem vindo, Yan
        </Text>
        <TextInput
            style={styles.input}
            placeholder="New skill"
            placeholderTextColor="#555"
        
        />

        <TouchableOpacity 
            style={styles.button}
            activeOpacity={.7}
        >
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <Text style={[styles.title, { marginTop: 20 }]}>
            My Skills
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70.

    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    }
});