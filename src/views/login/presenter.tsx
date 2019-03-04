import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Snackbar, InputAdornment, IconButton } from '@material-ui/core'
import * as React from 'react'
import { ILogin } from './interface'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import './style.scss'
import { VisibilityOff, Visibility } from '@material-ui/icons';

@observer
export default class Login extends React.Component<ILogin, {}> {

	@observable private isLogin: boolean = true
	@observable private userNameVerified: boolean = true
	@observable private passwordVerified: boolean = true
	@observable private showPassword: boolean = false
	@observable private userName: string = ''
	@observable private password: string = ''
	@observable private helperText: string = ''

	@action
	private switch = (flag: boolean) => {
		this.isLogin = flag
		this.userName = ''
		this.password = ''
		this.userNameVerified = true
		this.passwordVerified = true
	}

	@action
	private onUserNameChange = (event: any) => {
		const { onUserNameChange } = this.props
		const { value } = event.target

		this.helperText = ''
		this.userName = value
		this.userNameVerified = Boolean(value)
		onUserNameChange(value)
	}

	@action
	private onPasswordChange = (event: any) => {
		const { onPasswordChange } = this.props
		const { value } = event.target

		this.password = value
		this.passwordVerified = Boolean(value)
		onPasswordChange(value)
	}

	@action
	private doLogin = async () => {
		this.userNameVerified = Boolean(this.userName)
		this.passwordVerified = Boolean(this.password)
		if (!this.userNameVerified || !this.passwordVerified) { return }
		
		const { login, register, switchDialog } = this.props
		this.isLogin ? await login() : await register()
		switchDialog()
	}

	@action
	private checkName = async () => {
		if (!this.isLogin) {
			const { checkNameExist } = this.props
			const exist = await checkNameExist()

			if (exist) {
				this.helperText = '此用户名已存在'
				this.userNameVerified = false
			} else {
				this.userNameVerified = true
			}			
		}
	}

	@action
	private switchPassword = () => {
		this.showPassword = !this.showPassword
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
				<DialogTitle id='form-dialog-title'>
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
						variant='outlined'
						value={this.userName}
						required = {!this.isLogin}
						error={!this.userNameVerified}
						onChange={this.onUserNameChange}
						onBlur={this.checkName}
						helperText={this.helperText}
						style={{width: '100%'}}
					/>
					<TextField
						margin='dense'
						label='密码'
						type={this.showPassword ? '' : 'password'}
						variant='outlined'
						value={this.password}
						required = {!this.isLogin}
						error={!this.passwordVerified}
						onChange={this.onPasswordChange}
						style={{width: '100%', borderColor: 'red'}}
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<IconButton onClick={this.switchPassword}>
										{this.showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							),
						}}
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
