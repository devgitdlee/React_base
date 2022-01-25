import * as React from 'react';
import { useState } from 'react';
 
// state type 선언
interface Istate {
    counter: number
}
 
export function Counter() {
	// useState로 관리해 줄 state 의 type 설정
    const [state, setState] = useState<Istate>({
        counter: 0
    })
 
    const onIncrement = () => {
        setState({
            counter: state.counter+1
        })
    }
 
    const onDecrement = () => {
        if (state.counter === 0){
            alert("0 아래로는 내려가질 않습니다.");
            return;
        }
        setState({
            counter: state.counter-1
        })
    }
 
    return(
        <div>
            <h2>카운터</h2>
            <div>
                {state.counter}
            </div>
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        </div>
    )
}