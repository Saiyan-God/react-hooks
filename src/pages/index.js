import React, { createContext, useContext, useEffect, useReducer, useRef, useState } from 'react';
import { useInput } from '../useInput';
import MainApp from '@/MainApp';
import { FaStar } from "react-icons/fa";
import { useFetch } from '@/useFetch';

// // useState on Button
// function App() { 
//   const [status, setStatus] = useState("Not delivered");
//   return (
//     <div>
//       <h1>The package is: {status}</h1>
//       <button onClick={() => setStatus("Delivered")}>Deliver</button>
//     </div>
//   )
// }


// // useState on checkbox
// function App() {
//   const [checked, setChecked] = useState(false);
//   return (
//     <div>
//       <input type="checkbox" value={checked} onChange={() => {setChecked(!checked)}} />
//       <p>{checked ? "Checked" : "Not checked"}</p>
//     </div>
//   )
// }


// // useState for star rating
// const createArray = (length) => [...Array(length)];
// function Star({selected = false, onSelect}) {
//   return <FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>;
// }
// function StarRating({ totalStars = 5 }) {
//   const [selectedStars, setSelectedStars] = useState(0);
//   return createArray(totalStars).map((n, i) => (
//     <Star key={i} selected={i<selectedStars} onSelect={() => {setSelectedStars(i+1 == selectedStars ? 0 : i+1)}}/>
//   ));
//   //   <div>
    
//   // </div>
// }
// function App() {
//   return (
//     <StarRating totalStars={10}/>
//   )
// }

// // useEffect practice
// function App() {
//   const [name, setName] = useState("Foo");
//   const [admin, setAdmin] = useState(false);
//   useEffect(() => {
//     document.title = `Celebrate ${name}`;
//   },[name]);
//   useEffect(() => {
//     console.log(`The user is: ${admin ? "admin" : "not admin"}.`);
//   }, [admin])
//   return (
//     <section>
//       <p>Congratulations {name}!</p>
//       <button onClick={() => setName("Bar")}>Change Winner</button>
//       <p>{admin ? 'Logged in' : 'Not logged in'}</p>
//       <button onClick={() => setAdmin(true)}>Log in</button>
//     </section>
//   )
// }

// // fetch github data using useEffect
// function App() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch('https://api.github.com/users')
//     .then(response => response.json())
//     .then((response) => {
//       console.log('resp');
//       console.log(response);
//       return response;
//     })
//     .then(setData); 
//   }, [])

//   if(data) {
//     console.log(data);
//     return (
//       <div>
//         <ul>
//           {data.map((user) => (
//             <li key={user.id}>
//               {user.login}
//             </li>
//           ))}
//         </ul>
//         <button onClick={() => setData([])}>Remove Data</button>
//       </div>
//     )
//   }
//   return (
//     <>
//       <p> No users</p>
//     </>
//   )
// }

// // use reducer to create an increment
// function App() {
//   const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 0)
//   return <h1 onClick={() => setNumber(1)}>{number}</h1>
// }

// // useReducer to toggle checkbox
// function App() {
//   const [checked, toggle] = useReducer((checked) => !checked, false);
//   return (
//     <>
//       <input type="checkbox" value={checked} onChange={toggle} />
//       {checked ? "checked" : "not checked"}
//     </>
//   )
// }

// // using useReducer to dispatch different functions
// const initialState = {
//   message: "Hi"
// }
// function reducer(state, action) {
//   switch(action.type) {
//     case "yell":
//       return {
//         message: `HEY! I just said ${state.message}`
//       }
//       case "whisper":
//         return {
//           message: `excuse me, I just said ${state.message}`
//       }
//   }
// }
// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       <p>Message: {state.message}</p>
//       <button onClick={()=>{dispatch({type:"yell"})}}>YELL</button>
//       <button onClick={()=>{dispatch({type:"whisper"})}}>whisper</button>
//     </>
//   )
// }

// // use useRef to get info from components
// function App() {
//   const sound = useRef();
//   const color = useRef();
//   const submit = (e) => {
//     e.preventDefault();
//     const soundVal = sound.current.value;
//     const colorVal = color.current.value;
//     alert(`${soundVal} sounds like ${colorVal}`);
//     sound.current.value = "";
//     color.current.value = "";
//   }
//   return (
//     <form onSubmit={submit}>
//       <input ref={sound} type="text" placeholder="Sound..."/>
//       <input ref={color} type="color" />
//       <button>ADD</button>
//     </form>
//   )
// }

// // use useState for components -> called a controlled component
// function App() {
//   const [sound, setSound] = useState("");
//   const [color, setColor] = useState("#000000");
//   const submit = (e) => {
//     e.preventDefault();

//     alert(`${sound} sounds like ${color}`);
//     setSound("");
//     setColor("#000000");
//   }
//   return (
//     <form onSubmit={submit}>
//       <input value={sound} type="text" placeholder="Sound..." onChange={(e) => setSound(e.target.value)}/>
//       <input value={color} type="color" onChange={(e) => setColor(e.target.value)}/>
//       <button>ADD</button>
//     </form>
//   )
// }

// // using custom hook to encapsulate logic for setting and reseting states
// function App() {
//   const [titleProps, resetTitle] = useInput("");
//   const [colorProps, resetColor] = useInput("#000000");
//   console.log('title');
//   console.log(titleProps);
//   console.log('color');
//   console.log(colorProps);
//   const submit = (e) => {
//     e.preventDefault();
//     const soundVal = titleProps.value;
//     const colorVal = colorProps.value;
//     alert(`${soundVal} sounds like ${colorVal}`);
//     resetTitle();
//     resetColor();
//   }
//   return (
//     <form onSubmit={submit}>
//       <input {...titleProps} type="text" placeholder="Sound..."/>
//       <input {...colorProps} type="color" />
//       <button>ADD</button>
//     </form>
//   )
// }

// using context and provider to share state across components
// export const TreesContext = createContext();
// const trees = [
//   {id: "1", type: "Maple" },
//   {id: "2", type: "Oak" },
//   {id: "3", type: "Family" },
//   {id: "4", type: "Component" },
// ]
// export const useTrees = () => useContext(TreesContext);
// function App() {
//   return (
//     <TreesContext.Provider value={{trees}}>
//       <MainApp />
//     </TreesContext.Provider>
//   )
// }

function CustomFetchApp({login}) {
  const {loading, data, error} = useFetch(
    `https://api.github.com/users/${login}`
  );
  if(loading){
    return <h1>Loading...</h1>
  }
  if(error){
    return (
      <pre>{JSON.stringify(error, null, 2)}</pre>
      )
    }
    return (
      <div>
        <img src={data.avatar_url} alt={data.login} />
        <div>
          <h1>{data.login}</h1>
        </div>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </div>
  )
}
function App() {
  return (
    <CustomFetchApp login="Saiyan-God" />
  )
}

export default function Home() {
  return <App />
}
