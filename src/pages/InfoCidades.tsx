import React, { useEffect, useState } from "react";

import {
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    FlatList,
    ScrollView,
    LogBox
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from '@react-navigation/core';

import logo from '../assets/logo.png';
import fonts from '../styles/fonts';
import colors from '../styles/colors';
import { LugarCredenciadoCard } from '../components/LugarCredenciadoCard';

import api from "../services/api";
import config from '../../config';
import jsonServer from '../services/server.json';

interface Params {
    cidade: {
        id: number;
        nome: string;
        uriImagem: string;
        descricao: string;
    }
}

interface LugaresCredenciadosProps {
    id: number;
    cidade: number;
    nome: string;
    image: string;
    icon: string;
    endereco: string;
    horario_funcionamento: string;    
}

export function InfoCidades() {

    const route = useRoute();
    const { cidade } = route.params as Params;

    const [lugares, setLugares] = useState<LugaresCredenciadosProps[]>([]);

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    useEffect(() => {
        async function fetchLugares() {
            if (config.SEARCH_TYPE == 'API') {
                const { data } = await api.get('lugares_credenciados?_sort=name&_order=asc');
                setLugares(data);
            } else {
                setLugares(jsonServer.lugares_credenciados.filter(obj => { 
                    if(obj.cidade == cidade.id){
                        return true;
                    } else {
                        return false;
                    }
                }));
            }
        }

        fetchLugares();
    }, [])

    return (   
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

            <ScrollView style={styles.body}>
                <Image
                    style={styles.imagemCidade}
                    resizeMode='contain'
                    source={{
                        uri: `${config.URL_IMAGE}${cidade.uriImagem}`
                    }}
                />
                <Text style={styles.text}>
                    {cidade.descricao}
                </Text> 

                <View style={styles.flatList}>
                    <FlatList
                        data={lugares}
                        renderItem={                        
                            ({ item }) => (<LugarCredenciadoCard data={item} />)
                        }
                        keyExtractor={item => String(item.id)} 
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        flex: 1,
        backgroundColor: colors.background
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
        fontSize: 28,
        color: colors.white,
        fontFamily: fonts.heading,
        marginBottom: 5,
        textTransform: 'uppercase'
    },
    imagemCidade: {
        height: 180,
        width: '100%',
        marginVertical: 6,
        borderRadius: 10
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