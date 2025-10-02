// Simplified plugin for Rancher translation
export default function(plugin: any) {
    // Plugin metadata
    plugin.metadata = {
        name: 'pt-br-locale',
        version: '0.1.5'
    };

    // Load translations
    const translations = require('./l10n/pt-br.json');

    plugin.addLocale('pt-br', 'Português (Brasil)', () => Promise.resolve(translations));
}