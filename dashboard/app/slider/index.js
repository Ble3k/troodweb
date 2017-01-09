$(function () {

  var elWrap = $('#slider'),
    el =  elWrap.find('div'),
    indexDiv = 1,
    indexMax = el.length;

  elWrap.ready(function () {
    el.filter(':nth-child('+(indexMax)+')').css('display', 'none')
    el.filter(':nth-child('+(indexMax - 1)+')').css('display', 'none')
  })

  var steps = $('#steps'),
    step = steps.find('div'),
    stepNumber = 0,
    maxSteps = step.length;
  $(step[stepNumber]).addClass('slider-block__slider-steps_active-step')

  function change () {
    el.fadeOut(500);
    el.filter(':nth-child('+indexDiv+')').fadeIn(500);
  }

  function nextStep() {
    if (stepNumber < (maxSteps - 1)) {
      $(step[stepNumber]).removeClass('slider-block__slider-steps_active-step')
      stepNumber++;
      $(step[stepNumber]).addClass('slider-block__slider-steps_active-step')
    } else {
      $(step[stepNumber]).removeClass('slider-block__slider-steps_active-step')
      stepNumber = 0;
      $(step[stepNumber]).addClass('slider-block__slider-steps_active-step')
    }
  }

  function prevStep() {
    if (stepNumber > 0) {
      $(step[stepNumber]).removeClass('slider-block__slider-steps_active-step')
      stepNumber--;
      $(step[stepNumber]).addClass('slider-block__slider-steps_active-step')
    } else {
      $(step[stepNumber]).removeClass('slider-block__slider-steps_active-step')
      stepNumber = maxSteps - 1;
      $(step[stepNumber]).addClass('slider-block__slider-steps_active-step')
    }
  }

  elWrap.append(
    '<div class="slider-block__right-arrow-container"></div>' + '<div class="slider-block__left-arrow-container"></div>'
  );

  $('div.slider-block__right-arrow-container').click(function() {
    indexDiv++;
    if(indexDiv > indexMax) {
      indexDiv = 1;
    }
    change ();
    nextStep ();
  });
  $('div.slider-block__left-arrow-container').click(function() {
    indexDiv--;
    if(indexDiv < 1) {
      indexDiv = indexMax;
    }
    change ();
    prevStep();
  });
});