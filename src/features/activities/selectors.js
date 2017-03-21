import R from 'ramda'

const sortByName = R.sort(
  (a, b) => a.name.localeCompare(b.name)
)

export const groupByCategory = R.pipe(
  sortByName,
  R.groupBy(
    item => item.category
  )
)

export const flatCategories = R.pipe(
  R.values,
  R.flatten
)

export const hasActivities = R.pipe(
  R.isEmpty,
  R.not
)

export const getCategoriesNames = R.map(
  item => ({
    slug: item.slug,
    name: item.name
  })
)

export const filterActivities = (filter, list) => filter
  ? R.filter(
      item => item.category === filter, list
    )
  : R.identity(list)
