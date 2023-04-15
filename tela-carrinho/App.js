import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.tudo}>
      <View style={styles.lista}>
        <Image
          style={styles.whisky}
          source={require("./assets/jackDaniels.png")}
        />
        <View style={styles.informacao}>
          <Text style={styles.nome}> JACK DANIELS</Text>
          <Text style={styles.preco}> De R$ 169,99</Text>
          <Text style={styles.preco2}> Por R$ 155,99</Text>
        </View>
        <AntDesign
          style={styles.icone}
          name="checksquare"
          size={24}
          color="black"
        />
      </View>

      <View styles={styles.entrega}>
        <Text style={styles.cep}>CEP</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.cep2}
          placeholder='Ex:"00000-000"'
        />

        <Text style={styles.numero}>Numero da casa</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.numero2}
          placeholder='Ex: "1234"'
        />

        <Text style={styles.complemento}>Complemento</Text>
        <TextInput
          multiline
          style={styles.complemento2}
          placeholder='Ex:"Apt 000"'
        />

        <Text>Opções De Pagamento</Text>
        <TouchableOpacity style={styles.opcaoPagamento}>
          <AntDesign name="creditcard" size={32} color="#000" />
          <Text style={styles.opcaoPagamentoTexto}>Cartão</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.opcaoPagamento}>
          <AntDesign name="wallet" size={32} color="#000" />
          <Text style={styles.opcaoPagamentoTexto}>Dinheiro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.opcaoPagamento}>
          <AntDesign name="qrcode" size={32} color="#000" />
          <Text style={styles.opcaoPagamentoTexto}>PIX</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.botao}>
        <Button
          title="Finalizar compra"
          color="black"
          onPress={() => Alert.alert("O seu pedido vai ser enviado!")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tudo: {
    flex: 1,
    backgroundColor: "#FFD700",
  },

  lista: {
    marginTop: 75,
    marginHorizontal: 20,
    flexDirection: "row",
    borderWidth: 3,
    borderRadius: 7,
    paddingHorizontal: 15,
  },

  whisky: {
    width: 80,
    height: 160,
  },

  informacao: {
    flexDirection: "column",
    paddingTop: 50,
  },

  nome: {
    fontSize: 25,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },

  preco: {
    fontSize: 20,
    textDecorationLine: "line-through",
    paddingHorizontal: 50,
  },

  preco2: {
    fontSize: 20,
    paddingHorizontal: 50,
  },

  icone: {
    paddingTop: 70,
  },

  cep: {
    marginTop: 40,
  },

  cep2: {
    borderWidth: 1,
    padding: 8,
    margin: 10,
    width: 300,
    borderRadius: 7,
  },

  numero: {
    marginTop: 10,
  },

  numero2: {
    borderWidth: 1,
    padding: 8,
    margin: 10,
    width: 300,
    borderRadius: 7,
  },

  complemento: {
    marginTop: 10,
  },

  complemento2: {
    borderWidth: 1,
    padding: 8,
    margin: 10,
    width: 300,
    borderRadius: 7,
    marginBottom: 20,
  },

  botao: {
    marginTop: 40,
  },
  opcaoPagamento: {
    flexDirection: "row",
    width: 150,
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#FFD700",
    borderRadius: 7,
    borderWidth: 1,
    margin: 10,
  },
  opcaoPagamentoTexto: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
