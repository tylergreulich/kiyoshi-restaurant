import React from 'react'

export const useIsSubmitting = () => {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false)

  return { isSubmitting, setIsSubmitting }
}
