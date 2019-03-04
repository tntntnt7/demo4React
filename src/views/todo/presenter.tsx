import * as React from 'react'
import { Fab, Tabs, Tab, AppBar, GridList, GridListTile } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import './style.scss'
import { ITodoList, ITodo } from './interface'
import { Context } from '../../context'
@observer
export default class Todo extends React.Component<ITodoList, {}> {

	@observable private tab: number = 0

	public componentWillMount() {
		Context.token && this.props.getTodoList()
	}

	@action
	public handleChange = (event, value) => {
		this.tab = value
	}

  public render(): JSX.Element {
		const { todoList } = this.props

    return (
			<div className='todoContent'>
				<AppBar position='static' color='inherit'>
					<Tabs value={this.tab} onChange={this.handleChange}>
						<Tab label='Flags' />
						<Tab label='History' />
						<Tab label='Unknow' />
					</Tabs>
				</AppBar>
				<GridList cellHeight={200} className='todoContainer' cols={4}>
					{ todoList.map(cell => (
						<GridListTile key={cell.id} cols={cell.cols || 1}>
							{ cell.path ? <img src={cell.path}/> : ''}
						</GridListTile>
					)) }
				</GridList>
			</div>
    )
	}
}
