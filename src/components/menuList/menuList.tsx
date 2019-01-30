import * as React from 'react'
import { observer } from 'mobx-react'
import { action, observable } from 'mobx'
import { List, ListItem, ListItemIcon, ListItemText, Divider, Collapse, Tooltip } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { history } from '../../common/utils/history'
import './style.scss'

export interface IMenu {
	title:				string
	path:					string
	icon?:				React.ReactElement<any>
	subMenuList?: IMenu[]
}

export interface IMenuList {
	open:						boolean
	className:			string
	data:						IMenu[][]
	switchDrawer:		() => void
	selected:				(title: string) => void
}

interface ISwitchMap {
	isExpand: boolean
	level:		number
}

/**
 * 	菜单列表组件,可无限拓展
 */
@observer
export default class MenuList extends React.Component<IMenuList, {}> {
	
	@observable private selected: string
	@observable private switchMap: Map<string, ISwitchMap> = new Map()

	constructor(props: IMenuList) {
		super(props)
		if (props.data.length > 0 && props.data[0].length > 0) {
			this.selected = props.data[0][0].title
			history.push(props.data[0][0].path)
		}
	}

	public componentWillReceiveProps(nextProps: IMenuList): void {
		console.log('cwrp', nextProps.open)
		if (this.props.open !== nextProps.open) {
			// TODO 有子菜单展开时, 关闭所有一级菜单
			// ts中map无法遍历
			// for (const item of this.switchMap.keys()) {
			// }
			let temp: Map<string, ISwitchMap> = new Map()
			console.log(this.switchMap.entries().next())
			if (this.switchMap.size > 0) {
				let flag = false
				while (!flag) {
					const cell = this.switchMap.entries().next()
					flag = cell.done
				}
			}
		}
	}

	@action private handleItemClick = (menu: IMenu, hasChild: boolean, times: number) => {
		// 重复点击item不会请求路由跳转
		this.selected != menu.title && history.push(menu.path)
		this.selected = menu.title

		// drawer关闭,点击有子菜单的item时,drawer自动打开
		const { open, switchDrawer } = this.props
		!open && hasChild && switchDrawer()
		
		// 设置有子菜单的item的开关情况
		if (hasChild) {
			const item = this.switchMap.get(menu.title)
			const flag = item ? item.isExpand : false
			this.switchMap.set(menu.title, {
				isExpand: !flag,
				level: times
			})
		}
		
		// 告知父组件当前选中的item
		this.props.selected(this.selected)
	}

	private renderList = (data: IMenu[], times: number = 0) => {
		const { className, open } = this.props

		return (
			<List className={className} disablePadding>
				{ data.map(cell => {
						// 是否选中
						const selected = this.selected == cell.title
						// 是否有子菜单
						const hasChild = cell.subMenuList && cell.subMenuList.length > 0
						// 是否展开
						const expand = this.switchMap.has(cell.title) && this.switchMap.get(cell.title).isExpand

						// 子菜单赋值
						let subList = null
						if (hasChild) {
							subList = this.renderList(cell.subMenuList, ++times)
						}

						return (
							<div 
								key={cell.title} 
								style={{
									display: 'flex',
									flexDirection: 'column',
									width: '100%',
								}}
							>
								<ListItem
									button
									selected={selected}
									onClick={this.handleItemClick.bind(this, cell, hasChild, times)}
								>
									<Tooltip title={open ? '' : cell.title} placement='right'>
										<ListItemIcon className={`itemIcon`}>
											{ cell.icon }
										</ListItemIcon>
									</Tooltip>
									<ListItemText inset primary={cell.title}/>
									{ hasChild && (expand ? <ExpandLess/> : <ExpandMore/>) }
								</ListItem>
								{ hasChild &&  
									<Collapse in={expand} timeout='auto' unmountOnExit>
										<div style={{display: 'flex'}}>
											{/** subList缩进, 最多缩进2次, 不然drawer太窄放不下 */}
											{ times < 3 && <div style={{width: 10}}/> }
											{ subList }
										</div>
									</Collapse>
								}
							</div>
						)
					})
				}
			</List>
		)
	}

	public render(): JSX.Element {
		const { data } = this.props

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
