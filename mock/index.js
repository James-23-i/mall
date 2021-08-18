const Mock = require('mockjs')

let data = Mock.mock({
  category: {
    context: {
      currentTime: '@datetime(T)'
    },
    'isEnd|1': true,
    'list|16': [
      {
        acm: '@string(30)',
        'maitKey|500-1500': 578,
        'miniWallkey|50275-17062603': 10062603,
        title: '@title(1)'
      }
    ],
    'nextPage|1': 1
  }
})


module.exports = function(app) {
  if(process.env.Mock === 'true') {
    app.use('/api/category', (req, res) => {
      res.json(data)
    })
  }
}