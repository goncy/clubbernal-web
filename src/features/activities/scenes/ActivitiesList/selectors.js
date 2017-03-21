import R from 'ramda'

export const showModal = information => R.pipe(
  R.assocPath(['modal', 'show'], true),
  R.assocPath(['modal', 'information'], information)
)

export const hideModal = R.pipe(
  R.assocPath(['modal', 'show'], false),
  R.assocPath(['modal', 'information'], null)
)
