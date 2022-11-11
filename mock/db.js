const Mock = require('mockjs')
const Random = Mock.Random
module.exports = () => {
    let data = { news: [] }
    for (let index = 0; index < 20; index++) {
        data.news.push({
            id: index,
            content: Random.cparagraph()
        })

    }
    return data;
}