import { KeyboardAvoidingView,View,Text,Image,TextInput,TouchableOpacity,Animated,Keyboard} from "react-native";
import { useContext, useState, useEffect } from "react";
import { AuthContext} from "../../context/AuthContext";
import styles from '../Login/styles'

const Login = () => {

  const{user, signIn} = useContext(AuthContext)

  const [email, setEmail] = useState("");

  const handleEntrar = () => {
    signIn();
  };

  const verificaLogin = () => {

  }


  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            //keyboardType="visible-password"
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={() => {}}
          />

          <TouchableOpacity onPress={handleEntrar}style={styles.buttonSubmit}>
            <Text style={styles.submitText}>Acessar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;
