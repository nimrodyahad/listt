function validateEmail(t){return!!/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(t)}$(document).ready(function(){$("#contact-email").keyup(function(){$(this).val().indexOf("@")>=0&&$(this).val().indexOf(".")>=0?($("#contact-form-submit").removeClass("tfm-btn-mute").addClass("tfm-btn-color"),$("#tfm-join").attr("action","//docs.google.com/forms/d/e/1FAIpQLSf9iUgdJuoZXnjNxqehckPaFjeaF8C6OMzBqSm1tSC44UBGvA/formResponse")):($("#contact-form-submit").removeClass("tfm-btn-color").addClass("tfm-btn-mute"),$("#tfm-join").attr("action",""))}),$("#contact-form-submit").click(function(t){var o=$("#contact-email").val(),e={"entry.1981580251":o};0==$.trim(o).length&&t.preventDefault(),validateEmail(o)?($.ajax({type:"POST",url:"//docs.google.com/forms/d/e/1FAIpQLSf9iUgdJuoZXnjNxqehckPaFjeaF8C6OMzBqSm1tSC44UBGvA/formResponse",dataType:"json",data:e,statusCode:{0:function(){console.log("success"),window.location.href="../confirmation/"}}}),t.preventDefault()):t.preventDefault()})});