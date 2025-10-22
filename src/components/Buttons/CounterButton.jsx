import React,{useState} from 'react';
import ReuseableButton from './ReuseableButton';

const CounterButton = ({ initial = 0 }) => {
  const [count , setCount] = useState(initial);
  return (
    <ReuseableButton
      onClick={() => setCount(count + 1)}
      label={`Count: ${count}`}
      styleType="secondary"
    />
  );
}
export default CounterButton;

/*
export default function CounterButton({ initial = 0 }) {
  const [count, setCount] = useState(initial);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
    >
      Count: {count}
    </button>
  );
}
*/