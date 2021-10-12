import coringa from '../../../img/hq/hq-coringa.jpg';
import deadpool from '../../../img/hq/hq-deadpool.jpg';
import guerraCivil from '../../../img/hq/hq-guerraCivil.jpg';
import spiderMan from '../../../img/hq/hq-spiderMan.jpg';
import wolverine from '../../../img/hq/hq-wolverine.jpg';

const defaultState = [
    { id: 1, name: "HQ Coringa - DC Comics", price: 90, priceName: "R$80,00", imgSrc: coringa },
    { id: 2, name: "HQ Deadpool vs Godzilla - Marvel Comics", price: 80, priceName: "R$80,00", imgSrc: deadpool },
    { id: 3, name: "HQ Guerra Civil - Marvel Comics (Edição de capa dura)", price: 300, priceName: "R$300,00", imgSrc: guerraCivil },
    { id: 4, name: "HQ Spider-man - Marvel Comics (Edição de colecionador)", price: 2100, priceName: "R$2100,00", imgSrc: spiderMan },
    { id: 5, name: "HQ Wolverine - DC Comics (Edição limitada)", price: 1200, priceName: "R$1200,00", imgSrc: wolverine },
];

const productsReducer = (state = defaultState, action) => {
    console.log("PRODUCTS", action);
    return state;
};

export default productsReducer;