import products from '@/assets/data/products'
import Colors from '@/src/constants/Colors'
import { StyleSheet, Text, View, Image } from 'react-native'

// import EditScreenInfo from '@/src/components/EditScreenInfo'
// import { } from '@/src/components/Themed'

export default function TabOneScreen() {
  const product = products[0]
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
})