import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';


export function PaginaInicial(){
    
    const navegation = useNavigation();
    function moverOn() {
        
        navegation.navigate('LugaresCredenciadosPorCidade');
        
    }
    
    return(

        moverOn(),
        <SafeAreaView style={styles.container} >
            <Text> Página Inicial </Text>
            
        </SafeAreaView>
        
        
        
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

