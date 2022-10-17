 jQuery('.r_menu_area  .menu-item-has-children').prepend('<span>Hello</span>');
jQuery(function() {
    jQuery(".r_menu_area  .menu-item-has-children span").click(function(event) {
        event.preventDefault();
        jQuery(".r_menu_area  .menu-item-has-children").find('.sub-menu').css({
            'display': 'none'
        });
        jQuery(this).closest(".r_menu_area  .menu-item-has-children").find('.sub-menu').slideToggle();
    });
});
