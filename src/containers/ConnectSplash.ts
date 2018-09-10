import { StoreState } from "../store/StoreState";
import { Props, Splash } from "../components/Splash";
import { connect } from "react-redux";
import { getAuthentication } from "../actions/auth";

function mapStateToProps(state: StoreState, props: Props) {
  return props;
}

function mapDispatchToProps(dispatch: any, props: Props) {
  return {
    onDidMount: () => {
      dispatch(getAuthentication());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);