import { connect } from 'react-redux';
import { Presentation, Props } from './presentation';
import { StoreState } from '../../types';

function mapStateToProps({items}: StoreState): Props {
  return {items};
}

export default connect(mapStateToProps)(Presentation);