export const load = () => {
  return  (dispatch) => {
    dispatch({type: 'todos/start'})
    
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (response => response.json())
    .then (json => {
      dispatch ({
        type: 'todos/items',
        payLoad: json
      })
    })
  }
}