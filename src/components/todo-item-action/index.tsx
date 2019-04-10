import * as React from 'react'
import { Dialog, DialogTitle, DialogActions, Grid, Button } from '@material-ui/core';

interface ITodoItemAction {
	title:			string
	open:				boolean
	action:			(type: 'cancel' | 'giveup' | 'done') => void
}

export const renderTodoItem = (props: ITodoItemAction): JSX.Element => {
	const { open, title, action } = props

	return (
		<Dialog
			open={open}
			onClose={action.bind(this, 'cancel')}
			aria-labelledby='dialog-todo-item'
			fullWidth
		>
			<DialogTitle id='dialog-todo-item'>
				<Grid style={{color: '#313131', fontSize: '1.5em'}}>{`做完了？=> ${title}`}</Grid>
			</DialogTitle>
			<DialogActions>
				<Grid>
					<Button onClick={action.bind(this, 'cancel')} style={{ color: 'gray' }}>
						没
					</Button>
					<Button onClick={action.bind(this, 'giveup')} style={{ color: 'red' }}>
						不做了
					</Button>
					<Button onClick={action.bind(this, 'done')} style={{ color: '#2096F3' }}>
						是
					</Button>
				</Grid>
			</DialogActions>
		</Dialog>
	)
}
