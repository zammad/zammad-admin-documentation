const CONTRIBUTE_URL = 'https://docs.zammad.org/en/latest/contributing/start.html#translation'

// Initialize the switcher only when RTD panel gets loaded.
//   If the menu has exactly the 6 sections, the first one on top is the language chooser.
//   We must check it in this way since the label may be translated based on the browser locale.
$(document).ready(() => {
  const intervalId = setInterval(() => {
    if ($('.rst-other-versions dt').length !== 6) return
    clearInterval(intervalId);
    initLanguageSwitcher()
  }, 100)
})

const initLanguageSwitcher = () => {
  const languages = []

  const languagesList = $('.rst-other-versions dt').eq(0)
  const languagesLabel = languagesList.text()

  languagesList.siblings('dd')
    .each((_index, item) => {
      const languageId = $(item).text().trim()
      const languageFlag = `${languageFlags[languageId]} ` || ''
      const languageName = languageNames[languageId] || languageId

      languages.push({
        id: languageId,
        label: `${languageFlag}${languageName}`,
        url: $(item).find('a').attr('href'),
        isCurrent: $(item).hasClass('rtd-current-item'),
      })
    })

  if (!languages.length) return

  const switcherLanguageOptions = languages.map((language) =>
    $('<option />')
      .attr('value', language.url)
      .text(language.label)
      .attr('selected', language.isCurrent)
  )

  const switcherLanguageOptionsGroup = $('<optgroup />')
    .attr('label', languagesLabel)
    .html(switcherLanguageOptions)

  const switcherContributeOption = $('<option />')
    .attr('value', CONTRIBUTE_URL)
    .text('Contribute translation')

  const switcherContributeOptionGroup = $('<optgroup />')
    .attr('label', 'Missing language?')
    .html(switcherContributeOption)

  const switcherSelection = $('<select />')
    .attr('id', 'language-switcher')
    .append(switcherLanguageOptionsGroup)
    .append(switcherContributeOptionGroup)
    .off('change.language')
    .on('change.language', (e) => {
      location.href = $(e.target).val()
    })

  $('.wy-breadcrumbs-aside')
    .addClass('zammad-language-switcher')
    .append(switcherSelection)
}

const languageNames = { aa: 'Afar', ab: 'Abkhaz', acr: 'Achi', af: 'Afrikaans', agu: 'Awakateko', am: 'Amharic', ar: 'Arabic', as: 'Assamese', ay: 'Aymara', az: 'Azerbaijani', ba: 'Bashkir', be: 'Belarusian', bg: 'Bulgarian', bh: 'Bihari', bi: 'Bislama', bn: 'Bengali', bo: 'Tibetan', br: 'Breton', ca: 'Catalan', caa: "Ch'orti'", cac: 'Chuj', cab: 'Garífuna', cak: 'Kaqchikel', co: 'Corsican', cs: 'Czech', cy: 'Welsh', da: 'Danish', de: 'German', dz: 'Dzongkha', el: 'Greek', en: 'English', eo: 'Esperanto', es: 'Spanish', et: 'Estonian', eu: 'Basque', fa: 'Iranian', fi: 'Finnish', fj: 'Fijian', fo: 'Faroese', fr: 'French', fy: 'Western Frisian', ga: 'Irish', gd: 'Scottish Gaelic', gl: 'Galician', gn: 'Guarani', gu: 'Gujarati', ha: 'Hausa', hi: 'Hindi', he: 'Hebrew', hr: 'Croatian', hu: 'Hungarian', hy: 'Armenian', ia: 'Interlingua', id: 'Indonesian', ie: 'Interlingue', ik: 'Inupiaq', is: 'Icelandic', it: 'Italian', itz: "Itza'", iu: 'Inuktitut', ixl: 'Ixil', ja: 'Japanese', jac: "Popti'", jv: 'Javanese', ka: 'Georgian', kjb: "Q'anjob'al", kek: "Q'eqchi'", kk: 'Kazakh', kl: 'Kalaallisut', km: 'Khmer', kn: 'Kannada', knj: 'Akateko', ko: 'Korean', ks: 'Kashmiri', ku: 'Kurdish', ky: 'Kyrgyz', la: 'Latin', ln: 'Lingala', lo: 'Lao', lt: 'Lithuanian', lv: 'Latvian', mam: 'Mam', mg: 'Malagasy', mi: 'Maori', mk: 'Macedonian', ml: 'Malayalam', mn: 'Mongolian', mop: 'Mopan', mr: 'Marathi', ms: 'Malay', mt: 'Maltese', my: 'Burmese', na: 'Nauru', ne: 'Nepali', nl: 'Dutch', no: 'Norwegian', oc: 'Occitan', om: 'Oromo', or: 'Oriya', pa: 'Panjabi', pl: 'Polish', pnb: 'Western Punjabi', poc: 'Poqomam', poh: 'Poqomchi', ps: 'Pashto', pt: 'Portuguese', qu: 'Quechua', quc: "K'iche'", qum: 'Sipakapense', quv: 'Sakapulteko', rm: 'Romansh', rn: 'Kirundi', ro: 'Romanian', ru: 'Russian', rw: 'Kinyarwanda', sa: 'Sanskrit', sd: 'Sindhi', sg: 'Sango', si: 'Sinhala', sk: 'Slovak', skr: 'Saraiki', sl: 'Slovenian', sm: 'Samoan', sn: 'Shona', so: 'Somali', sq: 'Albanian', sr: 'Serbian', ss: 'Swati', st: 'Southern Sotho', su: 'Sudanese', sv: 'Swedish', sw: 'Swahili', ta: 'Tamil', te: 'Telugu', tg: 'Tajik', th: 'Thai', ti: 'Tigrinya', tk: 'Turkmen', tl: 'Tagalog', tn: 'Tswana', to: 'Tonga', tr: 'Turkish', ts: 'Tsonga', tt: 'Tatar', ttc: 'Tektiteko', tzj: "Tz'utujil", tw: 'Twi', ug: 'Uyghur', uk: 'Ukrainian', ur: 'Urdu', usp: 'Uspanteko', uz: 'Uzbek', vi: 'Vietnamese', vo: 'Volapuk', wo: 'Wolof', xh: 'Xhosa', xin: 'Xinka', yi: 'Yiddish', yo: 'Yoruba', za: 'Zhuang', zh: 'Chinese', zu: 'Zulu', nb_NO: 'Norwegian Bokmal', pt_BR: 'Brazilian Portuguese', es_MX: 'Mexican Spanish', uk_UA: 'Ukrainian', zh_CN: 'Simplified Chinese', zh_TW: 'Traditional Chinese' }

