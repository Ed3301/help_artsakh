let countries = [
    {
        id: '4',
        name: 'Абхазия',
        fullname: 'Республика Абхазия',
        english: 'Abkhazia',
        alpha2: 'AB',
        iso: '895',
        location: 'Азия'
    },
    {
        id: '5',
        name: 'Австралия',
        fullname: '',
        english: 'Australia',
        alpha2: 'AU',
        iso: '36',
        location: 'Океания'
    },
    {
        id: '6',
        name: 'Австрия',
        fullname: 'Австрийская Республика',
        english: 'Austria',
        alpha2: 'AT',
        iso: '40',
        location: 'Европа'
    },
    {
        id: '7',
        name: 'Азербайджан',
        fullname: 'Республика Азербайджан',
        english: 'Azerbaijan',
        alpha2: 'AZ',
        iso: '31',
        location: 'Азия'
    },
    {
        id: '8',
        name: 'Албания',
        fullname: 'Республика Албания',
        english: 'Albania',
        alpha2: 'AL',
        iso: '8',
        location: 'Европа'
    },
    {
        id: '9',
        name: 'Алжир',
        fullname: 'Алжирская Народная Демократическая Республика',
        english: 'Algeria',
        alpha2: 'DZ',
        iso: '12',
        location: 'Африка'
    },
    {
        id: '10',
        name: 'Американское Самоа',
        fullname: '',
        english: 'American Samoa',
        alpha2: 'AS',
        iso: '16',
        location: 'Океания'
    },
    {
        id: '11',
        name: 'Ангилья',
        fullname: '',
        english: 'Anguilla',
        alpha2: 'AI',
        iso: '660',
        location: 'Америка'
    },
    {
        id: '12',
        name: 'Ангола',
        fullname: 'Республика Ангола',
        english: 'Angola',
        alpha2: 'AO',
        iso: '24',
        location: 'Африка'
    },
    {
        id: '13',
        name: 'Андорра',
        fullname: 'Княжество Андорра',
        english: 'Andorra',
        alpha2: 'AD',
        iso: '20',
        location: 'Европа'
    },
    {
        id: '14',
        name: 'Антарктида',
        fullname: '',
        english: 'Antarctica',
        alpha2: 'AQ',
        iso: '10',
        location: 'Антарктика'
    },
    {
        id: '15',
        name: 'Антигуа и Барбуда',
        fullname: '',
        english: 'Antigua and Barbuda',
        alpha2: 'AG',
        iso: '28',
        location: 'Америка'
    },
    {
        id: '16',
        name: 'Аргентина',
        fullname: 'Аргентинская Республика',
        english: 'Argentina',
        alpha2: 'AR',
        iso: '32',
        location: 'Америка'
    },
    {
        id: '17',
        name: 'Армения',
        fullname: 'Республика Армения',
        english: 'Armenia',
        alpha2: 'AM',
        iso: '51',
        location: 'Азия'
    },
    {
        id: '18',
        name: 'Аруба',
        fullname: '',
        english: 'Aruba',
        alpha2: 'AW',
        iso: '533',
        location: 'Америка'
    },
    {
        id: '19',
        name: 'Афганистан',
        fullname: 'Переходное Исламское Государство Афганистан',
        english: 'Afghanistan',
        alpha2: 'AF',
        iso: '4',
        location: 'Азия'
    },
    {
        id: '20',
        name: 'Багамы',
        fullname: 'Содружество Багамы',
        english: 'Bahamas',
        alpha2: 'BS',
        iso: '44',
        location: 'Америка'
    },
    {
        id: '21',
        name: 'Бангладеш',
        fullname: 'Народная Республика Бангладеш',
        english: 'Bangladesh',
        alpha2: 'BD',
        iso: '50',
        location: 'Азия'
    },
    {
        id: '22',
        name: 'Барбадос',
        fullname: '',
        english: 'Barbados',
        alpha2: 'BB',
        iso: '52',
        location: 'Америка'
    },
    {
        id: '23',
        name: 'Бахрейн',
        fullname: 'Королевство Бахрейн',
        english: 'Bahrain',
        alpha2: 'BH',
        iso: '48',
        location: 'Азия'
    },
    {
        id: '24',
        name: 'Беларусь',
        fullname: 'Республика Беларусь',
        english: 'Belarus',
        alpha2: 'BY',
        iso: '112',
        location: 'Европа'
    },
    {
        id: '25',
        name: 'Белиз',
        fullname: '',
        english: 'Belize',
        alpha2: 'BZ',
        iso: '84',
        location: 'Америка'
    },
    {
        id: '26',
        name: 'Бельгия',
        fullname: 'Королевство Бельгии',
        english: 'Belgium',
        alpha2: 'BE',
        iso: '56',
        location: 'Европа'
    },
    {
        id: '27',
        name: 'Бенин',
        fullname: 'Республика Бенин',
        english: 'Benin',
        alpha2: 'BJ',
        iso: '204',
        location: 'Африка'
    },
    {
        id: '28',
        name: 'Бермуды',
        fullname: '',
        english: 'Bermuda',
        alpha2: 'BM',
        iso: '60',
        location: 'Америка'
    },
    {
        id: '29',
        name: 'Болгария',
        fullname: 'Республика Болгария',
        english: 'Bulgaria',
        alpha2: 'BG',
        iso: '100',
        location: 'Европа'
    },
    {
        id: '30',
        name: 'Боливия, Многонациональное Государство',
        fullname: 'Многонациональное Государство Боливия',
        english: 'Bolivia, plurinational state of',
        alpha2: 'BO',
        iso: '68',
        location: 'Америка'
    },
    {
        id: '31',
        name: 'Бонайре, Саба и Синт-Эстатиус',
        fullname: '',
        english: 'Bonaire, Sint Eustatius and Saba',
        alpha2: 'BQ',
        iso: '535',
        location: 'Америка'
    },
    {
        id: '32',
        name: 'Босния и Герцеговина',
        fullname: '',
        english: 'Bosnia and Herzegovina',
        alpha2: 'BA',
        iso: '70',
        location: 'Европа'
    },
    {
        id: '33',
        name: 'Ботсвана',
        fullname: 'Республика Ботсвана',
        english: 'Botswana',
        alpha2: 'BW',
        iso: '72',
        location: 'Африка'
    },
    {
        id: '34',
        name: 'Бразилия',
        fullname: 'Федеративная Республика Бразилия',
        english: 'Brazil',
        alpha2: 'BR',
        iso: '76',
        location: 'Америка'
    },
    {
        id: '35',
        name: 'Британская территория в Индийском океане',
        fullname: '',
        english: 'British Indian Ocean Territory',
        alpha2: 'IO',
        iso: '86',
        location: 'Океания'
    },
    {
        id: '36',
        name: 'Бруней-Даруссалам',
        fullname: '',
        english: 'Brunei Darussalam',
        alpha2: 'BN',
        iso: '96',
        location: 'Азия'
    },
    {
        id: '37',
        name: 'Буркина-Фасо',
        fullname: '',
        english: 'Burkina Faso',
        alpha2: 'BF',
        iso: '854',
        location: 'Африка'
    },
    {
        id: '38',
        name: 'Бурунди',
        fullname: 'Республика Бурунди',
        english: 'Burundi',
        alpha2: 'BI',
        iso: '108',
        location: 'Африка'
    },
    {
        id: '39',
        name: 'Бутан',
        fullname: 'Королевство Бутан',
        english: 'Bhutan',
        alpha2: 'BT',
        iso: '64',
        location: 'Азия'
    },
    {
        id: '40',
        name: 'Вануату',
        fullname: 'Республика Вануату',
        english: 'Vanuatu',
        alpha2: 'VU',
        iso: '548',
        location: 'Океания'
    },
    {
        id: '41',
        name: 'Венгрия',
        fullname: 'Венгерская Республика',
        english: 'Hungary',
        alpha2: 'HU',
        iso: '348',
        location: 'Европа'
    },
    {
        id: '42',
        name: 'Венесуэла Боливарианская Республика',
        fullname: 'Боливарийская Республика Венесуэла',
        english: 'Venezuela',
        alpha2: 'VE',
        iso: '862',
        location: 'Америка'
    },
    {
        id: '43',
        name: 'Виргинские острова, Британские',
        fullname: 'Британские Виргинские острова',
        english: 'Virgin Islands, British',
        alpha2: 'VG',
        iso: '92',
        location: 'Америка'
    },
    {
        id: '44',
        name: 'Виргинские острова, США',
        fullname: 'Виргинские острова Соединенных Штатов',
        english: 'Virgin Islands, U.S.',
        alpha2: 'VI',
        iso: '850',
        location: 'Америка'
    },
    {
        id: '45',
        name: 'Вьетнам',
        fullname: 'Социалистическая Республика Вьетнам',
        english: 'Vietnam',
        alpha2: 'VN',
        iso: '704',
        location: 'Азия'
    },
    {
        id: '46',
        name: 'Габон',
        fullname: 'Габонская Республика',
        english: 'Gabon',
        alpha2: 'GA',
        iso: '266',
        location: 'Африка'
    },
    {
        id: '47',
        name: 'Гаити',
        fullname: 'Республика Гаити',
        english: 'Haiti',
        alpha2: 'HT',
        iso: '332',
        location: 'Америка'
    },
    {
        id: '48',
        name: 'Гайана',
        fullname: 'Республика Гайана',
        english: 'Guyana',
        alpha2: 'GY',
        iso: '328',
        location: 'Америка'
    },
    {
        id: '49',
        name: 'Гамбия',
        fullname: 'Республика Гамбия',
        english: 'Gambia',
        alpha2: 'GM',
        iso: '270',
        location: 'Африка'
    },
    {
        id: '50',
        name: 'Гана',
        fullname: 'Республика Гана',
        english: 'Ghana',
        alpha2: 'GH',
        iso: '288',
        location: 'Африка'
    },
    {
        id: '51',
        name: 'Гваделупа',
        fullname: '',
        english: 'Guadeloupe',
        alpha2: 'GP',
        iso: '312',
        location: 'Америка'
    },
    {
        id: '52',
        name: 'Гватемала',
        fullname: 'Республика Гватемала',
        english: 'Guatemala',
        alpha2: 'GT',
        iso: '320',
        location: 'Америка'
    },
    {
        id: '53',
        name: 'Гвинея',
        fullname: 'Гвинейская Республика',
        english: 'Guinea',
        alpha2: 'GN',
        iso: '324',
        location: 'Африка'
    },
    {
        id: '54',
        name: 'Гвинея-Бисау',
        fullname: 'Республика Гвинея-Бисау',
        english: 'Guinea-Bissau',
        alpha2: 'GW',
        iso: '624',
        location: 'Африка'
    },
    {
        id: '55',
        name: 'Германия',
        fullname: 'Федеративная Республика Германия',
        english: 'Germany',
        alpha2: 'DE',
        iso: '276',
        location: 'Европа'
    },
    {
        id: '56',
        name: 'Гернси',
        fullname: '',
        english: 'Guernsey',
        alpha2: 'GG',
        iso: '831',
        location: 'Европа'
    },
    {
        id: '57',
        name: 'Гибралтар',
        fullname: '',
        english: 'Gibraltar',
        alpha2: 'GI',
        iso: '292',
        location: 'Европа'
    },
    {
        id: '58',
        name: 'Гондурас',
        fullname: 'Республика Гондурас',
        english: 'Honduras',
        alpha2: 'HN',
        iso: '340',
        location: 'Америка'
    },
    {
        id: '59',
        name: 'Гонконг',
        fullname: 'Специальный  административный  регион Китая Гонконг',
        english: 'Hong Kong',
        alpha2: 'HK',
        iso: '344',
        location: 'Азия'
    },
    {
        id: '60',
        name: 'Гренада',
        fullname: '',
        english: 'Grenada',
        alpha2: 'GD',
        iso: '308',
        location: 'Америка'
    },
    {
        id: '61',
        name: 'Гренландия',
        fullname: '',
        english: 'Greenland',
        alpha2: 'GL',
        iso: '304',
        location: 'Америка'
    },
    {
        id: '62',
        name: 'Греция',
        fullname: 'Греческая Республика',
        english: 'Greece',
        alpha2: 'GR',
        iso: '300',
        location: 'Европа'
    },
    {
        id: '63',
        name: 'Грузия',
        fullname: '',
        english: 'Georgia',
        alpha2: 'GE',
        iso: '268',
        location: 'Азия'
    },
    {
        id: '64',
        name: 'Гуам',
        fullname: '',
        english: 'Guam',
        alpha2: 'GU',
        iso: '316',
        location: 'Океания'
    },
    {
        id: '65',
        name: 'Дания',
        fullname: 'Королевство Дания',
        english: 'Denmark',
        alpha2: 'DK',
        iso: '208',
        location: 'Европа'
    },
    {
        id: '66',
        name: 'Джерси',
        fullname: '',
        english: 'Jersey',
        alpha2: 'JE',
        iso: '832',
        location: 'Европа'
    },
    {
        id: '67',
        name: 'Джибути',
        fullname: 'Республика Джибути',
        english: 'Djibouti',
        alpha2: 'DJ',
        iso: '262',
        location: 'Африка'
    },
    {
        id: '68',
        name: 'Доминика',
        fullname: 'Содружество Доминики',
        english: 'Dominica',
        alpha2: 'DM',
        iso: '212',
        location: 'Америка'
    },
    {
        id: '69',
        name: 'Доминиканская Республика',
        fullname: '',
        english: 'Dominican Republic',
        alpha2: 'DO',
        iso: '214',
        location: 'Америка'
    },
    {
        id: '70',
        name: 'Египет',
        fullname: 'Арабская Республика Египет',
        english: 'Egypt',
        alpha2: 'EG',
        iso: '818',
        location: 'Африка'
    },
    {
        id: '71',
        name: 'Замбия',
        fullname: 'Республика Замбия',
        english: 'Zambia',
        alpha2: 'ZM',
        iso: '894',
        location: 'Африка'
    },
    {
        id: '72',
        name: 'Западная Сахара',
        fullname: '',
        english: 'Western Sahara',
        alpha2: 'EH',
        iso: '732',
        location: 'Африка'
    },
    {
        id: '73',
        name: 'Зимбабве',
        fullname: 'Республика Зимбабве',
        english: 'Zimbabwe',
        alpha2: 'ZW',
        iso: '716',
        location: 'Африка'
    },
    {
        id: '74',
        name: 'Израиль',
        fullname: 'Государство Израиль',
        english: 'Israel',
        alpha2: 'IL',
        iso: '376',
        location: 'Азия'
    },
    {
        id: '75',
        name: 'Индия',
        fullname: 'Республика Индия',
        english: 'India',
        alpha2: 'IN',
        iso: '356',
        location: 'Азия'
    },
    {
        id: '76',
        name: 'Индонезия',
        fullname: 'Республика Индонезия',
        english: 'Indonesia',
        alpha2: 'ID',
        iso: '360',
        location: 'Азия'
    },
    {
        id: '77',
        name: 'Иордания',
        fullname: 'Иорданское Хашимитское Королевство',
        english: 'Jordan',
        alpha2: 'JO',
        iso: '400',
        location: 'Азия'
    },
    {
        id: '78',
        name: 'Ирак',
        fullname: 'Республика Ирак',
        english: 'Iraq',
        alpha2: 'IQ',
        iso: '368',
        location: 'Азия'
    },
    {
        id: '79',
        name: 'Иран, Исламская Республика',
        fullname: 'Исламская Республика Иран',
        english: 'Iran, Islamic Republic of',
        alpha2: 'IR',
        iso: '364',
        location: 'Азия'
    },
    {
        id: '80',
        name: 'Ирландия',
        fullname: '',
        english: 'Ireland',
        alpha2: 'IE',
        iso: '372',
        location: 'Европа'
    },
    {
        id: '81',
        name: 'Исландия',
        fullname: 'Республика Исландия',
        english: 'Iceland',
        alpha2: 'IS',
        iso: '352',
        location: 'Европа'
    },
    {
        id: '82',
        name: 'Испания',
        fullname: 'Королевство Испания',
        english: 'Spain',
        alpha2: 'ES',
        iso: '724',
        location: 'Европа'
    },
    {
        id: '83',
        name: 'Италия',
        fullname: 'Итальянская Республика',
        english: 'Italy',
        alpha2: 'IT',
        iso: '380',
        location: 'Европа'
    },
    {
        id: '84',
        name: 'Йемен',
        fullname: 'Йеменская Республика',
        english: 'Yemen',
        alpha2: 'YE',
        iso: '887',
        location: 'Азия'
    },
    {
        id: '85',
        name: 'Кабо-Верде',
        fullname: 'Республика Кабо-Верде',
        english: 'Cape Verde',
        alpha2: 'CV',
        iso: '132',
        location: 'Африка'
    },
    {
        id: '86',
        name: 'Казахстан',
        fullname: 'Республика Казахстан',
        english: 'Kazakhstan',
        alpha2: 'KZ',
        iso: '398',
        location: 'Азия'
    },
    {
        id: '87',
        name: 'Камбоджа',
        fullname: 'Королевство Камбоджа',
        english: 'Cambodia',
        alpha2: 'KH',
        iso: '116',
        location: 'Азия'
    },
    {
        id: '88',
        name: 'Камерун',
        fullname: 'Республика Камерун',
        english: 'Cameroon',
        alpha2: 'CM',
        iso: '120',
        location: 'Африка'
    },
    {
        id: '89',
        name: 'Канада',
        fullname: '',
        english: 'Canada',
        alpha2: 'CA',
        iso: '124',
        location: 'Америка'
    },
    {
        id: '90',
        name: 'Катар',
        fullname: 'Государство Катар',
        english: 'Qatar',
        alpha2: 'QA',
        iso: '634',
        location: 'Азия'
    },
    {
        id: '91',
        name: 'Кения',
        fullname: 'Республика Кения',
        english: 'Kenya',
        alpha2: 'KE',
        iso: '404',
        location: 'Африка'
    },
    {
        id: '92',
        name: 'Кипр',
        fullname: 'Республика Кипр',
        english: 'Cyprus',
        alpha2: 'CY',
        iso: '196',
        location: 'Азия'
    },
    {
        id: '93',
        name: 'Киргизия',
        fullname: 'Киргизская Республика',
        english: 'Kyrgyzstan',
        alpha2: 'KG',
        iso: '417',
        location: 'Азия'
    },
    {
        id: '94',
        name: 'Кирибати',
        fullname: 'Республика Кирибати',
        english: 'Kiribati',
        alpha2: 'KI',
        iso: '296',
        location: 'Океания'
    },
    {
        id: '95',
        name: 'Китай',
        fullname: 'Китайская Народная Республика',
        english: 'China',
        alpha2: 'CN',
        iso: '156',
        location: 'Азия'
    },
    {
        id: '96',
        name: 'Кокосовые (Килинг) острова',
        fullname: '',
        english: 'Cocos (Keeling) Islands',
        alpha2: 'CC',
        iso: '166',
        location: 'Океания'
    },
    {
        id: '97',
        name: 'Колумбия',
        fullname: 'Республика Колумбия',
        english: 'Colombia',
        alpha2: 'CO',
        iso: '170',
        location: 'Америка'
    },
    {
        id: '98',
        name: 'Коморы',
        fullname: 'Союз Коморы',
        english: 'Comoros',
        alpha2: 'KM',
        iso: '174',
        location: 'Африка'
    },
    {
        id: '99',
        name: 'Конго',
        fullname: 'Республика Конго',
        english: 'Congo',
        alpha2: 'CG',
        iso: '178',
        location: 'Африка'
    },
    {
        id: '100',
        name: 'Конго, Демократическая Республика',
        fullname: 'Демократическая Республика Конго',
        english: 'Congo, Democratic Republic of the',
        alpha2: 'CD',
        iso: '180',
        location: 'Африка'
    },
    {
        id: '101',
        name: 'Корея, Народно-Демократическая Республика',
        fullname: 'Корейская Народно-Демократическая Республика',
        english: 'Korea, Democratic People\'s republic of',
        alpha2: 'KP',
        iso: '408',
        location: 'Азия'
    },
    {
        id: '102',
        name: 'Корея, Республика',
        fullname: 'Республика Корея',
        english: 'Korea, Republic of',
        alpha2: 'KR',
        iso: '410',
        location: 'Азия'
    },
    {
        id: '103',
        name: 'Коста-Рика',
        fullname: 'Республика Коста-Рика',
        english: 'Costa Rica',
        alpha2: 'CR',
        iso: '188',
        location: 'Америка'
    },
    {
        id: '104',
        name: 'Кот д\'Ивуар',
        fullname: 'Республика Кот д\'Ивуар',
        english: 'Cote d\'Ivoire',
        alpha2: 'CI',
        iso: '384',
        location: 'Африка'
    },
    {
        id: '105',
        name: 'Куба',
        fullname: 'Республика Куба',
        english: 'Cuba',
        alpha2: 'CU',
        iso: '192',
        location: 'Америка'
    },
    {
        id: '106',
        name: 'Кувейт',
        fullname: 'Государство Кувейт',
        english: 'Kuwait',
        alpha2: 'KW',
        iso: '414',
        location: 'Азия'
    },
    {
        id: '107',
        name: 'Кюрасао',
        fullname: '',
        english: 'Curaçao',
        alpha2: 'CW',
        iso: '531',
        location: 'Америка'
    },
    {
        id: '108',
        name: 'Лаос',
        fullname: 'Лаосская Народно-Демократическая Республика',
        english: 'Lao People\'s Democratic Republic',
        alpha2: 'LA',
        iso: '418',
        location: 'Азия'
    },
    {
        id: '109',
        name: 'Латвия',
        fullname: 'Латвийская Республика',
        english: 'Latvia',
        alpha2: 'LV',
        iso: '428',
        location: 'Европа'
    },
    {
        id: '110',
        name: 'Лесото',
        fullname: 'Королевство Лесото',
        english: 'Lesotho',
        alpha2: 'LS',
        iso: '426',
        location: 'Африка'
    },
    {
        id: '111',
        name: 'Ливан',
        fullname: 'Ливанская Республика',
        english: 'Lebanon',
        alpha2: 'LB',
        iso: '422',
        location: 'Азия'
    },
    {
        id: '112',
        name: 'Ливийская Арабская Джамахирия',
        fullname: 'Социалистическая Народная Ливийская Арабская Джамахирия',
        english: 'Libyan Arab Jamahiriya',
        alpha2: 'LY',
        iso: '434',
        location: 'Африка'
    },
    {
        id: '113',
        name: 'Либерия',
        fullname: 'Республика Либерия',
        english: 'Liberia',
        alpha2: 'LR',
        iso: '430',
        location: 'Африка'
    },
    {
        id: '114',
        name: 'Лихтенштейн',
        fullname: 'Княжество Лихтенштейн',
        english: 'Liechtenstein',
        alpha2: 'LI',
        iso: '438',
        location: 'Европа'
    },
    {
        id: '115',
        name: 'Литва',
        fullname: 'Литовская Республика',
        english: 'Lithuania',
        alpha2: 'LT',
        iso: '440',
        location: 'Европа'
    },
    {
        id: '116',
        name: 'Люксембург',
        fullname: 'Великое Герцогство Люксембург',
        english: 'Luxembourg',
        alpha2: 'LU',
        iso: '442',
        location: 'Европа'
    },
    {
        id: '117',
        name: 'Маврикий',
        fullname: 'Республика Маврикий',
        english: 'Mauritius',
        alpha2: 'MU',
        iso: '480',
        location: 'Африка'
    },
    {
        id: '118',
        name: 'Мавритания',
        fullname: 'Исламская Республика Мавритания',
        english: 'Mauritania',
        alpha2: 'MR',
        iso: '478',
        location: 'Африка'
    },
    {
        id: '119',
        name: 'Мадагаскар',
        fullname: 'Республика Мадагаскар',
        english: 'Madagascar',
        alpha2: 'MG',
        iso: '450',
        location: 'Африка'
    },
    {
        id: '120',
        name: 'Майотта',
        fullname: '',
        english: 'Mayotte',
        alpha2: 'YT',
        iso: '175',
        location: 'Африка'
    },
    {
        id: '121',
        name: 'Макао',
        fullname: 'Специальный административный регион Китая Макао',
        english: 'Macao',
        alpha2: 'MO',
        iso: '446',
        location: 'Азия'
    },
    {
        id: '122',
        name: 'Малави',
        fullname: 'Республика Малави',
        english: 'Malawi',
        alpha2: 'MW',
        iso: '454',
        location: 'Африка'
    },
    {
        id: '123',
        name: 'Малайзия',
        fullname: '',
        english: 'Malaysia',
        alpha2: 'MY',
        iso: '458',
        location: 'Азия'
    },
    {
        id: '124',
        name: 'Мали',
        fullname: 'Республика Мали',
        english: 'Mali',
        alpha2: 'ML',
        iso: '466',
        location: 'Африка'
    },
    {
        id: '125',
        name: 'Малые Тихоокеанские отдаленные острова Соединенных Штатов',
        fullname: '',
        english: 'United States Minor Outlying Islands',
        alpha2: 'UM',
        iso: '581',
        location: 'Океания'
    },
    {
        id: '126',
        name: 'Мальдивы',
        fullname: 'Мальдивская Республика',
        english: 'Maldives',
        alpha2: 'MV',
        iso: '462',
        location: 'Азия'
    },
    {
        id: '127',
        name: 'Мальта',
        fullname: 'Республика Мальта',
        english: 'Malta',
        alpha2: 'MT',
        iso: '470',
        location: 'Европа'
    },
    {
        id: '128',
        name: 'Марокко',
        fullname: 'Королевство Марокко',
        english: 'Morocco',
        alpha2: 'MA',
        iso: '504',
        location: 'Африка'
    },
    {
        id: '129',
        name: 'Мартиника',
        fullname: '',
        english: 'Martinique',
        alpha2: 'MQ',
        iso: '474',
        location: 'Америка'
    },
    {
        id: '130',
        name: 'Маршалловы острова',
        fullname: 'Республика Маршалловы острова',
        english: 'Marshall Islands',
        alpha2: 'MH',
        iso: '584',
        location: 'Океания'
    },
    {
        id: '131',
        name: 'Мексика',
        fullname: 'Мексиканские Соединенные Штаты',
        english: 'Mexico',
        alpha2: 'MX',
        iso: '484',
        location: 'Америка'
    },
    {
        id: '132',
        name: 'Микронезия, Федеративные Штаты',
        fullname: 'Федеративные штаты Микронезии',
        english: 'Micronesia, Federated States of',
        alpha2: 'FM',
        iso: '583',
        location: 'Океания'
    },
    {
        id: '133',
        name: 'Мозамбик',
        fullname: 'Республика Мозамбик',
        english: 'Mozambique',
        alpha2: 'MZ',
        iso: '508',
        location: 'Африка'
    },
    {
        id: '134',
        name: 'Молдова, Республика',
        fullname: 'Республика Молдова',
        english: 'Moldova',
        alpha2: 'MD',
        iso: '498',
        location: 'Европа'
    },
    {
        id: '135',
        name: 'Монако',
        fullname: 'Княжество Монако',
        english: 'Monaco',
        alpha2: 'MC',
        iso: '492',
        location: 'Европа'
    },
    {
        id: '136',
        name: 'Монголия',
        fullname: '',
        english: 'Mongolia',
        alpha2: 'MN',
        iso: '496',
        location: 'Азия'
    },
    {
        id: '137',
        name: 'Монтсеррат',
        fullname: '',
        english: 'Montserrat',
        alpha2: 'MS',
        iso: '500',
        location: 'Америка'
    },
    {
        id: '138',
        name: 'Мьянма',
        fullname: 'Союз Мьянма',
        english: 'Burma',
        alpha2: 'MM',
        iso: '104',
        location: 'Азия'
    },
    {
        id: '139',
        name: 'Намибия',
        fullname: 'Республика Намибия',
        english: 'Namibia',
        alpha2: 'NA',
        iso: '516',
        location: 'Африка'
    },
    {
        id: '140',
        name: 'Науру',
        fullname: 'Республика Науру',
        english: 'Nauru',
        alpha2: 'NR',
        iso: '520',
        location: 'Океания'
    },
    {
        id: '141',
        name: 'Непал',
        fullname: 'Королевство Непал',
        english: 'Nepal',
        alpha2: 'NP',
        iso: '524',
        location: 'Азия'
    },
    {
        id: '142',
        name: 'Нигер',
        fullname: 'Республика Нигер',
        english: 'Niger',
        alpha2: 'NE',
        iso: '562',
        location: 'Африка'
    },
    {
        id: '143',
        name: 'Нигерия',
        fullname: 'Федеративная Республика Нигерия',
        english: 'Nigeria',
        alpha2: 'NG',
        iso: '566',
        location: 'Африка'
    },
    {
        id: '144',
        name: 'Нидерланды',
        fullname: 'Королевство Нидерландов',
        english: 'Netherlands',
        alpha2: 'NL',
        iso: '528',
        location: 'Европа'
    },
    {
        id: '145',
        name: 'Никарагуа',
        fullname: 'Республика Никарагуа',
        english: 'Nicaragua',
        alpha2: 'NI',
        iso: '558',
        location: 'Америка'
    },
    {
        id: '146',
        name: 'Ниуэ',
        fullname: 'Республика Ниуэ',
        english: 'Niue',
        alpha2: 'NU',
        iso: '570',
        location: 'Океания'
    },
    {
        id: '147',
        name: 'Новая Зеландия',
        fullname: '',
        english: 'New Zealand',
        alpha2: 'NZ',
        iso: '554',
        location: 'Океания'
    },
    {
        id: '148',
        name: 'Новая Каледония',
        fullname: '',
        english: 'New Caledonia',
        alpha2: 'NC',
        iso: '540',
        location: 'Океания'
    },
    {
        id: '149',
        name: 'Норвегия',
        fullname: 'Королевство Норвегия',
        english: 'Norway',
        alpha2: 'NO',
        iso: '578',
        location: 'Европа'
    },
    {
        id: '150',
        name: 'Объединенные Арабские Эмираты',
        fullname: '',
        english: 'United Arab Emirates',
        alpha2: 'AE',
        iso: '784',
        location: 'Азия'
    },
    {
        id: '151',
        name: 'Оман',
        fullname: 'Султанат Оман',
        english: 'Oman',
        alpha2: 'OM',
        iso: '512',
        location: 'Азия'
    },
    {
        id: '152',
        name: 'Остров Буве',
        fullname: '',
        english: 'Bouvet Island',
        alpha2: 'BV',
        iso: '74',
        location: ''
    },
    {
        id: '153',
        name: 'Остров Мэн',
        fullname: '',
        english: 'Isle of Man',
        alpha2: 'IM',
        iso: '833',
        location: 'Европа'
    },
    {
        id: '154',
        name: 'Остров Норфолк',
        fullname: '',
        english: 'Norfolk Island',
        alpha2: 'NF',
        iso: '574',
        location: 'Океания'
    },
    {
        id: '155',
        name: 'Остров Рождества',
        fullname: '',
        english: 'Christmas Island',
        alpha2: 'CX',
        iso: '162',
        location: 'Азия'
    },
    {
        id: '156',
        name: 'Остров Херд и острова Макдональд',
        fullname: '',
        english: 'Heard Island and McDonald Islands',
        alpha2: 'HM',
        iso: '334',
        location: ''
    },
    {
        id: '157',
        name: 'Острова Кайман',
        fullname: '',
        english: 'Cayman Islands',
        alpha2: 'KY',
        iso: '136',
        location: 'Америка'
    },
    {
        id: '158',
        name: 'Острова Кука',
        fullname: '',
        english: 'Cook Islands',
        alpha2: 'CK',
        iso: '184',
        location: 'Океания'
    },
    {
        id: '159',
        name: 'Острова Теркс и Кайкос',
        fullname: '',
        english: 'Turks and Caicos Islands',
        alpha2: 'TC',
        iso: '796',
        location: 'Америка'
    },
    {
        id: '160',
        name: 'Пакистан',
        fullname: 'Исламская Республика Пакистан',
        english: 'Pakistan',
        alpha2: 'PK',
        iso: '586',
        location: 'Азия'
    },
    {
        id: '161',
        name: 'Палау',
        fullname: 'Республика Палау',
        english: 'Palau',
        alpha2: 'PW',
        iso: '585',
        location: 'Океания'
    },
    {
        id: '162',
        name: 'Палестинская территория, оккупированная',
        fullname: 'Оккупированная Палестинская территория',
        english: 'Palestinian Territory, Occupied',
        alpha2: 'PS',
        iso: '275',
        location: 'Азия'
    },
    {
        id: '163',
        name: 'Панама',
        fullname: 'Республика Панама',
        english: 'Panama',
        alpha2: 'PA',
        iso: '591',
        location: 'Америка'
    },
    {
        id: '164',
        name: 'Папский Престол (Государство &mdash; город Ватикан)',
        fullname: '',
        english: 'Holy See (Vatican City State)',
        alpha2: 'VA',
        iso: '336',
        location: 'Европа'
    },
    {
        id: '165',
        name: 'Папуа-Новая Гвинея',
        fullname: '',
        english: 'Papua New Guinea',
        alpha2: 'PG',
        iso: '598',
        location: 'Океания'
    },
    {
        id: '166',
        name: 'Парагвай',
        fullname: 'Республика Парагвай',
        english: 'Paraguay',
        alpha2: 'PY',
        iso: '600',
        location: 'Америка'
    },
    {
        id: '167',
        name: 'Перу',
        fullname: 'Республика Перу',
        english: 'Peru',
        alpha2: 'PE',
        iso: '604',
        location: 'Америка'
    },
    {
        id: '168',
        name: 'Питкерн',
        fullname: '',
        english: 'Pitcairn',
        alpha2: 'PN',
        iso: '612',
        location: 'Океания'
    },
    {
        id: '169',
        name: 'Польша',
        fullname: 'Республика Польша',
        english: 'Poland',
        alpha2: 'PL',
        iso: '616',
        location: 'Европа'
    },
    {
        id: '170',
        name: 'Португалия',
        fullname: 'Португальская Республика',
        english: 'Portugal',
        alpha2: 'PT',
        iso: '620',
        location: 'Европа'
    },
    {
        id: '171',
        name: 'Пуэрто-Рико',
        fullname: '',
        english: 'Puerto Rico',
        alpha2: 'PR',
        iso: '630',
        location: 'Америка'
    },
    {
        id: '172',
        name: 'Республика Македония',
        fullname: '',
        english: 'Macedonia, The Former Yugoslav Republic Of',
        alpha2: 'MK',
        iso: '807',
        location: 'Европа'
    },
    {
        id: '173',
        name: 'Реюньон',
        fullname: '',
        english: 'Reunion',
        alpha2: 'RE',
        iso: '638',
        location: 'Африка'
    },
    {
        id: '174',
        name: 'Россия',
        fullname: 'Российская Федерация',
        english: 'Russian Federation',
        alpha2: 'RU',
        iso: '643',
        location: 'Европа'
    },
    {
        id: '175',
        name: 'Руанда',
        fullname: 'Руандийская Республика',
        english: 'Rwanda',
        alpha2: 'RW',
        iso: '646',
        location: 'Африка'
    },
    {
        id: '176',
        name: 'Румыния',
        fullname: '',
        english: 'Romania',
        alpha2: 'RO',
        iso: '642',
        location: 'Европа'
    },
    {
        id: '177',
        name: 'Самоа',
        fullname: 'Независимое Государство Самоа',
        english: 'Samoa',
        alpha2: 'WS',
        iso: '882',
        location: 'Океания'
    },
    {
        id: '178',
        name: 'Сан-Марино',
        fullname: 'Республика Сан-Марино',
        english: 'San Marino',
        alpha2: 'SM',
        iso: '674',
        location: 'Европа'
    },
    {
        id: '179',
        name: 'Сан-Томе и Принсипи',
        fullname: 'Демократическая Республика Сан-Томе и Принсипи',
        english: 'Sao Tome and Principe',
        alpha2: 'ST',
        iso: '678',
        location: 'Африка'
    },
    {
        id: '180',
        name: 'Саудовская Аравия',
        fullname: 'Королевство Саудовская Аравия',
        english: 'Saudi Arabia',
        alpha2: 'SA',
        iso: '682',
        location: 'Азия'
    },
    {
        id: '181',
        name: 'Свазиленд',
        fullname: 'Королевство Свазиленд',
        english: 'Swaziland',
        alpha2: 'SZ',
        iso: '748',
        location: 'Африка'
    },
    {
        id: '182',
        name: 'Святая Елена, Остров вознесения, Тристан-да-Кунья',
        fullname: '',
        english: 'Saint Helena, Ascension And Tristan Da Cunha',
        alpha2: 'SH',
        iso: '654',
        location: 'Африка'
    },
    {
        id: '183',
        name: 'Северные Марианские острова',
        fullname: 'Содружество Северных Марианских островов',
        english: 'Northern Mariana Islands',
        alpha2: 'MP',
        iso: '580',
        location: 'Океания'
    },
    {
        id: '184',
        name: 'Сен-Бартельми',
        fullname: '',
        english: 'Saint Barthélemy',
        alpha2: 'BL',
        iso: '652',
        location: 'Америка'
    },
    {
        id: '185',
        name: 'Сен-Мартен',
        fullname: '',
        english: 'Saint Martin (French Part)',
        alpha2: 'MF',
        iso: '663',
        location: 'Америка'
    },
    {
        id: '186',
        name: 'Сенегал',
        fullname: 'Республика Сенегал',
        english: 'Senegal',
        alpha2: 'SN',
        iso: '686',
        location: 'Африка'
    },
    {
        id: '187',
        name: 'Сент-Винсент и Гренадины',
        fullname: '',
        english: 'Saint Vincent and the Grenadines',
        alpha2: 'VC',
        iso: '670',
        location: 'Америка'
    },
    {
        id: '188',
        name: 'Сент-Китс и Невис',
        fullname: '',
        english: 'Saint Kitts and Nevis',
        alpha2: 'KN',
        iso: '659',
        location: 'Америка'
    },
    {
        id: '189',
        name: 'Сент-Люсия',
        fullname: '',
        english: 'Saint Lucia',
        alpha2: 'LC',
        iso: '662',
        location: 'Америка'
    },
    {
        id: '190',
        name: 'Сент-Пьер и Микелон',
        fullname: '',
        english: 'Saint Pierre and Miquelon',
        alpha2: 'PM',
        iso: '666',
        location: 'Америка'
    },
    {
        id: '191',
        name: 'Сербия',
        fullname: 'Республика Сербия',
        english: 'Serbia',
        alpha2: 'RS',
        iso: '688',
        location: 'Европа'
    },
    {
        id: '192',
        name: 'Сейшелы',
        fullname: 'Республика Сейшелы',
        english: 'Seychelles',
        alpha2: 'SC',
        iso: '690',
        location: 'Африка'
    },
    {
        id: '193',
        name: 'Сингапур',
        fullname: 'Республика Сингапур',
        english: 'Singapore',
        alpha2: 'SG',
        iso: '702',
        location: 'Азия'
    },
    {
        id: '194',
        name: 'Синт-Мартен',
        fullname: '',
        english: 'Sint Maarten',
        alpha2: 'SX',
        iso: '534',
        location: 'Америка'
    },
    {
        id: '195',
        name: 'Сирийская Арабская Республика',
        fullname: '',
        english: 'Syrian Arab Republic',
        alpha2: 'SY',
        iso: '760',
        location: 'Азия'
    },
    {
        id: '196',
        name: 'Словакия',
        fullname: 'Словацкая Республика',
        english: 'Slovakia',
        alpha2: 'SK',
        iso: '703',
        location: 'Европа'
    },
    {
        id: '197',
        name: 'Словения',
        fullname: 'Республика Словения',
        english: 'Slovenia',
        alpha2: 'SI',
        iso: '705',
        location: 'Европа'
    },
    {
        id: '198',
        name: 'Соединенное Королевство',
        fullname: 'Соединенное Королевство Великобритании и Северной Ирландии',
        english: 'United Kingdom',
        alpha2: 'GB',
        iso: '826',
        location: 'Европа'
    },
    {
        id: '199',
        name: 'Соединенные Штаты',
        fullname: 'Соединенные Штаты Америки',
        english: 'United States',
        alpha2: 'US',
        iso: '840',
        location: 'Америка'
    },
    {
        id: '200',
        name: 'Соломоновы острова',
        fullname: '',
        english: 'Solomon Islands',
        alpha2: 'SB',
        iso: '90',
        location: 'Океания'
    },
    {
        id: '201',
        name: 'Сомали',
        fullname: 'Сомалийская Республика',
        english: 'Somalia',
        alpha2: 'SO',
        iso: '706',
        location: 'Африка'
    },
    {
        id: '202',
        name: 'Судан',
        fullname: 'Республика Судан',
        english: 'Sudan',
        alpha2: 'SD',
        iso: '736',
        location: 'Африка'
    },
    {
        id: '203',
        name: 'Суринам',
        fullname: 'Республика Суринам',
        english: 'Suriname',
        alpha2: 'SR',
        iso: '740',
        location: 'Америка'
    },
    {
        id: '204',
        name: 'Сьерра-Леоне',
        fullname: 'Республика Сьерра-Леоне',
        english: 'Sierra Leone',
        alpha2: 'SL',
        iso: '694',
        location: 'Африка'
    },
    {
        id: '205',
        name: 'Таджикистан',
        fullname: 'Республика Таджикистан',
        english: 'Tajikistan',
        alpha2: 'TJ',
        iso: '762',
        location: 'Азия'
    },
    {
        id: '206',
        name: 'Таиланд',
        fullname: 'Королевство Таиланд',
        english: 'Thailand',
        alpha2: 'TH',
        iso: '764',
        location: 'Азия'
    },
    {
        id: '207',
        name: 'Тайвань (Китай)',
        fullname: '',
        english: 'Taiwan, Province of China',
        alpha2: 'TW',
        iso: '158',
        location: 'Азия'
    },
    {
        id: '208',
        name: 'Танзания, Объединенная Республика',
        fullname: 'Объединенная Республика Танзания',
        english: 'Tanzania, United Republic Of',
        alpha2: 'TZ',
        iso: '834',
        location: 'Африка'
    },
    {
        id: '209',
        name: 'Тимор-Лесте',
        fullname: 'Демократическая Республика Тимор-Лесте',
        english: 'Timor-Leste',
        alpha2: 'TL',
        iso: '626',
        location: 'Азия'
    },
    {
        id: '210',
        name: 'Того',
        fullname: 'Тоголезская Республика',
        english: 'Togo',
        alpha2: 'TG',
        iso: '768',
        location: 'Африка'
    },
    {
        id: '211',
        name: 'Токелау',
        fullname: '',
        english: 'Tokelau',
        alpha2: 'TK',
        iso: '772',
        location: 'Океания'
    },
    {
        id: '212',
        name: 'Тонга',
        fullname: 'Королевство Тонга',
        english: 'Tonga',
        alpha2: 'TO',
        iso: '776',
        location: 'Океания'
    },
    {
        id: '213',
        name: 'Тринидад и Тобаго',
        fullname: 'Республика Тринидад и Тобаго',
        english: 'Trinidad and Tobago',
        alpha2: 'TT',
        iso: '780',
        location: 'Америка'
    },
    {
        id: '214',
        name: 'Тувалу',
        fullname: '',
        english: 'Tuvalu',
        alpha2: 'TV',
        iso: '798',
        location: 'Океания'
    },
    {
        id: '215',
        name: 'Тунис',
        fullname: 'Тунисская Республика',
        english: 'Tunisia',
        alpha2: 'TN',
        iso: '788',
        location: 'Африка'
    },
    {
        id: '216',
        name: 'Туркмения',
        fullname: 'Туркменистан',
        english: 'Turkmenistan',
        alpha2: 'TM',
        iso: '795',
        location: 'Азия'
    },
    {
        id: '217',
        name: 'Турция',
        fullname: 'Турецкая Республика',
        english: 'Turkey',
        alpha2: 'TR',
        iso: '792',
        location: 'Азия'
    },
    {
        id: '218',
        name: 'Уганда',
        fullname: 'Республика Уганда',
        english: 'Uganda',
        alpha2: 'UG',
        iso: '800',
        location: 'Африка'
    },
    {
        id: '219',
        name: 'Узбекистан',
        fullname: 'Республика Узбекистан',
        english: 'Uzbekistan',
        alpha2: 'UZ',
        iso: '860',
        location: 'Азия'
    },
    {
        id: '220',
        name: 'Украина',
        fullname: '',
        english: 'Ukraine',
        alpha2: 'UA',
        iso: '804',
        location: 'Европа'
    },
    {
        id: '221',
        name: 'Уоллис и Футуна',
        fullname: '',
        english: 'Wallis and Futuna',
        alpha2: 'WF',
        iso: '876',
        location: 'Океания'
    },
    {
        id: '222',
        name: 'Уругвай',
        fullname: 'Восточная Республика Уругвай',
        english: 'Uruguay',
        alpha2: 'UY',
        iso: '858',
        location: 'Америка'
    },
    {
        id: '223',
        name: 'Фарерские острова',
        fullname: '',
        english: 'Faroe Islands',
        alpha2: 'FO',
        iso: '234',
        location: 'Европа'
    },
    {
        id: '224',
        name: 'Фиджи',
        fullname: 'Республика островов Фиджи',
        english: 'Fiji',
        alpha2: 'FJ',
        iso: '242',
        location: 'Океания'
    },
    {
        id: '225',
        name: 'Филиппины',
        fullname: 'Республика Филиппины',
        english: 'Philippines',
        alpha2: 'PH',
        iso: '608',
        location: 'Азия'
    },
    {
        id: '226',
        name: 'Финляндия',
        fullname: 'Финляндская Республика',
        english: 'Finland',
        alpha2: 'FI',
        iso: '246',
        location: 'Европа'
    },
    {
        id: '227',
        name: 'Фолклендские острова (Мальвинские)',
        fullname: '',
        english: 'Falkland Islands (Malvinas)',
        alpha2: 'FK',
        iso: '238',
        location: 'Америка'
    },
    {
        id: '228',
        name: 'Франция',
        fullname: 'Французская Республика',
        english: 'France',
        alpha2: 'FR',
        iso: '250',
        location: 'Европа'
    },
    {
        id: '229',
        name: 'Французская Гвиана',
        fullname: '',
        english: 'French Guiana',
        alpha2: 'GF',
        iso: '254',
        location: 'Америка'
    },
    {
        id: '230',
        name: 'Французская Полинезия',
        fullname: '',
        english: 'French Polynesia',
        alpha2: 'PF',
        iso: '258',
        location: 'Океания'
    },
    {
        id: '231',
        name: 'Французские Южные территории',
        fullname: '',
        english: 'French Southern Territories',
        alpha2: 'TF',
        iso: '260',
        location: ''
    },
    {
        id: '232',
        name: 'Хорватия',
        fullname: 'Республика Хорватия',
        english: 'Croatia',
        alpha2: 'HR',
        iso: '191',
        location: 'Европа'
    },
    {
        id: '233',
        name: 'Центрально-Африканская Республика',
        fullname: '',
        english: 'Central African Republic',
        alpha2: 'CF',
        iso: '140',
        location: 'Африка'
    },
    {
        id: '234',
        name: 'Чад',
        fullname: 'Республика Чад',
        english: 'Chad',
        alpha2: 'TD',
        iso: '148',
        location: 'Африка'
    },
    {
        id: '235',
        name: 'Черногория',
        fullname: 'Республика Черногория',
        english: 'Montenegro',
        alpha2: 'ME',
        iso: '499',
        location: 'Европа'
    },
    {
        id: '236',
        name: 'Чешская Республика',
        fullname: '',
        english: 'Czech Republic',
        alpha2: 'CZ',
        iso: '203',
        location: 'Европа'
    },
    {
        id: '237',
        name: 'Чили',
        fullname: 'Республика Чили',
        english: 'Chile',
        alpha2: 'CL',
        iso: '152',
        location: 'Америка'
    },
    {
        id: '238',
        name: 'Швейцария',
        fullname: 'Швейцарская Конфедерация',
        english: 'Switzerland',
        alpha2: 'CH',
        iso: '756',
        location: 'Европа'
    },
    {
        id: '239',
        name: 'Швеция',
        fullname: 'Королевство Швеция',
        english: 'Sweden',
        alpha2: 'SE',
        iso: '752',
        location: 'Европа'
    },
    {
        id: '240',
        name: 'Шпицберген и Ян Майен',
        fullname: '',
        english: 'Svalbard and Jan Mayen',
        alpha2: 'SJ',
        iso: '744',
        location: 'Европа'
    },
    {
        id: '241',
        name: 'Шри-Ланка',
        fullname: 'Демократическая Социалистическая Республика Шри-Ланка',
        english: 'Sri Lanka',
        alpha2: 'LK',
        iso: '144',
        location: 'Азия'
    },
    {
        id: '242',
        name: 'Эквадор',
        fullname: 'Республика Эквадор',
        english: 'Ecuador',
        alpha2: 'EC',
        iso: '218',
        location: 'Америка'
    },
    {
        id: '243',
        name: 'Экваториальная Гвинея',
        fullname: 'Республика Экваториальная Гвинея',
        english: 'Equatorial Guinea',
        alpha2: 'GQ',
        iso: '226',
        location: 'Африка'
    },
    {
        id: '244',
        name: 'Эландские острова',
        fullname: '',
        english: 'Åland Islands',
        alpha2: 'AX',
        iso: '248',
        location: 'Европа'
    },
    {
        id: '245',
        name: 'Эль-Сальвадор',
        fullname: 'Республика Эль-Сальвадор',
        english: 'El Salvador',
        alpha2: 'SV',
        iso: '222',
        location: 'Америка'
    },
    {
        id: '246',
        name: 'Эритрея',
        fullname: '',
        english: 'Eritrea',
        alpha2: 'ER',
        iso: '232',
        location: 'Африка'
    },
    {
        id: '247',
        name: 'Эстония',
        fullname: 'Эстонская Республика',
        english: 'Estonia',
        alpha2: 'EE',
        iso: '233',
        location: 'Европа'
    },
    {
        id: '248',
        name: 'Эфиопия',
        fullname: 'Федеративная Демократическая Республика Эфиопия',
        english: 'Ethiopia',
        alpha2: 'ET',
        iso: '231',
        location: 'Африка'
    },
    {
        id: '249',
        name: 'Южная Африка',
        fullname: 'Южно-Африканская Республика',
        english: 'South Africa',
        alpha2: 'ZA',
        iso: '710',
        location: 'Африка'
    },
    {
        id: '250',
        name: 'Южная Джорджия и Южные Сандвичевы острова',
        fullname: '',
        english: 'South Georgia and the South Sandwich Islands',
        alpha2: 'GS',
        iso: '239',
        location: ''
    },
    {
        id: '251',
        name: 'Южная Осетия',
        fullname: 'Республика Южная Осетия',
        english: 'South Ossetia',
        alpha2: 'OS',
        iso: '896',
        location: 'Азия'
    },
    {
        id: '252',
        name: 'Южный Судан',
        fullname: '',
        english: 'South Sudan',
        alpha2: 'SS',
        iso: '728',
        location: 'Африка'
    },
    {
        id: '253',
        name: 'Ямайка',
        fullname: '',
        english: 'Jamaica',
        alpha2: 'JM',
        iso: '388',
        location: 'Америка'
    },
    {
        id: '254',
        name: 'Япония',
        fullname: '',
        english: 'Japan',
        alpha2: 'JP',
        iso: '392',
        location: 'Азия'
    }
];

export default countries;