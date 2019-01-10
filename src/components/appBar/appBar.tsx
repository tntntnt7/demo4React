import * as React from 'react'
import { AppBar, Button, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core'
import { Menu as MenuIcon, AccountCircle } from '@material-ui/icons'
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
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'center',
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={open}
								onClose={this.handleClose}
							>
								<MenuItem onClick={this.handleClose}>profile</MenuItem>
								<MenuItem onClick={logout}>logout</MenuItem>
							</Menu>
						</div>
						<Button className='button' onClick={logout}>logout</Button>
						<Button className='button' onClick={logout}>logout</Button>
						<Button className='button' onClick={logout}>logout</Button>
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}
