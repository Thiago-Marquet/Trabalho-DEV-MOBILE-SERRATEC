import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import AuthProvider from "./src/context/AuthContext";
import Routes from "./src/Routes";
import TreinoProvider from "./src/context/TreinoContext";
import ProdutoProvider from "./src/context/ProdutoContext";

const App = () => {
  return (
    <AuthProvider>
      <ProdutoProvider>
        <StatusBar />
        <Routes />
      </ProdutoProvider>
    </AuthProvider>
  );
};

export default App;
