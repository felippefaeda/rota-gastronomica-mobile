/* Não achei os mesmos ícones do protótipo ainda, coloquei dois de diferentes modelos pra ver
como eles vão ficar na página. E as imagens e os códigos das cores que usei são fictícios.
*/

import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../components/Button';
import { FontAwesome } from '@expo/vector-icons';
import { Linking, ToastAndroid } from 'react-native';

import logo from '../assets/logo.png';
import imagemPrincipal from '../assets/imagemPrincipal.png';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

export function PaginaInicial() {

    const openUrl = async (url: string) => {
        if (await Linking.canOpenURL(url)) {
            await Linking.openURL(url)
        }
        else {
            ToastAndroid.show('Não foi possível realizar o redirecionamento', ToastAndroid.SHORT)
        }
    }

    return (
        <SafeAreaView style={styles.container} >

            <Image
                source={logo}
                style={styles.logo}
            />

            <Image
                source={imagemPrincipal}
                style={styles.image}
            />

            <LinearGradient
                colors={['#bc3035', '#b23033', '#923030']}
                style={styles.linearGradient}>

                <View style={styles.content}>
                    <Text style={styles.text}>
                        A experiência da{'\n'}
                        Rota Gastronômica Montanhas e Fé{'\n'}
                        permite a interação e participação{'\n'}
                        com os produtores locais. Uma experiência {'\n'}
                        completa e histórica sobre a gastronomia{'\n'}
                        do interior de Minas Gerais.
                    </Text>

                    <Button
                        title="CIDADES PARTICIPANTES"
                    />

                    <Button
                        title="HISTÓRICO DE PONTOS"
                    />

                    <View style={styles.icons}>
                        <FontAwesome
                            name="facebook"
                            onPress={() => openUrl('https://m.facebook.com/MontanhaseFe/?__tn__=%2Cg')}
                            style={styles.buttonIcon}
                        />
                        <FontAwesome
                            name="instagram"
                            onPress={() => openUrl('https://instagram.com/circuitoturisticomontanhasefe?utm_medium=copy_link')}
                            style={styles.buttonIcon}
                        />
                    </View>

                </View>

            </LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: Dimensions.get('window').width * 0.45,
        width: '90%',
        marginBottom: 15
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width * 0.48,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    linearGradient: {
        flex: 1,
        width: '100%'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: fonts.text,
        color: colors.white,
        lineHeight: 23,
        marginBottom: 10
    },
    icons: {
        flex: 1,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonIcon: {
        fontSize: 20,
        color: colors.white,
        paddingHorizontal: 10
    }
});