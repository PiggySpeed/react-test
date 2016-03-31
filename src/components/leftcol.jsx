import * as React from 'react';
import Card from '../../node_modules/material-ui/lib/card/card';
import CardActions from '../../node_modules/material-ui/lib/card/card-actions';
import FlatButton from '../../node_modules/material-ui/lib/flat-button';
import CardText from '../../node_modules/material-ui/lib/card/card-text';
import Colors from '../../node_modules/material-ui/lib/styles/colors';
import FloatingActionButton from '../../node_modules/material-ui/lib/floating-action-button';
import ContentAdd from '../../node_modules/material-ui/lib/svg-icons/content/add';
import Clear from '../../node_modules/material-ui/lib/svg-icons/content/clear';
import TextField from '../../node_modules/material-ui/lib/text-field';
import IconButton from '../../node_modules/material-ui/lib/icon-button';

import { getState } from 'redux';
import { connect } from 'react-redux';
import { toggleTaskUnfinished, toggleTaskFinished, toggleTaskDelayed, getTodoList } from '../actions/actioncreators';

import * as store from '../reducers/store';

const TodoCard = ({number}) => (
  <Card className="card-1">
    <CardText>"hallo" +  {number}</CardText>
  </Card>
);

const TodoCardList = ({cards, cardtext}) => (
    <div>
      {console.log(cards)}
      {cards.map((item, id) => <TodoCard key={id} number={cardtext}/>)}
      <FloatingActionButton>
        <ContentAdd/>
      </FloatingActionButton>
    </div>
);

// takes in a Redux store's state and returns props to be passed into the
// presentational components, these props are updated any time the state changes
const mapStateToProps = (state) => {
  return {
    cards: state.cardlistReducer.cards,
    cardtext: state.cardReducer.value
  }
};
// takes in a dispatch method from the store and returns values to be passed into the
// props that use a dispatch method to dispatch actions.
// It specifies the behavior of which callback prop dispatches which action. In this
// case, the callback prop onTodoClick is set to dispatch the toggleTaskDelayed action.
//const mapDispatchToProps = (dispatch) => {
//  return {
//    todos: () => {
//      dispatch(getTodoList())
//    }
//  }
//};
// We can use the mapState and mapDispatch functions to describe the container component
// using the connect() function provided by react-redux. This is a curried function, which
// means that we will have to specify the presentational component that we want to
// pass the props to.
// The container component will calculate the props to pass on by merging the objects
// returned by mapState and mapDispatch, with its own props.
const TodoListContainer = connect(mapStateToProps)(TodoCardList);

export default class LeftCol extends React.Component {
  render() {
    return(
      <div className="left-col">
        <Card>
          <CardText>TODO</CardText>
        </Card>
        <TodoListContainer/>
      </div>
    )
  }
};