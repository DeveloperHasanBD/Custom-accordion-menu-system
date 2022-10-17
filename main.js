

window.onload = () => {

    const addClassWidget = document.querySelectorAll("#search_filter_register_widget-2 form ul li ul");
    addClassWidget.forEach(function (e) {
        e.parentElement.classList.add("parent-cat");
        e.classList.add("toggle-item");
        e.classList.add("hide-item");
    });

    const elements = document.querySelectorAll('#search_filter_register_widget-2 form ul li.parent-cat');

    elements.forEach(element => {
        let btn = element.querySelector('h4');
        var answer = element.lastElementChild;
        var answers = document.querySelectorAll('#search_filter_register_widget-2 form ul li ul.toggle-item');

        if (btn !== null && answer) {
            btn.addEventListener('click', () => {
                answers.forEach(ans => {
                    if (answer !== ans) {
                        ans.classList.add('hide-item');
                    }
                });

                answer.classList.toggle('hide-item');
            });
        }
    });

}
