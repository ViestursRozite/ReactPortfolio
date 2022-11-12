
import './App.css';
import { Home } from './pages';
import useCollapse from 'react-collapsed';

// function Collapsible() {
//   const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
// return (
//   <div className="collapsiblii">
//       <div className="header" {...getToggleProps()}>
//           {isExpanded ? 'Collapse' : 'Expandd'}
//       </div>
//       <div {...getCollapseProps()}>
//           <div className="content">
//               Now you can see the hidden content. <br/><br/>
//               Click again to hide...
//           </div>
//       </div>
//   </div>
//   );
// };

function App() {
  return (
    <div className="App">
      {/* <Collapsible></Collapsible> */}
      <Home></Home>
    </div>
  );
}

export default App;
