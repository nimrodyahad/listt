function openLink(){var n=Math.floor(Math.random()*links.length);return window.open(links[n]),!1}$(document).ready(function(){$("body").css("overflow","hidden"),$(".tfm-menu-icon").hide(),$("#tfm-gate").addClass("open"),$(".tfm-true").click(function(){$("body").css("overflow","visible"),$("#tfm-gate").removeClass("open"),$(".tfm-menu-icon").show(),$("#contact-email").delay(133).fadeIn(function(){$(this).focus()})})});var links=new Array;links[0]="https://www.cnn.com/",links[1]="https://www.nbcnews.com/",links[2]="http://www.foxnews.com/",links[3]="http://abcnews.go.com/";