import * as React from 'react'
import { InputBase } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import './style.scss'

interface ISearch {
	className?:			string
	value?:					string
	placeholder:		string
	defaultValue?:	string
	onChange: 			() =>	void
}

export default class Search extends React.Component<ISearch, {}> {

	public content: any

	public render(): JSX.Element {
		const { className, placeholder, defaultValue, value, onChange } = this.props
		return (
			<div className={`search ${className}`} ref={ref => this.content = ref}>
				<div className='searchIcon'>
					<SearchIcon/>
				</div>
				<InputBase
					className='input'
					value={value}
					placeholder={placeholder}
					defaultValue={defaultValue}
					onChange={onChange}
					onFocus={() => {
						this.content.style.width = '300px'
					}}
					onBlur={() => {
						this.content.style.width = '200px'
					}}
				/>
			</div>
		)
	}
}
