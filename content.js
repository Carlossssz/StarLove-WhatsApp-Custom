const SELETOR_CONVERSAS = ".x9f619.x1n2onr6.x5yr21d.x17dzmu4.x1i1dayz.x2ipvbc.xjdofhw.x78zum5.xdt5ytf.x12xzxwr.x1plvlek.xryxfnj.x570efc.x18dvir5";

function iniciarConversaBox(conversaBox) {
    // Habilita o redimensionamento
    conversaBox.classList.add("wa-resizable");

    // Monitora as alterações de largura
    const resizeObserver = new ResizeObserver(([entry]) => {
        const largura = entry.contentRect.width;

        // Ativa o modo compacto quando a largura for <= 100px
        document.body.classList.toggle("miniBox", largura <= 110);
        document.body.classList.toggle("maxBox", largura > 110);
    });

    resizeObserver.observe(conversaBox);
}

// Verifica se o elemento já existe
const conversaBox = document.querySelector(SELETOR_CONVERSAS);

if (conversaBox) {
    iniciarConversaBox(conversaBox);
    conversaBox.style.width = '110px !important';
} else {
    // Aguarda o WhatsApp criar o elemento
    const mutationObserver = new MutationObserver(() => {
        const conversaBox = document.querySelector(SELETOR_CONVERSAS);

        if (!conversaBox) return;

        // Para de observar após encontrar o elemento
        mutationObserver.disconnect();

        iniciarConversaBox(conversaBox);
    });

    mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
}