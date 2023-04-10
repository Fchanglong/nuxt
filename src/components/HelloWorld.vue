toggleChatList(a) {
  var e = $(a).closest(".chat"),
      n = 0;
  e.is(".active") ? (e.removeClass("active"), $.map(e.find(".chat-list li"), (function (a) {
      $(a).delay(n).fadeOut(200), n += 100
  }))) : (e.addClass("active"), $.map(e.find(".chat-list li").get().reverse(), (function (a) {
      $(a).delay(n).fadeIn(200), n += 100
  })))
}