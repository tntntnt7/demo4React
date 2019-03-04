import * as React from 'react'
import { Snackbar as NativeSnakeBar } from '@material-ui/core'
import { SnackBarContentWrapper, ISnackBarContentWrapper } from './snackBarContentWrapper'

export interface ISnackBar extends ISnackBarContentWrapper {
	sbOpen: 		boolean
	sbDuration:	number
}

export default class SnackBar extends React.Component<ISnackBar, {}> {

	public render(): JSX.Element {
		const {
			sbDuration,
			sbOnClose,
			sbOpen,
		} = this.props

		return (
			<NativeSnakeBar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				open={sbOpen}
				autoHideDuration={sbDuration}
				onClose={sbOnClose}
			>
				<SnackBarContentWrapper
					{...this.props}
				/>
			</NativeSnakeBar>
		)
	}
}
