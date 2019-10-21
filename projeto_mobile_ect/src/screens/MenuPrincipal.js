import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import Home from './Home'
import Cadastro from './Cadastro'
import MeusDados from './MeusDados'
import Venda from './Venda'

const drawerNavigation = createDrawerNavigator({
    Home,
    Cadastro,
    MeusDados,
    Venda
});

export default createAppContainer(drawerNavigation);