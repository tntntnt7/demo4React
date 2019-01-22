import * as React from 'react'
import { TodoContainer } from "../views/todo"

export const fragments = [
	{
		path: 		'/todo',
		fragment:	TodoContainer,
	},
	{
		path: 		'test',
		fragment:	() => <h1>test</h1>,
	},
]
