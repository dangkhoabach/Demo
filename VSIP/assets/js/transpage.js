const transPage = document.querySelectorAll(".transpage");
let lastIndex = 0

transPage.forEach((item, index) => {
    item.addEventListener("click", () => {
        if (lastIndex !== -1) {
          transPage[lastIndex].classList.remove('font-bold');
          transPage[lastIndex].classList.add('border');
        }

        item.classList.add('font-bold');
        item.classList.remove('border')
    
        lastIndex = index;
      });
});
