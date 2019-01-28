export interface ILoginDialog {
	open: boolean
	switch: () => void
}

export interface ILogin extends ILoginDialog {
	userName: string
	password: string
	login: () => void
	onUserNameChange:	(text: string) => void
	onPasswordChange:	(text: string) => void
}
