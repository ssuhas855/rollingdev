var sortOption = "";
setTimeout(function () {
  var caountpo = $("#AjaxinateLoop").children().length;
  if (caountpo > 0) {
    $(".filters-toolbar__product-count").html(caountpo + " recipes");
    $("#empty_collection").addClass("hide");
  } else if (caountpo > 1) {
    $(".filters-toolbar__product-count").html(caountpo + " recipes");
    $("#empty_collection").removeClass("hide");
  } else {
    $(".filters-toolbar__product-count").html(caountpo + " recipes");
    $("#empty_collection").removeClass("hide");
  }
}, 1000);

function showSelectedValues() {
  var filtervals = $("input[name=chkbox_filter]:checked")
    .map(function () {
      return this.value;
    })
    .get()
    .join("+");
  return filtervals;
}

function _fn_coll_filter_click(id) {
  // $("#no-recipes").hide();
  if ($(":checkbox:checked").length > 0) {
    $(".clear_filter_1").css("display", "block");
  } else {
    $(".clear_filter_1").css("display", "none");
    loadSelectedRecipes(window.location.href);
  }

  $(".fil_tablinks").css("display", "block");
  $(".coll-picker-label").removeClass("active");
  $("#label_" + id).addClass("active");
  $("#dispPicks").html("");
  $("#display_filter_val").html("");
  //update the div
  $(":checkbox:checked").each(function (ind, ele) {
    $("#dispPicks").append(
      "<span alt='" +
        $(ele).val() +
        "+'>" +
        $(ele).next("span").text() +
        "<i>+</i></span>"
    );
    $("#display_filter_val").append(
      '<span><button class="lt-close" id=' +
        $(ele).attr("id") +
        ' onclick="clicked(this);"> </button>' +
        $(ele).parent("label").text() +
        "</span>"
    );
  });

  var filter_vals = "";
  var newURL = "";
  delete Shopify.queryParams.page;

  var collection_handle = $("#new_collection_title").val();
  newURL = "/blogs/" + collection_handle + "/tagged";

  $("#dispPicks span").each(function () {
    var eleId = $(this).attr("alt");
    filter_vals += eleId;
  });
  if (filter_vals.length) {
    newURL += "/" + filter_vals.slice(0, -1);
  } else {
    newURL = "/blogs/" + collection_handle;
  }

  var search = window.location.href.split("?")[1];
  if (search != undefined) {
    newURL += "?" + search;
  }
  console.log("Inside _fn_coll_filter_click");
  console.log("newURL", newURL);
  //location.href = newURL;
  ajaxLoadPage(newURL);

  $(".collection_fliter").toggleClass("active-filter");

  $(".coll-picker.coll-filter").fadeIn();
}

function _fn_clear_filter_click() {
  var collFilters = jQuery(".coll-picker.active");
  var newTags = [];
  var newURL = "";
  delete Shopify.queryParams.page;
  collFilters.each(function () {
    if (jQuery(this).attr("tabindex")) {
      newTags.push(jQuery(this).attr("tabindex"));
    }
  });

  $(".coll-picker.coll-filter").fadeOut();
  var collection_handle = $("#new_collection_title").val();
  newURL = "/blogs/" + collection_handle;
  console.log("newURL", newURL);
  //location.href = newURL;
  loadSelectedRecipes(newURL);
}

function _fn_sort_filter_click(sort) {
  var collFilters = jQuery(".coll-picker.active");
  var newTags = [];
  var newURL = "";
  delete Shopify.queryParams.page;
  collFilters.each(function () {
    if (jQuery(this).attr("tabindex")) {
      newTags.push(jQuery(this).attr("tabindex"));
    }
  });

  var url = window.location.href.split("?")[0];
  newURL = url + "?sort_by=" + sort;
  //location.href = newURL;
  ajaxLoadPage(newURL);
}

function _fn_coll_filter_click1() {
  if (history.pushState) {
    var newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?sort_by=price-ascending";
    window.history.pushState({ path: newurl }, "", newurl);
    // ajaxLoadPage(newURL);
  }
}

