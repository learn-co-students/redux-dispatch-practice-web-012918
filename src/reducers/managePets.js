export let state;


// pets: [ { name: 'Splash', type: 'turtle', id: 100 }, { name: 'avalanche', species: 'puppy', id: 101 } ]

export function managePets(state = { pets: [] }, action){
  switch (action.type) {
    case "REMOVE_PET":
    let petInQuestion = state.pets.find(pet => pet.id === action.id)
    let index = state.pets.indexOf(petInQuestion)

    return {pets: [...state.pets.slice(0, index), ...state.pets.slice(index + 1)]}
      break;
    case "ADD_PET":
      return {pets: [...state.pets, action.pet]}
      break
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('container')

  let petList = state.pets.map(pet => {
    return `<li>${pet.name}</li>`
  })

  container.innerHTML = `<ul>${petList}</ul>`
}
