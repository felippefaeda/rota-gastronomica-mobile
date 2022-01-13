import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import icon from '../assets/icon.png';
import lugarImagem from '../assets/lugar.png';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

interface LugaresCredenciadosProps extends RectButtonProps {
    data: {
        id: string;
        nome: string;
        image: string;
        icon: string;
        endereco: string;
        horario_funcionamento: string;
        cidade: string[];
    }
}

export const LugarCredenciadoCard = ({ data, ...rest }: LugaresCredenciadosProps) => {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <Image
                source={lugarImagem}
                style={styles.imagemLugar}
            />

            <View style={styles.infoLugar}>
                <Image
                    source={icon}
                    style={styles.icon}
                />

                <View style={styles.infoLugarText}>
                    <Text style={styles.infoLugarNome}>
                        {data.nome}
                    </Text>

                    <Text style={styles.infoLugarEndereco}>
                        {data.endereco}
                    </Text>

                    <Text style={styles.infoLugarHorario}>
                        {data.horario_funcionamento}
                    </Text>
                </View>
            </View>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        flex: 1,
        width: '100%',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    imagemLugar: {
        height: 140,
        width: '95%',
        borderRadius: 20,
    },
    icon: {
        height: 25,
        width: 25,
        margin: 10,
    },
    infoLugar: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        maxWidth: '100%'
    },
    infoLugarText: {
        alignItems: 'center',
        marginHorizontal: 5
    },
    infoLugarNome: {
        fontSize: 20,
        fontFamily: fonts.heading,
        color: colors.red_font,
        textTransform: 'uppercase',
    },
    infoLugarEndereco: {
        fontSize: 12,
        fontFamily: fonts.text,
        color: colors.red_font,
        textTransform: 'uppercase',
    },
    infoLugarHorario: {
        fontSize: 10,
        fontFamily: fonts.text,
        color: colors.red_font,
    }
})