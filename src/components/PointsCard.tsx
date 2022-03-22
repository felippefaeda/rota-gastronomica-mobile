import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacityProps,
    Dimensions
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PointsCardProps extends TouchableOpacityProps {
    title: string
}
export const PointsCard = ({ title, ...rest }: PointsCardProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.pointsText}>
                21/03/22 - Restaurante do Zé - Urucânia - 10 pts  {'\n'}
                26/03/22 - Pastelaria Do Jailson - Jequeri - 10 pts  {'\n'}
                29/03/22 - Pizzaria Colina - Urucânia - 10 pts  {'\n'}
                02/04/22 - Restaurante Grillos - Jequeri - 10 pts  {'\n'}
                02/04/22 - Sonho de Verão - Matipó - 10 pts  {'\n'}
                06/04/22 - Japa Food - Rio Doce - 10 pts  {'\n'}
                08/04/22 - Zero Grau - Sem Peixe - 10 pts  {'\n'}
                16/04/22 - Joca's Burger - Rio Casca - 10 pts  {'\n'}
                19/04/22 - Camponesa - Rio Casca - 10 pts  {'\n'}
                20/04/22 - Açaíteria Sabor - Rio Casca - 10 pts  {'\n'}
            </Text>

            <Text style={styles.pointsTotal}>
                Total: 100 pts
            </Text>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 8,
        width: Dimensions.get('window').width * 0.96,
        height: 260,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    pointsText: {
        fontSize: 14,
        fontFamily: fonts.text,
        color: colors.red_font,
        fontWeight: "600",
        lineHeight: 18,
    },
    pointsTotal: {
        fontSize: 15,
        fontFamily: fonts.text,
        color: colors.red_font,
        fontWeight: "bold",
        lineHeight: 18,
    }
})