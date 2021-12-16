/* Não achei os mesmos ícones do protótipo ainda, coloquei dois de diferentes modelos pra ver
como eles vão ficar na página. E as imagens e os códigos das cores que usei são fictícios.
*/

import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    Linking,
    ToastAndroid
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../components/Button';
import { FontAwesome } from '@expo/vector-icons';

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
                resizeMode='contain'
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
                        A experiência da Rota Gastronômica {'\n'}
                        Montanhas e Fé permite a interação{'\n'}
                        e participação com os produtores locais.{'\n'}
                        Uma experiência completa e histórica sobre {'\n'}
                        a gastronomia do interior de Minas Gerais.                       
                    </Text>

                    <View style={styles.buttons}>
                        <Button title="CIDADES PARTICIPANTES" />
                        <Button title="HISTÓRICO DE PONTOS" />
                    </View>                    

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
        flex: 1,
        height: Dimensions.get('window').width * 0.40,
        width: '90%',
        marginBottom: 15
    },
    image: {
        flex: 1,
        width: '100%',
        height: Dimensions.get('window').width * 0.40,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    linearGradient: {
        flex: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: fonts.text,
        color: colors.white,
        lineHeight: 23,
        marginVertical: 5
    },
    buttons: {
        flex: 1
    },
    icons: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonIcon: {
        fontSize: 20,
        color: colors.white,
        padding: 15
    }
});