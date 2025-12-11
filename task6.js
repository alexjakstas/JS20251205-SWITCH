// 6. Language Code Translator
// Task: Given a language code ("en", "lt", "fr", "es"), return a greeting ("Hello", "Labas", "Bonjour", "Hola"). If unsupported, return "Language not supported".

function translateLanguage (languageCode){
    let translation
    switch (languageCode){
        case 'en':
        case 'EN':  
        case 'En':  
        translation = "Hello"; 
            break;

        case 'lt':
        case 'LT':  
        case 'Lt':  
        translation = "Labas"; 
            break;

        case 'fr':
        case 'FR':  
        case 'Fr':  
        translation = "Bonjour"; 
            break;

        case 'es':
        case 'ES':  
        case 'Es':  
        translation = "Hola"; 
            break;

        default:
            return `Language not supported.`;
    }
    return translation;
}

console.log(translateLanguage('es'));
console.log(translateLanguage('Fr'));
console.log(translateLanguage('EN'));
console.log(translateLanguage('PT'));