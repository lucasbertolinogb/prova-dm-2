import { Text, StyleSheet, View, ScrollView } from 'react-native';
import Armas from '../../components/index';
import styles from '../../components/style';
import { SafeAreaView } from 'react-native-web';


const listaFilmes = [
  {
    titulo: "Espada da Tormenta",
    sinopse: "Espada escura",
    urlPoster: "https://pm1.aminoapps.com/7084/ce743ca885e8e019fd7b78f26d63b7f35cd75552r1-542-944v2_hq.jpg"
  },
  {
    titulo: "Escudo do Gato de ferro",
    sinopse: "Escudo de madeira e ferro",
    urlPoster: "https://contos-elficos.weebly.com/uploads/1/9/6/5/19657165/8349462_orig.jpg"
  },
  {
   titulo: "Espada Selada",
   sinopse: "Conto da espada do heroi",
   urlPoster: "https://pm1.aminoapps.com/7084/b45950417aec1c4618a83ff8dff77b7b6a52ad09r1-442-748v2_hq.jpg"
  },
  {
    titulo: "Armadura viva",
    sinopse: "Quem precisa de clones da sombra?",
    urlPoster: "http://eternalcirclerpg.weebly.com/uploads/7/6/4/8/7648837/305466740.jpg"
   } 
  
]

export default function MoviesPages() {
  return (

    <SafeAreaView style={style.container}>

        {Armas.length > 0 ? 

        <ScrollView horizontal>  
        {listaFilmes.map(filme => <Armas filme={filme} />)}
        </ScrollView>

         : <ActivityIndicator size= {'large'}/>}

    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    
  },
  texto: {
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  img: {
    width: '80%',
    height: '30%'
  }
});
