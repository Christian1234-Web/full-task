import React, { createContext, useState } from 'react';
export const Store = createContext();
const StoreContext = ({children}) => {
    let [pro, setPro] = useState([]);
    let [cart, setCart] = useState([]);
    let [name, setName] = useState("");
    let [category, setCategory] = useState("");
    let [price, setPrice] = useState("");
    let [quantity, setQuantity] = useState("");
    let [image, setImage] = useState("");
    let [description, setDescription] = useState("");
    let [proId, setProId] = useState(null);
    let [ids,setIds] = useState(null)
    let [msg, setMsg] = useState(0);
    let [cartNo, setCartNo] = useState(0);
    let [token, setToken] = useState('');
    let [note,setNote]=useState("LIST OF ALL CAKES")

let state = {
    info: [msg, setMsg],
    data: [note, setNote],
    items: [pro, setPro],
    storeName:[name, setName],
    storePrice:[price, setPrice],
    storeQuantity:[quantity, setQuantity],
     storeDescription:[description, setDescription],
    storeImage:[image, setImage],
    storeCategory:[category, setCategory],
    storeId: [proId, setProId],
    ctx: [cart, setCart],
    ctxId:  [ids,setIds],
    token: [token, setToken],
    cartNo:[cartNo, setCartNo] 
};
    return <Store.Provider value={state}>{children}</Store.Provider>
}
export default StoreContext;