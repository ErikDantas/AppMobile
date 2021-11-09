import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function ReservarMesa() {

    return(
        <>
      <SafeAreaView>
        <View style={ estilos.container }>
            <Text>Gerenciar</Text>

        </View>
        </SafeAreaView>
        </>
    )

}




const estilos = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#ffffff",
        padding: 20,
        margin: 10,
    },

});
