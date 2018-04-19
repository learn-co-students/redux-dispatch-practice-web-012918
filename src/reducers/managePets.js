export let state;


export function managePets(state = {pets:[]}, action){
  switch(action.type){
    case 'ADD_PET':
      let newObj = {...state, pets: [...state.pets]}
      newObj.pets.push(action.pet)
      return newObj
    break;
    case 'REMOVE_PET':
      newObj = {...state, pets: [...state.pets]}
      if (newObj.pets === []){
        return newObj
      }
      let pet = newObj.pets.filter((pet)=>pet.id === action.id)[0]
      let i = newObj.pets.indexOf(pet)
      newObj.pets.splice(i,1)
      return newObj
    break;
    default:
    return state;
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render()
}

export function render(){
  let ul = document.createElement('ul')
  for (let pet of state.pets){
    ul.innerHTML+=`<li>${pet.name}</li>`
  }
  let container = document.getElementById('container')
  container.appendChild(ul)
}
