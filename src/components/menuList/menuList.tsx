import * as React from 'react'
import { observer } from 'mobx-react'
import { action, observable } from 'mobx'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import { history } from '../../common/utils/history'
import './style.scss'

export interface IMenu {
	title:			string
	path:				string
	icon:				React.ReactElement<any>
	divider?: 	boolean
}

export interface IMenuList {
	className:			string
	data:						IMenu[][]
	selected:				(title: string) => void
}

@observer
export default class MenuList extends React.Component<IMenuList, {}> {
	@observable private selected: string

	@action public goto = (menu: IMenu) => {
		this.selected = menu.title
		this.props.selected(this.selected)

		history.push(menu.path)
	}

	constructor(props: IMenuList) {
		super(props)
		if (props.data.length > 0 && props.data[0].length > 0) {
			this.selected = props.data[0][0].title
			history.push(props.data[0][0].path)
		}
	}

	public render(): JSX.Element {
		const { className, data } = this.props

		return (
			<div className='container'>
				{
					data.map((item, index) => (
						<div key={index}>
							{ index > 0 && <Divider/> }
							{
								<List className={className}>
									{ item.map(cell => {
											const selected = this.selected == cell.title
											return (
												<ListItem
													className={`item ${selected && 'itemSelected'}`}
													key={cell.title}
													button
													selected={selected}
													onClick={this.goto.bind(this, cell)}
												>
													<ListItemIcon className={`itemIcon ${selected && 'itemIconSelected'}`}>
														{ cell.icon }
													</ListItemIcon>
													<ListItemText inset primary={cell.title}/>
												</ListItem>
											)
										})
									}
								</List> 
							}
						</div>
					))
				}
			</div>
		)
	}
}
