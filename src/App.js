import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import Say from "./Say";
import EventPratice from "./EventPratice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import { Component, createRef, useRef } from "react";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";
// import Info from "./Info";
import Counter from "./Counter";
import Average from "./Average";
import Immer from "./Immer";
import ColorBox from "./components/ColorBox";
import ColorContext, { ColorProvider } from "./context/color";
import SelectColor from "./components/SelectColor";

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColor />
        <ColorBox />
      </div>
    </ColorProvider>
  );
  // return <Immer />;
  // return <Average />;
  // return <Counter />;
  // return <Info />;
}

// function getRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }
// class App extends Component {
//   state = {
//     color: "#000000",
//   };
//   handleClick = () => {
//     this.setState({
//       color: getRandomColor(),
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤 색상</button>
//         <ErrorBoundary>
//           <LifeCycleSample color={this.state.color} />
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }

// function App() {
// return <IterationSample />;
// let scrollBox = useRef();
// return <MyComponent favoriteNumber={1}>리액트</MyComponent>;
// return <Say></Say>;
// return <EventPratice />;
// return <ValidationSample />;
// return (
//   <div>
//     <ScrollBox ref={scrollBox} />
//     <button
//       onClick={() => {
//         scrollBox.scrollToBottom();
//       }}
//     >
//       맨 밑으로
//     </button>
//   </div>
// );
// }

export default App;
