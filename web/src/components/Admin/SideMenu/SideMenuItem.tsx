import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'
import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/actions/authActions'
import { SideMenuItemComponent } from './SideMenuItemComponent'

// React runtime PropTypes
export const SideMenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  Icon: PropTypes.elementType,
  items: PropTypes.array
}

// TypeScript compile-time props type, infered from propTypes
// https://dev.to/busypeoples/notes-on-typescript-inferring-react-proptypes-1g88
type SideMenuItemPropTypes = PropTypes.InferProps<typeof SideMenuItemPropTypes>
type SideMenuItemPropsWithoutItems = Omit<SideMenuItemPropTypes, 'items'>

// Improve child items declaration
export type SideMenuItemProps = SideMenuItemPropsWithoutItems & {
  items?: SideMenuItemProps[]
  isLogout?: boolean
}

export const SideMenuItem: React.FC<SideMenuItemProps> = (props) => {
  const { name, link, Icon, items = [], isLogout } = props
  const classes = useStyles()
  const isExpandable = items && items.length > 0
  const [open, setOpen] = React.useState(false)

  const dispatch = useDispatch()

  function handleClick() {
    if (isLogout) {
      dispatch(logout())
    }

    setOpen(!open)
  }

  const MenuItemRoot = (
    <SideMenuItemComponent
      className={classes.menuItem}
      link={link}
      onClick={handleClick}
    >
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon className={classes.menuItemIcon}>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
    </SideMenuItemComponent>
  )

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <SideMenuItem {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    menuItem: {
      '&.active': {
        background: 'rgba(0, 0, 0, 0.08)',
        '& .MuiListItemIcon-root': {
          color: '#fff'
        }
      }
    },
    menuItemIcon: {
      color: '#97c05c'
    }
  })
)
