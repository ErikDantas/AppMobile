import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function  Cardapio () {

    const state = {
        itens: []
    }
  
   function getItens(){
    var url = window.servidor + '/item/'
    fetch(url)
        .then(response => response.json())
        .then((data) =>{
            state.itens = data;
            console.log("DATA: ",state.itens);
        })
   }

   useEffect(() => {
        getItens();
    
    }, []);
 

    return(
        <>
            <SafeAreaView>
                <View style={ estilos.container }>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Item</DataTable.Title>
                            <DataTable.Title numeric>Valor</DataTable.Title>
                            <DataTable.Title numeric>Ação</DataTable.Title>
                        </DataTable.Header>
                        {state.itens.map(item =>{
                            <DataTable.Row>
                                <DataTable.Cell>{item.nome}</DataTable.Cell>
                                <DataTable.Cell>{item.valor}</DataTable.Cell>
                                <DataTable.Cell>{item.tempoPreparo}</DataTable.Cell>
                            </DataTable.Row>
                        })}
                        

                        <DataTable.Row>
                            <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                            <DataTable.Cell numeric>237</DataTable.Cell>
                            <DataTable.Cell numeric>8.0</DataTable.Cell>
                        </DataTable.Row>

                        
                    </DataTable>

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
