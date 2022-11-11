const Mock = require('mockjs')
const Random = Mock.Random
module.exports=()=>{
    let data = { news: [] }
    for (let index = 0; index < 50; index++) {
        data.news.push({
            id: index,
            title:Random.cword(10,20),
            content: Random.cparagraph(10),
        })

    }
    return data;
}