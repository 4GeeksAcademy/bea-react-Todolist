import React from "react";


//create your first component
const Home = () => {

		return(

			<TodoListWithArrayOfObjects />

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

const TodoListWithArrayOfObjects = () => {

	const defaultState = [

		{
			title: 'Hola',
			description: 'Description',
		}

	]

	const [todoList, setTodoList] = React.useState(defaultState)
	const [titleValue, setTitleValue] = React.useState("")
	const [descValue, setDescValue] = React.useState("")
	const ADD_NEW_VALUE_KEY = "Enter"

	const handleInputChange = (e) => {
		setTitleValue(e.target.value)
	}

	const handleDescInputChange = (e) => {
		setDescValue(e.target.value)
	}

	const addNewElement = () => {
		if(!titleValue) return

		setTodoList(prev => [...prev, {title: titleValue, description: descValue }])
		setTitleValue("")
		setDescValue("")
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

			<input value={titleValue} onChange={handleInputChange} placeholder="Title"/>
			<textarea value={descValue} onChange={handleDescInputChange} onKeyDown={onEnter} placeholder="Description"/>

			<button onClick={handleClick}>Add</button>

			{
				todoList.map((todoItem, index) => {
					return (
						<section key={index} style={{display:"flex", padding:"0.1rem"}}>
							<h5 className="titleObject">{todoItem.title}</h5>
							<p className="todoItem">{todoItem.description}</p>
							<button className="closeX" onClick={() => deleteElementOnClick(index)}>X</button>
						</section>
					)
				})

			}

		</div>
	</>
}


export default Home;
