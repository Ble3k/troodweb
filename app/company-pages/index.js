$(function () {
  const path = window.location.hash
  changePage(path || '#team')

  function changePage(hash) {
    switch (hash) {
      case ('#team'):
        $('div.company-content__team').addClass('showPage');
        $('a.team').addClass('pages-menu__list__item__link_active'); break
      case ('#career'):
        $('div.company-content__career').addClass('showPage');
        $('a.career').addClass('pages-menu__list__item__link_active'); break
      case ('#contacts'):
        $('div.company-content__contacts').addClass('showPage');
        $('a.contacts').addClass('pages-menu__list__item__link_active'); break
      default:
    }
  }

  function goTo(e) {
    $('a.pages-menu__list__item__link').removeClass('pages-menu__list__item__link_active')
    $('#company-content').children().removeClass('showPage')
    changePage(e.target.hash)
  }

  $('a.pages-menu__list__item__link').click(function (e) {goTo(e)});
  $('a.from-footer-to-company-menu').click(function (e) {
    goTo(e)
    window.scrollTo(0, 0)
  });

  const page = window.location.pathname.split('/')[1]
  if (page === 'index.html') $('a.footer-block__left__choose-btn').click(function () {
    $('body').animate({
      scrollTop: 873
    }, 1000);
  })
});