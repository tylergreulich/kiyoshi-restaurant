import { Typography } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { SideMenuNavLinks } from './SideMenuNavLinks'

const KiyoshiText = styled(Typography)`
  text-align: center;
  margin-bottom: 1.5rem !important;
  text-transform: uppercase;
  cursor: pointer;
`

const StyledContainer = styled.div`
  ${({ theme }) => theme.xl`
    display: none !important;
  `}
`

export const SideMenu: React.FC = () => {
  const classes = useStyles()

  const history = useHistory()

  return (
    <StyledContainer className={clsx('App', classes.root)}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <KiyoshiText variant="h4" onClick={() => history.push('/')}>
          Kiyoshi's
        </KiyoshiText>
        <SideMenuNavLinks />
      </Drawer>
    </StyledContainer>
  )
}

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#535454',
    color: '#fff'
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}))
