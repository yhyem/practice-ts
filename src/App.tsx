import { TimeTable } from "./timeTable/templates";
import { RecoilEnv } from "recoil";
import KakaoLogin from "./kakaoLogin/pages";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

function App() {
  return <>{/* <KakaoLogin /> */}</>;
}

export default App;