function _fn_ajax_loadmore() {
  // document.addEventListener("DOMContentLoaded", function () {
  //   new Ajaxinate({
  //     pagination: "#AjaxinatePagination",
  //     method: "click",
  //     container: "#AjaxinateLoop",
  //     offset: 0,
  //     loadingText: "Loading",
  //     callback: null,
  //   });
  //   this.addClickListener = this.addClickListener.bind(this);
  // });
}

// start of filter display code
function clicked(item) {
  var item_id = $(item).attr("alt");
  $("input[type=checkbox][id=" + item_id + "]").prop("checked", false);
  $("#dispPicks").html("");
  $("#display_filter_val").html("");

  //update the div
  $(":checkbox:checked").each(function (ind, ele) {
    $("#dispPicks").append(
      "<span alt='" +
        $(ele).val() +
        "+'>" +
        $(ele).next("span").text() +
        "<i>+</i></span>"
    );
    $("#display_filter_val").append(
      '<span><button class="lt-close" id=' +
        $(ele).attr("id") +
        ' onclick="clicked(this);"> </button>' +
        $(ele).parent("label").text() +
        "</span>"
    );
  });

  var filter_vals = "";
  var newURL = "";
  delete Shopify.queryParams.page;

  if ($("#dispPicks").html() == "") {
    $(".fil_tablinks").css("display", "none");
  } else {
    $(".fil_tablinks").css("display", "block");
  }

  var collection_handle = $("#new_collection_title").val();
  newURL = "/blogs/" + collection_handle + "/tagged";
  $("#dispPicks span").each(function () {
    var eleId = $(this).attr("alt");
    filter_vals += eleId;
  });
  if (filter_vals.length) {
    newURL += "/" + filter_vals.slice(0, -1);
  } else {
    newURL = "/blogs/" + collection_handle;
  }

  var search = window.location.href.split("?")[1];
  if (search != undefined) {
    newURL += "?" + search;
  }
  newURL = getSortOptionUrl(newURL);
  loadSelectedRecipes(newURL);
}

var ajaxLoadPage = function (url) {
  setTimeout(function () {
    var caountpo = $("#AjaxinateLoop").children().length;

    if (caountpo > 0) {
      $(".filters-toolbar__product-count").html(caountpo + " recipes");
      $("#empty_collection").addClass("hide");
    } else if (caountpo > 1) {
      $(".filters-toolbar__product-count").html(caountpo + " recipes");
      $("#empty_collection").removeClass("hide");
    } else {
      $(".filters-toolbar__product-count").html(caountpo + " recipes");
      $("#empty_collection").removeClass("hide");
    }
  }, 1500);

  // _fn_ajax_loadmore();
  url = getSortOptionUrl(url);
  loadSelectedRecipes(url);

  // setTimeout(function () {
  //   function callBack() {
  //     $(function () {
  //       var $animation_elementss = $(".fade-up"),
  //         $window = $(window),
  //         scrollTop = $(window).scrollTop();
  //       function check_if_in_views() {
  //         var window_height = $(window).height();
  //         var window_top_position = $(window).scrollTop();
  //         var window_bottom_position =
  //           $(window).scrollTop() + $(window).height();
  //         $.each($animation_elementss, function () {
  //           var $element = $(this);
  //           var element_height = $element.outerHeight();
  //           var element_top_position = $element.offset().top;
  //           var element_bottom_position = element_top_position + element_height;
  //           if (
  //             element_bottom_position > window_top_position &&
  //             element_top_position < window_bottom_position &&
  //             window_top_position > scrollTop
  //           ) {
  //             $element.addClass("fadeactive");
  //           } else if (
  //             element_bottom_position > window_top_position &&
  //             element_top_position < window_bottom_position &&
  //             window_top_position < scrollTop
  //           ) {
  //             //$element.removeClass('blue').addClass('red');
  //           } else {
  //             //$element.removeClass('blue red');
  //           }
  //         });
  //       }
  //       $(window).on("click", () => {
  //         check_if_in_views();
  //         scrollTop = $(window).scrollTop();
  //       });
  //     });
  //   }
  // }, 1500);

  // $.ajax({
  //   type: "GET",
  //   url: url,
  //   data: {},
  //   success: function (result) {
  //     document.title = $(result).filter("title").text();
  //     $(".collection_row").html($(".collection_row", result).html());

  //     ////////////////make url
  //     history.pushState({ page: url }, url, url);
  //   },
  // });
};

