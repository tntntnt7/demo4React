import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Snackbar } from '@material-ui/core'
import * as React from 'react'
import { ILogin } from './interface'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import './style.scss'

@observer
export default class Login extends React.Component<ILogin, {}> {

	@observable
	private isLogin: boolean = true

	@action
	public switch = (flag: boolean) => {
		this.isLogin = flag
	}

	private doLogin = async () => {
		const { login, register, switchDialog } = this.props
		this.isLogin ? await login() : await register()
		switchDialog()
	}

	public onUserNameChange = (event: any) => {
		const { onUserNameChange } = this.props
		onUserNameChange(event.target.value)
	}

	public onPasswordChange = (event: any) => {
		const { onPasswordChange } = this.props
		onPasswordChange(event.target.value)
	}

	public render(): JSX.Element {
		const {
			open,
			switchDialog,
		} = this.props

		return (
			<Dialog
				open={open}
				onClose={switchDialog}
				aria-labelledby='form-dialog-title'
			>
				<DialogTitle id='form-dialog-title' >
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<div className={this.isLogin ? 'selected' : 'unSelected'} onClick={this.switch.bind(this, true)}>登录</div>
						<div style={{ marginLeft: 10, marginRight: 10 }}>/</div>
						<div className={this.isLogin ? 'unSelected' : 'selected'} onClick={this.switch.bind(this, false)}>注册</div>
					</div>
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						{ !this.isLogin && `请输入用户名和密码以注册`}
					</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						label='用户名'
						fullWidth
						onChange={this.onUserNameChange}
						variant='outlined'
					/>
					<TextField
						margin='dense'
						label='密码'
						type='password'
						fullWidth
						onChange={this.onPasswordChange}
						variant='outlined'
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={switchDialog} style={{ color: 'gray' }}>
						取消
					</Button>
					<Button onClick={this.doLogin} style={{ color: '#2096F3' }}>
						{ this.isLogin ? '登录' : '注册' }
					</Button>
				</DialogActions>
			</Dialog>
    )
	}
}
