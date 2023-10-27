//menu
const menu = document.querySelector(".navbar__links");
const menubutton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

menubutton.addEventListener("click",()=>{
    menu.classList.toggle("navbar__open");//toggle là chuyển đổi
    menubutton.classList.toggle("open");
    overlay.classList.toggle("show");
});

overlay.addEventListener('click',()=>{
    menu.classList.toggle("navbar__open");//toggle là chuyển đổi
    menubutton.classList.toggle("open");
    overlay.classList.toggle("show");
});



//index_partner_img
document.getElementById('img1').addEventListener('mouseover', function() {
  var originalSrc = this.src;
  this.src = 'img/customer_cisco.png';
  this.addEventListener('mouseout', function() {
      this.src = originalSrc;
  });
});
document.getElementById('img2').addEventListener('mouseover', function() {
  var originalSrc = this.src;
  this.src = 'img/customer_vtech.png';
  this.addEventListener('mouseout', function() {
      this.src = originalSrc;
  });
});
document.getElementById('img3').addEventListener('mouseover', function() {
  // Lưu đường dẫn hình ảnh ban đầu vào một biến
  var originalSrc = this.src;

  // Thay đổi đường dẫn hình ảnh khi hover
  this.src = 'img/customer_mobi.png';

  // Sự kiện mouseout để trả lại đường dẫn hình ảnh ban đầu khi lấy chuột ra khỏi hình
  this.addEventListener('mouseout', function() {
      this.src = originalSrc;
  });
});
document.getElementById('img4').addEventListener('mouseover', function() {
  var originalSrc = this.src;
  this.src = 'img/customer_ubiquity.png';
  this.addEventListener('mouseout', function() {
      this.src = originalSrc;
  });
});
document.getElementById('img5').addEventListener('mouseover', function() {
  var originalSrc = this.src;
  this.src = 'img/customer_viettel.png';
  this.addEventListener('mouseout', function() {
      this.src = originalSrc;
  });
});
document.getElementById('img6').addEventListener('mouseover', function() {
  var originalSrc = this.src;
  this.src = 'img/customer_vnpt.png';
  this.addEventListener('mouseout', function() {
      this.src = originalSrc;
  });
});


//sự kiện kéo chuột xuống chữ chạy lên (này chỉ áp dụng cho nhiều thẻ div)
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.scroll-animation');

  function checkVisibility() {
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop - windowHeight <= 0) {
        element.classList.add('animate');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Kiểm tra khi trang tải xong
});

///////////////// số đếm
document.addEventListener('DOMContentLoaded', function() {
  const yearsCount = document.getElementById('yearsCount');
  const citiesCount = document.getElementById('citiesCount');
  const engineersCount = document.getElementById('engineersCount');
  
  const targetYears = 10;
  const targetCities = 30;
  const targetEngineers = 100;
  
  let currentYears = 0;
  let currentCities = 0;
  let currentEngineers = 0;

  function updateCounter() {
    if (currentYears < targetYears) {
      currentYears++;
      yearsCount.textContent = currentYears;
    }
    if (currentCities < targetCities) {
      currentCities++;
      citiesCount.textContent = currentCities;
    }
    if (currentEngineers < targetEngineers) {
      currentEngineers++;
      if (currentEngineers === 100) {
        engineersCount.textContent = '100+';
      } else {
        engineersCount.textContent = currentEngineers;
      }
    }
    
    if (currentYears < targetYears || currentCities < targetCities || currentEngineers < targetEngineers) {
      setTimeout(updateCounter, 50); // Đặt thời gian cập nhật chữ số
    }
  }

  updateCounter(); // Bắt đầu chạy chữ số
});


