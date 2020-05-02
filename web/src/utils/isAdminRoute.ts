type L = {
  pathname: string
}

export const isAdminRoute = (location: L): boolean => {
  console.log({ location })

  return (
    location.pathname === '/admin/food-categories' ||
    location.pathname === '/admin/food-items'
  )
}
