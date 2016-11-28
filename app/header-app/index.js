$(function () {
  activeLang = window.location.pathname.split('/')[1]
  activeLang === 'en' ? $('a.lang-switcher__eng').addClass('active_lang') : $('a.lang-switcher__ru').addClass('active_lang')

  makeActiveMain(window.location.pathname.split('/')[1])
  makeActivePopUp(window.location.pathname.split('/')[2])

  function makeActiveMain(pathOne) {
    switch (pathOne) {
      case ('clients'):
        $('a.link_client').addClass('menu__item__link_active'); break
      case ('news'):
        $('a.link_news').addClass('menu__item__link_active'); break
      case ('company'):
        $('a.link_company').addClass('menu__item__link_active'); break
      case ('products'):
        $('span.link_products').addClass('menu__item__link_active');
        $('svg.menu__item__link_arrow-svg').addClass('menu__item__link_arrow-svg_active'); break
      default:
    }
  }

  function makeActivePopUp(pathTwo) {
    switch (pathTwo) {
      case ('sales'):
        $('a.popUp_sales').addClass('menu__item__link_products_popup__list_item__link_active'); break
      case ('projects'):
        $('a.popUp_projects').addClass('menu__item__link_products_popup__list_item__link_active'); break
      case ('counter-agents'):
        $('a.popUp_counter').addClass('menu__item__link_products_popup__list_item__link_active'); break
      case ('staff'):
        $('a.popUp_staff').addClass('menu__item__link_products_popup__list_item__link_active'); break
      case ('store'):
        $('a.popUp_store').addClass('menu__item__link_products_popup__list_item__link_active'); break
      case ('requests'):
        $('a.popUp_requests').addClass('menu__item__link_products_popup__list_item__link_active'); break
      case ('finances'):
        $('a.popUp_finances').addClass('menu__item__link_products_popup__list_item__link_active'); break
      case ('docs'):
        $('a.popUp_docs').addClass('menu__item__link_products_popup__list_item__link_active'); break
      default:
    }
  }

  function activatePopUp() {
    $('div.menu__item__link_products_popup').toggleClass('menu__item__link_products_popup_show')
    $('div.menu__item__link_svg').toggleClass('menu__item__link_svg_transform')
  }

  function activateLangPopUp() {
    $('div.lang-switcher__popUp').toggleClass('menu__item__link_products_popup_show')
    $('div.lang-switcher__lang_svg').toggleClass('menu__item__link_svg_transform')
  }

  function closePopUp() {
    $('div.menu__item__link_products_popup').removeClass('menu__item__link_products_popup_show')
    $('div.menu__item__link_svg').removeClass('menu__item__link_svg_transform')
  }

  $('span.link_products').click(() => activatePopUp())
  $('span.lang-switcher__lang').click(() => activateLangPopUp())
  $(document).click(function (e) {
    var popUp = $('div.menu__item__link_products_popup');
    var btn = $('span.link_products');
    if(!popUp.is(e.target) && !btn.is(e.target) && btn.has(e.target).length === 0 && popUp.has(e.target).length === 0) {
      closePopUp();
    }
  })

//  header-scroll starts --->

  $(document).ready(function() {
      var docElem = document.documentElement,
        header = $('div.header')
        headerBottom = $('div.header__bottom'),
        didScroll = false,
        changeHeaderOn = 41;

      scrollPage();

      function init() {
        window.addEventListener( 'scroll', function( event ) {
          if( !didScroll ) {
            didScroll = true;
            scrollPage();
          }
        }, false );
      }

      function scrollPage() {
        var sy = scrollY(),
            globalHeight = $(document).outerHeight(),
            footerHeight = 220;
            screenHeight = $('body').height()
        if ( sy >= changeHeaderOn && sy <= (globalHeight - footerHeight - screenHeight) ) {
          header.addClass('header_scroll-start')
          headerBottom.addClass('header__bottom_start-scroll');
        }
        else {
          header.removeClass('header_scroll-start')
          headerBottom.removeClass('header__bottom_start-scroll');
        }
        didScroll = false;
      }

      function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
      }

      init();
  });

//  <--- header-scroll ends

//  header call-btn --->

  const path = window.location.pathname.split('/')[1]

  if (path === 'news') {
    $('a.header__bottom__call-btn').click(function () {
      window.location.assign('../../index.html#form-wrapper')
    })
  }

//  header call-btn --->

// header mobile popUp --->

  $('svg.menu-open').addClass('show-btn')

  function activateMobilePopUp() {
    $('div.header__popUp').toggleClass('header__popUp_show order-2')
    $('svg.menu-open').toggleClass('show-btn')
    $('svg.menu-close').toggleClass('show-btn')
    $('div.header__top').toggleClass('order-3 header__top_border-top')
    $('div.header__bottom').toggleClass('order-1 header__bottom_start-scroll_abort header__bottom_border-bottom-remove header__bottom_add-padding')
    $('div.header').toggleClass('header_popUp-open header_scroll-start_abort')
  }

  function closeMobilePopUp() {
    $('div.header__popUp').removeClass('header__popUp_show')
    $('svg.menu-open').toggleClass('show-btn')
    $('svg.menu-close').toggleClass('show-btn')
  }

  $('div.header__svg').click(function () { activateMobilePopUp() })
  $('div.product-list').click(function () {
    $('div.popUp__main-menu-link_list-item-wrapper').toggleClass('popUp__main-menu-link_list-item-wrapper_show')
  })

// header mobile popUp --->

});