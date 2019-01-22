import { observable, action } from 'mobx'

export class Store {
	@observable public title: string = ''
	@observable public anchorEl: HTMLElement
	@observable public isDrawerOpen: boolean = false
	@observable public drawerOpenStyle: string = ''
	@observable public barDrawerOpenStyle: string = ''
	@observable public mainDrawerOpenStyle: string = ''

	@action public changeTitle = (title: string) => {
		this.title = title
	}

	@action public onMenuOpen = event => {
		this.anchorEl = event.currentTarget
	}

	@action public onMenuClose = _ => {
		this.anchorEl = null
	}

	@action	public handleDrawer = _ => {
		this.isDrawerOpen = !this.isDrawerOpen
		this.barDrawerOpenStyle = this.isDrawerOpen ? 'barDrawerOpen' : ''
		this.drawerOpenStyle = this.isDrawerOpen ? 'drawerOpen' : ''
		this.mainDrawerOpenStyle = this.isDrawerOpen ? 'mainDrawerOpen' : ''
	}

}
