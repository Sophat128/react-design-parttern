import "./App.css";
import { ProductInfo } from "./container_components/ProductInfo";

import UserInfo from "./container_components/UserInfo";

function App() {
  return (
    <>
      <UserInfo userId="123" />
      <UserInfo userId="234" />
      <UserInfo userId="345" />
      <ProductInfo productId="1234"/>
    </>
  );
}

export default App;
