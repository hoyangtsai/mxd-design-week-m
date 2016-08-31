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
      $('#btn-detail').attr('href', '//mxd.tencent.com/%E7%9B%94-mxd-big-day-%E5%8C%97%E4%BA%AC%E7%AC%AC12%E6%9C%9F');
      break;
    case 2:
      $('#btn-detail').attr('href', '//mxd.tencent.com/%E6%98%A5%E5%A4%A9%E8%8A%B1%E8%8A%B1%E5%90%8C%E5%AD%A6%E4%BC%9A-mbd-%E6%B7%B1%E5%9C%B3%E7%AC%AC%E4%BA%8C%E6%9C%9F');
      break;
    case 3:
      $('#btn-detail').attr('href', '//mxd.tencent.com/%E8%B6%B3%E7%90%83%E8%AE%AD%E7%BB%83%E8%90%A5-mbd%E5%8C%97%E4%BA%AC%E7%AC');
      break;
    case 4:
      $('#btn-detail').attr('href', '//mxd.tencent.com/%E5%A4%9C%E7%A9%BA%E4%B8%AD%E6%9C%80%E4%BA%AE%E7%9A%84%E6%98%9F-mxd-big-day-%E6%B7%B1%E5%9C%B3%E7%AC%AC3%E6%9C%9F');
      break;
    case 5:
      $('#btn-detail').attr('href', '//mxd.tencent.com/%E7%A5%9E%E7%A7%98%E5%8A%9B%E9%87%8F-mxd-big-day-%E5%8C%97%E4%BA%AC%E7%AC%AC7%E6%9C%9F');
      break;
    case 6:
      $('#btn-detail').attr('href', '//mxd.tencent.com/%E4%B8%83%E4%B8%AA%E9%9A%86%E5%86%AC%E5%91%9B-mxd-big-day-%E5%8C%97%E4%BA%AC%E7%AC%AC9%E6%9C%9F');
      break;
    case 7:
      $('#btn-detail').attr('href', '//mxd.tencent.com/%E8%BF%9B%E5%87%BB%EF%BC%81%E4%BA%8C%E6%AC%A1%E5%85%83-mxd-big-day-%E5%8C%97%E4%BA%AC%E7%AC%AC10%E6%9C%9F');
      break;
    case 8:
      $('#btn-detail').attr('href', '//mxd.tencent.com/%E5%BC%A6%E5%A4%96%E9%9F%B3-mxd-big-day-%E5%8C%97%E4%BA%AC%E7%AC%AC11%E6%9C%9F');
      break;
    case 9:
      $('#btn-detail').attr('href', '//mxd.tencent.com/%E5%8C%A0%E5%BF%83%E6%89%8B%E4%BD%9C-mxd-big-day-%E6%88%90%E9%83%BD%E7%AC%AC1%E6%9C%9F');
      break;
    case 10:
      $('#btn-detail').attr('href', '//mxd.tencent.com/%E7%BA%B8%E9%97%B4-mxd-big-day-%E6%88%90%E9%83%BD%E7%AC%AC3%E6%9C%9F');
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
          .attr('href', '//mxd.tencent.com/%E7%9B%94-mxd-big-day-%E5%8C%97%E4%BA%AC%E7%AC%AC12%E6%9C%9F')
          .children('img').attr('src', '//3gimg.qq.com/mig-web/2016/160831/20140515-kui.jpg');
        break;
      case 2:
        $('#poster-2')
          .attr('href', '//mxd.tencent.com/%E6%98%A5%E5%A4%A9%E8%8A%B1%E8%8A%B1%E5%90%8C%E5%AD%A6%E4%BC%9A-mbd-%E6%B7%B1%E5%9C%B3%E7%AC%AC%E4%BA%8C%E6%9C%9F')
          .children('img').attr('src', '//3gimg.qq.com/mig-web/2016/160831/140228-spring.jpg');
        break;
      case 3:
        $('#poster-3')
          .attr('href', '//mxd.tencent.com/%E8%B6%B3%E7%90%83%E8%AE%AD%E7%BB%83%E8%90%A5-mbd%E5%8C%97%E4%BA%AC%E7%AC')
          .children('img').attr('src', '//3gimg.qq.com/mig-web/2016/160831/20140515-football.jpg');
        break;
      case 4:
        $('#poster-4')
          .attr('href', '//mxd.tencent.com/%E5%A4%9C%E7%A9%BA%E4%B8%AD%E6%9C%80%E4%BA%AE%E7%9A%84%E6%98%9F-mxd-big-day-%E6%B7%B1%E5%9C%B3%E7%AC%AC3%E6%9C%9F')
          .children('img').attr('src', '//3gimg.qq.com/mig-web/2016/160831/20140515-star.jpg');
        break;
      case 5:
        $('#poster-5')
          .attr('href', '//mxd.tencent.com/%E7%A5%9E%E7%A7%98%E5%8A%9B%E9%87%8F-mxd-big-day-%E5%8C%97%E4%BA%AC%E7%AC%AC7%E6%9C%9F')
          .children('img').attr('src', '//3gimg.qq.com/mig-web/2016/160831/20140912-secret.jpg');
        break;
      case 6:
        $('#poster-6')
          .attr('href', '//mxd.tencent.com/%E4%B8%83%E4%B8%AA%E9%9A%86%E5%86%AC%E5%91%9B-mxd-big-day-%E5%8C%97%E4%BA%AC%E7%AC%AC9%E6%9C%9F')
          .children('img').attr('src', '//3gimg.qq.com/mig-web/2016/160831/20150130-festival.jpg');
        break;
      case 7:
        $('#poster-7')
          .attr('href', '//mxd.tencent.com/%E8%BF%9B%E5%87%BB%EF%BC%81%E4%BA%8C%E6%AC%A1%E5%85%83-mxd-big-day-%E5%8C%97%E4%BA%AC%E7%AC%AC10%E6%9C%9F')
          .children('img').attr('src', '//3gimg.qq.com/mig-web/2016/160831/20150427-2.jpg');
        break;
      case 8:
        $('#poster-8')
          .attr('href', '//mxd.tencent.com/%E5%BC%A6%E5%A4%96%E9%9F%B3-mxd-big-day-%E5%8C%97%E4%BA%AC%E7%AC%AC11%E6%9C%9F')
          .children('img').attr('src', '//3gimg.qq.com/mig-web/2016/160831/20150703-string.jpg');
        break;
      case 9:
        $('#poster-9')
          .attr('href', '//mxd.tencent.com/%E5%8C%A0%E5%BF%83%E6%89%8B%E4%BD%9C-mxd-big-day-%E6%88%90%E9%83%BD%E7%AC%AC1%E6%9C%9F')
          .children('img').attr('src', '//3gimg.qq.com/mig-web/2016/160831/20150515-worker.jpg');
        break;
      case 10:
        $('#poster-10')
          .attr('href', '//mxd.tencent.com/%E7%BA%B8%E9%97%B4-mxd-big-day-%E6%88%90%E9%83%BD%E7%AC%AC3%E6%9C%9F')
          .children('img').attr('src', '//3gimg.qq.com/mig-web/2016/160831/151120-paper.jpg');
        break;
      default:
        break;
    }
  }
}

