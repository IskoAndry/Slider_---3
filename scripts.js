let sliderIndex = 1; //стартовый индекс слайда

function nextSlider(){
  showSlider(sliderIndex =sliderIndex + 1); //увеличиваем индекс на 1 — показываем следующий слайд
  // console.log(sliderIndex);
  count();
}

function prevSlider(){
  showSlider(sliderIndex = sliderIndex - 1);//показываем предыдущий слайд
  // console.log(sliderIndex);
  count();
}

function currentSlider(n){
  showSlider(sliderIndex = n);//текущий слайд
}
//функция перелистывания слайдов
function showSlider(n){
  let slides = document.getElementsByClassName("slider_item"); //обращаемся к картинкам слайда
  // console.log(slides);
  
  //проверка количества слайдов
  if (n > slides.length) {
    sliderIndex = 1
    
  }
  if (n < 1) {
    sliderIndex = slides.length
  }
//проходим по каждому слайду в цикле
  for (let slide of slides) {
    slide.style.display = "none";
}
  slides[sliderIndex - 1].style.display = "block";//делаем элемент блочным
 
}

showSlider(sliderIndex);
//функция индексации интерфейса слайдера
  const count = function counter() {
    var items = document.querySelectorAll('.slider_item').length; //получаем длинну массива слайдов
    var item = sliderIndex;//стартовый индекс слайда
    var count_text = "Изображение "+ item + " из " + items; //формируем интерфес слайдера
    
    document.getElementById("counter").innerHTML = count_text; //добовлем интерфейс по id в блок
}

  
  