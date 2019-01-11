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
export default class Input extends React.Component<IActionBar, {}> {

	public render(): JSX.Element {
		return (
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
		)
	}
}
