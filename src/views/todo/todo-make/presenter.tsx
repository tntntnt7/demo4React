import * as React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Grid } from '@material-ui/core'
import { observer } from 'mobx-react'
import { ITodoMake } from '../interface'
import { MuiPickersUtilsProvider, InlineDatePicker } from 'material-ui-pickers'
import DateFnsUtils from '@date-io/date-fns'
import { observable, action } from 'mobx'
import '../style.scss'

@observer
export class TodoMake extends React.Component<ITodoMake, {}> {

	@observable private date: Date
	@observable private title: string = ''
	@observable private content: string = ''

	public componentWillMount(): void {
		const { date, title, content, onDateChange } = this.props

		this.date = date
		this.title = title
		this.content = content
		onDateChange(this.date)
	}

	public render(): JSX.Element {

		const { open, switchDialog, addTodo } = this.props

		return (
			<Dialog
				open={open}
				onClose={switchDialog}
				aria-labelledby='dialog-todo-make'
				fullWidth
			>
				<DialogTitle id='dialog-todo-make'>
					<Grid className='title'>{'New FLAG'}</Grid>
				</DialogTitle>
				<DialogContent>
					<Grid container spacing={24}>
						<Grid item xs={12}>
						 	<TextField
								label='title'
								margin='dense'
								variant='outlined'
								value={this.title}
								onChange={this.onTitleChange}
								style={{width: '100%'}}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								label='content'
								variant='outlined'
								multiline
								rowsMax='5'
								margin='dense'
								value={this.content}
								onChange={this.onContentChange}
								style={{width: '100%'}}
							/>
						</Grid>
						<Grid item xs={12}>
							<MuiPickersUtilsProvider
								utils={DateFnsUtils}
							>
								<InlineDatePicker
									clearable
									variant='outlined'
									label='deadline'
									margin='dense'
									format={'yyyy-MM-dd'}
									value={this.date}
									onChange={this.onDateChange}
								/>
							</MuiPickersUtilsProvider>
						</Grid>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Grid>
						<Button onClick={switchDialog} style={{ color: 'gray' }}>
							取消
						</Button>
						<Button onClick={addTodo} style={{ color: '#2096F3' }}>
							新建
						</Button>
					</Grid>
				</DialogActions>
			</Dialog>
		)
	}

	@action
	private onDateChange = date => {
		const { onDateChange } = this.props

		this.date = date
		onDateChange(date)
	}

	@action
	private onTitleChange = (event: any) => {
		const { value } = event.target
		const { onTitleChange } = this.props

		this.title = value
		onTitleChange(value)
	}

	@action
	private onContentChange = (event: any) => {
		const { value } = event.target
		const { onContentChange } = this.props

		this.content = value
		onContentChange(value)
	}
}
