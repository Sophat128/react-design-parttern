import logo from "./logo.svg";
import "./App.css";
import SplitScreen from "./layoutComponents/SplitScreen";
import RegularList from "./layoutComponents/RegularList";
import SmallPersonListItem from "./layoutComponents/people/SmallPersonListItem";
import LargePersonListItem from "./layoutComponents/people/LargePersonListItem";
import NumberedList from "./layoutComponents/NumberedList";
import SmallProductListItem from "./layoutComponents/product/SmallProductListItem";
import { LargeProductListItem } from "./layoutComponents/product/LargeProductListItem";
import Modal from "./layoutComponents/Modal";
import CurrentUserLoader from "./container_components/CurrentUserLoader";
import UserInfo from "./container_components/UserInfo";
import { UncontrolledForm } from "./controlled & uncontrolled components/Uncontrolled";
import { ControlledForm } from "./controlled & uncontrolled components/ControlledForm";
import ControlledModal from "./controlled & uncontrolled components/ControlledModal";
import { useState } from "react";
import { UncontrolledOnboardingFlow } from "./controlled & uncontrolled components/UncontrolledOnboarding";
import { ControlledOnboardingFlow } from "./controlled & uncontrolled components/ControlledOnboarding";

// const LeftHandeler = ({ name }) => (
//   <p style={{ backgroundColor: "red" }}>{name}!</p>
// );
// const RightHandeler = ({ message }) => (
//   <p style={{ backgroundColor: "green" }}>{message}!</p>
// );
// const people = [
//   {
//     name: "Sophat",
//     age: 22,
//     hairColor: "brown",
//     hobbies: ["Swimming", "Bicycling", "Video game"],
//   },
//   {
//     name: "Bopha",
//     age: 25,
//     hairColor: "black",
//     hobbies: ["golfing", "cooking"],
//   },
//   {
//     name: "David",
//     age: 20,
//     hairColor: "brown",
//     hobbies: ["Singing", "Video game"],
//   },
// ];
// const products = [
//   {
//     name: "Flate TV",
//     price: "$300",
//     description: "Huge screen with great deal",
//     rating: 4.5,
//   },
//   {
//     name: "Basketball",
//     price: "$10",
//     description: "Just like a pro use",
//     rating: 3.5,
//   },
//   {
//     name: "Running Shoes",
//     price: "$120",
//     description: "State-of-art",
//     rating: 4.2,
//   },
// ];
const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <p>{ControlledOnboardingFlow.currentChildren}</p>
    <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 90 })}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <button onClick={() => goToNext({})}>Next</button>
  </>
);
const StepFour = ({ goToNext }) => (
  <>
    <h1>Step 4</h1>
    <button onClick={() => goToNext({})}>Next</button>
  </>
);
function App() {
  // const [shouldShowModal, setShouldShowModal] = useState(false);
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
   
  };
  return (
    // <SplitScreen
    //   left={LeftHandeler}
    //   right= {RightHandeler}
    //   leftWeight={1}
    //   rightWeight={3}
    // />

    // <SplitScreen
    //   leftWeight={1}
    //   rightWeight={3}
    // >
    //   <LeftHandeler name="Sophat"/>
    //   <RightHandeler message= "Hello"/>

    // </SplitScreen>
    <>
      <ControlledOnboardingFlow
        currentIndex={currentIndex}
        onNext={onNext}
        onFinish={() => alert("The end")}
      >
        <StepOne />
        <StepTwo />
        <StepThree/>
        {/* {onboardingData.age >= 60 && <StepThree />} */}
        <StepFour />
      </ControlledOnboardingFlow>
      {/* <UncontrolledOnboardingFlow
        onFinish={(data) => {
          console.log(data);
          alert("Onboarding Finished");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow> */}
      {/* <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        <h1>Hello!</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide Modal" : "Show Modal"}
      </button> */}
      {/* <ControlledForm /> */}

      {/* <UncontrolledForm/> */}

      {/* <CurrentUserLoader>
        <UserInfo/>
      </CurrentUserLoader> */}
      {/* <Modal>
        <LargeProductListItem product={products[0]}/>
      </Modal> */}

      {/* <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <NumberedList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      /> */}
    </>
  );
}

export default App;
