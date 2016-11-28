$(function () {
  const currentProduct = window.location.pathname.split('/')[2]
  const path = window.location.hash
  pageDetect(currentProduct)

  function pageDetect(product) {
    switch (product) {
      case ('sales'): changePage(path || '#account'); break
      case ('projects'): changePage(path || '#auto'); break
      case ('counter-agents'): changePage(path || '#tenders'); break
      case ('staff'): changePage(path || '#search'); break
      case ('store'): changePage(path || '#auto'); break
      case ('requests'): changePage(path || '#requests'); break
      case ('finances'): changePage(path || '#auto'); break
      case ('docs'): changePage(path || '#contracts'); break
    }
  }

  function changePage(hash) {
    $('div.trood-products-block__main').fadeIn(500)
    switch (hash) {
      case ('#auto'):
        $('div.trood-products-block__auto__wrapper').addClass('trood-products-block_show');
        $('a.auto').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#manager'):
        $('div.trood-products-block__manager__wrapper').addClass('trood-products-block_show');
        $('a.manager').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#employee'):
        $('div.trood-products-block__employee__wrapper').addClass('trood-products-block_show');
        $('a.employee').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#account'):
        $('div.trood-products-block__account__wrapper').addClass('trood-products-block_show');
        $('a.account').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#clients'):
        $('div.trood-products-block__clients__wrapper').addClass('trood-products-block_show');
        $('a.clients').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#reports'):
        $('div.trood-products-block__reports__wrapper').addClass('trood-products-block_show');
        $('a.reports').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#tenders'):
        $('div.trood-products-block__tenders__wrapper').addClass('trood-products-block_show');
        $('a.tenders').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#ccard'):
        $('div.trood-products-block__ccard__wrapper').addClass('trood-products-block_show');
        $('a.ccard').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#caccount'):
        $('div.trood-products-block__caccount__wrapper').addClass('trood-products-block_show');
        $('a.caccount').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#search'):
        $('div.trood-products-block__search__wrapper').addClass('trood-products-block_show');
        $('a.search').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#hr'):
        $('div.trood-products-block__hr__wrapper').addClass('trood-products-block_show');
        $('a.hr').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#budget'):
        $('div.trood-products-block__budget__wrapper').addClass('trood-products-block_show');
        $('a.budget').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#motivation'):
        $('div.trood-products-block__motivation__wrapper').addClass('trood-products-block_show');
        $('a.motivation').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#storage'):
        $('div.trood-products-block__storage__wrapper').addClass('trood-products-block_show');
        $('a.storage').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#orders'):
        $('div.trood-products-block__orders__wrapper').addClass('trood-products-block_show');
        $('a.orders').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#stocks'):
        $('div.trood-products-block__stocks__wrapper').addClass('trood-products-block_show');
        $('a.stocks').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#requests'):
        $('div.trood-products-block__requests__wrapper').addClass('trood-products-block_show');
        $('a.requests').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#accounting'):
        $('div.trood-products-block__accounting__wrapper').addClass('trood-products-block_show');
        $('a.accounting').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#payment'):
        $('div.trood-products-block__payment__wrapper').addClass('trood-products-block_show');
        $('a.payment').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#contracts'):
        $('div.trood-products-block__contracts__wrapper').addClass('trood-products-block_show');
        $('a.contracts').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#registration'):
        $('div.trood-products-block__registration__wrapper').addClass('trood-products-block_show');
        $('a.registration').addClass('trood-products-block__header__menu__item__link_active'); break
      case ('#opportunities'):
        $('div.trood-products-block__opportunities__wrapper').addClass('trood-products-block_show');
        $('a.opportunities').addClass('trood-products-block__header__menu__item__link_active'); break
      default:
        changePage('#auto')
    }
  }

  function goTo(e) {
    $('a.trood-products-block__header__menu__item__link').removeClass('trood-products-block__header__menu__item__link_active')
    $('div.trood-products-block__main').children().removeClass('trood-products-block_show')
    $('div.trood-products-block__main').fadeOut(300, function () { changePage(e.target.hash) })
  }

  $('a.trood-products-block__header__menu__item__link').click(function (e) { goTo(e) });
});