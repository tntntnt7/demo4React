import * as React from 'react'
import { Button, Drawer, IconButton, Divider, AppBar, Toolbar, Menu, Typography, MenuItem, Badge } from '@material-ui/core'
import { Menu as MenuIcon, AccountCircle, ChevronLeft } from '@material-ui/icons'
import MenuList from '../../components/menuList/menuList'
import Search from '../../components/search/search'
import { home, homeState } from './interface'
import './style.scss'

export default class Home extends React.Component<home, homeState> {

	constructor(props: any) {
		super(props)
		this.state = {
			menuList: [],
		}
	}

	public componentWillMount() {
		const { getMenuList } = this.props
		getMenuList()
	}

	public componentDidMount() {
		const { menuList } = this.props
		this.setState({ menuList: menuList })
	}

	public componentWillReceiveProps(nextProps: any) {
		console.log('componentWillReceiveProps', nextProps)
		const { menuList } = nextProps
		this.setState({
			menuList: menuList
		})
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
		const { menuList } = this.state

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
