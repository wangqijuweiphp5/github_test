//轮播图的数据图片
function getBannerData() {

  var arr = [
    'http://qb4rdjp8h.bkt.clouddn.com/美甲1.jpg',
    'http://qb4rdjp8h.bkt.clouddn.com/美甲2.jpg',
    'http://qb4rdjp8h.bkt.clouddn.com/美甲1.jpg',
    'http://qb4rdjp8h.bkt.clouddn.com/美甲4.jpg',
    'http://qb4rdjp8h.bkt.clouddn.com/美甲5.jpg',
  ]
  return arr
}
//导航数据
function getIndexNavData() {

  var arr = [

    {
      id: 1,
      icon: '../../images/nav_icon_01.png',
      title: '推存'
    },
    {
      id: 2,
      icon: '../../images/nav_icon_02.png',
      title: '美甲'
    },
    {
      id: 3,
      icon: '../../images/nav_icon_03.png',
      title: '美容'
    },
    {
      id: 4,
      icon: '../../images/nav_icon_04.png',
      title: '美发'
    },
    {
      id: 5,
      icon: '../../images/nav_icon_05.png',
      title: '美睫'
    }


  ]

  return arr

}
// list列表
function getIndexNavSectionData() {

  var arr = [

    [


      {

        subject: "睫毛稀疏 种睫毛来帮忙",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/睫毛1.jpg",
        price: "￥100",
        message: '嫁接超长睫毛'

      },

      {

        subject: "自然系列美甲",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美甲1.jpg",
        price: "￥99",
        message: '简单大方是当今美甲的潮流'

      },

      {

        subject: "伊本造型",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/yibenzaoxing.jpg",
        price: "￥1047",
        message: '伊本造型是由著名形象设计师杨进先生创办。'

      },
      {

        subject: "秋季自然特价美甲",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美甲2.jpg",
        price: "￥187",
        message: '我们最求得是没有最长的时间特价'

      },

      {

        subject: "画对了妆，微微一笑颜值倍儿高！",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美容1.jpg",
        price: "￥87",
        message: '《微微一笑很倾城》的剧照简直美腻到不要不要的'

      }

    ],
    [
      {

        subject: "秋季自然特价美甲",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美甲2.jpg",
        price: "￥187",
        message: '我们最求得是没有最长的时间特价'

      },

      {

        subject: "大气艳丽红美甲",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美甲1.jpg",
        price: "￥199",
        message: '红色代表喜庆同样也极富有性感的感觉'

      },

      {

        subject: "自然系列美甲",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美甲1.jpg",
        price: "￥99",
        message: '简单大方是当今美甲的潮流'

      },
      {

        subject: "红色小性感美甲",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美甲4.jpg",
        price: "￥223",
        message: '菱格指甲十分能展现女性的知性，红色与藕粉色的搭配更添温柔'

      },
      {

        subject: "法式美甲",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美甲5.jpg",
        price: "￥229",
        message: '这款法式美甲非常养'

      }


    ],
    [
      {

        subject: "油性毛孔粗大肌肤",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美容1.jpg",
        price: "￥199",
        message: '油性毛孔粗大用啥面膜 油性毛孔大正确护肤小妙招'

      },

      {

        subject: "皮肤角质层",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美容2.jpg",
        price: "￥100",
        message: '增厚皮肤角质层小妙招'

      },

      {

        subject: "妊娠纹",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美容3.jpg",
        price: "￥167",
        message: '预防妊娠纹'

      },
      {

        subject: "眼袋",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美容4.jpg",
        price: "￥169",
        message: '去除眼袋的最佳方法 让你神采奕奕告别“熊猫眼”'

      },
      {

        subject: "牙疼",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美容5.jpg",
        price: "￥332",
        message: '牙疼止不住怎么办？缓解牙疼痛的方法在这里！'

      }

    ],
    [
      {

        subject: "羊毛卷",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美发1.jpg",
        price: "￥339",
        message: '烫羊毛卷要具备哪些条件？这三点都是关键~'

      },

      {

        subject: "齐肩短翘发",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美发2.jpg",
        price: "￥442",
        message: '它除了百搭之外，还有着满满的少女感，是一款减龄不失时尚感的短发发型'

      },
      {

        subject: "螺旋烫中长发型",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美发3.jpg",
        price: "￥312",
        message: '螺旋烫的中长卷发型对修饰脸型度真的很高，非常耐看百搭的卷度让长发看起来更轻盈、不厚重。'

      },
  
      {

        subject: "齐平刘海长直发",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美发4.jpg",
        price: "￥211",
        message: '自然顺直的长发搭配一个齐平刘海就能让你散发出灵动迷人的气息，尽显甜美的女人味。'

      },
      {

        subject: "蛋卷刘海",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美发5.jpg",
        price: "￥99",
        message: '蛋卷刘海，俏皮可爱，相当减龄'

      }

    ],
    [
      {

        subject: " 睫毛稀疏 种睫毛来帮忙",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/睫毛1.jpg",
        price: "￥100",
        message: '嫁接超长睫毛'

      },
      {

        subject: " 睫毛稀疏 种睫毛来帮忙",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美睫1.jpg",
        price: "￥152",
        message: '嫁接超长睫毛'

      },
      {

        subject: " 睫毛稀疏 种睫毛来帮忙",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美睫2.jpg",
        price: "￥49",
        message: '嫁接超长睫毛'

      },
      {

        subject: " 睫毛稀疏 种睫毛来帮忙",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美睫3.jpg",
        price: "￥99",
        message: '嫁接超长睫毛'

      },
      {

        subject: " 睫毛稀疏 种睫毛来帮忙",
        civerpath: "http://qb4rdjp8h.bkt.clouddn.com/美睫4.jpg",
        price: "￥199",
        message: '嫁接超长睫毛'

      }
    ]

  ]
  return arr
}

// 技师
function getSkillData() {

  var arr = [
    {
      company: "贵阳美容美发有限公司",
      avatar: "http://qb4rdjp8h.bkt.clouddn.com/技师1.jpg",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    },
    {
      company: "贵阳美容美发有限公司",
      avatar: "http://qb4rdjp8h.bkt.clouddn.com/技师2.jpg",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    },
    {
      company: "贵阳美容美发有限公司",
      avatar: "http://qb4rdjp8h.bkt.clouddn.com/技师3.jpg",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    },
    {
      company: "贵阳美容美发有限公司",
      avatar: "http://qb4rdjp8h.bkt.clouddn.com/技师4.jpg",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    },
    {
      company: "贵阳美容美发有限公司",
      avatar: "http://qb4rdjp8h.bkt.clouddn.com/技师5.jpg",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    },
    {
      company: "贵阳美容美发有限公司",
      avatar: "http://qb4rdjp8h.bkt.clouddn.com/技师6.jpg",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    }

  ]
  return arr
}
//暴露借口
module.exports = {
  getBannerData: getBannerData,
  getIndexNavData: getIndexNavData,
  getIndexNavSectionData: getIndexNavSectionData,
  getSkillData: getSkillData
}