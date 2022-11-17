import { UserInfo } from "./container_components/UserInfo";
import { withUser } from "./HOC/withUser";
import { UserInfoForm } from "./HOC/UserInfoForm";
// const UserInfoWithLoader = withUser(UserInfo, "234");
function App() {
  return (
    <>
      <UserInfoForm />
    </>
  );
}

export default App;