function loadSelectedRecipes(url) {
  $.ajax({
    type: "GET",
    url: url,
    data: {},
    success: function (result) {
      $("#AjaxinateLoop").show();
      $("#AjaxinatePagination").show();
      document.title = $(result).filter("title").text();
      if ($(result).find(".blog-articles__article").length) {
        $("#AjaxinateLoop").html($(result).find(".blog-articles__article"));
        $("#no-recipes").hide();
      } else {
        $("#AjaxinateLoop").html("");
        $("#AjaxinateLoop").hide();
        $("#no-recipes").show();
        $("#AjaxinatePagination").hide();
      }
      var paginationElement = $(result).find("#AjaxinatePagination").html();
      var href = $(paginationElement).attr("href");

      if (paginationElement && $(paginationElement).text()) {
        $("#AjaxinatePagination").show();
        $("#AjaxinatePagination").find("a").attr("href", href);
      } else {
        $("#AjaxinatePagination").hide();
      }
      updateRecipesCount();
    },
    error: function (err) {
      $("#AjaxinateLoop").html("");
      $("#AjaxinateLoop").hide();
      $("#no-recipes").show();
      $("#AjaxinatePagination").hide();
      updateRecipesCount();
    },
  });
}

function updateRecipesCount() {
  var recipeCount = $("#AjaxinateLoop").find(".blog-articles__article").length;
  if (recipeCount > 0) {
    $(".filters-toolbar__product-count").html(recipeCount + " recipes");
    $("#empty_collection").addClass("hide");
  } else if (recipeCount > 1) {
    $(".filters-toolbar__product-count").html(recipeCount + " recipes");
    $("#empty_collection").removeClass("hide");
  } else {
    $(".filters-toolbar__product-count").html(recipeCount + " recipes");
    $("#empty_collection").removeClass("hide");
  }
}

$(document).on("click", "#clear_filter", function () {
  _fn_clear_filter_click();
  _fn_ajax_loadmore();

  //  $(".filter_col").slideUp('fast');
  $(this).hide();
  setTimeout(function () {
    $(".filter-header i").html("0");
    $("#filter_1 .coll-picker").prop("checked", false);
    $("#filter_2 .coll-picker").prop("checked", false);
    $("#filter_3 .coll-picker").prop("checked", false);
    $("#filter_4 .coll-picker").prop("checked", false);
    $("#filter_5 .coll-picker").prop("checked", false);
  }, 200);
  $("#dispPicks").html("");
});

$(document).ready(function () {
  if ($(".filter-list-all input:checkbox:checked").length > 0) {
    $(":checkbox:checked").each(function (ind, ele) {
      $("#dispPicks").append(
        "<span alt='" +
          $(ele).val() +
          "+'>" +
          $(ele).next("span").text() +
          "<i>+</i></span>"
      );
      $("#display_filter_val").append(
        '<span><button class="lt-close" id=' +
          $(ele).attr("id") +
          ' onclick="clicked(this);"> </button>' +
          $(ele).parent("label").text() +
          "</span>"
      );
    });
  } else {
    // NOTHING IS CHECKED
  }

  if ($(":checkbox:checked").length > 0) {
    $(".clear_filter_1").css("display", "block");
  } else {
    $(".clear_filter_1").css("display", "none");
  }

  // Replace the search result table on load.
  if ("localStorage" in window && window["localStorage"] !== null) {
    var oldcat = localStorage.getItem("oldcat");
    var newcat = window.location.href.split("/").pop();
    if ("myTable" in localStorage) {
      if (oldcat == newcat) {
        $("#myTable").html(localStorage.getItem("myTable"));
      }
    }
  }
});

