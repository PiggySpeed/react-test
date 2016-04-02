import * as types from './actiontypes';

export const toggleCard = (cardkey, cardtext, cardstatus) => {
  return {
    type: types.TOGGLE_TODO,
    cardkey: cardkey,
    cardtext: cardtext,
    cardstatus: cardstatus
  }
};