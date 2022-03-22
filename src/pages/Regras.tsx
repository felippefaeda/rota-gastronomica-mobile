import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import logo from '../assets/logo.png';

import fonts from '../styles/fonts';
import colors from '../styles/colors';
import { ScrollView } from 'react-native-gesture-handler';

export function Regras() {
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
                    REGRAS
                </Text>

            </LinearGradient>

            <ScrollView style={styles.scroll}>

                <Text style={styles.text}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque voluptatum quis ipsa modi ad doloribus, nihil quasi asperiores? Distinctio dicta dolores corporis laboriosam cupiditate nihil adipisci debitis facilis iste unde.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero eveniet vel cum corrupti harum. Eum accusantium eveniet perferendis aliquam, officiis asperiores quas fuga minima fugit veniam praesentium laudantium consectetur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio velit tempore expedita consequatur sequi adipisci iste vero et, fugiat fugit beatae nostrum autem praesentium voluptates laboriosam eos, deserunt nulla laudantium.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque voluptatum quis ipsa modi ad doloribus, nihil quasi asperiores? Distinctio dicta dolores corporis laboriosam cupiditate nihil adipisci debitis facilis iste unde.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero eveniet vel cum corrupti harum. Eum accusantium eveniet perferendis aliquam, officiis asperiores quas fuga minima fugit veniam praesentium laudantium consectetur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio velit tempore expedita consequatur sequi adipisci iste vero et, fugiat fugit beatae nostrum autem praesentium voluptates laboriosam eos, deserunt nulla laudantium.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque voluptatum quis ipsa modi ad doloribus, nihil quasi asperiores? Distinctio dicta dolores corporis laboriosam cupiditate nihil adipisci debitis facilis iste unde.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero eveniet vel cum corrupti harum. Eum accusantium eveniet perferendis aliquam, officiis asperiores quas fuga minima fugit veniam praesentium laudantium consectetur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio velit tempore expedita consequatur sequi adipisci iste vero et, fugiat fugit beatae nostrum autem praesentium voluptates laboriosam eos, deserunt nulla laudantium.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque voluptatum quis ipsa modi ad doloribus, nihil quasi asperiores? Distinctio dicta dolores corporis laboriosam cupiditate nihil adipisci debitis facilis iste unde.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero eveniet vel cum corrupti harum. Eum accusantium eveniet perferendis aliquam, officiis asperiores quas fuga minima fugit veniam praesentium laudantium consectetur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio velit tempore expedita consequatur sequi adipisci iste vero et, fugiat fugit beatae nostrum autem praesentium voluptates laboriosam eos, deserunt nulla laudantium.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque voluptatum quis ipsa modi ad doloribus, nihil quasi asperiores? Distinctio dicta dolores corporis laboriosam cupiditate nihil adipisci debitis facilis iste unde.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero eveniet vel cum corrupti harum. Eum accusantium eveniet perferendis aliquam, officiis asperiores quas fuga minima fugit veniam praesentium laudantium consectetur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio velit tempore expedita consequatur sequi adipisci iste vero et, fugiat fugit beatae nostrum autem praesentium voluptates laboriosam eos, deserunt nulla laudantium.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque voluptatum quis ipsa modi ad doloribus, nihil quasi asperiores? Distinctio dicta dolores corporis laboriosam cupiditate nihil adipisci debitis facilis iste unde.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero eveniet vel cum corrupti harum. Eum accusantium eveniet perferendis aliquam, officiis asperiores quas fuga minima fugit veniam praesentium laudantium consectetur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio velit tempore expedita consequatur sequi adipisci iste vero et, fugiat fugit beatae nostrum autem praesentium voluptates laboriosam eos, deserunt nulla laudantium.

                </Text>
            </ScrollView>
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
    scroll: {
        flex: 1,
    },
    text: {
        fontSize: 14,
        fontFamily: fonts.text,
        color: colors.red_font,
        textAlign: 'center',
        fontWeight: '600',
        lineHeight: 18,
        paddingHorizontal: 20,
        marginVertical: 10
    }
})