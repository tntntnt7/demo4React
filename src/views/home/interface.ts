export interface home {
	anchorEl: 						any
	title:								string
	barDrawerOpenStyle:		string
	mainDrawerOpenStyle:	string
	drawerOpenStyle:			string
	isDrawerOpen:					boolean
	handleDrawer:					(_: any) => void
	onMenuClose:					(_: any) => void
	onMenuOpen:						(event: any) => void
	changeTitle:					(title: string) => void
}
