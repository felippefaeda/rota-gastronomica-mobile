import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { PaginaInicial } from '../pages/PaginaInicial';
import { ListaCidades } from '../pages/ListaCidades';

import colors from '../styles/colors';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >

        <stackRoutes.Screen
            name="PaginaInicial"
            component={PaginaInicial}
        />

        <stackRoutes.Screen
            name="ListaCidades"
            component={ListaCidades}
        />

    </stackRoutes.Navigator>
)

export default AppRoutes;