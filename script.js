//Establish DOM elements as Variables
const grocerySubmit = document.getElementById('addGrocery')
const list = document.getElementById('list')
const clearBtn = document.getElementById('clear')

// Instatiate default state value
const initialState = {
    groceries:[]
}

// Establish the reducer
const groceryReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'grocery/add':
            return[
                ...state,
            {
                text: action.text
            }
            ]
        case 'grocery/clear' :
            return[]
        default:
            return state

        }       
}
let store= Redux.createStore(groceryReducer)

// clear Action
const  clearList = ()=> {
    document.getElementById('newItem').value =''
    store.dispatch({
        type:'grocery/clear'
    })
}
//add Grocery item Action
const newGrocery = (e)=>{
    e.preventDefault()
    let groceryText = document.getElementById('newItem').value
    store.dispatch({
        type:'grocery/add',
        text: groceryText
    })
    console.log(store.getState())
}

// create the grocery list
const renderList = (state)=>{
    state.forEach(grocery => {
        let li= document.createElement('li')
        list.appendChild(li)
        li.textContent=grocery.text
    })
}

//pass the array to render the list
const render =()=> {
    const state=store.getState()
    renderList(state)
}
// this subscribes to update on change of state
store.subscribe(render)

// adding the event listeners
grocerySubmit.addEventListener('click',(e)=>{newGrocery(e)})
clearBtn.addEventListener('click',clearList)