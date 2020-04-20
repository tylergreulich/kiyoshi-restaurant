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

// <div id="single-menu-page"
//   <div class="row">>
//     <div class="
//       col-md-10 offset-md-1
//       offset-lg-2 col-lg-8
//       col-sm-12
//      ">
//       <div class="content-box">
//             <h1>{{ $food_category->title }}</h1>
//           <div class="col-md-12 food-items-container" style="padding: 0;">
//           @foreach ($food_items as $food_item)
//           <div style="padding: 0;">
//             <div class="item">
//               <div class="title">
//                 <h4>{{ $food_item->title }}</h4>
//                 <span class="price">${{ $food_item->price }}</span>
//               </div>
//               <div class="description">
//                 <p>{{ $food_item->description }}</p>
//               </div>
//             </div>
//            </div>
//            @endforeach
//           </div>
//        </div>
//       </div>
//     </div>
//   </div>
// </div>
