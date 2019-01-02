import * as React from 'react'
import { todo } from './interface'
import Todo from './presenter';

export class TodoContainer extends React.Component<todo, {}> {

	constructor(props: any) {
		super(props)
	}

	public render(): JSX.Element {
		return (
			<Todo
				task={''}
			/>
		)
	}
}
