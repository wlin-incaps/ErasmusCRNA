import { StoreState } from "../store/StoreState";
import { Props, Splash } from "../components/Splash";
import { connect } from "react-redux";
import { getAuthStore } from "../actions/auth";

function mapStateToProps(state: StoreState, props: Props) {
  return {};
}

function mapDispatchToProps(dispatch: any, props: Props) {
  return {
    onDidMount: () => {
      dispatch(getAuthStore());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);