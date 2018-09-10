import { StoreState } from "../store/StoreState";
import { Props, Main } from "../components/Main";
import { connect } from "react-redux";
import { Dispatch, Action } from "redux";

function mapStateToProps(state: StoreState, props: Props) {
  return {
    isInitialized: state.init.isInitialized,
    isAuthenticated: state.auth.token? true : false,
    state: state
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>, props: Props) {
  return props;
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);