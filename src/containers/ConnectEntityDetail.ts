import { StoreState } from "../store/StoreState";
import { Props, EntityDetail } from "../components/EntityDetail";
import { selectItem } from "../actions/items";
import { connect } from "react-redux";

function mapStateToProps(state: StoreState, props: Props) {
  return {
    item: state.items.items[state.items.itemId]
  };
}

function mapDispatchToProps(dispatch: any, props: Props) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(EntityDetail);