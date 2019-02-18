const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.length === 0
    ? 0
    : blogs.map(b => b.likes).reduce((acc, cur) => acc + cur)
}

const favouriteBlog = (blogs) => {
  const reducer = (acc, cur) => cur.likes > acc.likes ? cur : acc
  return blogs.length === 0
    ? undefined
    : blogs.reduce(reducer)
}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog
}