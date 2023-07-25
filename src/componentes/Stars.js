import { Image, StyleSheet, View } from "react-native";
import Estrela from '../assets/estrela.png';
import EstrelaCinza from '../assets/estrelaCinza.png';

export default function Stars({ quantidade, editavel = false, grande = false }) {
  const styles = getStyle(grande);

  return (
    <View style={styles.container}>
      <Image source={Estrela} style={styles.imagem} />
      <Image source={Estrela} style={styles.imagem} />
      <Image source={Estrela} style={styles.imagem} />
      <Image source={Estrela} style={styles.imagem} />
      <Image source={Estrela} style={styles.imagem} />
    </View>
  )
}

const getStyle = (grande) => StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 2
  },
  imagem: {
    width: grande ? 36 : 12,
    height: grande ? 36 : 12
  }
})
