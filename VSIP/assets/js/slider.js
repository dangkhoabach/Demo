const slider = document.getElementById("slider");
const sliderE = document.querySelectorAll(".sliderE");
const btnTrans = document.getElementById("btn-trans");

let indexSlider = 0;

sliderE.forEach((slide, index) => {
  const btn = document.createElement("button");
  console.log(index)
  btn.classList = `w-5 h-5 border-2 border-white rounded-full slider-btn ${index === 0 ? 'bg-white' : 'bg-transparent'}`;

  btn.addEventListener("click", () => {
    slider.style.transform = `translateX(-${index * 100}%)`;

    document.querySelectorAll('.slider-btn').forEach(button => {
      button.classList.remove('bg-white');
      button.classList.add('bg-transparent');
    });

    btn.classList.add('bg-white');
    btn.classList.remove('bg-transparent');
  });

  btnTrans.appendChild(btn);
});
