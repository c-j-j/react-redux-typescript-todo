import { connect, Dispatch } from 'react-redux';
import { Presentation, Props } from './presentation';
import * as actions from '../../actions';

function mapDispatchToProps(dispatch: Dispatch<actions.AddTodo>): Props {
  return {
    addTodo: (text: string) => dispatch(actions.addTodo(text))
  };
}

export default connect(null, mapDispatchToProps)(Presentation);