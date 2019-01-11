import * as React from 'react'
import { AppBar, Button, Toolbar, Typography, IconButton, Menu, MenuItem, InputBase } from '@material-ui/core'
import { Menu as MenuIcon, AccountCircle, Search as SearchIcon } from '@material-ui/icons'
import './style.scss'
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

interface IActionBar {
	logout: () => void
	title: 	string
}

@observer
export default class ActionBar extends React.Component<IActionBar, {}> {

	@observable private anchorEl


	@action public handleMenu = event => {
		this.anchorEl = event.currentTarget
	}

	@action public handleClose = _ => {
		this.anchorEl = null
	}

	public render(): JSX.Element {
		const { title, logout } = this.props
		const open = Boolean(this.anchorEl)
		return (
			<div className='content'>
				<AppBar position='static' className='bar'>
					<Toolbar>
						<IconButton className='menu'>
							<MenuIcon/>
						</IconButton>
						<Typography className='title' variant='h6' color='inherit'>
							{title}
						</Typography>
						<div className='search'>
							<div className='searchIcon'>
								<SearchIcon/>
							</div>
							<InputBase
								placeholder='Search...'
								className='input'
								defaultValue={''}
								value={''}
								onChange={() => null}
							/>
						</div>
						<Button className='button' onClick={logout}>logout</Button>
						<div>
							<IconButton 
								aria-owns={open ? 'menu-appbar' : undefined}
								aria-haspopup='true'
								color='inherit'
								onClick={this.handleMenu}
							>
								<AccountCircle/>
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
								onClose={this.handleClose}
							>
								<MenuItem onClick={this.handleClose}>profile</MenuItem>
								<MenuItem onClick={logout}>logout</MenuItem>
							</Menu>
						</div>
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}
