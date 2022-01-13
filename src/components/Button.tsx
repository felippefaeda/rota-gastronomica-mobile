import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps,
    View
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title: string
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            <Text style={styles.title}>
                {title}
            </Text>

            <Text style={styles.subtitle}>
                CLIQUE AQUI
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.brown,
        height: 50,
        width: 200,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2
    },
    title: {
        fontSize: 11,
        color: colors.white,
        fontFamily: fonts.text,
        lineHeight: 12,
        marginTop: 5
    },
    subtitle: {
        fontSize: 20,
        color: colors.white,
        fontFamily: fonts.heading,
        lineHeight: 20
    }
});