export function activeTabs() {

    const tabs = document.querySelectorAll('li.tabs');
    const tabsContent = document.querySelectorAll('.tab-content');

    tabs.forEach((tab, tabIndex) => {
        tab.addEventListener('click', () => {
            tabs.forEach((tab, index) => {
                if (index === tabIndex) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
            tabsContent.forEach((tabContent, tabContentIndex) => {
                if (tabContentIndex === tabIndex) {
                    tabContent.classList.add('active');
                } else {
                    tabContent.classList.remove('active')
                }
            })
        });
    });

}

export function activeClass() {
    const btns = document.querySelectorAll('.btn');
    // const tabsContent = document.querySelectorAll('.tabs-content');

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            document.querySelector(".container").classList.toggle("log-in");
        });
    });
}