import * as React from 'react'
import { AppBar as NativeAppBar, Toolbar, IconButton, Button, Badge, Menu, MenuItem, Typography } from '@material-ui/core'
import { Menu as MenuIcon, AccountCircle } from '@material-ui/icons'
import Search from '../../../components/search/search'
import { LoginContainer } from '../../login'
import { Context } from '../../../context'
import { IAppBar } from '../interface'

export class AppBar extends React.Component<IAppBar, {}> {
	public render(): JSX.Element {
		const {
			title,
			logout,
			anchorEl,
			isDrawerOpen,
			onMenuOpen,
			onMenuClose,
			handleDrawer,
			barDrawerOpenStyle,
			switchLoginDialog,
			loginDialogOpen,
		} = this.props
		const open = Boolean(anchorEl)

		return (
			<NativeAppBar position='fixed' className={`bar ${barDrawerOpenStyle}`}>
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
					{ title == 'Todo' && 
						<Search
							className='input'
							placeholder='Search...'
							onChange={() => null}
						/> 
					}
					{
						Context.user ?
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
								<MenuItem onClick={logout}>logout</MenuItem>
							</Menu>
						</div>
						:
						<div>
							<IconButton
								color='inherit'
								onClick={switchLoginDialog}
							>
								<AccountCircle/>
							</IconButton>
							<LoginContainer
								open={loginDialogOpen}
								switchDialog={switchLoginDialog}
							/>
						</div>
					}
				</Toolbar>
			</NativeAppBar>
		)
	}
}
