import List from '@material-ui/core/List'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import LayersIcon from '@material-ui/icons/Layers'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import React from 'react'
import { SideMenuItem } from './SideMenuItem'

export const SideMenuNavLinks: React.FC = () => {
  const classes = useStyles()

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {/* <AppMenuItem {...appMenuItems[0]} /> */}
      <SideMenuItem
        name="Food Categories"
        Icon={LayersIcon}
        pathname="food-categories"
      />
      <SideMenuItem
        name="Food Items"
        Icon={IconLibraryBooks}
        pathname="food-items"
      />
      <SideMenuItem name="Logout" Icon={ExitToAppIcon} pathname="logout" />
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
