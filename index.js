document.addEventListener('DOMContentLoaded', (event) => {
  // array
  const shopList = ['Chapati-Flour', 'Maize-Flour', 'Rice', 'Cocoa', 'BlueBand', 'Kamande', 'Beans', 'Onions', 'Potatoes']

  // for each element create an li
  function createLI() {
    shopList.forEach((item) => {
      const li = document.createElement('li');
      const ulist = document.querySelector('.ulist')
      li.innerText = item;
      ulist.appendChild(li)
    })
  }

  createLI(); // calls the new list; 
  // const newShopArray = [];

  //Add new list items
  function newListRendered(e) {
    e.preventDefault();
    const newShopArray = [];
    const input = document.getElementById("items");
    let inputtext = input.value.trim();
    if (inputtext !== '') {
      newShopArray.push(inputtext);
      form.value = '';
      const li = document.createElement('li');
      li.innerText = inputtext;
      const ulist = document.querySelector('.ulist');
      ulist.appendChild(li);
    }

    return newShopArray;
  }

  // Event handler for adding new item list 
  const form = document.getElementById("inputform");
  form.addEventListener('submit', newListRendered);


  // Clear the list based on the li list items  
  function clearButton(e) {
    e.preventDefault();
    const ulist = document.querySelector('.ulist');
    // Remove the last <li> item
    ulist.removeChild(ulist.lastChild);
  }

  const buttonClear = document.getElementById("clear");
  buttonClear.addEventListener("click", clearButton);


  // Marked list purchased 


  // const MarkListbutton = document.getElementById ("boxInput").addEventListener("markedlist")


  // buttonMarkedlist.addEventListener("click", inputtext); 


})







