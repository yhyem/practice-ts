import { TimeTable } from "./timeTable/templates";
import { RecoilEnv } from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

function App() {
  return (
    <>
      <TimeTable />
    </>
  );
}

export default App;
