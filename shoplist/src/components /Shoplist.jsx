import { useState } from 'react'
import Item from './Item';
import items from '../data/items';

function Shoplist() {
    const [count, setCount] = useState(0)

    return (
        <>
     
            <div id="container">
                <header>
                    <h1>Shopping List </h1>
                </header>
                {/* input field  */}
                <form id="inputform">
                    <label htmlFor="items">Food Items: </label>
                    <input type="text" name="items" id="items" placeholder="Add items" required />
                    <button id="addbutton">Add</button>
                </form>

                <section id="pressbutton">
                    {/* buttons with onclick attribute added upon user usage   */}
                    <button id="markedlist" >Mark Purchased</button>
                    <button id="clear">Clear list </button>
                    {/* <button id="Clear" onclick="newlistRendered()">Clear list </button>  */}
                </section>

            </div>

         <ul className="Items">
        {items.map((items) => (
          <Item key={items.id} name={items.name} category={items.category} />
        ))}
      </ul>



        <button id='count' onClick={() => setCount((count) => count + 7)}>
          count is {count}
        </button>

        </>

    )
}
export default Shoplist; 