import List from '@material-ui/core/List'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import LayersIcon from '@material-ui/icons/Layers'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import React from 'react'
import { SideMenuItem } from './SideMenuItem'

const sideMenuItems = [
  {
    name: 'Food Categories',
    Icon: LayersIcon,
    items: [
      {
        name: 'All Food Categories'
      },
      {
        name: 'Edit Food Categories'
      }
    ]
  },
  {
    name: 'Food Items',
    Icon: IconLibraryBooks,
    items: [
      {
        name: 'All Food Items'
      },
      {
        name: 'Edit Food Items'
      }
    ]
  }
]

export const SideMenuNavLinks: React.FC = () => {
  const classes = useStyles()

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {/* <AppMenuItem {...appMenuItems[0]} /> */}
      {sideMenuItems.map((item, index) => (
        <SideMenuItem {...item} key={index} />
      ))}
      <SideMenuItem name="Logout" Icon={ExitToAppIcon} isLogout />
    </List>
  )
}

const drawerWidth = 240

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: '100%'
    },
    navList: {
      width: drawerWidth
    },
    menuItem: {
      width: drawerWidth
    },
    menuItemIcon: {
      color: '#97c05c'
    }
  })
)
