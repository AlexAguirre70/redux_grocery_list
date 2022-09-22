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
            return[...state,
            {
                text:action.text
            }
            ]
        case 'grocery/clear' :
            return[]
        default:
            return state

        }
        
}