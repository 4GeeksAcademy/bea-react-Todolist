import React from "react";


//create your first component
const Home = () => {

		return(

			<TodoListWithArray />

		)
			
};



const TodoListWithArray = () => {
	const [todoList, setTodoList] = React.useState(["Hola"])
	const [inputValue, setInputValue] = React.useState([""])
	const ADD_NEW_VALUE_KEY = "Enter"

	const handleInputChange = (e) => {
		setInputValue(e.target.value)
	}

	const addNewElement = () => {
		if(!inputValue) return

		setTodoList(prev => [...prev, inputValue])
		setInputValue("")
	}

	const handleClick = () => addNewElement()

	const onEnter = (e) => {
		if (e.key === ADD_NEW_VALUE_KEY) addNewElement()
	}

	const deleteElementOnClick = (indexToDelete) => {
		setTodoList(prev => prev.filter((_, index) => index !== indexToDelete))
	}

	return <>

		<h1>To do List</h1>

		<div className="input">

			<input value={inputValue} onChange={handleInputChange} onKeyDown={onEnter} />

			<button onClick={handleClick}>add one</button>

			{
				todoList.map((todoItem, index) => {
					return (
						<section key={index} style={{display:"flex", padding:"0.1rem"}}>
							<p className="todoItem">{`${todoItem}`}</p>
							<button className="closeX" onClick={() => deleteElementOnClick(index)}>X</button>
						</section>
					)
				})

			}

		</div>
	</>
}


export default Home;
