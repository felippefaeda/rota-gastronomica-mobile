import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacityProps,
    Dimensions,
    View,
    TouchableOpacity
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { LinearGradient } from 'expo-linear-gradient';

interface ButtonPointsProps extends TouchableOpacityProps {
    title: string
}

export function ButtonPoints({ title, ...rest }: ButtonPointsProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.9}
            {...rest}
        >
            <LinearGradient
                colors={['#bc3035', '#b23033', '#923030']}
                style={styles.linearGradient}
            >
                <Text style={styles.title}>
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 200,
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 2,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    title: {
        color: colors.white,
        fontFamily: fonts.heading,
        fontSize: 18,
        textTransform: 'uppercase',
    }
});