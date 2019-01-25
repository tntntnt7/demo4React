import { IMenu } from "../../components/menuList/menuList";

export interface IHome extends IAppBar, IDrawer {
	mainDrawerOpenStyle: 	string
	getMenuList: 					() => void
}

export interface IHomeState {
	menuList: IMenu[][]
}

export interface IDrawer {
	menuList: 				IMenu[][]
	isDrawerOpen: 		boolean
	drawerOpenStyle: 	string
	handleDrawer: 		() => void
	changeTitle: 			(title: string) => void
}

export interface IAppBar {
	title:								string
	barDrawerOpenStyle: 	string
	isDrawerOpen: 				boolean
	anchorEl: 						any
	handleDrawer:					() => void
	logout:								() => void
	onMenuClose:					() => void
	onMenuOpen:						(event: any) => void
}
