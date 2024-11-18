import { useState } from "react";


function Item({name,category}){
const [inlist, setInlist]= useState(false);

//handleClick
function handleClick(){
    setInlist((inlist)=>!inlist);
};

    return(
        <>
        <div id="list">
                    <h2>Bought Items</h2>
                    <ul className="ulist ">
                        <li>
                            <span>{name}</span>
                            <span>{category}</span>
                            {/* going to add a button */}
                            <button onClick={handleClick} className={inlist?"remove":"add"}>{inlist? "Remove From Cart" : "Add to Cart"}</button>
                        </li>
                    </ul>
         </div>

        
        </>
    )

}

export default Item;