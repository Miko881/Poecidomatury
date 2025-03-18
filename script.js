const toggleDropdown = (dropdown, menu, isOpen) => {
    dropdown.classList.toggle("open", isOpen);
    menu.style.height = isOpen ? `${menu.scrollHeight}px` : 0;
};

const closeAllDropdowns = (exclude = null) => {
    document.querySelectorAll(".dropdown-container.open").forEach((openDropdown) => {
        if (openDropdown !== exclude) {
            toggleDropdown(openDropdown, openDropdown.querySelector(".dropdown-menu"), false);
        }
    });
};

document.querySelectorAll(".dropdown-toggle").forEach((dropdownToggle) => {
    dropdownToggle.addEventListener("click", (e) => {
        e.preventDefault();
        const dropdown = dropdownToggle.closest(".dropdown-container");
        const menu = dropdown.querySelector(".dropdown-menu");
        const isOpen = dropdown.classList.contains("open");

        closeAllDropdowns(dropdown);

        toggleDropdown(dropdown, menu, !isOpen);
    });
});

document.querySelectorAll(".sidebar-toggler, .sidebar-menu-button").forEach((button) => {
    button.addEventListener("click", () => {
        const sidebar = document.querySelector(".sidebar");
        const isCollapsed = sidebar.classList.contains("collapsed");

        if (!isCollapsed) {
            closeAllDropdowns();
        }

        sidebar.classList.toggle("collapsed");
        updatePoetaInfoMargin(sidebar);

        if (sidebar.classList.contains("collapsed")) {
            document.querySelectorAll(".dropdown-container.open").forEach((openDropdown) => {
                const menu = openDropdown.querySelector(".dropdown-menu");
                menu.style.display = "block";
                menu.style.opacity = 1;
                menu.style.pointerEvents = "auto";
            });
        } else {
            document.querySelectorAll(".dropdown-menu").forEach((menu) => {
                menu.style.display = "";
                menu.style.opacity = "";
                menu.style.pointerEvents = "";
            });
        }
    });
});

const sidebar = document.querySelector(".sidebar");
if (window.innerWidth <= 768) {
    sidebar.classList.add("collapsed");
}

const epokiLista = document.getElementById("epoki-lista");
const poeciMenu = document.querySelector(".poeci-dropdown");
const poetaInfo = document.getElementById("poeta-info");

console.log("Element poetaInfo:", poetaInfo);

const stronaGlowna = document.querySelector(".nav-list.primary-nav .nav-item:first-child .nav-link");

