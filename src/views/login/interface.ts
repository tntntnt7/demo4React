export interface ILoginDialog {
	open: boolean
	switchDialog: () => void
}

export interface ILogin extends ILoginDialog {
	userName: string
	password: string
	login: () => void
	register: () => void
	onUserNameChange:	(text: string) => void
	onPasswordChange:	(text: string) => void
}
