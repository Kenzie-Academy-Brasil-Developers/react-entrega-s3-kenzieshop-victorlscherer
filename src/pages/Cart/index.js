import { useDispatch, useSelector } from "react-redux";
import { BuyButton, CardHq, Container } from "./styled";
import { removeFromCartThunk } from '../../store/modules/cart/thunks'

const CartPage = () => {

    const dispatch = useDispatch();

    const products = useSelector((store) => store.cart)

    return (
        <Container>
            {products.map((product) => {
                return (
                    <CardHq>
                        <h2>{product.name}</h2>
                        <h2> {product.priceName}</h2>
                        <BuyButton onClick={() => dispatch(removeFromCartThunk(product.id))} >Remover</BuyButton>
                    </CardHq>
                )
            })}
        </Container>
    )
};

export default CartPage;