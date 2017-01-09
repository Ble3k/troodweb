$(function () {

  function nameInputHandle() {
    window.nameInput = nameInput.val().length > 1
    window.nameInput && window.contactInput && $('span.form-validate-text-header').html('')
  }

  function contactInputHandle() {
    window.contactInput = contactInput.val().length > 1
    window.contactInput && window.nameInput && $('span.form-validate-text-header').html('')
  }

  var nameInput = $('input.name-input-header')
  nameInput.on('keyup', function() { nameInputHandle() })
  nameInput.on('change', function() { nameInputHandle() })

  var contactInput = $('input.contact-input-header')
  contactInput.on('keyup', function() { contactInputHandle() })
  contactInput.on('change', function() { contactInputHandle() })

  function nameError() {
    nameInput.addClass('errorBox')
  }

  function contactError() {
    contactInput.addClass('errorBox')
  }

  function removeError() {
    nameInput.removeClass('errorBox')
    contactInput.removeClass('errorBox')
  }

  var contactRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)\d{3}[\- ]?\d{2}[\- ]?\d{2}$/

  $('button.call-btn__form__submit').click(function(e) {
    e.preventDefault()
    if (window.nameInput && contactRegExp.test(contactInput.val())) {
      $.ajax({
        type: "POST",
        url: 'http://trood.ru/app/php-mail/send.php',
        data: {
          name: nameInput.val(),
          contact: contactInput.val(),
          type: 'Презентация',
        },
        success: function() {
          $('form.call-btn__form').addClass('hide')
          $('div.form-block_success-header').addClass('show')
          setTimeout(function() {
            $('form.call-btn__form').removeClass('hide')
            $('div.form-block_success-header').removeClass('show')
            nameInput.val(undefined)
            contactInput.val(undefined)
            window.nameInput = false
            window.contactInput = false
          }, 3000)
        },
        dataType: 'text'
      });
    } else {
      !window.nameInput && nameError()
      !contactRegExp.test(contactInput.val()) && $('span.form-validate-text-header').html('Некорректный телефон') && contactError()
      !window.nameInput && $('span.form-validate-text-header').html('Необходимо заполнить все поля')
    }
  })

  nameInput.focus(function() {
    nameInput.removeClass('errorBox')
  })
  contactInput.focus(function() {
    contactInput.removeClass('errorBox')
  })

  window.addEventListener('scroll', function () {
    removeError()
    $('span.form-validate-text-header').html('')
  })

});