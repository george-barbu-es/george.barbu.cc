import "@fontsource/norwester";

window.Buffer = window.Buffer || require("buffer").Buffer

export const onClientEntry = () => {
    window.onload = () => { console.info('© 2021 | Developed by George Barbu') }
}

