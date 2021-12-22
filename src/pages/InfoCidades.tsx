import React, { useEffect, useState } from "react";

import {
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    FlatList,
    ScrollView
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { SvgFromUri } from "react-native-svg";
import { useRoute } from '@react-navigation/core';

import logo from '../assets/logo.png';
import fonts from '../styles/fonts';
import colors from '../styles/colors';
import { LugarCredenciadoCard } from '../components/LugarCredenciadoCard';

import Imagem1 from '../assets/imagem1.png';

import api from "../services/api";
import config from '../../config';
import jsonLugares from '../services/server.json';

interface Params {
    cidade: {
        id: string;
        nome: string;
    }
}

interface LugaresCredenciadosProps {
    id: string;
    nome: string;
    image: string;
    icon: string;
    endereco: string;
    horario_funcionamento: string;
    cidade: string[];
}

export function InfoCidades() {

    const [lugares, setLugares] = useState<LugaresCredenciadosProps[]>([]);

    useEffect(() => {
        async function fetchLugares() {
            if (config.SEARCH_TYPE == 'API') {
                const { data } = await api.get('lugares_credenciados?_sort=name&_order=asc');
                setLugares(data);
            } else {
                setLugares(jsonLugares.lugares_credenciados);
            }
        }

        fetchLugares();
    }, [])

    const route = useRoute();
    const { cidade } = route.params as Params;

    return (

        <ScrollView style={styles.scrollView}>

            <View style={styles.container}>

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
                    <Text style={styles.nomeCidade}>
                        {cidade.nome}
                    </Text>

                </LinearGradient>
                <Image
                    source={Imagem1}
                    style={styles.imagemCidade}
                />
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, cumque. Ex dolorem est at neque eos a accusamus quia fugit. Necessitatibus nemo ea, earum perspiciatis molestias quam porro eveniet consectetur?
                </Text>

                <View style={styles.flatList}>
                    <FlatList
                        data={lugares}
                        renderItem={({ item }) => (
                            <LugarCredenciadoCard data={item}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: colors.background,
    },
    container: {
        flex: 1,
        marginHorizontal: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: Dimensions.get('window').width * 0.45,
        width: '90%',
        marginTop: 40,
        marginBottom: 15
    },
    linearGradient: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    nomeCidade: {
        fontSize: 30,
        color: colors.white,
        fontFamily: fonts.heading,
        marginBottom: 5,
        textTransform: 'uppercase'
    },
    imagemCidade: {
        height: 160,
        width: '100%',
        marginVertical: 6,
        borderRadius: 5
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
    },
    flatList: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
})