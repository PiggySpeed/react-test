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

import { connect } from 'react-redux';
import { toggleCard } from '../actions/actioncreators';

import * as store from '../reducers/store';

//styles
const CardStyles = (cardstatus) => {
  switch(cardstatus) {
    case "default":
      return {backgroundColor: Colors.white};
    case "done":
      return {backgroundColor: Colors.greenA200};
    case "delayed":
      return {backgroundColor: Colors.yellowA100};
  }
};

const FetchNextCardStyle = (cardstatus) => {
  switch(cardstatus) {
    case "default":
      return "done";
    case "done":
      return "delayed";
    case "delayed":
      return "default";
  }
};

//presentational component
const TodoCard = ({onClick, style, cardtext}) => (
  <Card style={style} className="card-1">
    <CardText onClick={onClick}>{cardtext}</CardText>
  </Card>
);

//container component
const TodoCardList = ({cardtextbyid, cardstatusbyid, onTodoClick}) => (
  <div>
    {cardtextbyid.map((item, id) => (<TodoCard
                                key={id}
                                style={CardStyles(cardstatusbyid[id][id])}
                                cardtext={item[id]}
                                onClick={() => onTodoClick(id, "sample", FetchNextCardStyle(cardstatusbyid[id][id]))}/>))}
    <FloatingActionButton>
      <ContentAdd/>
    </FloatingActionButton>
  </div>
);

const mapStateToProps = (state) => {
  return {
    cardtextbyid: state.cardlistReducer.cardtextbyid,
    cardstatusbyid: state.cardlistReducer.cardstatusbyid
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (cardkey, cardtextbyid, cardstatus) => {
      dispatch(toggleCard(cardkey, cardtextbyid, cardstatus))
    }
  }
};

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoCardList);

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