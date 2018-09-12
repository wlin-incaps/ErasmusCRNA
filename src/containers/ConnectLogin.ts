import { StoreState } from "../store/StoreState";
import { connect } from "react-redux";
import { socialLogin, LoginType } from "../actions/auth";
import Login, { Props } from "../components/Login";

function mapStateToProps(state: StoreState, props: Props) {
  return props;
}

function mapDispatchToProps(dispatch: any, props: Props) {
  return {
    onFacebookClicked: () => {
      dispatch(socialLogin(LoginType.Facebook));
    },
    onGoogleClicked: () => {
      dispatch(socialLogin(LoginType.Google));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);