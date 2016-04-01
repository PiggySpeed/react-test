import * as types from './actiontypes';

export const toggleCard = (cardkey, cardstatus) => {
  return {
    type: types.TOGGLE_TODO,
    cardkey: cardkey,
    cardstatus: cardstatus
  }
};