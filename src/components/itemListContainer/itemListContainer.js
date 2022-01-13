import "./itemListContainer.css";
import { ItemCount } from '../itemCount/itemCount'

export const ItemListContainer = ({greeting}) => {
    return (
        <div className = "itemListContainer">
            <h1>
                {greeting}
            </h1>
     
        <ItemCount stock={25} initial={1}/>
        </div>
    );
};