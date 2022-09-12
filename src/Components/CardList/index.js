import {addToSelectedItems, flipCard, normalCards} from "../../Redux/CardSlice";
import {useDispatch, useSelector} from "react-redux";

export const CardList = () => {

    const cards = useSelector(normalCards);
    const dispatch = useDispatch();

    const cardEvent = (card) => {
        dispatch(flipCard(card.id));
        setTimeout(() => {
            dispatch(addToSelectedItems(card))
        }, 1000)
    }

    return (
        <ul className="cards">
            {
                cards.map(card =>
                    <li onClick={event => {cardEvent(card)}} key={card.id} className={`${card.id} card ${card.isFlipped ? `flip` : ''}`}>
                        <div className="view front-view">
                            <img src="/card-images/default.png" alt="icon"/>
                        </div>
                        <div className="view back-view">
                            <img src={card.img} alt="card-img"/>
                        </div>
                    </li>
                )
            }
        </ul>)
}