const epokiPoeci = {
    "Barok": {
        "Daniel Naborowski": {
            biografia: "Daniel Naborowski (1573-1640) - polski poeta barokowy, przedstawiciel nurtu dworskiego. Tworzył wiersze o tematyce miłosnej, filozoficznej i religijnej.",
            utwory: ["Krótkość żywota", "Marność"]
        },
        "Jan Andrzej Morsztyn": {
            biografia: "Jan Andrzej Morsztyn (1621-1693) - polski poeta barokowy, przedstawiciel nurtu dworskiego. Tworzył wiersze o tematyce miłosnej, posługując się konceptami i paradoksami.",
            utwory: ["Do trupa", "Niestatek"]
        },
        "Mikołaj Sęp-Szarzyński": {
            biografia: "Mikołaj Sęp-Szarzyński (ok. 1550-1581) - polski poeta barokowy, przedstawiciel nurtu metafizycznego. Tworzył wiersze o tematyce religijnej i filozoficznej, poruszając problematykę ludzkiej egzystencji i relacji z Bogiem.",
            utwory: ["O wojnie naszej, którą wiedziemy z szatanem, światem i ciałem", "Sonet IV. O krótkości i nędzy żywota naszego"]
        }
    },
    "Oświecenie": {
        "Ignacy Krasicki": {
            biografia: "Ignacy Krasicki (1735-1801) - polski poeta, prozaik, publicysta i duchowny. Tworzył bajki, satyry i poematy heroikomiczne, krytykując wady społeczeństwa i obyczaje epoki.",
            utwory: ["Bajki i przypowieści", "Satyry"]
        }
    },
    "Romantyzm": {
        "Adam Mickiewicz": {
            biografia: "Adam Mickiewicz (1798-1855) - polski poeta, dramaturg, publicysta i działacz polityczny. Uważany za jednego z najwybitniejszych twórców polskiego romantyzmu. Tworzył ballady, dramaty romantyczne, poematy epickie i liryki.",
            utwory: ["Ballady i romanse", "Dziady cz. III", "Pan Tadeusz"]
        },
        "Juliusz Słowacki": {
            biografia: "Juliusz Słowacki (1809-1849) - polski poeta i dramaturg romantyczny. Tworzył dramaty romantyczne, poematy i liryki, poruszając tematykę narodową, historiozoficzną i egzystencjalną.",
            utwory: ["Kordian", "Balladyna"]
        },
        "Cyprian Norwid": {
            biografia: "Cyprian Norwid (1821-1883) - polski poeta, dramaturg, prozaik i artysta plastyk. Uważany za jednego z najwybitniejszych i najbardziej oryginalnych twórców polskiego romantyzmu. Tworzył wiersze, dramaty, poematy i prozę, poruszając tematykę filozoficzną, religijną i społeczną.",
            utwory: ["Fortepian Szopena", "Bema pamięci żałobny rapsod"]
        }
    },
    "Młoda Polska": {
        "Jan Kasprowicz": {
            biografia: "Jan Kasprowicz (1860-1926) - polski poeta, dramaturg, krytyk literacki i tłumacz. Tworzył wiersze symboliczne i ekspresjonistyczne, poruszając tematykę egzystencjalną, religijną i społeczną.",
            utwory: ["Hymny", "Księga ubogich"]
        },
        "Kazimierz Przerwa-Tetmajer": {
            biografia: "Kazimierz Przerwa-Tetmajer (1865-1940) - polski poeta i prozaik, przedstawiciel Młodej Polski. Tworzył wiersze i powieści o tematyce tatrzańskiej, miłosnej i dekadenckiej.",
            utwory: ["Melodia mgieł nocnych (Nad Czarnym Stawem Gąsienicowym)", "Koniec wieku XIX"]
        },
        "Leopold Staff": {
            biografia: "Leopold Staff (1878-1957) - polski poeta, tłumacz i krytyk literacki. Tworzył wiersze o tematyce filozoficznej, egzystencjalnej i religijnej, posługując się różnorodnymi formami poetyckimi.",
            utwory: ["Kowal", "Deszcz jesienny"]
        }
    },
    "Wojna": {
        "Krzysztof Kamil Baczyński": {
            biografia: "Krzysztof Kamil Baczyński (1921-1944) - polski poeta, żołnierz Armii Krajowej. Tworzył wiersze o tematyce wojennej, patriotycznej i miłosnej, ukazując okrucieństwo wojny i heroizm ludzkich postaw.",
            utwory: ["Pokolenie", "Elegia o ... [chłopcu polskim]"]
        }
    },
"Współczesna": {
        "Czesław Miłosz": {
            biografia: "Czesław Miłosz (1911-2004) - polski poeta, prozaik, eseista i tłumacz. Laureat Nagrody Nobla w dziedzinie literatury. Tworzył wiersze, eseje i powieści, poruszając tematykę filozoficzną, religijną i polityczną.",
            utwory: ["Campo di Fiori", "Który skrzywdziłeś"]
        }
    }
};

const updatePoetaInfoMargin = (sidebar) => {
    if (poetaInfo) {
        const sidebarWidth = sidebar.classList.contains("collapsed") ? 85 : 270;
        poetaInfo.style.marginLeft = `${sidebarWidth}px`;
    } else {
        console.error("Element poetaInfo nie istnieje!");
    }
};

