import { StoreState } from "../store/StoreState";
import { connect } from "react-redux";
import { socialLogin, LoginType } from "../actions/auth";
import { Props, Logo } from "../components/Logo";

function mapStateToProps(state: StoreState, props: Props) {
  return { hasFonts: state.assets.hasFonts };
}

function mapDispatchToProps(dispatch: any, props: Props) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Logo);