function setPosterCover(itemId) {
  switch (parseInt(itemId)) {
    case 1:
      $('#poster-cover').attr('src', '//3gimg.qq.com/mig-web/2016/160831/20140515-kui.jpg');
      break;
    case 2:
      $('#poster-cover').attr('src', '//3gimg.qq.com/mig-web/2016/160831/140228-spring.jpg');
      break;
    case 3:
      $('#poster-cover').attr('src', '//3gimg.qq.com/mig-web/2016/160831/20140515-football.jpg');
      break;
    case 4:
      $('#poster-cover').attr('src', '//3gimg.qq.com/mig-web/2016/160831/20140515-star.jpg');
      break;
    case 5:
      $('#poster-cover').attr('src', '//3gimg.qq.com/mig-web/2016/160831/20140912-secret.jpg');
      break;
    case 6:
      $('#poster-cover').attr('src', '//3gimg.qq.com/mig-web/2016/160831/20150130-festival.jpg');
      break;
    case 7:
      $('#poster-cover').attr('src', '//3gimg.qq.com/mig-web/2016/160831/20150427-2.jpg');
      break;
    case 8:
      $('#poster-cover').attr('src', '//3gimg.qq.com/mig-web/2016/160831/20150703-string.jpg');
      break;
    case 9:
      $('#poster-cover').attr('src', '//3gimg.qq.com/mig-web/2016/160831/20150515-worker.jpg');
      break;
    case 10:
      $('#poster-cover').attr('src', '//3gimg.qq.com/mig-web/2016/160831/151120-paper.jpg');
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
