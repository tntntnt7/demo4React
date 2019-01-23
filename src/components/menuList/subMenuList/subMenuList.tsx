import * as React from 'react'
import { observer } from 'mobx-react'
import { action, observable } from 'mobx'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import { history } from '../../../common/utils/history'
import './style.scss'

export interface IMenu {
	title:				string
	path:					string
	icon:					React.ReactElement<any>
	subMenuList?: IMenuList
}

export interface IMenuList {
	className?:			string
	data:						IMenu[]
	selected?:				(title: string) => void
}

@observer
export default class SubMenuList extends React.Component<IMenu, {}> {

	public renderList = (list: IMenuList) => {
		const { className, data } = list
		return (
			<List className={className}>
				{ data.map(cell => {
						let sub = null
						if (cell.subMenuList && cell.subMenuList.data.length > 0) {
							sub = this.renderList(cell.subMenuList)
						}
						// const selected = this.selected == cell.title
						const selected = false
						return (
							<div style={{
								display: 'flex',
								flexDirection: 'column'
							}}>
								<ListItem
									className={`item ${selected && 'itemSelected'}`}
									key={cell.title}
									button
									selected={selected}
									// onClick={this.goto.bind(this, cell)}
								>
									<ListItemIcon className={`itemIcon ${selected && 'itemIconSelected'}`}>
										{ cell.icon }
									</ListItemIcon>
									<ListItemText inset primary={cell.title}/>
								</ListItem>
								{ sub }
							</div>
						)
					})
				}
			</List>
		)
	}

	public render(): JSX.Element {
		const { subMenuList } = this.props

		return (
			<div className='container'>
				{
					this.renderList(subMenuList)
				}
			</div>
		)
	}
}
