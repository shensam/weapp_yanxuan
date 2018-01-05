Page({
    data:{
        "nav_bar_list":['推荐','居家','餐厨','配件','服装','电器','洗护','杂货','饮食','婴童','志趣'],
        "nav_active_item":0,
        "swiper_list":[]
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