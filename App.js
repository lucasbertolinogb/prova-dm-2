import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesPages from './src/pages/MoviesPages';
import MovieDetailsPage from './src/MovieDetailsPage';
import cadastro from './src/cadastro';
import login from './src/login';
import RecuperarSenha from './src/RecuperarSenha';

const Stack = createNativeStackNavigator();

export default function App() {


return (
  <NavigationContainer>   
  
    <Stack.Navigator>

      <Stack.Screen name='cadastro' 
      component={cadastro} />

      <Stack.Screen name='login' 
      component={login} />
      
      <Stack.Screen name='RecuperarSenha' 
      component={RecuperarSenha}/>

      <Stack.Screen name='MoviesPage' 
      component={MoviesPages} />
    
      <Stack.Screen name="MovieDetailsPage" component={MovieDetailsPage} />

    </Stack.Navigator>
    
  </NavigationContainer>

  );
}
