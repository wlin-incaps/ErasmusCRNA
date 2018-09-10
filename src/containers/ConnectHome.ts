import { StoreState } from "../store/StoreState";
import { Props } from "../components/Splash";
import { connect } from "react-redux";
import { Home } from "../components/Home";
import { logoutFacebook } from "../actions/auth";

function mapStateToProps(state: StoreState, props: Props) {
  return props;
}

function mapDispatchToProps(dispatch: any, props: Props) {
  return {
    onLogoutClicked: () => {
      dispatch(logoutFacebook());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);