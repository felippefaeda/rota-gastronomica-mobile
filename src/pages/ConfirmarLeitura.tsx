import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    Dimensions,
    View,
} from 'react-native';

import logo from '../assets/logo.png';
import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonPoints } from "../components/ButtonPoints";

import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/core';

interface Params {
    qrcode: string;
}

export function ConfirmarLeitura() {

    const navigation = useNavigation();

    const route = useRoute();
    const { qrcode } = route.params as Params;

    const dadosQRCode = qrcode.split(";");

    function getCurrentDate() {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hour = new Date().getHours();
        var minutes = new Date().getMinutes();

        return date + '/' + month + '/' + year + ' - ' + hour + ':' + minutes;
    }

    function handleHistoricoPontos() {

        // Implementar aqui a gravação local dos dados da leitura: cnpj, nome, data, hora, pontuação
        // Usar AsyncStorage para armazenar os dados

        navigation.navigate('HistoricoPontos');
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
                    CONFIRMAÇÃO DE LEITURA
                </Text>
            </LinearGradient>

            <View style={styles.dataRegion}>
                <Text style={styles.textQrCode}>CNPJ: {dadosQRCode[0]}</Text>
                <Text style={styles.textQrCode}>Nome: {dadosQRCode[1]}</Text>
                <Text style={styles.textQrCode}>Data/Hora: {getCurrentDate()}</Text>
            </View>

            <ButtonPoints
                title="CONFIRMAR"
                onPress={handleHistoricoPontos}
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
    dataRegion: {
        height: 200,
        width: '100%',
        borderRadius: 3,
        backgroundColor: colors.white
    },
    textQrCode: {
        fontSize: 22,
        fontFamily: fonts.heading,
        marginHorizontal: 10,
        marginBottom: 10
    }
})