import * as React from 'react'
import { Button, Drawer, IconButton, Divider, AppBar, Toolbar, Menu, Typography, MenuItem, Badge } from '@material-ui/core'
import { Menu as MenuIcon, AccountCircle, Search as SearchIcon, ChevronLeft, Inbox as InboxIcon, Mail as MailIcon, FormatListNumbered, NotInterested, Build } from '@material-ui/icons'
import MenuList from '../../components/menuList/menuList'
import Search from '../../components/search/search'
import { home } from './interface'
import './style.scss'

const menuList = [[
		{
			title: 	'Todo',
			path:		'/todo',
			icon: 	<FormatListNumbered/>,
		},
		{
			title: 	'test',
			path:		'/test',
			icon: 	<Build/>,
		},
	],[
		{
			title: 	'404',
			path:		'/',
			icon: 	<NotInterested/>,
		},
	],
]

export default class Home extends React.Component<home, {test: string}> {

	constructor(props: any) {
		super(props)
		this.state = {
			test: 'abc'
		}
	}

	public componentWillReceiveProps(nextProps: any) {
		console.log('componentWillReceiveProps', nextProps)
	}

	private logout = _ => {
		location.replace('/')
	}

  public render(): JSX.Element {
		const {
			title,
			anchorEl,
			onMenuOpen,
			onMenuClose,
			changeTitle,
			isDrawerOpen,
			handleDrawer,
			drawerOpenStyle,
			barDrawerOpenStyle,
			mainDrawerOpenStyle,
		} = this.props
		const open = Boolean(anchorEl)

    return (
			<div className='content'>
				<AppBar position='fixed' className={`bar ${barDrawerOpenStyle}`}>
					<Toolbar>
						{
							!isDrawerOpen &&
							<IconButton className='menu' onClick={handleDrawer} >
								<MenuIcon/>
							</IconButton>
						}
						<Typography className='title' variant='h6' color='inherit'>
							{title}
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
								onClick={onMenuOpen}
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
								anchorEl={anchorEl}
								anchorOrigin={{						// 锚点 相对于按钮
									vertical: 'bottom',
									horizontal: 'center',
								}}
								transformOrigin={{				// 相对于popover
									vertical: 'top',
									horizontal: 'center',
								}}
								open={open}
								onClose={onMenuClose}
							>
								<MenuItem onClick={onMenuClose}>profile</MenuItem>
								<MenuItem onClick={this.logout}>logout</MenuItem>
							</Menu>
						</div>
					</Toolbar>
				</AppBar>
				<Drawer
					className={`drawer ${drawerOpenStyle}`}
					variant='permanent'
					open={isDrawerOpen}
				>
					<div className='head'>
						<IconButton className='close' onClick={handleDrawer}>
							<ChevronLeft/>
						</IconButton>
					</div>
					<Divider/>
					<MenuList
						className={`drawerList ${drawerOpenStyle}`}
						data={menuList}
						selected={changeTitle}
					/>
				</Drawer>
				<div className={`main ${mainDrawerOpenStyle}`}>

					{this.props.children}

				</div>
			</div>
    )
	}
}
