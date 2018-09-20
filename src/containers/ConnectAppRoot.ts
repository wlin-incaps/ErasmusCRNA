import { StoreState } from "../store/StoreState";
import { connect } from "react-redux";
import { setFontLoaded } from "../actions/assets";
import { Props, AppRoot } from "../navigation/AppRoot";

function mapStateToProps(state: StoreState, props: Props) {
  return { hasFonts: state.assets.hasFonts };
}

function mapDispatchToProps(dispatch: any, props: Props) {
  return {
    setFontsLoaded: (hasFonts: boolean) => {
      dispatch(setFontLoaded(hasFonts));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRoot);