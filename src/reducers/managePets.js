export let state;

export function managePets(state = { pets: [] }, action){
  switch (action.type) {
    case 'ADD_PET':
      let new_pet = action.pet
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      let filtered_pet_list = state.pets.filter(pet => pet.id !== action.id)
      return {pets: filtered_pet_list}
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  document.getElementById('container').innerHTML = `<ul><li>${state.pets.map(pet => pet.name)}</li></ul>`
}
