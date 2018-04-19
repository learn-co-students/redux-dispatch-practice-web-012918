export let state;

export function managePets(state={ pets: [] }, action){
  switch(action.type) {
    case "ADD_PET":
      return Object.assign({}, state, state.pets.push(action.pet));
      break;
    case "REMOVE_PET":
      let newArr = state.pets.filter(pet => {
        return pet.id !== action.id;
      })
      return Object.assign({}, state, {pets: newArr})
      break;
    default:
    return state;

  }
}

export function dispatch(action){
  state = managePets(state, action)
  render();
}

export function render(){
  let container = document.getElementById('container');
  container.innerHTML = state.pets.map(pet => {
    return `<ul><li>${pet.name}</li></ul>`

  })
}