poeciMenu.style.display = "none";

epokiLista.addEventListener("click", (event) => {
    if (event.target.classList.contains("dropdown-link")) {
        const epoka = event.target.dataset.epoka;
        const poeci = epokiPoeci[epoka];

        const poeciListaWEpoce = poeciMenu.querySelector(".dropdown-menu");
        poeciListaWEpoce.innerHTML = '<li class="nav-item"><a class="nav-link dropdown-title">Poeci</a></li>';

        if (poeci) {
            for (const poeta in poeci) {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.href = "#";
                a.classList.add("nav-link", "dropdown-link");
                a.textContent = poeta;
                a.dataset.poeta = poeta;
                li.appendChild(a);
                poeciListaWEpoce.appendChild(li);

                a.addEventListener("click", (e) => {
                    e.preventDefault();
                    const wybranyPoeta = e.target.dataset.poeta;
                    const danePoety = poeci[wybranyPoeta];

                    if (danePoety) {
                        poetaInfo.innerHTML = `
                            <h2>${wybranyPoeta}</h2>
                            <p>${danePoety.biografia}</p>
                            <h3>Ważne utwory:</h3>
                            <ul>
                                ${danePoety.utwory.map(utwor => `<li>${utwor}</li>`).join('')}
                            </ul>
                        `;
                        poetaInfo.style.display = "block";
                        poetaInfo.scrollIntoView({ behavior: 'smooth', block: 'start' });

                        const sidebar = document.querySelector(".sidebar");
                        sidebar.classList.add("collapsed");
                        updatePoetaInfoMargin(sidebar);

                        // Dodano zwijanie menu "Poeci" na urządzeniach mobilnych
                        if (window.innerWidth <= 768) {
                            toggleDropdown(poeciMenu, poeciMenu.querySelector(".dropdown-menu"), false);
                        }
                    }
                });
            }

            poeciMenu.style.display = "block";

            const poeciDropdown = poeciMenu;
            const poeciDropdownMenu = poeciMenu.querySelector(".dropdown-menu");
            toggleDropdown(poeciDropdown, poeciDropdownMenu, true);

            poeciMenu.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            poeciMenu.style.display = "none";
        }
    }
});

stronaGlowna.addEventListener("click", () => {
    poeciMenu.style.display = "none";
    if (poetaInfo) {
        poetaInfo.style.display = "none";
    }
});

console.log("Element poetaInfo:", poetaInfo);
updatePoetaInfoMargin(sidebar);

document.addEventListener('DOMContentLoaded', function() {
    const epokiDropdown = document.querySelector('.epoki-dropdown');
    const epokiContent = document.getElementById('epoki-content');

    epokiDropdown.addEventListener('mouseenter', function() {
        if (document.querySelector('.sidebar').classList.contains('collapsed')) {
            epokiContent.style.display = 'block';
        }
    });

    epokiDropdown.addEventListener('mouseleave', function() {
        if (document.querySelector('.sidebar').classList.contains('collapsed')) {
            epokiContent.style.display = 'none';
        }
    });

    // Dodanie obsługi hover dla menu "Poeci"
    const poeciDropdown = document.querySelector('.poeci-dropdown');
    const poeciMenuElement = poeciDropdown.querySelector('.dropdown-menu');

    poeciDropdown.addEventListener('mouseenter', function() {
        if (document.querySelector('.sidebar').classList.contains('collapsed')) {
            poeciMenuElement.style.display = 'block';
            poeciMenuElement.style.opacity = 1;
            poeciMenuElement.style.pointerEvents = 'auto';
        }
    });

    poeciDropdown.addEventListener('mouseleave', function() {
        if (document.querySelector('.sidebar').classList.contains('collapsed')) {
            poeciMenuElement.style.display = '';
            poeciMenuElement.style.opacity = '';
            poeciMenuElement.style.pointerEvents = '';
        }
    });
});
