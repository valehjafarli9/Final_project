$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $(".backtotop").fadeIn();
    } else {
      $(".backtotop").fadeOut();
    }
  });
  $(".backtotop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 700);
    return false;
  });
});
const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchbox = document.querySelector(".search-box");
const searchInput = document.querySelector("input");

searchBtn.onclick = () => {
  searchbox.classList.add("active");
  searchInput.classList.add("active");
  searchBtn.classList.add("active");
  cancelBtn.classList.add("active");
};
cancelBtn.onclick = () => {
  searchbox.classList.remove("active");
  searchInput.classList.remove("active");
  searchBtn.classList.remove("active");
  cancelBtn.classList.remove("active");
};

var models = [
  {
    image: "img1.png",
  },
  {
    image: "img2.png",
  },
  {
    image: "img3.png",
  },
  {
    image: "img4.png",
  },
  {
    image: "img5.png",
  },
  {
    image: "img6.png",
  },
  {
    image: "img7.png",
  },
  {
    image: "img8.png",
  },
];
var setting = {
  duration: "1500",
  random: false,
};
var interval;

var index = 0;
init(setting);

document.querySelector(".fa-arrow-left").addEventListener("click", function () {
  index--;
  show(index);
  console.log(index);
});
document
  .querySelector(".fa-arrow-right")
  .addEventListener("click", function () {
    index++;
    show(index);
    console.log(index);
  });

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});
document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(setting);
  });
});

function init(settings) {
  var prev;
  interval = setInterval(function () {
    if (setting.random) {
      do {
        index = Math.floor(Math.random() * models.length);
      } while (index == prev);
      {
        prev = index;
      }
    } else {
      if (models.length == index + 1) {
        index = -1;
      }
      show(index);
      index++;
    }
    show(index);
  }, settings.duration);
}

function show(i) {
  index = i;
  if (i < 0) {
    index = models.length;
  }
  if (i >= models.length) {
    index = 0;
  }
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);
}
