import { IMenu } from '../../components/menuList/menuList'
import config from '../config'

export const mapMenuIcon = (list: IMenu[]): IMenu[] => list.map(cell => {
		cell.icon = config.menuIcon[cell.title]
		cell.subMenuList && cell.subMenuList.length > 0 && (cell.subMenuList = mapMenuIcon(cell.subMenuList))
		return cell
})
