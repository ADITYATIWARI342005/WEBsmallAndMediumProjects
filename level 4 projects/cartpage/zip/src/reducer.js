const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    
  }
  if (action.type === 'REMOVE') {
   
    }
  
  if (action.type === 'INCREASE') {
  
  }
  if (action.type === 'DECREASE') {
   
  }
  if (action.type === 'GET_TOTALS') {
  
  }
  if (action.type === 'LOADING') {
   
  }
  if (action.type === 'DISPLAY_ITEMS') {

  }
  if (action.type === 'TOGGLE_AMOUNT') {
 
  }
  throw new Error('no matching action type')
}

export default reducer
