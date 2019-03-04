import { IMenu } from '../../components/menuList/menuList'
import { ISnackBar } from '../../components/snackBar/snackBar'

export interface IHome extends IAppBar, IDrawer, ISnackBar {
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
	anchorEl: 						any
	title:								string
	barDrawerOpenStyle: 	string
	isDrawerOpen: 				boolean
	loginDialogOpen:			boolean
	logout:								() => void
	onMenuClose:					() => void
	handleDrawer:					() => void
	switchLoginDialog:		() => void
	onMenuOpen:						(event: any) => void
}
