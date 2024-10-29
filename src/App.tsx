import CurrentView from "./Components/currentView";
import { useEffect, useState } from "react";
import { View } from "./Components/currentView";

const App = () => {
  const [toggleNode, setToggleNode] = useState(1);
  const handleToggle = () => {
    setToggleNode((prev) => (prev === 1 ? 2 : 1));
  };
  const [view, setView] = useState<View>('home');
  const handleView = (view: View) => {
    switch (view) {
      case 'home':
        setView('home');
        break;
      case 'sets':
        setView('sets');
        break;
      case 'my sets':
        setView('my sets');
        break;
      case 'about':
        setView('about');
        break;
      default:
        throw new Error('Unknown view');
    }
  };

  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:8081/crud')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])

  return (
    // <div>
    //   <table>
    //     <thead>
    //       <th>Name</th>
    //       <th>Gender</th>
    //       <th>Phone</th>
    //       <th>Address</th>
    //     </thead>
    //     <tbody>
    //       {data.map((d, i) => (
    //         <tr key={i}>
    //           <td>{d.Name}</td>
    //           <td>{d.Gender}</td>
    //           <td>{d.Phone}</td>
    //           <td>{d.Address}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <CurrentView toggleNode={toggleNode} handleToggle={handleToggle} view={view} handleView={handleView}></CurrentView>
  );
};

export default App;
