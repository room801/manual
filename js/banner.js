function Banner() {

}


Banner.prototype.init = function(){
    var self = this;
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项

        autoplay:{
            delay: 3000,
            disableOnInteraction: false,
        },
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hiddenClass: 'swiper-button-hidden',
        }
    });
    //鼠标经过停止轮播
    mySwiper.el.onmouseover = function(){
        mySwiper.autoplay.stop();
        $('.swiper-button-prev').removeClass('swiper-button-hidden');
        $('.swiper-button-next').removeClass('swiper-button-hidden');

    };
    //鼠标移出后继续轮播
    mySwiper.el.onmouseout = function () {
        mySwiper.autoplay.start();
        $('.swiper-button-prev').addClass('swiper-button-hidden');
        $('.swiper-button-next').addClass('swiper-button-hidden');
    }
};

Banner.prototype.run = function () {
    var self = this;
    self.init();
};

$(function () {
   var banner = new Banner();
   banner.run();
});