import * as React from 'react'
import { login } from './interface'
import './style.scss'
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@material-ui/core';

export default class Login extends React.Component<login, {}> {

	public onUserNameChange = (event: any) => {
		const { onUserNameChange } = this.props
		onUserNameChange(event.target.value)
	}

	public onPasswordChange = (event: any) => {
		const { onPasswordChange } = this.props
		onPasswordChange(event.target.value)
	}

	public render(): JSX.Element {
		const { open, handleClose, login } = this.props

		return (
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
				<DialogContent>
					<DialogContentText>
						请输入用户名和密码以登入
					</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						id='name'
						label='用户名'
						fullWidth
						onChange={this.onUserNameChange}
					/>
					<TextField
						autoFocus
						margin='dense'
						id='name'
						label='密码'
						type='password'
						fullWidth
						onChange={this.onPasswordChange}
					/>
				</DialogContent>
				<DialogActions>
            <Button onClick={handleClose} color="primary">
              取消
            </Button>
            <Button onClick={login} color="primary">
              登入
            </Button>
          </DialogActions>
			</Dialog>
    )
	}
}
