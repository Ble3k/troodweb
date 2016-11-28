$(function () {
  const path = window.location.hash
  changePage(path || '#sales')

  function changePage(hash) {
    $('div.trood-products-block__main').fadeIn(500)
    switch (hash) {
      case ('#projects'):
        $('div.trood-products-block__projects__wrapper').addClass('trood-products-block_show');
        $('a.projects').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#sales'):
        $('div.trood-products-block__sales__wrapper').addClass('trood-products-block_show');
        $('a.sales').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#docs'):
        $('div.trood-products-block__docs__wrapper').addClass('trood-products-block_show');
        $('a.docs').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#staff'):
        $('div.trood-products-block__staff__wrapper').addClass('trood-products-block_show');
        $('a.staff').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#counter'):
        $('div.trood-products-block__counter__wrapper').addClass('trood-products-block_show');
        $('a.counter').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#requests'):
        $('div.trood-products-block__requests__wrapper').addClass('trood-products-block_show');
        $('a.requests').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#store'):
        $('div.trood-products-block__store__wrapper').addClass('trood-products-block_show');
        $('a.store').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#finances'):
        $('div.trood-products-block__finances__wrapper').addClass('trood-products-block_show');
        $('a.finances').addClass('trood-products-block__header__menu__item__link_active'); break
      default:
        changePage('#sales')
        scrollToProducts()
    }
  }

  function goTo(e) {
    $('a.trood-products-block__header__menu__item__link').removeClass('trood-products-block__header__menu__item__link_active')
    $('div.trood-products-block__main').children().removeClass('trood-products-block_show')
    $('div.trood-products-block__main').fadeOut(300, function () { changePage(e.target.hash) })
  }

  function scrollToProducts() {
    $('body').animate({
      scrollTop: 873
    }, 1000);
  }

  $('a.trood-products-block__header__menu__item__link').click(function (e) { goTo(e) });
  $('a.main-block__product-link').click(function () { scrollToProducts() })
});