		$(document).ready(function() {
    		var home = "#home";
    		var blog = "#blog";
    		var portfolio = "#portfolio";
    		var resume = "#resume";

    		//Hide all but the home div
    		$(blog).hide();
    		$(portfolio).hide();
    		$(resume).hide();

    		//When the home button is clicked, hide everything and show only the home div
    		$("#homeButton").click(function() {
    			if($(home).is(':hidden')) {
   					$(home).show();
    			}
    			if($(blog).is(':visible')) {
   					$(blog).hide();
    			}
    			if($(portfolio).is(':visible')) {
   					$(portfolio).hide();
    			}
    			if($(resume).is(':visible')) {
   					$(resume).hide();
    			}

    		});

    		//When the blog button is clicked, hide everything and show only the blog div
    		$("#blogButton").click(function() {
    			if($(blog).is(':hidden')) {
   					$(blog).show();
    			}
    			if($(home).is(':visible')) {
   					$(home).hide();
    			}
    			if($(portfolio).is(':visible')) {
   					$(portfolio).hide();
    			}
    			if($(resume).is(':visible')) {
   					$(resume).hide();
    			}

    		});

    		//When the portfolio button is clicked, hide everything and show only the portfolio div
    		$("#portfolioButton").click(function() {
    			if($(portfolio).is(':hidden')) {
   					$(portfolio).show();
    			}
    			if($(blog).is(':visible')) {
   					$(blog).hide();
    			}
    			if($(home).is(':visible')) {
   					$(home).hide();
    			}
    			if($(resume).is(':visible')) {
   					$(resume).hide();
    			}

    		});

    		//When the resume button is clicked, hide everything and show only the resume div
    		$("#resumeButton").click(function() {
    			if($(resume).is(':hidden')) {
   					$(resume).show();
    			}
    			if($(blog).is(':visible')) {
   					$(blog).hide();
    			}
    			if($(portfolio).is(':visible')) {
   					$(portfolio).hide();
    			}
    			if($(home).is(':visible')) {
   					$(home).hide();
    			}

    		});
		});