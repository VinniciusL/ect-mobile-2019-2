import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import Home from './Home'
import Cadastro from './Cadastro'
import MeusDados from './MeusDados'
import Page1 from './Page1'

const drawerNavigation = createDrawerNavigator({
    Home,
    Cadastro,
    MeusDados,
    Page1
    
});

export default createAppContainer(drawerNavigation);