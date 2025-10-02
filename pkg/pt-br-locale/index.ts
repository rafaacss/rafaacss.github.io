export default async function (plugin) {
    try {
        const url = new URL('./l10n/pt-br.json', import.meta.url);
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Falha ao baixar traduções: ${res.status}`);
        const translations = await res.json();

        // API de extensão: registra o locale
        // label = nome mostrado no seletor de idioma
        plugin.addLocalization('pt-br', translations, { label: 'Português (Brasil)' });

        console.info('[pt-br-locale] Locale registrado com sucesso.');
    } catch (err) {
        console.error('[pt-br-locale] Erro ao registrar locale:', err);
    }
}
