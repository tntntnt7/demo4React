import * as React from 'react'
import { AppBar, Button, Toolbar, Typography, IconButton } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import './style.scss'

interface IActionBar {
	logout: () => void
	title: 	string
}

export default class ActionBar extends React.Component<IActionBar, {}> {
	public render(): JSX.Element {
		const { title, logout } = this.props
		return (
			<div className='content'>
				<AppBar position='static' color='default'>
					<Toolbar>
						<IconButton className='menu'>
							<MenuIcon/>
						</IconButton>
						<Typography className='title' variant='h6' color='inherit'>
							{title}
						</Typography>
						<Button className='button' onClick={logout}>logout</Button>
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}
