import { ItemListContainer } from "../components/itemListContainer/itemListContainer";

export const Tienda = () => {
    return (
        <div className="tienda">
            <h1>Tienda</h1>
            <ItemListContainer greeting = {'Somos GEEKS pero no perdimos lo KAWAII!'}/>
        </div>
       
    )
}