$(document).ready(function(){$(document).trigger("bootstrap:before");NexT.utils.isMobile()&&window.FastClick.attach(document.body);NexT.utils.lazyLoadPostsImages();NexT.utils.registerESCKeyEvent();NexT.utils.registerBackToTop();$(".site-nav-toggle button").on("click",function(){var a=$(".site-nav");var d="site-nav-on";var e=a.hasClass(d);var c=e?"slideUp":"slideDown";var b=e?"removeClass":"addClass";a.stop()[c]("fast",function(){a[b](d)})});CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox();NexT.utils.embeddedVideoTransformer();NexT.utils.addActiveClassToMenuItem();NexT.motion.integrator.add(NexT.motion.middleWares.logo).add(NexT.motion.middleWares.menu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar);$(document).trigger("motion:before");CONFIG.motion&&NexT.motion.integrator.bootstrap();$(document).trigger("bootstrap:after")});