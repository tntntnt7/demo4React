import { IMenu } from "../../components/menuList/menuList";

export interface home {
	anchorEl: 						any
	title:								string
	barDrawerOpenStyle:		string
	mainDrawerOpenStyle:	string
	drawerOpenStyle:			string
	isDrawerOpen:					boolean
	menuList:							IMenu[][]
	handleDrawer:					() => void
	onMenuClose:					() => void
	onMenuOpen:						(event: any) => void
	changeTitle:					(title: string) => void
	getMenuList:					() => void
}

export interface homeState {
	menuList: IMenu[][]
}
