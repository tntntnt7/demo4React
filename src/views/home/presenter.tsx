import * as React from 'react'
import { Button, Drawer, IconButton, Divider, AppBar, Toolbar, Menu, Typography, MenuItem, Badge, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Menu as MenuIcon, AccountCircle, Search as SearchIcon, ChevronLeft, Inbox as InboxIcon, Mail as MailIcon, Mail } from '@material-ui/icons'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import { history } from '../../common/utils/history'
import Search from '../../components/search/search'
import { home } from './interface'
import './style.scss'
import MenuList from '../../components/menuList/menuList';

@observer
export default class Home extends React.Component<home, {test: string}> {

	@observable private isDrawerOpen: boolean = false
	@observable private barDrawerOpenStyle: string = ''
	@observable private drawerOpenStyle: string = ''
	@observable private mainDrawerOpenStyle: string = ''
	@observable private anchorEl: HTMLElement
	@observable private selected: string = 'Home'

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

	@action public selectMenu = text => {
		this.selected = text
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
					open={this.isDrawerOpen}
				>
					<div className='head'>
						<IconButton className='close' onClick={this.handleDrawer}>
							<ChevronLeft/>
						</IconButton>
					</div>
					<Divider/>
					{/* TODO: 动态list */}
					<MenuList
						className={`drawerList ${this.drawerOpenStyle}`}
						data={[
							{
								title: 'a',
								path: '/',
								icon: <InboxIcon/>
							},{
								title: 'a',
								path: '/',
								icon: <InboxIcon/>,
								divider: true,
							},{
								title: 'a',
								path: '/',
								icon: <InboxIcon/>
							},
						]}
					/>


					<List className={`drawerList ${this.drawerOpenStyle}`}>
            {['Home', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
							<ListItem button key={text} selected={this.selected == text} onClick={this.selectMenu.bind(this, text)}>
								<ListItemIcon className='itemIcon'>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
          </List>
					
					<Divider/>
					<MenuList className={`drawerList ${this.drawerOpenStyle}`} data={[
						{
							title: 	't1',
							path:		'/p1',
							icon: 	<Mail/>,
						},
						{
							title: 	't2',
							path:		'/p2',
							icon: 	<Mail/>,
						},
						{
							title: 	't3',
							path:		'/p3',
							icon: 	<Mail/>,
						},
						{
							title: 	't4',
							path:		'/p4',
							icon: 	<Mail/>,
							divider: true,
						},
					]}/>

				</Drawer>
				<div className={`main ${this.mainDrawerOpenStyle}`}>
					<div className={`mainContent`}>
						<div className={'test'} onClick={() => history.goBack()}>
							goback
						</div>
						<Typography paragraph>
							Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
							facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
							tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
							consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
							sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
							In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
							et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique
							sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
							viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
							ultrices sagittis orci a.

							Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
							facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
							tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
							consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
							sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
							In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
							et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique
							sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
							viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
							ultrices sagittis orci a.

							Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
							facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
							tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
							consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
							sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
							In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
							et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique
							sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
							viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
							ultrices sagittis orci a.

							Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
							facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
							tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
							consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
							sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
							In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
							et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique
							sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
							viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
							ultrices sagittis orci a.

							Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
							facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
							tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
							consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
							sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
							In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
							et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique
							sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
							viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
							ultrices sagittis orci a.
						</Typography>
					</div>
				</div>
			</div>
    )
	}
}
