import * as React from 'react'
import { IHome, IHomeState } from './interface'
import { Drawer } from './drawer';
import { AppBar } from './appBar';
import './style.scss'

export default class Home extends React.Component<IHome, IHomeState> {

	constructor(props: any) {
		super(props)
		this.state = {
			menuList: [],
		}
	}

	public componentWillMount() {
		const { getMenuList } = this.props
		getMenuList()
	}

	public componentDidMount() {
		const { menuList } = this.props
		this.setState({ menuList: menuList })
	}

	public componentWillReceiveProps(nextProps: any) {
		console.log('componentWillReceiveProps', nextProps)
		const { menuList } = nextProps
		this.setState({
			menuList: menuList
		})
	}

  public render(): JSX.Element {
		const { mainDrawerOpenStyle } = this.props

    return (
			<div className='content'>
				<AppBar {...this.props} />
				<Drawer {...this.props} />
				<div className={`main ${mainDrawerOpenStyle}`}>
					{this.props.children}
				</div>
			</div>
    )
	}
}