/* Take it with a grain of salt! */
const languageFlags = { aa: '🇪🇹', ab: '', acr: '🇬🇹', af: '🇿🇦', agu: '🇬🇹', am: '🇪🇹', ar: '🇸🇦', as: '🇮🇳', ay: '🇧🇴', az: '🇦🇿', ba: '🇷🇺', be: '🇧🇾', bg: '🇧🇬', bh: '🇮🇳', bi: '🇻🇺', bn: '🇧🇩', bo: '🇨🇳', br: '🇫🇷', ca: '🇪🇸', caa: '🇬🇹', cac: '🇬🇹', cab: '🇭🇳', cak: '🇬🇹', co: '🇫🇷', cs: '🇨🇿', cy: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', da: '🇩🇰', de: '🇩🇪', dz: '🇧🇹', el: '🇬🇷', en: '🇬🇧', eo: '', es: '🇪🇸', et: '🇪🇪', eu: '🇪🇸', fa: '🇮🇷', fi: '🇫🇮', fj: '🇫🇯', fo: '🇫🇴', fr: '🇫🇷', fy: '🇳🇱', ga: '🇮🇪', gd: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', gl: '🇪🇸', gn: '🇵🇾', gu: '🇮🇳', ha: '🇳🇬', hi: '🇮🇳', he: '🇮🇱', hr: '🇭🇷', hu: '🇭🇺', hy: '🇦🇲', ia: '', id: '🇮🇩', ie: '', ik: '🇺🇸', is: '🇮🇸', it: '🇮🇹', itz: '🇬🇹', iu: '🇨🇦', ixl: '🇬🇹', ja: '🇯🇵', jac: '🇬🇹', jv: '🇮🇩', ka: '🇬🇪', kjb: '🇲🇽', kek: '🇬🇹', kk: '🇰🇿', kl: '🇬🇱', km: '🇰🇭', kn: '🇮🇳', knj: '🇬🇹', ko: '🇰🇷', ks: '🇮🇳', ku: '🇮🇶', ky: '🇰🇬', la: '', ln: '🇨🇩', lo: '🇱🇦', lt: '🇱🇹', lv: '🇱🇻', mam: '🇬🇹', mg: '🇲🇬', mi: '🇳🇿', mk: '🇲🇰', ml: '🇮🇳', mn: '🇲🇳', mop: '🇧🇿', mr: '🇮🇳', ms: '🇲🇾', mt: '🇲🇹', my: '🇲🇲', na: '🇳🇷', ne: '🇳🇵', nl: '🇳🇱', no: '🇳🇴', oc: '🇪🇸', om: '🇪🇹', or: '🇮🇳', pa: '🇵🇰', pl: '🇵🇱', pnb: '🇵🇰', poc: '🇬🇹', poh: '🇬🇹', ps: '🇦🇫', pt: '🇵🇹', qu: '🇵🇪', quc: '🇬🇹', qum: '🇬🇹', quv: '🇬🇹', rm: '🇨🇭', rn: '🇧🇮', ro: '🇷🇴', ru: '🇷🇺', rw: '🇷🇼', sa: '🇮🇳', sd: '🇵🇰', sg: '🇨🇫', si: '🇱🇰', sk: '🇸🇰', skr: '🇵🇰', sl: '🇸🇮', sm: '🇼🇸', sn: '🇿🇼', so: '🇸🇴', sq: '🇦🇱', sr: '🇷🇸', ss: '🇸🇿', st: '🇿🇦', su: '🇸🇩', sv: '🇸🇪', sw: '🇹🇿', ta: '🇮🇳', te: '🇮🇳', tg: '🇹🇯', th: '🇹🇭', ti: '🇪🇷', tk: '🇹🇲', tl: '🇵🇭', tn: '🇧🇼', to: '🇿🇼', tr: '🇹🇷', ts: '🇿🇼', tt: '🇷🇺', ttc: '🇬🇹', tzj: '🇬🇹', tw: '🇬🇭', ug: '🇨🇳', uk: '🇺🇦', ur: '🇵🇰', usp: '', uz: '🇺🇿', vi: '🇻🇳', vo: '', wo: '🇸🇳', xh: '🇿🇼', xin: '', yi: '', yo: '🇳🇬', za: '🇨🇳', zh: '🇨🇳', zu: '🇿🇦', nb_NO: '🇳🇴', pt_BR: '🇧🇷', es_MX: '🇲🇽', uk_UA: '🇺🇦', zh_CN: '🇨🇳', zh_TW: '🇨🇳' }