Shopify.queryParams = {};
if (location.search.length) {
  for (
    var aKeyValue, i = 0, aCouples = location.search.substr(1).split("&");
    i < aCouples.length;
    i++
  ) {
    aKeyValue = aCouples[i].split("=");
    if (aKeyValue.length > 1) {
      Shopify.queryParams[decodeURIComponent(aKeyValue[0])] =
        decodeURIComponent(aKeyValue[1]);
    }
  }
}
var collFilters = jQuery(".coll-filter");
// collFilters.change(function () {
//   var newTags = [];
//   var newURL = "";
//   delete Shopify.queryParams.page;
//   collFilters.each(function () {
//     if (jQuery(this).val()) {
//       newTags.push(jQuery(this).val());
//     }
//   });

//   newURL = "/blogs/" + "recipes" + "/tagged";
//   if (newTags.length) {
//     newURL += "/" + newTags.join("+");
//   }
//   var search = jQuery.param(Shopify.queryParams);
//   if (search.length) {
//     newURL += "?" + search;
//   }
//   location.href = newURL;
// });

$(document).on("click", "#flink_1", function () {
  $("#filter_1").slideToggle("fast");
  $("#filter_2").slideUp("fast");
  $("#filter_3").slideUp("fast");
  $("#filter_4").slideUp("fast");
  $("#filter_5").slideUp("fast");
  $(this).toggleClass("active");
  $("#flink_2").removeClass("active");
  $("#flink_3").removeClass("active");
  $("#flink_4").removeClass("active");
  $("#flink_5").removeClass("active");
});
$(document).on("click", "#flink_2", function () {
  $("#filter_2").slideToggle("fast");
  $("#filter_1").slideUp("fast");
  $("#filter_3").slideUp("fast");
  $("#filter_4").slideUp("fast");
  $("#filter_5").slideUp("fast");
  $(this).toggleClass("active");
  $("#flink_1").removeClass("active");
  $("#flink_3").removeClass("active");
  $("#flink_4").removeClass("active");
  $("#flink_5").removeClass("active");
});
$(document).on("click", "#flink_3", function () {
  $("#filter_2").slideUp("fast");
  $("#filter_1").slideUp("fast");
  $("#filter_3").slideToggle("fast");
  $("#filter_4").slideUp("fast");
  $("#filter_5").slideUp("fast");
  $(this).toggleClass("active");
  $("#flink_1").removeClass("active");
  $("#flink_2").removeClass("active");
  $("#flink_4").removeClass("active");
  $("#flink_5").removeClass("active");
});
$(document).on("click", "#flink_4", function () {
  $("#filter_1").slideUp("fast");
  $("#filter_2").slideUp("fast");
  $("#filter_3").slideUp("fast");
  $("#filter_4").slideToggle("fast");
  $("#filter_5").slideUp("fast");
  $(this).toggleClass("active");
  $("#flink_1").removeClass("active");
  $("#flink_2").removeClass("active");
  $("#flink_3").removeClass("active");
  $("#flink_5").removeClass("active");
});
$(document).on("click", "#flink_5", function () {
  $("#filter_1").slideUp("fast");
  $("#filter_2").slideUp("fast");
  $("#filter_3").slideUp("fast");
  $("#filter_4").slideUp("fast");
  $("#filter_5").slideToggle("fast");
  $(this).toggleClass("active");
  $("#flink_1").removeClass("active");
  $("#flink_2").removeClass("active");
  $("#flink_3").removeClass("active");
  $("#flink_4").removeClass("active");
});

$(document).on("click", ".new_filter_ul label", function () {
  // $(".filter_col").slideUp('fast');
  setTimeout(function () {
    _fn_ajax_loadmore();
  }, 1000);
});

$(document).ready(function () {
  $('#filter_1 input[type="checkbox"]').click(function () {
    var ckcolor = $("#filter_1 .coll-picker:checked").length;
    $("#filter_1 .filter-header i").html(ckcolor);
  });
});

// $(document).on("click", ".clear-color", function () {
//   _fn_clear_filter_click();
//   _fn_sort_filter_click();
//   _fn_ajax_loadmore();
//   setTimeout(function () {
//     var ckcolor = $("#filter_1 .coll-picker:checked").length;
//     $("#filter_1 .filter-header i").html(ckcolor);
//   }, 200);
//   $("#filter_1 .coll-picker").prop("checked", false);
//   //   $(".filter_col").slideUp('fast');
//   $("#dispPicks").append("");
// });

