import * as React from 'react'
import { FormatListNumbered, Build, NotInterested } from "@material-ui/icons";

export const map = {
	menuIcon: {
		'Todo': <FormatListNumbered className='icon'/>,
		'Test': <Build className='icon'/>,
		'404':	<NotInterested className='icon'/>
	}
}
