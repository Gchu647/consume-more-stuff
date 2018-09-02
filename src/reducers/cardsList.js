import { LOAD_CARDS, LOAD_CARD, ADD_CARD, EDIT_CARD } from '../actions';

const initialState = [
  // {
  //   title: 'soccer shoes',
  //   price: 'teeth',
  //   manufacturer: 'nike',
  //   model: 'vapor x',
  //   dimensions: 'M8XM8',
  //   details: 'make you run fast',
  //   image_url: 'https://i.ebayimg.com/images/g/BscAAOSweW5VDMoM/s-l300.jpg',
  //   seller_id: 1,
  //   category_id: 1,
  //   item_status_id: 1,
  //   condition_id: 1
  // }
]

const cardsList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return [...action.cards]
    case LOAD_CARD:
      return [action.card]
    case ADD_CARD:
      return [...state, action.card]
    case EDIT_CARD:
      state.map(card => {
        if (card.id === Number(action.editCard.id)) {
          state.splice(state.indexOf(card), 1)
          state.push(action.editCard);
        }
      })
      return [...state]
    default:
      return state;
  }
}


export default cardsList;