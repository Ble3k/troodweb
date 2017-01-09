$(function () {

  function nameInputHandle() {
    window.nameInput = nameInput.val().length > 1
    window.nameInput && window.contactInput && window.companyInput && $('span.bottom-form-validate').html('')
  }

  function contactInputHandle() {
    window.contactInput = contactInput.val().length > 1
    window.contactInput && window.nameInput && window.companyInput && $('span.bottom-form-validate').html('')
  }

  function companyInputHandle() {
    window.companyInput = companyInput.val().length > 1
    window.companyInput && window.nameInput && window.contactInput && $('span.bottom-form-validate').html('')
  }

  var nameInput = $('input.input-name')
  nameInput.on('keyup', function() { nameInputHandle() })
  nameInput.on('change', function() { nameInputHandle() })

  var contactInput = $('input.input-contact')
  contactInput.on('keyup', function() { contactInputHandle() })
  contactInput.on('change', function() { contactInputHandle() })

  var companyInput = $('input.input-company')
  companyInput.on('keyup', function() { companyInputHandle() })
  companyInput.on('change', function() { companyInputHandle() })

  function nameError() {
    nameInput.addClass('errorBox')
  }

  function contactError() {
    contactInput.addClass('errorBox')
  }

  function companyError() {
    companyInput.addClass('errorBox')
  }

  function removeError() {
    nameInput.removeClass('errorBox')
    contactInput.removeClass('errorBox')
    companyInput.removeClass('errorBox')
  }

  var contactRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)\d{3}[\- ]?\d{2}[\- ]?\d{2}$|[^@]+@[^@]+\.[^@]+/

  $('button.bottom-button').click(function(e) {
    e.preventDefault()
    if (window.nameInput && window.companyInput && contactRegExp.test(contactInput.val())) {
      $.ajax({
        type: "POST",
        url: 'http://svodka.trood.ru/app/php-mail/svodka-form.php',
        data: {
          name: nameInput.val(),
          contact: contactInput.val(),
          company: companyInput.val(),
          type: 'Презентация',
        },
        success: function() {
          $('div.bottom-form').addClass('hide')
          $('div.bottom-success').addClass('show')
          setTimeout(function() {
            $('div.bottom-form').removeClass('hide')
            $('div.bottom-success').removeClass('show')
            nameInput.val(undefined)
            contactInput.val(undefined)
            companyInput.val(undefined)
            window.nameInput = false
            window.contactInput = false
            window.companyInput = false
          }, 3000)
        },
        dataType: 'text'
      });
    } else {
      !window.nameInput && nameError();
      !window.companyInput && companyError();
      !contactRegExp.test(contactInput.val()) && $('span.bottom-form-validate').html('Некорректный телефон или e-mail') && contactError();
      (!window.nameInput || !window.companyInput) && $('span.bottom-form-validate').html('Необходимо заполнить все поля');
    }
  })

  nameInput.focus(function() {
    nameInput.removeClass('errorBox')
  })
  contactInput.focus(function() {
    contactInput.removeClass('errorBox')
  })
  companyInput.focus(function() {
    companyInput.removeClass('errorBox')
  })

  window.addEventListener('scroll', function () {
    removeError()
    $('span.bottom-form-validate').html('')
  })


});