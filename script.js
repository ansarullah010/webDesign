$(document).ready(function () {
  // banner slick slider js starts
  $(".banner-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    // autoplayspeed: 1500,
    fade: true,
    speed: 500,
    cssEase: "linear",
  });
  //  banner slick slider ends
  // venobox starts
  $(".venobox").venobox({
    framewidth: "100%",
    // frameheight: "550px",
    border: "8px",
    bgcolor: "#00e0d0",
    spinner: "cube-grid",
    share: ["facebook", "twitter", "linkedin", "pinterest"],
  });
  // venobox ends
  // team-member slider starts
  $(".member-slider").slick({
    infinite: true,
    centerMode: true,
    centerPadding: "40px",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    // autoplayspeed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // team-member slider ends

  // comment slider starts
  $(".text-slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".img-slide-custom",
  });
  $(".img-slide-custom").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".text-slide",
    arrows: true,
    dots: false,
    prevArrow: ".custom-left-arrow",
    nextArrow: ".custom-right-arrow",
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
    ]
  });

  // comment slider ends

  // menu bar scroll background color
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop(); //window likhar bodole this bebohar kora hoy...this diye windows k refer kora hocche
    var sticky = $(".scroll-bg");
    if (scrolling >= 100) {
      sticky.addClass("nav-scroll-bg");
    } else {
      sticky.removeClass("nav-scroll-bg");
    }
  });

  // scroll to top design
  var scrolltotop = {
    setting: {
      startline: 100,
      scrollto: 0,
      scrollduration: 1e3,
      fadeduration: [500, 100],
    },
    controlHTML: '<img src="image/scroll-top.png"/>',
    controlattrs: { offsetx: 5, offsety: 5 },
    anchorkeyword: "#top",
    state: { isvisible: !1, shouldvisible: !1 },
    scrollup: function () {
      this.cssfixedsupport || this.$control.css({ opacity: 0 });
      var t = isNaN(this.setting.scrollto)
        ? this.setting.scrollto
        : parseInt(this.setting.scrollto);
      (t =
        "string" == typeof t && 1 == jQuery("#" + t).length
          ? jQuery("#" + t).offset().top
          : 0),
        this.$body.animate({ scrollTop: t }, this.setting.scrollduration);
    },
    keepfixed: function () {
      var t = jQuery(window),
        o =
          t.scrollLeft() +
          t.width() -
          this.$control.width() -
          this.controlattrs.offsetx,
        s =
          t.scrollTop() +
          t.height() -
          this.$control.height() -
          this.controlattrs.offsety;
      this.$control.css({ left: o + "px", top: s + "px" });
    },
    togglecontrol: function () {
      var t = jQuery(window).scrollTop();
      this.cssfixedsupport || this.keepfixed(),
        (this.state.shouldvisible = t >= this.setting.startline ? !0 : !1),
        this.state.shouldvisible && !this.state.isvisible
          ? (this.$control
              .stop()
              .animate({ opacity: 1 }, this.setting.fadeduration[0]),
            (this.state.isvisible = !0))
          : 0 == this.state.shouldvisible &&
            this.state.isvisible &&
            (this.$control
              .stop()
              .animate({ opacity: 0 }, this.setting.fadeduration[1]),
            (this.state.isvisible = !1));
    },
    init: function () {
      jQuery(document).ready(function (t) {
        var o = scrolltotop,
          s = document.all;
        (o.cssfixedsupport =
          !s ||
          (s && "CSS1Compat" == document.compatMode && window.XMLHttpRequest)),
          (o.$body = t(
            window.opera
              ? "CSS1Compat" == document.compatMode
                ? "html"
                : "body"
              : "html,body"
          )),
          (o.$control = t('<div id="topcontrol">' + o.controlHTML + "</div>")
            .css({
              position: o.cssfixedsupport ? "fixed" : "absolute",
              bottom: o.controlattrs.offsety,
              right: o.controlattrs.offsetx,
              opacity: 0,
              cursor: "pointer",
            })
            .attr({ title: "Scroll to Top" })
            .click(function () {
              return o.scrollup(), !1;
            })
            .appendTo("body")),
          document.all &&
            !window.XMLHttpRequest &&
            "" != o.$control.text() &&
            o.$control.css({ width: o.$control.width() }),
          o.togglecontrol(),
          t('a[href="' + o.anchorkeyword + '"]').click(function () {
            return o.scrollup(), !1;
          }),
          t(window).bind("scroll resize", function (t) {
            o.togglecontrol();
          });
      });
    },
  };
  scrolltotop.init();
  
  $.fn.typed = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('typed')
        , options = typeof option == 'object' && option;
      if (!data) $this.data('typed', (data = new Typed(this, options)));
      if (typeof option == 'string') data[option]();
    });
};
// type js starts
var typed = new Typed('.typed', {
  strings: ["specialized in website creation.", "with amazing team.", "with expert members.", "equiped with full stack devs."],
  //  typing speed
    typeSpeed:30,
    // time before typing starts
    startDelay: 1000,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: false,
    // call when done callback function
    callback: function() {},
    // starting callback function before each string
    preStringTyped: function() {},
    //callback for every typed string
    onStringTyped: function() {},
    // callback for reset
    resetCallback: function() {}
});
// type js ends

// scroll selector starts(menu button select)
$('body').scrollspy({target:".navbar", offset: 50});
// scroll selector ends

 //Scroll Spy JS: animation scroll js Starts
 var html_body = $('html, body');
 $('nav a').on('click', function () {
   if (
     location.pathname.replace(/^\//, '') ==
       this.pathname.replace(/^\//, '') &&
     location.hostname == this.hostname
   ) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
     if (target.length) {
       html_body.animate(
         {
           scrollTop: target.offset().top - 50,
         },
         1000
       );
       return false;
     }
   }
 });
 //Scroll Spy JS: animation scroll js Ends
});

