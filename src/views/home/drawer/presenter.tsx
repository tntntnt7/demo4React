import * as React from 'react'
import { Drawer as NativeDrawer, IconButton, Divider } from '@material-ui/core'
import { ChevronLeft } from '@material-ui/icons'
import MenuList from '../../../components/menuList/menuList'
import { IDrawer } from '../interface'

export class Drawer extends React.Component<IDrawer, {}> {
	public render(): JSX.Element {
		const {
			menuList,
			isDrawerOpen,
			drawerOpenStyle,
			handleDrawer,
			changeTitle,
		} = this.props

		return (
			<NativeDrawer
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
					open={isDrawerOpen}
					switchDrawer={handleDrawer}
				/>
			</NativeDrawer>
		)
	}
}
