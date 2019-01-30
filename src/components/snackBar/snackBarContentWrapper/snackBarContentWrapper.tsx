import * as React from 'react'
import { SnackbarContent, IconButton } from '@material-ui/core'
import { CheckCircle, Warning, Error, Info, Close } from '@material-ui/icons'
import '../style.scss'

const variantIcon = {
  success: 	CheckCircle,
  warning: 	Warning,
  error: 		Error,
  info: 		Info,
};

const colors = {
  success: 	'#339638',
  warning: 	'#ff9600',
  error: 		'#ce1f1f',
  info: 		'#0b69cc',
}

export interface ISnackBarContentWrapper {
	sbVariant: 'success' | 'warning' | 'error' | 'info'
	sbMessage: string
	sbOnClose: () => void
}

export class SnackBarContentWrapper extends React.Component<ISnackBarContentWrapper, {}> {

	public render(): JSX.Element {
		const {
			sbVariant,
			sbMessage,
			sbOnClose,
		} = this.props
		const Icon = variantIcon[sbVariant]

		return (
			<SnackbarContent
				className={`snackItem`}
				style={{ backgroundColor: colors[sbVariant] }}
				aria-describedby='client-snackbar'
				message={
					<span id='client-snackbar' className='snack-message'>
						<Icon className='snack-icon'/>
						{ sbMessage }
					</span>
				}
				action={[
					<IconButton
						key='close'
						aria-label='Close'
						color='inherit'
						onClick={sbOnClose}
					>
						<Close/>
					</IconButton>
				]}
			/>
		)
	}
}
