import React from 'react'
import styled from 'styled-components'
import { SideMenu } from '../components/Admin/SideMenu/SideMenu'

const AdminWrapper = styled.section`
  display: flex;
`

export const AdminContainer: React.FC = ({ children }) => (
  <AdminWrapper>
    <SideMenu />
    {children}
  </AdminWrapper>
)
