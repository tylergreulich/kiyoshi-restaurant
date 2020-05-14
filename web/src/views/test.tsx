import Axios from 'axios'
import React from 'react'

export const Test = () => {
  React.useEffect(() => {
    Axios.get('https://kiyoshi-restaurant.xyz/api/menu')
      .then((res) => console.log(res))
      .catch((err) => console.error(err))
  })

  return <div>A component</div>
}
