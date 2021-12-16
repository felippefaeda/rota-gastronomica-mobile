import React from 'react';
import {
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface CidadeProps extends RectButtonProps {
    data: {
        nome: string;
    }
}

export const ButtonList = ({ data, ...rest }: CidadeProps) => {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <Text style={styles.text}>
                {data.nome}
            </Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        margin: 6,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 42,
        width:  Dimensions.get('window').width * 0.9,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,


    },
    text: {
        color: colors.red_dark,
        fontFamily: fonts.heading,
        fontSize: 20,
        textTransform: 'uppercase',
    }
})
