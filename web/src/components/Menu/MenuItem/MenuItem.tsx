import React from 'react'
import { IMenuItem } from '../MenuItems/MenuItems.interface'
import {
  FoodDescription,
  FoodItem,
  FoodItemsContainer,
  FoodPrice,
  FoodTitle,
  MenuContentBox
} from '../MenuItems/MenuItems.styles'

interface MenuItemProps {
  myCategoryTitle: string
  menuItems: IMenuItem[]
}

export const MenuItem: React.FC<MenuItemProps> = ({
  myCategoryTitle,
  menuItems
}) => {
  const currentMenuItems = menuItems.filter(
    ({ category_title }) => category_title === myCategoryTitle
  )

  return (
    <div>
      <h1>{myCategoryTitle}</h1>
      {currentMenuItems.map(({ id, title, price, description }) => (
        <MenuContentBox key={id}>
          <FoodItemsContainer className="col-md-12" style={{ padding: 0 }}>
            <div style={{ padding: 0 }}>
              <FoodItem>
                <FoodTitle>
                  <h4>{title}</h4>
                  <FoodPrice>${price.toFixed(2)}</FoodPrice>
                </FoodTitle>
                <FoodDescription>
                  <p>{description}</p>
                </FoodDescription>
              </FoodItem>
            </div>
          </FoodItemsContainer>
        </MenuContentBox>
      ))}
    </div>
  )
}
