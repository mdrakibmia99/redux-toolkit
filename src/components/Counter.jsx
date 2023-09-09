import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counter/counterSlice";

function Counter() {
    const {count} = useSelector(state =>state.counter);
     const dispatch=useDispatch();
    console.log(count);
  return (

    <div>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <div>
            <h1>{count}</h1>
        </div>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter