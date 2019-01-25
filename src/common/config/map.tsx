import * as React from 'react'
import { FormatListNumbered, Build, NotInterested, Star } from "@material-ui/icons";

export const map = {
	menuIcon: {
		'Todo': <FormatListNumbered className='icon'/>,
		'Test': <Build className='icon'/>,
		'404':	<NotInterested className='icon'/>,
		'Star': <Star className='icon'/>,
	}
}
