
（function（）{
  '使用严格';

  if（navigator.userAgent.match（/IEMobile\/10\.0/））{
    var msViewportStyle = document.createElement（'style'）
    msViewportStyle.appendChild（
      document.createTextNode（
        '@ -ms视口{宽度：汽车重要！}'
      ）
    ）
    document.querySelector（ '头'）。使用appendChild（msViewportStyle）
  }

}）（）;