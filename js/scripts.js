(function ($, Drupal) {
  Drupal.behaviors.crukCustom = {
    attach: function (context, settings) {


        $(".field--type-text-with-summary a[href^='http://'], .field--type-text-with-summary a[href^='https://']").attr("target","_blank");

        //Timeline  timeline-history-line
        $('.timeline-history-line > div:first-child').addClass('active');
        $('.timeline-history-line > div').once('crukCustom').on('click', function (e) {
        //e.preventDefault();
        var cl = $(this).attr('class');
        $(this).siblings().removeClass('active')
        $(this).addClass('active');
        $('.timeline-history-content .timeline-history-line .'+cl).siblings().removeClass('active');
        $('.timeline-history-content .timeline-history-line .'+cl).addClass('active');
        });

        // Toggle menu.
        $('.main-menu-button').once('crukCustom').on('click keyDown', function (e) {
          e.preventDefault();
          $('.main-menu-wrapper').toggleClass('open');
          $('.main-menu-close').toggleClass('open');

          setTimeout(function(){
            $('.main-menu-wrapper section').toggleClass('open');
          }, 200);
        });

        $('.campaign-init').on('click keyDown', function(e){
          e.preventDefault();
          if(!$(this).hasClass("active")){
            $(this).addClass("active");
            $(this).parent().find(".large").slideUp();
            $(this).next(".hidden").slideDown();
          }else{
            $(this).removeClass("active");
            $(this).parent().find(".large").slideDown();
            $(this).next(".hidden").slideUp();
          }
        });


        $('.sub-init-a').on('click keyDown', function (e) {
          e.preventDefault();
          $(this).toggleClass("active");
          $(".secondary-menu").toggleClass("active");
        });


        $(document).on('click', '.field--name-field-p-block-links a[href^="#"]', function (event) {
          event.preventDefault();

          $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 150
          }, 500);
        });

        $('.hero-slider-container').once('crukCustom').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          autoplay: false,
          infinite: true,
          arrows: false,
          focusOnSelect: false,
          accessibility: true,
          responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              }
            }
          ]
        });

        $('.data-slider').once('crukCustom').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          autoplay: false,
          infinite: true,
          arrows: true,
          accessibility: true,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                dots: true,
                arrows: false,
              }
            }
          ]
        });

        $('.team-carousel').once('crukCustom').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          centerMode: true,
          dots: false,
          autoplay: false,
          infinite: true,
          arrows: true,
          accessibility: true,
          responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
          ]
        });

        //
        $('.team-carousel-container .item').once('crukCustom').on('click', function (e) {
          e.preventDefault();
          $(this).closest('.item').find('.item-toggle').toggleClass('open');
          $(this).closest('.item').find('.item-caption').toggleClass('open');
          $(this).closest('.item').siblings().find('.item-toggle').removeClass('open');
          $(this).closest('.item').siblings().find('.item-caption').removeClass('open');
        });

        //Committee members slider

        $('#member-card').once('crukCustom').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '#memmber-thumb',
          adaptiveHeight: true,
          accessibility: true,
        });

        $('#memmber-thumb').once('crukCustom').slick({
          slidesToShow: 12,
          slidesToScroll: 1,
          arrows: true,
          asNavFor: '#member-card',
          dots: false,
          centerMode: false,
          focusOnSelect: true,
          infinite: true,
          accessibility: true,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
          ]
        });
        //End committee members slider

        //challenges grid
        if ($(window).width() < 991) {
            $('.grid-item .bottom a').on('click', function(e){
            $current = $(this).parents('.grid-item');
            $('.grid-item').removeClass('active');
            $current.addClass('active');
            return false;
            });

            $('.grid-item .top h5 .x-button').on('click', function(e){
            $('.grid-item').removeClass('active');
            return false;
            });
        } else {
            $('.grid-item').removeClass('active');
        }

        $('.challenges-three-steps .arrow, .challenges-key-details-important-dates .block-header, .challenges-key-details-important-dates .arrow').once('crukCustom').each(function () {
          $(this).on('click keyDown', function () {
            if ($(this).parent().hasClass('active')) {
              $(this).parent().find('.text').fadeOut();
            }
            else {
              $(this).parent().find('.text').fadeIn();
            }
            $(this).parent().toggleClass('active');
          });
        });

        //Team Hub Map control
        $(document).once('crukCustom').bind('leaflet.feature', function(e, lFeature, feature) {
          lFeature.on('click', function(e) {
            var map_id = $(e.originalEvent.target).parents('.leaflet-container').attr('id');
            $('.view-team-map.view-display-id-attachment_1 .view-content > .views-element-container').detach();
            $('.view-team-map.view-display-id-attachment_1 .view-content').append(feature.popup).addClass('zoomed');
            $('.view-team-map.view-display-id-attachment_1 .view-content > .views-element-container').append('<div class="close-map-popup">×</div>');
            feature.icon.html_class = 'test';

            $('.close-map-popup').click(function () {
              $('.view-team-map.view-display-id-attachment_1 .view-content').removeClass('zoomed');
              $('.view-team-map.view-display-id-attachment_1 .view-content > .views-element-container').detach();
              drupalSettings.leaflet[map_id].lMap.setView({lat: 45, lng: 0});
              drupalSettings.leaflet[map_id].lMap.setMaxZoom(2);
              if ($(window).width() < 768) {
                drupalSettings.leaflet[map_id].lMap.setZoom(1);
              }
              else {
                drupalSettings.leaflet[map_id].lMap.setZoom(2);
              }

            });

            drupalSettings.leaflet[map_id].lMap.setMaxZoom(5);
            drupalSettings.leaflet[map_id].lMap.setView({lat: feature.lat, lng: feature.lon + 10}, 5);
          })
        });

        if ($(window).width() < 768) {
          if (typeof drupalSettings.leaflet[map_id].lMap !== 'undefined') {
            drupalSettings.leaflet[map_id].lMap.setZoom(1);
          }
        }
    }
  };

  $('.accordion-wrapper .accordion-item .accordion-title').on('click', function(){
    $(this).closest('.accordion-item').find('.accordion-content').slideToggle();
    $(this).closest('.accordion-item').find('.accordion-title').toggleClass('active');
    $(this).closest('.accordion-item').siblings().find('.accordion-content').slideUp();
    $(this).closest('.accordion-item').siblings().find('.accordion-title').removeClass('active');
  });

  if ( $('.timeline-history-line').length ) {
    var lineHeight = $('.timeline-history-line:first > div').length * 75;
    if ($(window).width() < 768) {
      lineHeight = $('.timeline-history-line:first > div').length * 45;
    }
    $('.timeline-history-line:first').append('<style>.timeline-history-line:after{height:' + lineHeight + 'px}</style>');
  }

  var target = document.location.hash.replace("#", "");
  if (target.length) {
    if (target=="timelineModal") {
      $('#timelineModal').modal('show');
    }
  }

  Drupal.behaviors.typeCounter = {
    attach: function (context, settings) {
      if ($('.paragraph-type-counter').length) {
        countdown(new Date($('.paragraph-type-counter .field--name-field-countdown-date time').attr('datetime')), function(ts) {
          $('.paragraph-type-counter .counter-digits .days .digits')[0].innerHTML = ts.days;
          $('.paragraph-type-counter .counter-digits .hours .digits')[0].innerHTML = ts.hours;
          $('.paragraph-type-counter .counter-digits .minutes .digits')[0].innerHTML = ts.minutes;
        }, countdown.DAYS|countdown.HOURS|countdown.MINUTES);
      }

      if ($('.paragraph-type-counter-short').length) {
        countdown(new Date($('.paragraph-type-counter-short .field--name-field-countdown-date time').attr('datetime')), function(ts) {
          $('.paragraph-type-counter-short .countdown-short-wrapper .countdown_days .digits')[0].innerHTML = ts.days;
        }, countdown.DAYS|countdown.HOURS|countdown.MINUTES);
      }
    }
  };

  Drupal.behaviors.insightImpact = {
    attach: function (context, settings) {
      if ($('.insight-impact-carousel ').length) {
        if ($('.insight-impact-carousel .view-content .views-row').length > 1) {
          $('.insight-impact-carousel .view-content').slick({
            dots: false,
            infinite: true,
            arrows: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            accessibility: true,
            responsive: [
              {
                breakpoint: 767,
                settings: {
                  dots: true,
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });
        }

          // $('.insight-impact-carousel .view-content').slick({
          //   dots: false,
          //   infinite: true,
          //   arrows: true,
          //   speed: 300,
          //   slidesToShow: 2,
          //   slidesToScroll: 1,
          //   accessibility: true,
          //   responsive: [
          //     {
          //       breakpoint: 767,
          //       settings: {
          //         dots: true,
          //         arrows: false,
          //         slidesToShow: 1,
          //         slidesToScroll: 1
          //       }
          //     }
          //   ]
          // });
      }
    }
  };

  function crukChallengesShowImages(element, id) {
    var container = element.children('.view-content').eq(0);
    var images = container.find('.views-row');
    var imagesOpen = container.children('.challenge-state-closed');
    var images2021 = container.children('.challenge-year-2021');
    var images2017 = container.children('.challenge-year-2017');
    var images2015 = container.children('.challenge-year-2015');
    var imagesShow;

    var firstTitle = $('.challenges-opened .view-header .first-title');
    var secondTitle = $('.challenges-opened .view-header .second-title');

    switch (id) {
      case 'block1-challenge-state-closed':
        // firstTitle.show();
        // secondTitle.hide();
        imagesShow = imagesOpen;
        break;
      case 'block1-challenge-year-2021':
        // firstTitle.hide();
        // secondTitle.show();
        imagesShow = images2021;
        break;
      case 'block2-challenge-year-2021':
        imagesShow = images2021;
        break;
      case 'block1-challenge-year-2017':
        // firstTitle.hide();
        // secondTitle.show();
        imagesShow = images2017;
        break;
      case 'block2-challenge-year-2017':
        imagesShow = images2017;
        break;
      case 'block1-challenge-year-2015':
        // firstTitle.hide();
        // secondTitle.show();
        imagesShow = images2015;
        break;
      case 'block2-challenge-year-2015':
        imagesShow = images2015;
        break;
    }

    images.each(function () {
      $(this).hide();
    });

    imagesShow.each(function () {
      $(this).show();
    });
  }

  function crukChallengesInit(element) {
    var tabs = element.find('.view-header .tabs').children().children(':first-child');
    var activeClass = 'is-active';
    var parent, tabsInactive, id;

    tabs.once('crukChallengesInit').each(function () {
      id = $(this).attr('id');

      if ($(this).parent().hasClass(activeClass)) {
        crukChallengesShowImages(element, id);
      }

      $(this).on('click', function (event) {
        if (!$(this).hasClass(activeClass)) {
          tabsInactive = tabs.filter(function(e) {
            return e !== $(this);
          });

          tabsInactive.each(function () {
            $(this).parent().removeClass(activeClass)
          });

          parent = $(this).parent();
          parent.addClass(activeClass);

          id = $(this).attr('id');
          crukChallengesShowImages(element, id);
        }
      });
    });
  }

  Drupal.behaviors.crukChallengesView = {
    attach: function (context, settings) {
      var challengesClosed = $('.challenges-closed');
      var challengesOpen = $('.challenges-opened');

      if (challengesClosed.length) {
        crukChallengesInit(challengesClosed);
      }

      if (challengesOpen.length) {
        crukChallengesInit(challengesOpen);
      }
    }
  };

  Drupal.behaviors.closeChallenge = {
    attach: function (context, settings) {
      if ($(window).width() < 991) {
        $('.view-challenges .views-row .field-view-node a').on('click', function(e){
          $current = $(this).parents('.view-challenges .views-row');
          if ($current.hasClass('active')) {
          } else {
            $('.view-challenges .views-row').removeClass('active');
            $current.addClass('active');
            return false;
          }

        });

        $('.view-challenges .views-row .x-button').on('click', function(e){
          $('.view-challenges .views-row').removeClass('active');
          return false;
        });
      } else {
        $('.view-challenges .views-row').removeClass('active');
      }
    }
  };

  Drupal.behaviors.accordion = {
    attach: function (context, settings) {
      $('.view-teams .views-row .field-title', context).on('click', function() {
        console.log(123);
        $(this).closest('.views-row').find('.accordion-content').slideToggle();
        $(this).closest('.views-row').find('.field-title').toggleClass('active');
        $(this).closest('.views-row').siblings().find('.accordion-content').slideUp();
        $(this).closest('.views-row').siblings().find('.field-title').removeClass('active');
      });
    }
  };

  Drupal.behaviors.teamTabsView = {
    attach: function (context, settings) {
      if ($('.accordion-teams').length) {
        var grid = document.querySelector('.accordion-teams .view-content');
        var msnry;
// element selectors
        var live = document.querySelectorAll('.team-status-live');
        var past = document.querySelectorAll('.team-status-past');
// buttons
        var tabsUl = document.getElementById('team-status');
        var lis = tabsUl.children;
        var gridItems = grid.children;

//element & class name
        function toggleClass(parentElem, childElems, className){
          for(var i = 0; i < childElems.length; i++){
            if(childElems[i] === parentElem){
              childElems[i].classList.add(className);
            }
            else{
              childElems[i].classList.remove(className);
            }
          }
        }

        function showImages(showImg, hideImg1){
          for(var i = 0; i < showImg.length; i++){
            showImg[i].style.display = "block";
          }
          for(var i = 0; i < hideImg1.length; i++){
            hideImg1[i].style.display = "none";
          }
        }

        tabsUl.addEventListener('click', function (event) {
          var tabLi = event.target.parentNode;

          toggleClass(tabLi, lis, 'is-active');

          //show imgOpen images
          if(event.target.id == "team-status-live"){
            showImages(live, past);
          }

          // show imgSeventeen images
          if(event.target.id == "team-status-past"){
            showImages(past, live);
          }
        });
      }
    }
  };



  Drupal.behaviors.linkGradientSquare = {
    attach: function (context, settings) {
      if ($('.paragraph--type--block-gradient-square .field--name-field-p-block-link', context).length) {
        $('.paragraph--type--block-gradient-square', context).addClass('with-link');
      }
    }
  };

  (function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
  })();

  $(document).on('click', [
      '.news-insight-archive .view-filters .form-row fieldset .description',
      '.filtered-publications .view-filters .form-row fieldset .description',
    ].join(','), toggleStyledSelect);

  function toggleStyledSelect() {
    let flag = $(this).hasClass('active');
    var $fieldset = $(this).closest('fieldset');
    var $formCheckboxes = $fieldset.find('.form-checkboxes');
    var $formRadios = $fieldset.find('.form-radios');

    $listItem = $formCheckboxes.length !== 0
      ? $formCheckboxes
      : $formRadios.length !== 0
      ? $formRadios
      : null ;

    if (flag) {
      closeSelectField($fieldset, $listItem);
    }
    else {
      closeSelectField(null);
      openSelectField($fieldset, $listItem);
    }
    // $fieldset.find('.description').toggleClass('active');
    // $listItem.slideToggle();
  }

  function openSelectField (el, list) {
    if (el && list) {
      el.find('.description').addClass('active');
      list.slideDown();
      return;
    }

    return false;
  }

  function closeSelectField (el, list = null) {
    if (el !== null) {
      el.find('.description').removeClass('active');
      list.slideUp();
    }
    else {
      $('.views-exposed-form .description').removeClass('active');
      $('.views-exposed-form .form-radios, .views-exposed-form .form-checkboxes').slideUp();
    }
  }

  window.addEventListener("optimizedResize", function() {
    var searchIsOpened = $('body').hasClass('is-opened-search');

    if (searchIsOpened) {
      closeSearchField();
    }
  });

  $('.block-views-exposed-filter-blocksearch-page-1')
    .parent()
    .append('<div class="search-overlay js-search-overlay"></div>')
    .end()
    .find('.form-item-query')
    .append('<div class="icon-close-search js-close-search"></div>');

  $(document).on('click', '#views-exposed-form-search-page-1 .form-item-query', openSearchField);
  $(document).on('click', '.js-close-search', closeSearchField);

  function openSearchField() {
    if (!isMobileDevice()) {
      return
    }

    // var $input = $('#views-exposed-form-search-page-1').find('input');
    var $body = $('body');
    var isOpened = $body.hasClass('is-opened-search');

    if (!isOpened) {
      $body.addClass('is-opened-search');

      // var offsetLeftStr = `(100vw - ${$input.offset().left + $input.outerWidth()}px)`;

      // $input
      //   .css('width', `calc(100vw - ${offsetLeftStr})`)
      //   .addClass('_mod')
      //   .closest('.form-row')
      //   .css('transform', `translateX(calc(0.5 * ${offsetLeftStr}))`);
      //   .addClass('_mod');
    }
  }

  function closeSearchField(event) {
    event.stopPropagation();

    // var $input = $('#views-exposed-form-search-page-1').find('input');
    var $body = $('body');
    var isOpened = $body.hasClass('is-opened-search');

    if (isOpened) {
      $body.removeClass('is-opened-search');

      // $input
      //   .removeAttr('style')
      //   .removeClass('_mod')
      //   .closest('.form-row')
      //   .removeAttr('style');
      //   .removeClass('_mod');
    }
  }

  function isMobileDevice() {
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    return vw < 768;
  }


  // created popup with embeded video (youtube, vimeo)
  Drupal.behaviors.videoPopup = {
    attach: function (context, settings) {
      const self = this;
      const thumbnails = $('.paragraph--type--video-slide', context);

      if (thumbnails.length) {
        thumbnails.once('videoPopup').click(function() {
          let videoUrl = $(this).find('.thumbnail img').data('video-url');
          const videoPopup = self.popup(videoUrl);

          if ($('.video-popup').length < 1) {
            $('body').addClass('show-popup');
            $('#content').append(videoPopup);
          }
        });

        $(document).on('click', '.close-popup', function() {
          $('body').removeClass('show-popup');
          self.closePopup();
        });
      }
    },
    popup: function(url) {
      return `
        <div class="video-popup">
          <article class="popup-wrapper">
            <div class="popup">
              <div class="popup-header">
                <button type="button" class="close-popup">
                  &times;
                </button>
              </div>
              <div class="popup-content">
                ${this.getEmbedVideoUrl(url)}
              </div>
            </div>
          </article>
        </div>`;
    },
    getEmbedVideoUrl: function(url) {
      let videoUrl;
      const pattern1 = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;
      const pattern2 = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g;

      if (pattern1.test(url)) {
        let replacement = '<iframe width="800" height="460" src="//player.vimeo.com/video/$1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        videoUrl = url.replace(pattern1, replacement);
      }

      if (pattern2.test(url)) {
        let replacement = '<iframe width="800" height="460" src="//www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe>';
        videoUrl = url.replace(pattern2, replacement);
      }

      return videoUrl;
    },
    closePopup: function() {
      $('.video-popup').remove();
    }
  };


  // video slider
  Drupal.behaviors.videoSlider = {
    attach: function (context, settings) {
      const videoSlider = $('.paragraph--type--video-slider', context);


      if (videoSlider.length) {
        const options = {
          centerMode: true,
          slidesToShow: 3,
          arrows: true,
          dots: false,
          responsive: [
            {
              breakpoint: 991,
              settings: {
                arrows: false,
                dots: true,
              }
            },
            {
              breakpoint: 713,
              settings: {
                slidesToShow: 1,
                centerMode: false,
                arrows: false,
                dots: true,
              }
            }
          ]
        };

        $('.field--name-field-p-video-slide').once('videoSlider').slick(options);
      }
    }
  };

  Drupal.behaviors.heroSlider = {
    attach: function (context, settings) {

      if ($('.paragraph--type--block-hero-with-slider', context).length) {
        const heroContent = $('.section-hero .field--name-field-p-slider');
        const options = {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          adaptiveHeight: true,
          autoplay: true,
          autoplaySpeed: 5000,
        };

        if ($('.section-hero .field--name-field-p-slider .paragraph').length > 1) {
          heroContent.slick(options);
        }
      }
    }
  };

  Drupal.behaviors.imageSlider = {
    attach: function(context, settings) {
      const imgSliderBlock = $('.paragraph--type--block-image-text-slider', context);
      if (imgSliderBlock) {
        const container = $('.field--name-field-p-image-slide', context);
        const options = {
          dots: true,
          autoplay: true,
          autoplaySpeed: 5000,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
              }
            }
          ]
        };
        container.once('imageSlider').slick(options);
      }
    }
  };

  Drupal.behaviors.heroStretchedHeight = {
    attach: function (context, settings) {
      const self = this;

      const heroSlider = $('.paragraph--type--block-hero-with-slider');
      const textGradient = $('.paragraph--type--block-gradient-line-with-text');
      const bodyTopPadding = parseInt($('body').css('padding-top'), 10);

      if (heroSlider.length && heroSlider.parent().next().find('.paragraph--type--block-gradient-line-with-text').length) {

        if ($(window).width() > 991) {
          // let indent = textGradient.height() + bodyTopPadding;
          // heroSlider.find('.row.first').css('height', `calc(100vh - ${indent}px)`);
        }
      }

      if (heroSlider.length) {
        self.videoHeight();
        $(window).on('resize', self.videoHeight);
      }
    },

    videoHeight: function() {
      const video = $('.paragraph--type--block-hero-with-slider .field__item video');

      if ($(window).width() > 991 && $(window).height() < 650) {
        let height = $(window).height() * 85 / 100;
        video.css('max-height', `${Math.round(maxHeight)}px`);
      }

      if ($(window).width() > 991 && $(window).height() >= 650) {
        const gradientLine = $('.paragraph--type--block-gradient-line-with-text');
        let maxHeight = $(window).height() - gradientLine.height();
        video.css('max-height', `${Math.round(maxHeight)}px`);
      }
    }
  };
})(jQuery, Drupal);

var currentId = "";

//tabs inside partners and donors page
jQuery(document).ready(function ($) {
  $(".tabcontent").hide();
  $(".tablinks").click(function(){
    var currentId = $(this).attr("id");
    $(".tablinks").removeClass("active");
    $(".tabcontent").hide();
    console.log(currentId);
    $(this).addClass("active");
    $(".tabcontent." + currentId).show();
  });

});
