let articles = document.getElementsByClassName("article");
let activeIndex = 0;

const suivOnClick = () => {
    const nextIndex =
        activeIndex + 1 <= articles.length - 1 ? activeIndex + 1 : 0;
    const nextnextIndex =
        nextIndex + 1 <= articles.length - 1 ? nextIndex + 1 : 0;
    const preIndex =
        activeIndex - 1 >= 0 ? activeIndex - 1 : articles.length - 1;

    const currentArticle = document.querySelector(
        `[data-index="${activeIndex}"]`
    );
    const nextnextArticle = document.querySelector(
        `[data-index="${nextnextIndex}"]`
    );
    const nextArticle = document.querySelector(`[data-index="${nextIndex}"]`);
    const preArticle = document.querySelector(`[data-index="${preIndex}"]`);

    currentArticle.dataset.status = "before";
    nextnextArticle.dataset.status = "becoming-active-from-after";
    activeIndex = nextIndex;
    nextArticle.dataset.status = "active";
    preArticle.dataset.status = "becoming-active-from-before";
};

const precOnClick = () => {
    const nextIndex =
        activeIndex + 1 <= articles.length - 1 ? activeIndex + 1 : 0;
    const preIndex =
        activeIndex - 1 >= 0 ? activeIndex - 1 : articles.length - 1;
    const prepreIndex = preIndex - 1 >= 0 ? preIndex - 1 : articles.length - 1;

    const currentArticle = document.querySelector(
        `[data-index="${activeIndex}"]`
    );
    const nextArticle = document.querySelector(`[data-index="${nextIndex}"]`);
    const preArticle = document.querySelector(`[data-index="${preIndex}"]`);
    const prepreArticle = document.querySelector(
        `[data-index="${prepreIndex}"]`
    );

    prepreArticle.dataset.status = "becoming-active-from-before";
    currentArticle.dataset.status = "after";
    activeIndex = preIndex;
    preArticle.dataset.status = "active";
    nextArticle.dataset.status = "becoming-active-from-after";
};

function toggleMobileDescription() {
    var buttonsOn = document.querySelectorAll(".btn-description");
    var buttonsOff = document.querySelectorAll(".btn-echap");
    var descriptions = document.querySelectorAll(".description");

    buttonsOn.forEach(function (buttonOn) {
        buttonOn.addEventListener("click", function () {
            descriptions.forEach(function (description) {
                description.classList.add("mobile-description");
            });
        });
    });
    buttonsOff.forEach(function (buttonOff) {
        buttonOff.addEventListener("click", function () {
            descriptions.forEach(function (description) {
                description.classList.remove("mobile-description");
            });
        });
    });
}
