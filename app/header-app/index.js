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
        $('span.link_company').addClass('menu__item__link_active');
        $('svg.menu__item__link_arrow-svg_company').addClass('menu__item__link_arrow-svg_active'); break
      case ('products'):
        $('span.link_products').addClass('menu__item__link_active');
        $('svg.menu__item__link_arrow-svg').addClass('menu__item__link_arrow-svg_active'); break
      default:
    }
  }

  function makeActivePopUp(pathTwo) {
    switch (pathTwo) {
      case ('business'):
        $('a.popUp_business').addClass('menu__item__link_products_popup__list_item__link_active'); break
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
      case ('team'):
        $('a.popUp_team').addClass('menu__item__link_products_popup__list_item__link_active'); break
      case ('career'):
        $('a.popUp_career').addClass('menu__item__link_products_popup__list_item__link_active'); break
      case ('contacts'):
        $('a.popUp_contacts').addClass('menu__item__link_products_popup__list_item__link_active'); break
      default:
    }
  }

  function activatePopUp(popup) {
    switch (popup) {
      case ('products'):
        $('div.menu__item__link_products_popup').toggleClass('menu__item__link_products_popup_show');
        $('div.menu__item__link_svg').toggleClass('menu__item__link_svg_transform'); break
      case ('company'):
        $('div.menu__item__link_company_popup').toggleClass('menu__item__link_company_popup_show');
        $('div.menu__item__link_svg_company').toggleClass('menu__item__link_svg_transform'); break
      default:
    }
  }

  function activateLangPopUp() {
    $('div.lang-switcher__popUp').toggleClass('menu__item__link_products_popup_show')
    $('div.lang-switcher__lang_svg').toggleClass('menu__item__link_svg_transform')
  }

  function closePopUp(popup) {
    switch (popup) {
      case ('products'):
        $('div.menu__item__link_products_popup').removeClass('menu__item__link_products_popup_show');
        $('div.menu__item__link_svg').removeClass('menu__item__link_svg_transform'); break
      case ('company'):
        $('div.menu__item__link_company_popup').removeClass('menu__item__link_company_popup_show');
        $('div.menu__item__link_svg_company').removeClass('menu__item__link_svg_transform'); break
    }
  }

  $('span.link_products').click(function() { activatePopUp('products') })
  $('span.link_company').click(function() { activatePopUp('company') })
  $('span.lang-switcher__lang').click(function() { activateLangPopUp() })
  $(document).click(function (e) {
    var PpopUp = $('div.menu__item__link_products_popup');
    var Pbtn = $('span.link_products');
    var CpopUp = $('div.menu__item__link_company_popup');
    var Cbtn = $('span.link_company');
    if(!PpopUp.is(e.target) && !Pbtn.is(e.target) && Pbtn.has(e.target).length === 0 && PpopUp.has(e.target).length === 0) {
      closePopUp('products');
    }
    if(!CpopUp.is(e.target) && !Cbtn.is(e.target) && Cbtn.has(e.target).length === 0 && CpopUp.has(e.target).length === 0) {
      closePopUp('company');
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

  function showModal(title, contactTitle, btnText) {
    $('div.header__bottom__call-btn_modal').addClass('header__bottom__call-btn_modal_show')
    $('body').addClass('overflowBody')
    $('span.call-btn__form__title').html(title)
    $('span.call-btn__form__contact-input__title').html(contactTitle + ':')
    $('button.call-btn__form__submit').html(btnText)
    if (btnText === 'Заказать') $('button.call-btn__form__submit').addClass('call-btn__form__submit_shrink')
    $('input.contact').attr('placeholder', contactTitle)
  }

  function closeModal() {
    $('div.header__bottom__call-btn_modal').removeClass('header__bottom__call-btn_modal_show')
    $('body').removeClass('overflowBody')
    $('input.name-input-header').val(undefined)
    $('input.contact-input-header').val(undefined)
    $('input').removeClass('errorBox')
    $('span.form-validate-text-header').html('')
    window.nameInput = false
    window.contactInput = false
  }

  $('span.header__bottom__call-btn').click(function() {showModal('Заказать обратный звонок', 'Ваш телефон', 'Заказать')})
  $('div.header__bottom__call-btn_modal').click(function(e) {
    if ($('div.header__bottom__call-btn_modal').has(e.target).length === 0) closeModal()
  })

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
  $('div.company-list').click(function () {
    $('div.popUp__main-menu-link_list-item-wrapper_company').toggleClass('popUp__main-menu-link_list-item-wrapper_show')
  })

// header mobile popUp --->

});