import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { PaginaInicial } from '../pages/PaginaInicial';
import { ListaCidades } from '../pages/ListaCidades';
import { InfoCidades } from '../pages/InfoCidades';
import { HistoricoPontos } from '../pages/HistoricoPontos';
import { LerQRCode } from '../pages/LerQRCode';
import { ConfirmarLeitura } from '../pages/ConfirmarLeitura';
import { Regras } from '../pages/Regras';

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

        <stackRoutes.Screen
            name="InfoCidades"
            component={InfoCidades}
        />

        <stackRoutes.Screen
            name="HistoricoPontos"
            component={HistoricoPontos}
        />

        <stackRoutes.Screen
            name="LerQRCode"
            component={LerQRCode}
        />

        <stackRoutes.Screen
            name="ConfirmarLeitura"
            component={ConfirmarLeitura}
        />

        <stackRoutes.Screen
            name="Regras"
            component={Regras}
        />

    </stackRoutes.Navigator>
)

export default AppRoutes;