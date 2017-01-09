//  header call-btn --->
$(function () {
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
    $('input.name-input').val(undefined)
    $('input.contact-input').val(undefined)
    $('input').removeClass('errorBox')
    $('span.form-validate-text').html('')
    window.nameInput = false
    window.contactInput = false
  }

  $('span.header__right__demo-btn').click(function () {
    showModal('Попробовать Демо', 'Ваш телефон или e-mail', 'Попробовать Демо')
  })
  $('span.dashboard-demo-block__demo-btn').click(function () {
    showModal('Попробовать Демо', 'Ваш телефон или e-mail', 'Попробовать Демо')
  })
  $('div.header__bottom__call-btn_modal').click(function (e) {
    if ($('div.header__bottom__call-btn_modal').has(e.target).length === 0) closeModal()
  })

  $('div.header-left__change-btn').click(function () {
    $('body').animate({
      scrollTop: $('body').height()
    }, 1000);
  })
});
//  header call-btn --->