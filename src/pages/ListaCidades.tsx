import React, { useEffect, useState } from "react";

import {
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    FlatList
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import logo from '../assets/logo.png';
import imagemUm from '../assets/imagem1.png'
import imagemDois from '../assets/imagem2.png'
import imagemTres from '../assets/imagem3.png'

import fonts from '../styles/fonts';
import colors from '../styles/colors';
import api from "../services/api";
import config from '../../config';
import jsonCidade from '../services/server.json';

import { ButtonList } from "../components/ButtonList";

interface CidadesProps {
    id: string;
    nome: string;
}

export function ListaCidades() {

    const [cidades, setCidades] = useState<CidadesProps[]>([]);    

    useEffect(() => {
        async function fetchCidades() {   
            if (config.SEARCH_TYPE == 'API'){
                const { data } = await api.get('cidades?_sort=name&_order=asc');
                setCidades(data);
            } else {
                setCidades(jsonCidade.cidades);
            }
        }

        fetchCidades();        
    }, [])

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.background}>

                <Image
                    source={logo}
                    style={styles.logo}
                />
                <LinearGradient
                    colors={['#bc3035', '#b23033', '#923030']}
                    style={styles.linearGradient}>
                </LinearGradient>
            </View>

            <View style={styles.imagensHorizontal}>
                <Image
                    source={imagemUm}
                    style={styles.image}
                />
                <Image
                    source={imagemDois}
                    style={styles.image}
                />
                <Image
                    source={imagemTres}
                    style={styles.image}
                />
            </View>

            <Text style={styles.title}>
                CIDADES
            </Text>

            <View style={styles.list}>
                <FlatList
                    data={cidades}
                    renderItem={({ item }) => (
                        <ButtonList data={item}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    background: {
        position: 'absolute',
        top: 40,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: Dimensions.get('window').width * 0.45,
        width: '90%',
        marginBottom: 15
    },
    linearGradient: {
        flex: 1,
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: 50
    },
    imagensHorizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.8,
        marginTop: Dimensions.get('window').height * 0.265,
        marginBottom: 8
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginHorizontal: 5
    },
    title: {
        fontSize: 30,
        color: colors.white,
        fontFamily: fonts.heading,
        letterSpacing: 3,
        marginBottom: 5
    },
    list: {
        flex: 1,
        justifyContent: 'center'
    }
});
