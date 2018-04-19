export let state;


export function managePets(state ={ pets: []}, action){
  switch(action.type){
    case "ADD_PET":
      return Object.assign({}, state, { pets: [...state.pets, action.pet]})
    case "REMOVE_PET":
      let index = state.pets.findIndex((pet)=>{pet.id === action.id})
      let newpets = [...state.pets]
      newpets.splice(index-1, 1)
      return Object.assign({}, state, { pets: newpets})
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById("container")
  container.innerHTML = state.pets.map((pet)=>{return (`<ul><li>${pet.name}</li></ul>`)})
}
