import { IMenu } from '../../components/menuList/menuList'
import config from '../config';

export const mapMenuIcon = (list: IMenu[][]): IMenu[][] => {
	list.map(cell => {
		cell.map(item => {
			item.icon = config.menuIcon[item.title]
			return item
		})
	})

	return list
}
