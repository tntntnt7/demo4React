import * as React from 'react'
import { observer } from 'mobx-react'
import { action, observable } from 'mobx'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import { history } from '../../common/utils/history'
import './style.scss'

export interface IMenu {
	title:				string
	path:					string
	icon?:				React.ReactElement<any>
	subMenuList?: IMenu[]
}

export interface IMenuList {
	className:			string
	data:						IMenu[][]
	selected:				(title: string) => void
}

@observer
export default class MenuList extends React.Component<IMenuList, {}> {
	@observable private selected: string
	@observable private switchMap: Map<string, boolean> = new Map()

	@action public goto = (menu: IMenu) => {
		const flag = this.switchMap.get(menu.title)
		this.switchMap.set(menu.title, !flag)

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

	public renderList = (data: IMenu[]) => {
		const { className } = this.props
		return (
			<List className={className}>
				{ data.map(cell => {
						const selected = this.selected == cell.title
						const hasChild = cell.subMenuList && cell.subMenuList.length > 0
						let subList = null
						
						if (hasChild) {
							subList = this.renderList(cell.subMenuList)
						}

						return (
							<div 
								key={cell.title} 
								style={{
									display: 'flex',
									flexDirection: 'column',
									width: '100%'
								}}
							>
								<ListItem
									button
									selected={selected}
									onClick={this.goto.bind(this, cell)}
								>
									<ListItemIcon className={`itemIcon`}>
										{ cell.icon }
									</ListItemIcon>
									<ListItemText inset primary={cell.title}/>
									{ hasChild && `>` }
								</ListItem>
								<div className={`subList ${!(this.switchMap.has(cell.title) && this.switchMap.get(cell.title)) && 'subListHide'}`}>
									{ this.switchMap.has(cell.title) && this.switchMap.get(cell.title) && subList }
								</div>
							</div>
						)
					})
				}
			</List>
		)
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
								this.renderList(item)
							}
						</div>
					))
				}
			</div>
		)
	}
}
