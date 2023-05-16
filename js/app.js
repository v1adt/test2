//Родительский элемент кнопок
const butsBox = document.querySelector(".left__buttons");

//Проверка: есть ли на странице такой элемент
if (butsBox) {
    //Массив кнопок
    const buts = butsBox.querySelectorAll(".button");
    const img = document.querySelector("#img");
    buts.forEach(but => {
        //Событие "клик" для кнопки
        but.addEventListener("click", function () {

            //Убираем активные кнопки
            buts.forEach(removeBut => {
                if (removeBut.classList.contains("active")) {
                    removeBut.classList.remove("active");
                }
            })

            //Делаем активной нажатую кнопку
            this.classList.add("active");

            //Меняем url фото
            img.src = `./img/${this.dataset.img}.jpg`;
        })
    });
}
