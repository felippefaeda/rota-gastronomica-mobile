import React from "react";
import {
    StyleSheet,
    Text
} from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import colors from "../styles/colors";
import fonts from "../styles/fonts"
interface LugarCredenProps extends RectButtonProps {
    
    data: {
        nome: string;
        image: string;
        endereco: string;
        horario_funcionamento: string;
    }

}
export const LugarCredenciadoCard = ({data, ...rest} : LugarCredenProps) =>{

    return(
        <RectButton
            style = {styles.conteinner}
            {...rest}
        >
            <Text style = {styles.text}>
                {data.nome}
            </Text>

        </RectButton>
    )
}
const styles = StyleSheet.create ({

    conteinner : {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        margin: 10
    },
    text :{
        color: colors.red,
        fontFamily: fonts.heading

    }

})