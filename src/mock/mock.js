//引入mockjs
const Mock = require('mockjs');

//使用mockjs模拟数据
Mock.mock('/api/home', (req, res) => {
  return {
    likes: {
      title: '猜你喜欢',
      data: [
        {
          id: 1,
          name: '西瓜1',
          price: 2000,
          desc: '越南西瓜',
        },
        {
          id: 2,
          name: '西瓜2',
          price: 3000,
          desc: '越南西瓜',
        },
        {
          id: 3,
          name: '西瓜3',
          price: 4000,
          desc: '越南西瓜',
        },
        {
          id: 4,
          name: '西瓜4',
          price: 5000,
          desc: '越南西瓜',
        },
        {
          id: 5,
          name: '西瓜5',
          price: 6000,
          desc: '越南西瓜',
        },
        {
          id: 6,
          name: '西瓜6',
          price: 7000,
          desc: '越南西瓜',
        },
      ],
    },
    recommends: {
      title: '今日推荐',
      data: [
        {
          id: 11,
          name: '木瓜1',
          price: 2000,
          desc: '越南木瓜',
        },
        {
          id: 22,
          name: '木瓜2',
          price: 3000,
          desc: '越南木瓜',
        },
        {
          id: 33,
          name: '木瓜3',
          price: 4000,
          desc: '越南木瓜',
        },
        {
          id: 44,
          name: '木瓜4',
          price: 5000,
          desc: '越南木瓜',
        },
        {
          id: 55,
          name: '木瓜5',
          price: 6000,
          desc: '越南木瓜',
        },
        {
          id: 66,
          name: '木瓜6',
          price: 7000,
          desc: '越南木瓜',
        },
      ],
    },
  };
});

Mock.mock('/api/detail', (req, res) => {
  const id = JSON.parse(req.body).id;
  return {
    id,
    name: '越南西瓜',
    desc:
      '越南西瓜品种优越,出生于蓝布达多河畔的一个幽闭的庄园中,主人是一个热情好客的中年男人,他的额头已经谢顶,满脸的皱纹爬满脸部,但是却有一双乌黑明亮的大眼睛...',
    price: 2000,
    img: require('../assets/xigua.jpeg'),
    count: 100,
    date: '2019-09-09',
  };
});

Mock.mock('/api/login', (req, res) => {
  return {
    user_id: 1,
  };
});
