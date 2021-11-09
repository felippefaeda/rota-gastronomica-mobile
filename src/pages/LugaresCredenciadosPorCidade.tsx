import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";
import { LugarCredenciadoCard } from "../components/LugarCredenciadoCard";
import api from "../services/api";
import colors from "../styles/colors";

interface lugarCredenciadoProps{

    id:string;
    nome: string;
    image:string;
    descricao:string;
    endereco:string;
    horario_funcionamento: string;
    QRcode:string;
    image2:string
}

export function LugaresCredenciadosPorCidade(){

    const [lugarCredenciado, setLugarCredenciado] = useState<lugarCredenciadoProps[]>([]);

    useEffect(() => {
        async function fetchLugarCreden(){
            const {data} = await api.get('lugar_credenciado');
            setLugarCredenciado (data);
        }

        fetchLugarCreden();

    },[])

    return(
        <ScrollView style={styles.conteinner}>
            <View>
                <Image source = { require ('../images/logo.png')} style = {styles.image} />
                <SvgFromUri
                    uri= ''
                    height={100}
                    width={100}
                />

                {/* colocar o componente button*/}

                
            </View>
            <View>    
                
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur soluta tempore repudiandae nullaasperiores 
                    ducimus praesentium nostrum veniam tempora? 
                    Dolores, obcaecati ex. Aliquam, nobis repellat! 
                    Suscipit nesciunt nemo quas repellat?
                </Text>

            </View>
            <View style={styles.lugar_credenciado}>

                <FlatList

                    data={lugarCredenciado}
                    renderItem = {({ item }) => (
                        <LugarCredenciadoCard data={item} />
                    )}
                />

            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create ({

    conteinner : {
        flex: 1,
        backgroundColor: colors.background
    },
    image : {
        height: 245,
        width: 300
    },
    lugar_credenciado : {
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: 'center'
    }

})