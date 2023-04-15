import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <View style={styles.pai}>
      <ScrollView>
        <View style={styles.filho}>
          <View style={styles.valor}>
            <Text style={styles.valor}> R$: 79,90</Text>
          </View>
          <View>
            <Image
              style={styles.imagem}
              source={require("./assets/picanhaBovina.png")}
            />
          </View>

          <View style={styles.borda}>
            <View style={styles.picanha}>
              <Text style={styles.picanha}> Picanha </Text>
            </View>

            <View style={styles.picanhaf}>
              <Text style={styles.picanhaf}> Picanha fresca </Text>
            </View>

            <View style={styles.g}>
              <Text style={styles.g}> 900g </Text>
            </View>
          </View>
          <View style={styles.butao}>
            <Button
              title="Adicionar ao carrinho"
              color={"black"}
              onPress={() => Alert.alert("Adicionado ao carrinho")}
            />
          </View>
        </View>

        <View style={styles.itens}>
          <View style={styles.cocad}>
            <Image
              style={styles.coca}
              source={require("./assets/coca2l.png")}
            />
            <Text style={styles.coca2l}> Coca-Cola</Text>
            <Text style={styles.valoc}> R$ 8,49 </Text>
          </View>

          <View style={styles.smirnoffd}>
            <Image
              style={styles.smirnoff}
              source={require("./assets/smirnoffLongneck.png")}
            />
            <Text style={styles.ice}> Smirnoff</Text>
            <Text style={styles.valors}> R$ 8,49 </Text>
          </View>

          <View style={styles.toscanad}>
            <Image
              style={styles.linguica}
              source={require("./assets/linguicaNordestina.png")}
            />
            <Text style={styles.toscana}> Toscana</Text>
            <Text style={styles.valorl}> R$ 31,99 </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pai: {
    flex: 1,
    backgroundColor: "#FFD700",
  },

  filho: {
    marginTop: 75,
    marginHorizontal: 70,
  },

  valor: {
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 25,
  },

  imagem: {
    width: 250,
    height: 250,
    alignItems: "center",
  },

  borda: {
    borderWidth: 3,
    borderRadius: 5,
  },

  picanha: {
    fontWeight: "bold",
    fontSize: 45,
    textAlign: "center",
  },

  picanhaf: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
  },

  g: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
  },

  butao: {
    marginTop: 100,
  },

  itens: {
    marginTop: 150,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  coca: {
    width: 100,
    height: 100,
  },

  smirnoff: {
    width: 100,
    height: 100,
  },

  linguica: {
    width: 100,
    height: 100,
  },

  cocad: {
    borderWidth: 1,
    borderRadius: 5,
  },

  smirnoffd: {
    borderWidth: 1,
    borderRadius: 5,
  },

  toscanad: {
    borderWidth: 1,
    borderRadius: 5,
  },
});
