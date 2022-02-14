import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacityProps,
    Dimensions
} from 'react-native';
import colors from '../styles/colors';

interface PointsCardProps extends TouchableOpacityProps {
    title: string
}
export const PointsCard = ({ title, ...rest }: PointsCardProps) => {
    return (
        <View style={styles.container}>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 8,
        width:  Dimensions.get('window').width * 0.95,
        height: 260,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }
})