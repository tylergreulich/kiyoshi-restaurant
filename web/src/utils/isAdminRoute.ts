type L = {
  pathname: string
}

export const isAdminRoute = (location: L): boolean => {
  return (
    location.pathname === '/admin/food-categories' ||
    location.pathname === '/admin/food-items'
  )
}
