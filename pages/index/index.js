Page({
    data:{
        "nav_bar_list":['推荐','居家','餐厨','配件','服装','电器','洗护','杂货','饮食','婴童','志趣'],
        "nav_active_item":0,
        "swiper_list":[
            'http://yanxuan.nosdn.127.net/e5891a68df93c5ee57ddb5b256068dac.jpg?imageView&thumbnail=750x0&quality=75',
            'http://yanxuan.nosdn.127.net/291878253cb96c6992c8a5c875248b4d.jpg?imageView&thumbnail=750x0&quality=75',
            'http://yanxuan.nosdn.127.net/c0cf7b4cf7dcbc6dd9866ab2d23faf93.jpg?imageView&thumbnail=750x0&quality=75',
            'http://yanxuan.nosdn.127.net/046d56ac0cd8adadf368fb8fd478c8c8.jpg?imageView&thumbnail=750x0&quality=75',
            'http://yanxuan.nosdn.127.net/7ae187def725a14c75ae78d4b2f8e14a.jpg?imageView&thumbnail=750x0&quality=75'
        ],
    },
    handleNavTap:function(e) {
        console.log(e)
        let index = e.currentTarget.dataset.idx;
        let query = wx.createSelectorQuery();
        this.setData({
            nav_active_item:index
        })
        query.select('#nav_'+index).boundingClientRect();
        query.exec(function(res) {
            let navW = res[0].width;
            let totalW = (navW) * index
            console.log(totalW)
        })
    }
})