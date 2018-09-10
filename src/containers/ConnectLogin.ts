import { StoreState } from "../store/StoreState";
import { Props, Main } from "../components/Main";
import { connect } from "react-redux";
import { loginFacebook, storeToken } from "../actions/auth";
import Login from "../components/Login";

function mapStateToProps(state: StoreState, props: Props) {
  return props;
}

function mapDispatchToProps(dispatch: any, props: Props) {
  return {
    onFacebookClicked: () => {
      dispatch(loginFacebook());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);