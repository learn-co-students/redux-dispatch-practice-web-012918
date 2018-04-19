export let state;


export function managePets(state = { pets: [] },action){
  switch (action.type) {
    case "ADD_PET":
      return {pets: [...state.pets, action.pet]}
      break;
    case "REMOVE_PET":
      const index = state.pets.findIndex(obj => obj.id === action.id);
      const newData = [
        ...state.pets.slice(0, index),
        ...state.pets.slice(index + 1)
      ]
      return {pets: newData}
      break;
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state,action)
  render()
}

export function render(){
  let container = document.getElementById('container')
  let allPetsHTML = state.pets.map(pet => `<ul><li>${pet.name}</li></ul>`)
  container.innerHTML = allPetsHTML
}
