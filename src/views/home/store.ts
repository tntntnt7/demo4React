import { observable, action, runInAction } from 'mobx'
import { IMenu } from '../../components/menuList/menuList';
import { mapMenuIcon } from '../../common/utils/dataMap';

const tempMenuList = [[
	{
		title: 	'Todo',
		path:		'/todo',
	},
	{
		title: 	'Test',
		path:		'/test',
		subMenuList: [
			{
				title: 'Star',
				path: '/',
				subMenuList: [
					{
						title: 't11',
						path: '/',
					},{
						title: 't12',
						path: '/',
						subMenuList: [
							{
								title: 't121',
								path: '/',
							}			
						]
					}
				]
			},
			{
				title: 't2',
				path: '/',
			}
		],
	},
],[
	{
		title: 	'404',
		path:		'/',
	},
],
]

export class Store {
	@observable public title: string = ''
	@observable public anchorEl: HTMLElement
	@observable public isDrawerOpen: boolean = false
	@observable public drawerOpenStyle: string = ''
	@observable public barDrawerOpenStyle: string = ''
	@observable public mainDrawerOpenStyle: string = ''
	@observable public menuList: IMenu[][] = []

	@action public changeTitle = (title: string) => {
		this.title = title
	}

	@action public onMenuOpen = event => {
		this.anchorEl = event.currentTarget
	}

	@action public onMenuClose = () => {
		this.anchorEl = null
	}

	@action	public handleDrawer = () => {
		this.isDrawerOpen = !this.isDrawerOpen
		this.barDrawerOpenStyle = this.isDrawerOpen ? 'barDrawerOpen' : ''
		this.drawerOpenStyle = this.isDrawerOpen ? 'drawerOpen' : ''
		this.mainDrawerOpenStyle = this.isDrawerOpen ? 'mainDrawerOpen' : ''
	}

	@action public getMenuList = () => {
		runInAction(() => {
			this.menuList = tempMenuList.map(cell => mapMenuIcon(cell))
		})
	}
}
