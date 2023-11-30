import { Image, Pressable, Text } from "react-native";
import { Product } from "../../../domain/models"
import { globalColors, globalStyles } from "../../theme/theme";


interface Props {
    product: Product;
}

export const ProductCard = ({ product }: Props) => {
    console.log(product.image)
    return (
        <Pressable style={ globalStyles.productCard }>
            <Image
                source={{ uri: product.image }}
                style={{ width: 100, height: 100 }}
            />
            <Text style={globalStyles.title2}>{ product.name }</Text>
            <Text numberOfLines={2}>{ product.description }</Text>
            <Text>
                Precio: <Text style={{color:globalColors.primary}}>{ product.price }$</Text>
            </Text>
        </Pressable>
    )
}
