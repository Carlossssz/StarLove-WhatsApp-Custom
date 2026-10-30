const SELETOR_CONVERSAS = ".x9f619.x1n2onr6.x5yr21d.x17dzmu4.x1i1dayz.x2ipvbc.xjdofhw.x78zum5.xdt5ytf.x12xzxwr.x1plvlek.xryxfnj.x570efc.x18dvir5";

function aplicarResize() {
    const conversaBox = document.querySelector(SELETOR_CONVERSAS);

    if (!conversaBox) return;

    conversaBox.classList.add("wa-resizable");
}

// Executa inicialmente
aplicarResize();

// Observa alterações no DOM
const observer = new MutationObserver(() => {
    aplicarResize();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});