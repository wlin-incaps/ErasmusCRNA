import { StoreState } from "../store/StoreState";
import { Props } from "../components/Splash";
import { connect } from "react-redux";
import { Home } from "../components/Home";
import { logout } from "../actions/auth";

function mapStateToProps(state: StoreState, props: Props) {
  return {};
}

function mapDispatchToProps(dispatch: any, props: Props) {
  return {
    onLogoutClicked: () => {
      dispatch(logout());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);