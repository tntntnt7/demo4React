import * as React from 'react'
import { Button, Drawer, IconButton, Divider, AppBar, Toolbar, Menu, Typography, MenuItem, Badge } from '@material-ui/core'
import { Menu as MenuIcon, AccountCircle, Search as SearchIcon, ChevronLeft } from '@material-ui/icons'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import { history } from '../../common/utils/history'
import Search from '../../components/search/search'
import { home } from './interface'
import './style.scss'

@observer
export default class Home extends React.Component<home, {test: string}> {

	@observable private isDrawerOpen: boolean = false
	@observable private barDrawerOpenStyle: string = ''
	@observable private drawerOpenStyle: string = ''
	@observable private mainDrawerOpenStyle: string = ''
	@observable private anchorEl: HTMLElement

	constructor(props: any) {
		super(props)
		this.state = {
			test: 'abc'
		}

		this.props.getTaskList()
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

	private logout = _ => {
		location.replace('/')
	}

  public render(): JSX.Element {
		const open = Boolean(this.anchorEl)

    return (
			<div className='content'>
				<AppBar position='fixed' className={`bar ${this.barDrawerOpenStyle}`}>
					<Toolbar>
						{
							!this.isDrawerOpen &&
							<IconButton className='menu' onClick={this.handleDrawer} >
								<MenuIcon/>
							</IconButton>
						}
						<Typography className='title' variant='h6' color='inherit'>
							{'Home'}
						</Typography>
						<Search
							className='input'
							placeholder='Search...'
							onChange={() => null}
						/>
						<Button className='button' onClick={this.logout}>logout</Button>
						<div>
							<IconButton 
								aria-owns={open ? 'menu-appbar' : undefined}
								aria-haspopup='true'
								color='inherit'
								onClick={this.onMenuOpen}
							>
								<Badge
									badgeContent={89}
									color='secondary'
									invisible={false}>
									<AccountCircle/>
								</Badge>
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={this.anchorEl}
								anchorOrigin={{						// 锚点 相对于按钮
									vertical: 'bottom',
									horizontal: 'center',
								}}
								transformOrigin={{				// 相对于popover
									vertical: 'top',
									horizontal: 'center',
								}}
								open={open}
								onClose={this.onMenuClose}
							>
								<MenuItem onClick={this.onMenuClose}>profile</MenuItem>
								<MenuItem onClick={this.logout}>logout</MenuItem>
							</Menu>
						</div>
					</Toolbar>
				</AppBar>
				<Drawer
					className={`drawer ${this.drawerOpenStyle}`}
					variant='permanent'
					open={open}
				>
					<div className='head'>
						<IconButton onClick={this.handleDrawer}>
							<ChevronLeft/>
						</IconButton>
					</div>
					<Divider/>

					<Divider/>
				</Drawer>
				<div className={`main ${this.mainDrawerOpenStyle}`}>
					<div className={`mainContent`}>
						<div className={'test'} onClick={() => history.goBack()}>
							goback
						</div>
					</div>
				</div>
			</div>
    )
	}
}
