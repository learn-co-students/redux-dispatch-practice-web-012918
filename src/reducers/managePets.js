export let state;

export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      let pet = state.pets.find(pet => pet.id === action.id)
      let updatedPets = [...state.pets]
      let index = updatedPets.indexOf(pet)
      updatedPets.splice(index, 1)
      return {pets: updatedPets}
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('container')
  let petsList = state.pets.map(pet => {
    return `<li>${pet.name}</li>`
    }
  )
  container.innerHTML = `<ul>${petsList}</ul>`
}
