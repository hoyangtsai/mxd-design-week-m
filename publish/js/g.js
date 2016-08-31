function setUser(name) {
  document.cookie = "name=" + name + ';path=/';
}

function getUrlPara(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getCookie() {
  var cookies = {};
  document.cookie.split(';').forEach((cookie) => {
    let parts = cookie.split('=');
    cookies[ parts[0].trim() ] = ( parts[1] || '').trim();
  })
  return cookies;
}

// set detail image
function setDetail(itemid) {
  switch (parseInt(itemid)) {
    case 1:
      $('#btn-detail').attr('href', 'http://mxd.tencent.com/%E6%BB%B4%E7%AD%94-mxd-big-day-%E6%B7%B1%E5%9C%B3%E7%AC%AC9%E6%9C%9F');
      break;
    case 3:
      $('#btn-detail').attr('href', 'http://mxd.tencent.com/%E6%BB%B4%E7%AD%94-mxd-big-day-%E6%B7%B1%E5%9C%B3%E7%AC%AC9%E6%9C%9F');
      break;
    case 4:
      $('#btn-detail').attr('href', 'http://mxd.tencent.com/%E6%BB%B4%E7%AD%94-mxd-big-day-%E6%B7%B1%E5%9C%B3%E7%AC%AC9%E6%9C%9F');
      break;
    default:
      break;
  }
}

// set gallery list
function setGallery(items) {
  for (var i = 0; i < items.length; i++) {
    switch (parseInt(items[i].itemId)) {
      case 1:
        $('#poster-1')
          .attr('href', './open.html?itemid=1&detail=1')
          .children('img').attr('src', '../img/dida-cover.jpg');
        break;
      case 3:
        $('#poster-3')
          .attr('href', './open.html?itemid=3&detail=1')
          .children('img').attr('src', '../img/xingyang-cover.png');
        break;
      case 4:
        $('#poster-4')
          .attr('href', './open.html?itemid=4&detail=1')
          .children('img').attr('src', '../img/xingyang-cover.png');
        break;
      default:
        break;
    }
  }
}

function setPosterCover(itemId) {
  switch (parseInt(itemId)) {
    case 1:
      $('#poster-cover').attr('src', '../img/dida-cover.jpg');
      break;
    case 3:
      $('#poster-cover').attr('src', '../img/xingyang-cover.png');
      break;
    case 4:
      $('#poster-cover').attr('src', '../img/xingyang-cover.png');
      break;
    default:
      break;
  }
}

function setColtProg(num) {
  var progWrap = $('.prog-wrap');
  switch (parseInt(num)) {
    case 1:
      progWrap.children('.first').children('.progress').css('width', '20%');
      progWrap.children('.indicator')
        .text(num).css({
          'left': '18%',
          'visibility': 'visible'
        });
      break;
    case 2:
    progWrap.children('.first').children('.progress').css('width', '40%');
      progWrap.children('.indicator')
        .text(num).css({
          'left': '25%',
          'visibility': 'visible'
        });
      break;
    case 3:
      progWrap.children('.first').children('.progress').css('width', '60%');
      progWrap.children('.indicator')
        .text(num).css({
          'left': '32%',
          'visibility': 'visible'
        });
      break;
    case 4:
      progWrap.children('.first').children('.progress').css('width', '80%');
      progWrap.children('.indicator')
        .text(num).css({
          'left': '39%',
          'visibility': 'visible'
        });
      break;
    case 5:
      progWrap.children('.first').children('.progress').css('width', '100%');
      progWrap.children('#voucher-1').removeClass('blank').addClass('filled');
      break;
    case 6:
      progWrap.children('.first').children('.progress').css('width', '100%');
      progWrap.children('#voucher-1').removeClass('blank').addClass('filled');
      progWrap.children('.second').children('.progress').css('width', '20%');
      progWrap.children('.indicator')
        .text(num).css({
          'left': '62%',
          'visibility': 'visible'
        });
      break;
    case 7:
      progWrap.children('.first').children('.progress').css('width', '100%');
      progWrap.children('#voucher-1').removeClass('blank').addClass('filled');
      progWrap.children('.second').children('.progress').css('width', '40%');
      progWrap.children('.indicator')
        .text(num).css({
          'left': '68%',
          'visibility': 'visible'
        });
      break;
    case 8:
      progWrap.children('.first').children('.progress').css('width', '100%');
      progWrap.children('#voucher-1').removeClass('blank').addClass('filled');
      progWrap.children('.second').children('.progress').css('width', '60%');
      progWrap.children('.indicator')
        .text(num).css({
          'left': '75%',
          'visibility': 'visible'
        });
      break;
    case 9:
      progWrap.children('.first').children('.progress').css('width', '100%');
      progWrap.children('#voucher-1').removeClass('blank').addClass('filled');
      progWrap.children('.second').children('.progress').css('width', '80%');
      progWrap.children('.indicator')
        .text(num).css({
          'left': '83%',
          'visibility': 'visible'
        });
      break;
    case 10:
      progWrap.children('.first').children('.progress').css('width', '100%');
      progWrap.children('#voucher-1').removeClass('blank').addClass('filled');
      progWrap.children('.second').children('.progress').css('width', '100%');
      progWrap.children('#voucher-2').removeClass('blank').addClass('filled');
      break;
    default:
      break;
  }
}
