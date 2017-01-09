$(function () {

  var path = window.location.pathname.split('/')[1]

  function dateIdentify (date) {
    const now = moment().startOf('day')
    const thisDate = date.clone().startOf('day')
    switch (thisDate.diff(now, 'days')) {
      case (-1): return {
        date: 'Вчера',
        time: date.format('HH:mm'),
      }
      case (0): return {
        date: 'Сегодня',
        time: date.format('HH:mm'),
      }
      case (1): return {
        date: 'Завтра',
        time: date.format('HH:mm'),
      }
      default: return {
        date: date.format('D MMMM'),
        time: date.format('HH:mm'),
      }
    }
  }

  window.fbAsyncInit = function() {

    FB.api("/troodcis/posts?access_token=1612543712381743|LDtKEknxATtOjHDELi0Wx_efw-o", function (response) {
        if (response && !response.error) {
          response.data.sort(function (a, b) {
            var aDate = moment(a.created_time).toDate()
            var bDate = moment(b.created_time).toDate()
            return bDate - aDate
          }).filter(function (item) { return item.message }).map(function (item, i) {
            var date = dateIdentify(moment(item.created_time))
            if (path === 'news' || (i === 0 || i === 1 || i === 2)) {
              $('<div/>', {
                class: 'news-block__news-wrapper',
                append: $('<span/>', { class: 'news-block__news-date', text: date.date + ' в ' + date.time })
                        .add($('<span/>', { class: 'news-block__news-link', text: item.message }))
                        .add(path === 'news' && $('<a/>', {
                          class: 'news-block__link-more',
                          href: 'https://www.facebook.com/' + item.id,
                          target: '_blank',
                          text: 'подробнее',
                        }))
              }).appendTo($('div.news-block__news-container'))
            }
          })
        }
      $('span.news-block__news-link').map(function(i, item) {
        var str = $(item).html();
        var target = "\n";
        var pos = 0;
        while (true) {
          var foundPos = str.indexOf(target, pos);
          if (foundPos == -1) break;

          newStr = str.replace(target, '<br>')
          $(item).html(newStr)
          var hashTag = /[^\#]* /
          $clamp(item, { clamp: 5, useNativeClamp: false });
          pos = foundPos + 1;
          str = newStr
        }
      })
      }
    );
  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/ru_RU/all.js#xfbml=1&version=v2.8&appId=1612543712381743";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
})