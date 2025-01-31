$(document).ready(function(){
    $('ul.header__info').on('click', '.gray', function() {
    $(this)
      .removeClass('gray').siblings().addClass('gray')
  });

  $('ul.forYou__links').on('click', 'li:not(.selected)', function() {
    $(this)
      .addClass('selected').siblings().removeClass('selected')
      .closest('div.forYou__products').find('div.forYou__grid').removeClass('grid__active').eq($(this).index()).addClass('grid__active');
  });

  $('ul.services__links').on('click', 'li.link__active', function(e) {
    //   e.preventDefault();
    $(this.nextElementSibling)
      .addClass('link__active').siblings().removeClass('link__active')
     
  });

  const progressBar = $('.application__scale-progress');
  const stepCounter = $('#step-counter');
  const nextButton = $('#next-button');
  const phoneInput = $('#phone');

  let currentStep = 1;
  const totalSteps = 7;

  nextButton.on('click', function () {
    const phoneValue = phoneInput.val().trim(); 

    if (!phoneValue) {
      alert('Пожалуйста, введите ваш мобильный телефон.');
      return; 
    }
    if (currentStep < totalSteps) {
      currentStep++;
      stepCounter.text(`${currentStep}/${totalSteps}`);

      const progressWidth = (currentStep / totalSteps) * 100;
      progressBar.css('width', `${progressWidth}%`);
    } else {
      alert('Заявка успешно отправлена!');
    }
  });

})