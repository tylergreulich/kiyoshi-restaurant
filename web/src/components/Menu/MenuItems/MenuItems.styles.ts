import styled from 'styled-components'

export const MenuWrapper = styled.div`
  padding: 200px 0;

  h1 {
    font-weight: 700;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.main.secondary};
    margin-bottom: 2rem;
    text-align: center;
  }

  .row {
    padding: 0 25rem;
  }
`

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
`

export const MenuContentBox = styled.div`
  padding: 40px;
`

export const FoodItemsContainer = styled.div`
  width: 100%;
`

export const FoodItem = styled.div`
  margin-bottom: 2rem;
`

export const FoodTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;

  h4 {
    text-transform: uppercase;
  }
`

export const FoodPrice = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.main.black};
  font-weight: 900;
`

export const FoodDescription = styled.div`
  line-height: 1.5;

  p {
    color: #6e7f8a;
  }
`
