import{B as f}from"./BmcFormHandler.js";let n={};(function(e){n={forms:{},general:window.buymecoffee_general,formData:{},initiated:!1,init(){this.forms=e(".buymecoffee_form"),e.each(this.forms,function(i){let t=e(this),o=window.buymecoffee_settings;new f(t,o).initForm()}),this.initOther(),this.initiated=!0},initOther(){e(".buymecoffee_form input").on("keypress",function(t){return(t==null?void 0:t.which)!==13}),e(".buymecoffee_form").find('input[data-required="yes"][data-type="input"],textarea[data-required="yes"],select[data-required="yes"]').on("keypress blur",function(t){e(this).val()&&e(this).removeClass("wpf_has_error")})}},e(window).on("load",function(){n!=null&&n.initiated||(console.log("initiating"),n.init())}),e(document).ready(function(){let i=e("#bmc_modal_wrapper"),t=e("#bmc_open_modal_btn"),o=e(".close");t.click(function(){i.show()}),o.click(function(){i.hide()}),e(window).click(function(r){r.target==i[0]&&i.hide()})})})(jQuery);