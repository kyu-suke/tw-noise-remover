'use strict';
setInterval(function(){
  document.querySelectorAll(".css-901oao.css-16my406.css-cens5h.r-111h2gw.r-gwet1z.r-n6v787.r-1sf4r6n.r-bcqeeo.r-qvutc0").forEach(node => {
    if (node.innerText.indexOf('がリツイート') !== -1) {
      node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.textContent = null
    }
  })
}, 1000)



