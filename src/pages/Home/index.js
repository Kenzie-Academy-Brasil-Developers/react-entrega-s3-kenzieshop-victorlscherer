import { useDispatch, useSelector } from "react-redux";
import { addToCartThunk } from "../../store/modules/cart/thunks";
import { BuyButton, CardHq, Container } from "./styled";

const Home = () => {

    const dispatch = useDispatch();

    const products = useSelector((store) => store.products)

    return (
        <Container>
            {products.map((product) => {
                return (
                    <CardHq>
                        <img src={product.imgSrc} alt={product.name} />
                        <h2>{product.name}</h2>
                        <h2> {product.priceName}</h2>
                        <BuyButton onClick={() => dispatch(addToCartThunk(product))} >Comprar</BuyButton>
                    </CardHq>
                )
            })}
        </Container>
    )
};

export default Home;