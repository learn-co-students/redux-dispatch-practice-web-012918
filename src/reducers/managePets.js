export let state;


export function managePets(state={ pets: [] }, action){
  switch(action.type) {
    case 'ADD_PET':
      return Object.assign({}, state, {
        pets: [
          ...state.pets,
          action.pet
        ]
      })
    case 'REMOVE_PET':
    let itemToRemove = state.pets.findIndex(pet => pet.id === action.id)
      return Object.assign({}, state, {
        pets: [
          ...state.pets.slice(0, itemToRemove),
          ...state.pets.slice(itemToRemove + 1)
        ]
      })
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let pets = document.getElementById('container')
  let petsList = state.pets.map(pet => `<li>${pet.name}</li>`)
  pets.innerHTML = `<ul>${petsList}</ul>`

}
