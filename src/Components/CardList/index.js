import {addToSelectedItems, flipCard, normalCards} from "../../Redux/CardSlice";
import {useDispatch, useSelector} from "react-redux";

export const CardList = () => {

    const cards = useSelector(normalCards);
    const dispatch = useDispatch();

    const cardEvent = (card) => {
        setTimeout(() => {
            dispatch(addToSelectedItems(card))
        }, 350)
        dispatch(flipCard(card.id));

    }

    return (
        <ul className="cards">
            {
                cards.map(card =>
                    <li onClick={event => {
                        cardEvent(card)
                    }} key={card.id} className={`${card.id} card ${card.isFlipped || card.isFound ? `flip` : ''}`}>
                        <div className="view front-view">
                            <img src="/card-images/default.png" alt="icon"/>
                        </div>
                        <div className="view back-view">
                            <img src={card.img} alt="card-img"/>
                        </div>
                        <div>
                            {card.isFlipped}
                            {card.isFound}
                        </div>
                    </li>
                )
            }
        </ul>)
}
