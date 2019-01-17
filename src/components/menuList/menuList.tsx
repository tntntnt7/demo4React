import * as React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import './style.scss'
import { observer } from 'mobx-react';
import { action, observable } from 'mobx';

export interface IMenu {
	title:			string
	path:				string
	icon:				React.ReactElement<any>
	divider?: 	boolean
}

export interface IMenuList {
	className:			string
	data:						IMenu[]
}

@observer
export default class MenuList extends React.Component<IMenuList, {}> {

	@observable private selected: string

	@action public goto = (menu: IMenu) => {
		this.selected = menu.title
		// TODO 路由
	}

	constructor(props: IMenuList) {
		super(props)
		if (props.data.length > 0) {
			this.selected = props.data[0].title
		}
	}

	public render(): JSX.Element {
		const { className, data } = this.props
		return (
			<div>
				{
					data.map((cell, index) => {
						
					})
				}
			</div>
		)
		
		
		// (
		// 	<List className={className}>
		// 		{
		// 			data.map((cell, index) => (
		// 				<ListItem
		// 					key={index}
		// 					button
		// 					selected={this.selected == cell.title}
		// 					onClick={this.goto.bind(this, cell)}
		// 				>
		// 					<ListItemIcon className='itemIcon'>
		// 						{ cell.icon }
		// 					</ListItemIcon>
		// 					<ListItemText>{cell.title}</ListItemText>
		// 				</ListItem>
		// 			))
		// 		}
		// 	</List>
		// )
	}
}
