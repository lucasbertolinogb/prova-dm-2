import { Text , TouchableOpacity, View} from "react-native";
import styles from "../components/style";
import { Link } from '@react-navigation/native';

export default function cadastro () {
    return(
        <View style={styles.container}>
            <Text>Bem vindo(a) a taverna do heroi </Text>
            <Text>Logue em sua conta para acessa-las</Text>

            <TouchableOpacity style={styles.button}>
                <Link to={{screen: "login"}}>Email</Link> 
            </TouchableOpacity>


        </View>
    );
}
