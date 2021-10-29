import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function PaginaInicial(){
    return(
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