import { StoreState } from "../store/StoreState";
import { selectItem } from "../actions/items";
import { connect } from "react-redux";
import { Props, EntityTile } from "../components/EntityTile";

function mapStateToProps(state: StoreState, props: Props) {
  return {};
}

function mapDispatchToProps(dispatch: any, props: Props) {
  return {
    selectItem: (itemId: number) => {
      dispatch(selectItem(itemId));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EntityTile);