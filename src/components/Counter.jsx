import { useSelector } from "react-redux";

function Counter() {
    const {count} = useSelector(state =>state.counter);
    console.log(count);
  return (

    <div>
        <button>Increment</button>
        <div>
            <h1>0</h1>
        </div>
        <button>Decrement</button>
    </div>
  )
}

export default Counter