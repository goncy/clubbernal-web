import R from 'ramda'

export const getInformation = match => R.find(
  category => category.slug === match
)
