import * as React from 'react';
import { useState, useEffect } from 'react';
import { TodoItem } from './TodoItem';
 
// 타입을 인터페이스로 선언
interface todoItem{
    item:string
}
 
interface ItodoItems {
    idx: number,
    item: string,
    isDelete: boolean
    onDelete?: Function,
}
 
interface ItodoList {
    todoItems: ItodoItems[],
}
 
export function TodoList() {
    const [todoItem, setTodoItem] = useState<todoItem>({
        item:''
    })
    const [todoList, setTodoList] = useState<ItodoItems>({
        idx: 0,
        item: '',
        isDelete: false,
    })
    const [todoData, setTodoData] = useState<ItodoList>({
        todoItems: [todoList],
    })
    
 
    const onSubmit = (e:React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault() // 페이지 전환 막기
        if (todoItem.item === ""){
            alert("빈 칸입니다. 입력해주세요.");
            return;
        }
        setTodoList({
            idx: todoList.idx+1,
            item: todoItem.item,
            isDelete: false,
        })
    }
 
    useEffect(() => {
        setTodoItem({// input 창 초기화
            item: ''
        })
 
        setTodoData({
            todoItems: todoData.todoItems.concat(todoList),
        })
    }, [todoList])
 
    useEffect(() => {
        //console.log('todoData 변경 :: ', todoData )
    }, [todoData])
 
    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setTodoItem({
            item: value
        })
    }
 
    const onDelete = (idx: number) => {
        let temp2:Array<ItodoItems> = []
        let temp3:Array<ItodoItems> = []
        const deleteTodoList = todoData.todoItems.map(
            data => {
                let temp1: ItodoItems = {
                    idx: data.idx,
                    item: data.item,
                    isDelete: data.idx === idx ? true : false
                }
                if(temp2.length < 1){
                    temp2 = [temp1]
                } else {
                    temp2 = temp2.concat(temp1)
                }
                setTodoData({
                    todoItems: temp3
                })
            }
        )
    }
 
    const TodoList = todoData.todoItems.map( 
        (data, idx) => (
            <React.Fragment key={idx}>
                <TodoItem
                    idx={data.idx}
                    item={data.item}
                    isDelete={data.isDelete}
                    onDelete={onDelete}
                />
            </React.Fragment>
        )
    )
 
    return(
        <div>
            <h2>할일</h2>
            <div>
                <form onSubmit={onSubmit}>
                    <input type='text' name='content' value={todoItem.item} onChange={handleInput} />
                    <button type='submit'>추가</button>
                </form>
            </div>
            <div>
                {TodoList}
            </div>
        </div>
    )
}