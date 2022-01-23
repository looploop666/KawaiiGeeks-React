import {Item} from '../Item/Item';
import './ItemList.css';

export const ItemList = ({products}) => {

    return(

        <div className="itemList">
            {products.map((product) => {
                return (
                    <Item
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        pictureUrl={product.pictureUrl}
                    />
                );
            })}
      </div>

    );
};
