import { KeyboardAvoidingView,View,Text,Image,TextInput,TouchableOpacity,Animated,Keyboard} from "react-native";
import { useContext, useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import styles from '../Login/styles'

const Login = () => {
  const { signIn } = useAuth();
  const [info, setInfo] = useState("");

  const handleEntrar = () => {
    signIn();
  };


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
            value={info}
            onChangeText={setInfo}
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
