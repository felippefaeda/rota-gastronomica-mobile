import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    Dimensions,
} from 'react-native';

import logo from '../assets/logo.png';
import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonPoints } from "../components/ButtonPoints";
import { PointsCard } from '../components/PointsCard';

import { useNavigation } from '@react-navigation/core';

export function HistoricoPontos() {

    const navigation = useNavigation();

    function handleLerQRCode() {
        navigation.navigate('LerQRCode');
    }
    function handleRegras() {
        navigation.navigate('Regras');
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={logo}
                style={styles.logo}
                resizeMode='contain'
            />

            <LinearGradient
                colors={['#bc3035', '#b23033', '#923030']}
                style={styles.linearGradient}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={styles.title}>
                    HISTÓRICO DE PONTOS
                </Text>

            </LinearGradient>

            <PointsCard
                title="HMMM"
            />

            <ButtonPoints
                title="LER QRCODE"
                onPress={handleLerQRCode}
            />
            <ButtonPoints
                title="RESGATAR BRINDE" 
            />
            <ButtonPoints
                title="REGRAS" 
                onPress={handleRegras} 
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        height: Dimensions.get('window').width * 0.45,
        width: '90%',
        marginBottom: 10
    },
    linearGradient: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    title: {
        fontSize: 25,
        color: colors.white,
        fontFamily: fonts.heading,
        marginBottom: 5,
        textTransform: 'uppercase'
    },
})