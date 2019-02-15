import * as React from 'react'
import { todo } from './interface'
import { Fab, Tabs, Tab, AppBar, GridList, GridListTile } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import './style.scss'

@observer
export default class Todo extends React.Component<todo, {}> {

	@observable private tab: number = 0

	public componentWillMount() {
		this.props.getTaskList()
	}

	@action
	public handleChange = (event, value) => {
		this.tab = value
	}

  public render(): JSX.Element {


		const mokeData = [
			{
				cols: 2,
				id: 1,
			},{
				path: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
				cols: 1,
				id: 2,
			},{
				path: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
				cols: 1,
				id: 3,
			},{
				cols: 1,
				id: 4,
			},{
				cols: 3,
				id: 5,
			},{
				path: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
				cols: 4,
				id: 6,
			},{
				cols: 1,
				id: 7,
			},{
				path: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
				cols: 2,
				id: 8,
			},{
				cols: 2,
				id: 9,
			},
		]
		

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
					{ mokeData.map(cell => (
						<GridListTile key={cell.id} cols={cell.cols || 1}>
							{ cell.path ? <img src={cell.path}/> : ''}
						</GridListTile>
					)) }
				</GridList>
			</div>
    )
	}
}
