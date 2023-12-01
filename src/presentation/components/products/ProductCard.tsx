import { Image, Pressable, Text } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import { Product } from "../../../domain/models"
import { globalColors, globalStyles } from "../../theme/theme";
import { AppNavigatorParams } from "../../routes/AppNavigator";


interface Props {
    product: Product;
}

export const ProductCard = ({ product }: Props) => {

    const navigation = useNavigation<NavigationProp<AppNavigatorParams>>();

    const handleNavigate = () => {
        navigation.navigate('Product', { slug: product.slug });
    }


    return (
        <Pressable onPress={handleNavigate} style={ globalStyles.productCard }>
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
