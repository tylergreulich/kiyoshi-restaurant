import axios from 'axios'
import React from 'react'
import { MenuItem } from '../MenuItem/MenuItem'
import { IMenuItem } from './MenuItems.interface'
import { MenuContainer, MenuWrapper } from './MenuItems.styles'

export const MenuItems = () => {
  const [menuItems, setMenuItems] = React.useState<IMenuItem[] | null>(null)

  React.useEffect(() => {
    axios
      .get<IMenuItem[]>('/api/menu')
      .then(({ data }) => setMenuItems(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <MenuWrapper>
      <div className="row">
        <MenuContainer
          className="
        col-md-10 offset-md-1
        offset-lg-2 col-lg-8
        col-sm-12
       "
        >
          {menuItems ? (
            <>
              <MenuItem myCategoryTitle="Starters" menuItems={menuItems} />
              <MenuItem
                myCategoryTitle="Sushi Burritos"
                menuItems={menuItems}
              />
              <MenuItem
                myCategoryTitle="Teriyaki Bowls"
                menuItems={menuItems}
              />
              <MenuItem
                myCategoryTitle="Teriyaki Veggie Bowls"
                menuItems={menuItems}
              />
              <MenuItem myCategoryTitle="Noodles" menuItems={menuItems} />
              <MenuItem myCategoryTitle="Sushi Rolls" menuItems={menuItems} />
            </>
          ) : (
            <div style={{ height: '100vh' }}></div>
          )}
        </MenuContainer>
      </div>
    </MenuWrapper>
  )
}
