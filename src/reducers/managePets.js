export let state;


export function managePets(state = {pets: []}, action){
  switch(action.type){
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      let pet = state.pets.find(pet => pet.id === action.id)
      let newPets = [...state.pets]
      let index = newPets.indexOf(pet)
      newPets.splice(index, 1)
    return {pets: newPets}
    default: return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('container')
  let petItems = state.pets.map(pet => {
    return `<li>${pet.name}</li>`
  })
  container.innerHTML = `<ul>${petItems}</ul>`
}
