import { StoreState } from "../store/StoreState";
import { Props, StaggerGrid } from "../components/StaggerGrid";
import { getItems } from "../actions/items";
import { connect } from "react-redux";

function mapStateToProps(state: StoreState, props: Props) {
  return {
    items: state.items.items
  };
}

function mapDispatchToProps(dispatch: any, props: Props) {
  return {
    getItems: () => {
      dispatch(getItems());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StaggerGrid);