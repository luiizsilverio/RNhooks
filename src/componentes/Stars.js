import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Star from "./Star";

export default function Stars({ quantidade, editavel = false }) {
  const [qtd, setQtd] = useState(quantidade);

  const RenderEstrelas = () => {
    const lista = [];
    for (let i = 0; i < 5; i++) {
      lista.push(
        <Star
          key={i}
          enabled={editavel}
          preenchida={i < qtd}
          grande={editavel}
          onPress={() => setQtd(i+1)}
        />
      )
    }
    return lista;
  }

  return (
    <View style={styles.container}>
      <RenderEstrelas />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5
  }
})
