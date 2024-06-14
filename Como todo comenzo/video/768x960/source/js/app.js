(() => {
    const App = {
        htmlElements: {
            htmlDocument: document,
            mensaje: document.querySelector('.video__mensaje')
        },

        init() {
            App.bindEvents()
        },

        bindEvents() {
            App.htmlElements.htmlDocument.addEventListener('DOMContentLoaded', App.handlers.getDays)
        },
        handlers: {
            getDays() {
                const endDate = new Date("2024-06-27T14:00:00").getTime()
                let currentDate = new Date().getTime()
                App.menthods.daysLeft(endDate, currentDate)
            }
        },
        menthods: {
            daysLeft(endDaysMs, currentDateMs) {
                daysDifferences = (endDaysMs - currentDateMs)
                days = Math.floor(daysDifferences / (1000 * 60 * 60 * 24))
                App.render(days)
            }
        },
        render(days) {
            console.log(days)
            if (days == 7) {
                App.htmlElements.mensaje.innerHTML = `Falta 1 Semana`
            } else if (days < 7 && days > 1) {
                App.htmlElements.mensaje.innerHTML = `Faltan ${days} días`
            } else if (days == 1) {
                App.htmlElements.mensaje.innerHTML = `MAÑANA EN CINES`
            } else if (days == 0) {
                App.htmlElements.mensaje.innerHTML = `HOY GRAN ESTRENO`
            } else if (days <=-1) {
                App.htmlElements.mensaje.innerHTML = `YA EN CINES`
            } else {
                App.htmlElements.mensaje.innerHTML = `Junio 27 en cines`
            }

        }
    }
    App.init()

})();