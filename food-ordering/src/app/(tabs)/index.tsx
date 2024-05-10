// import ProductListComponent from '@/components/ProductListComponent'

// import Colors from '@/src/constants/Colors'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import products from '../../../assets/data/products'
import ProductListComponent from '../../components/ProductListComponent'

// import EditScreenInfo from '@/src/components/EditScreenInfo'
// import { } from '@/src/components/Themed'

export default function TabOneScreen() {
  const product = products[0]
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListComponent product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  )
}
