$(function () {

  function nameInputHandle() {
    window.nameInput = nameInput.val().length > 1
    window.nameInput && window.contactInput && $('span.form-validate-text').html('')
  }

  function contactInputHandle() {
    window.contactInput = contactInput.val().length > 1
    window.contactInput && window.nameInput && $('span.form-validate-text').html('')
  }

  var nameInput = $('input.name-input')
  nameInput.on('keyup', function() { nameInputHandle() })
  nameInput.on('change', function() { nameInputHandle() })

  var contactInput = $('input.contact-input')
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

  var contactRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)\d{3}[\- ]?\d{2}[\- ]?\d{2}$|[^@]+@[^@]+\.[^@]+/

  $('button.form__submit').click(function(e) {
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
        success: function(data) {
          $('div.form-block__from-container').addClass('hide')
          $('div.form-block_success').addClass('show')
          var date = new Date(new Date().getTime() + 60 * 1000 * 60 * 24 * 7);
          if (data !== '') document.cookie = "token=" + data + "; path=/; expires=" + date.toUTCString();
          const path = window.location.hostname
          if (path === 'svodka.trood.ru') window.location.pathname = '/demo'
          setTimeout(function() {
            $('div.form-block__from-container').removeClass('hide')
            $('div.form-block_success').removeClass('show')
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
      !contactRegExp.test(contactInput.val()) && $('span.form-validate-text').html('Некорректный телефон или e-mail') && contactError()
      !window.nameInput && $('span.form-validate-text').html('Необходимо заполнить все поля')
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
    $('span.form-validate-text').html('')
  })


});