const insertAtIndex = (list, item, index) =>
  [
    ...list.slice(0, index),
    item,
    ...list.slice(index)
  ]

const removeByIndex = (arr, at) => arr.filter((item, idx) => idx !== at)

export { insertAtIndex, removeByIndex }