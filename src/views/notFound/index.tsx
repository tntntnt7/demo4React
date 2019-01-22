import * as React from 'react'
import './style.scss'

export default class NotFound extends React.Component<{}, {}> {

  public render(): JSX.Element {
    return (
			<div className='notFoundContent'>
				404
			</div>
    )
	}
}