$(document).ready(function () {
  $('#filter_2 input[type="checkbox"]').click(function () {
    var ckcolor = $("#filter_2 .coll-picker:checked").length;
    $("#filter_2 .filter-header i").html(ckcolor);
  });
});
// $(document).on("click", ".clear-size", function () {
//   _fn_clear_filter_click();
//   _fn_sort_filter_click();
//   _fn_ajax_loadmore();

//   setTimeout(function () {
//     var ckcolor = $("#filter_2 .coll-picker:checked").length;
//     $("#filter_2 .filter-header i").html(ckcolor);
//   }, 200);
//   $("#filter_2 .coll-picker").prop("checked", false);
//   //  $(".filter_col").slideUp('fast');
//   $("#dispPicks").append("");
// });

$(document).on("click", "#dispPicks span", function (ele) {
  var eleId = $(this).attr("alt").slice(0, -1);
  $(this).remove();

  $("input[type=checkbox][id=" + eleId + "]").prop("checked", false);
  var filter_vals = "";
  $("#dispPicks span").each(function () {
    var eleId = $(this).attr("alt");
    filter_vals += eleId;
  });
  console.log("filter_vals", filter_vals);
  var newURL = "";
  if ($("#dispPicks").html() == "") {
    $(".fil_tablinks").css("display", "none");
  } else {
    $(".fil_tablinks").css("display", "block");
  }

  var collection_handle = $("#new_collection_title").val();
  newURL = "/blogs/" + collection_handle + "/tagged";
  if (filter_vals.length) {
    newURL += "/" + filter_vals.slice(0, -1);
  } else {
    newURL = "/blogs/" + collection_handle;
  }
  var search = window.location.href.split("?")[1];
  if (search != undefined) {
    newURL += "?" + search;
  }
  newURL = getSortOptionUrl(newURL);
  loadSelectedRecipes(newURL);
});

$(document).on("click", ".sort-option", function (ele) {
  var sortText = $(this).text();
  // console.log("ele", ele);
  sortOption = "";
  console.log("sortText", sortText);
  if (sortText == "Recommended") {
    sortOption = "manual";
  }
  if (sortText == "Title (A-Z)") {
    sortOption = "title-ascending";
  }
  if (sortText == "Title (Z-A)") {
    sortOption = "title-descending";
  }
  if (sortText == "Newest First") {
    sortOption = "created-descending";
  }
  if (sortText == "Oldest First") {
    sortOption = "created-ascending";
  }
  var url = $("#AjaxinatePagination").find("a").attr("href");
  url = getSortOptionUrl(url);
  console.log("sortOptionUrl", url);
  loadSelectedRecipes(url);
});

function getSortOptionUrl(newURL) {
  console.log("sortOption", sortOption);

  if (sortOption) {
    if (newURL.indexOf("sort_by=") !== -1) {
      var urlParts = newURL.split("sort_by=");
      console.log("urlParts", urlParts);
      if (urlParts.length > 1) {
        if (urlParts[1] !== sortOption) {
          var urlFirstPart = urlParts[0];
          console.log("urlFirstPart", urlFirstPart);
          return (newURL =
            urlFirstPart.substring(0, 14) + "?" + "sort_by=" + sortOption);
        }
      }
    }
    if (newURL.indexOf("page") !== -1) {
      newURL += "&sort_by=" + sortOption;
    } else {
      newURL += "?sort_by=" + sortOption;
    }
  }
  return newURL;
}

function unSelectSelectedOptions(option) {
  $("." + option).each(function (index, ele) {
    var valueToCheck = $(ele).attr("id");
    $("#dispPicks span").each(function (index, spanEle) {
      if ($(spanEle).attr("alt").slice(0, -1) == valueToCheck) {
        $("input[type=checkbox][id=" + valueToCheck + "]").prop(
          "checked",
          false
        );
        $(spanEle).remove();
      }
    });
  });

  setTimeout(function () {
    _fn_coll_filter_click();
  }, 500);
}
