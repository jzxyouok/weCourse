const { mysql } = require('../qcloud')

module.exports = async ctx => {
  let chapterId = ctx.request.query.chapterId
  let result = await mysql('signIn').where('chapter_id', chapterId)

  ctx.state.data = {
    result: result,
    code: 0,
  }
}