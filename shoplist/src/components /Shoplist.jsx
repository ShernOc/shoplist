import { useState } from 'react'

function Shoplist() {
    const [count, setCount] = useState(0)

    return (
        <>
         <button onClick={() => setCount((count) => count + 7)}>
          count is {count}
        </button>

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

                <div id="list">
                    <h2>Bought Items</h2>
                    <ul className="ulist ">
                    </ul>
                </div>

                <section id="pressbutton">
                    {/* buttons with onclick attribute added upon user usage   */}
                    <button id="markedlist" >Mark Purchased</button>
                    <button id="clear">Clear list </button>
                    {/* <button id="Clear" onclick="newlistRendered()">Clear list </button>  */}
                </section>

            </div>

        </>

    )
}
export default Shoplist; 