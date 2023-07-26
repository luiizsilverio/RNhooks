import { Image, StyleSheet, TouchableOpacity } from "react-native";
import Estrela from '../assets/estrela.png';
import EstrelaCinza from '../assets/estrelaCinza.png';

export default function Star({
  onPress,
  enabled = false,
  preenchida = false,
  grande = false
}) {

  const styles = getStyle(grande);

  const getImage = () => {
    return preenchida ? Estrela : EstrelaCinza;
  }

  return (
    <TouchableOpacity
      disabled={!enabled}
      onPress={onPress}
    >
      <Image source={getImage()} style={styles.imagem} />
    </TouchableOpacity>
  )
}

const getStyle = (grande) => StyleSheet.create({
  imagem: {
    width: grande ? 34 : 14,
    height: grande ? 34 : 14
  }
})
