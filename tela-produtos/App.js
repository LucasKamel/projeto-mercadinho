import { useState } from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [setores, setSetores] = useState([
    { setor: "Comida", key: 0 },
    { setor: "Bebida", key: 1 },
    { setor: "Limpeza", key: 2 },
  ]);

  const [itens, setItens] = useState([
    {
      produto: (
        <View>
          <Image
            style={styles.imagemProduto}
            source={require("./assets/picanhaBovina.png")}
          />
          <Text>R$ 79.90</Text>
        </View>
      ),
      key: 3,
    },
    {
      produto: (
        <View>
          <Image
            style={styles.imagemProduto}
            source={require("./assets/smirnoffLongneck.png")}
          />
          <Text> R$ 8.49</Text>
        </View>
      ),
      key: 4,
    },
    {
      produto: (
        <View>
          <Image
            style={styles.imagemProduto}
            source={require("./assets/detergenteNeutro.png")}
          />
          <Text>R$ 1.99</Text>
        </View>
      ),
      key: 5,
    },
    {
      produto: (
        <View>
          <Image
            style={styles.imagemProduto}
            source={require("./assets/linguicaNordestina.png")}
          />
          <Text> R$ 31.99</Text>
        </View>
      ),
      key: 6,
    },
    {
      produto: (
        <View>
          <Image
            style={styles.imagemProduto}
            source={require("./assets/brahmaLata.png")}
          />
          <Text> R$ 4.49</Text>
        </View>
      ),
      key: 7,
    },
    {
      produto: (
        <View>
          <Image
            style={styles.imagemProduto}
            source={require("./assets/desifetanteUrca.png")}
          />
          <Text> R$ 5.99</Text>
        </View>
      ),
      key: 8,
    },
    {
      produto: (
        <View>
          <Image
            style={styles.imagemProduto}
            source={require("./assets/cuzcuzCoringa.png")}
          />
          <Text>R$ 2.49</Text>
        </View>
      ),
      key: 9,
    },
    {
      produto: (
        <View>
          <Image
            style={styles.imagemProduto}
            source={require("./assets/coca2l.png")}
          />
          <Text>R$ 8.49</Text>
        </View>
      ),
      key: 10,
    },
    {
      produto: (
        <View>
          <Image
            style={styles.imagemProduto}
            source={require("./assets/aguaSanitaria2l.png")}
          />
          <Text>R$ 2.75</Text>
        </View>
      ),
      key: 11,
    },
  ]);

  const [promocoes, setPromocoes] = useState([
    {
      produtoPromo: (
        <View>
          <Text style={styles.textoPromo}>PROMOÇÃO</Text>
          <Image
            style={styles.imagemPromo}
            source={require("./assets/jackDaniels.png")}
          />
          <Text style={styles.precoAntigo}> DE R$ 169.99</Text>
          <Text style={styles.precoNovo}>POR R$ 155.99</Text>
        </View>
      ),
      key: 12,
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        keyExtractor={(item) => item.key}
        data={setores}
        renderItem={({ item }) => (
          <Text style={styles.estiloSetores}>{item.setor}</Text>
        )}
      />

      <FlatList
        numColumns={3}
        keyExtractor={(item) => item.key}
        data={itens}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={styles.estiloItens}>{item.produto}</Text>
          </TouchableOpacity>
        )}
      />

      <FlatList
        numColumns={1}
        keyExtractor={(item) => item.key}
        data={promocoes}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={styles.promocao}>{item.produtoPromo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { backgroundColor: "#FFD700" },
  estiloSetores: {
    marginTop: 43,
    fontSize: 24,
    backgroundColor: "#FFD700",
    margin: 8,
    width: 120,
    height: 110,
    textAlignVertical: "center",
    textAlign: "center",
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 1,
  },

  estiloItens: {
    backgroundColor: "#FFD700",
    margin: 9,
    padding: 8,
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 1,
  },

  imagemProduto: {
    width: 100,
    height: 100,
    resizeMode: "center",
  },

  promocao: {
    backgroundColor: "#FFD700",
    margin: 5,
    padding: 7,
    width: 400,
    height: 274,
    textAlign: "center",
    borderRadius: 7,
    borderColor: "red",
    borderWidth: 4,
  },

  textoPromo: { fontSize: 25 },

  imagemPromo: { width: 150, height: 150, resizeMode: "center" },
  precoAntigo: { fontSize: 19, textDecorationLine: "line-through" },
  precoNovo: { fontSize: 19 },
});
