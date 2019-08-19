import FixerKey from '../../secret/keys';

const symbols = {"success":true,"symbols":{"AED":"United Arab Emirates Dirham","AFN":"Afghan Afghani","ALL":"Albanian Lek","AMD":"Armenian Dram","ANG":"Netherlands Antillean Guilder","AOA":"Angolan Kwanza","ARS":"Argentine Peso","AUD":"Australian Dollar","AWG":"Aruban Florin","AZN":"Azerbaijani Manat","BAM":"Bosnia-Herzegovina Convertible Mark","BBD":"Barbadian Dollar","BDT":"Bangladeshi Taka","BGN":"Bulgarian Lev","BHD":"Bahraini Dinar","BIF":"Burundian Franc","BMD":"Bermudan Dollar","BND":"Brunei Dollar","BOB":"Bolivian Boliviano","BRL":"Brazilian Real","BSD":"Bahamian Dollar","BTC":"Bitcoin","BTN":"Bhutanese Ngultrum","BWP":"Botswanan Pula","BYN":"New Belarusian Ruble","BYR":"Belarusian Ruble","BZD":"Belize Dollar","CAD":"Canadian Dollar","CDF":"Congolese Franc","CHF":"Swiss Franc","CLF":"Chilean Unit of Account (UF)","CLP":"Chilean Peso","CNY":"Chinese Yuan","COP":"Colombian Peso","CRC":"Costa Rican Col\u00f3n","CUC":"Cuban Convertible Peso","CUP":"Cuban Peso","CVE":"Cape Verdean Escudo","CZK":"Czech Republic Koruna","DJF":"Djiboutian Franc","DKK":"Danish Krone","DOP":"Dominican Peso","DZD":"Algerian Dinar","EGP":"Egyptian Pound","ERN":"Eritrean Nakfa","ETB":"Ethiopian Birr","EUR":"Euro","FJD":"Fijian Dollar","FKP":"Falkland Islands Pound","GBP":"British Pound Sterling","GEL":"Georgian Lari","GGP":"Guernsey Pound","GHS":"Ghanaian Cedi","GIP":"Gibraltar Pound","GMD":"Gambian Dalasi","GNF":"Guinean Franc","GTQ":"Guatemalan Quetzal","GYD":"Guyanaese Dollar","HKD":"Hong Kong Dollar","HNL":"Honduran Lempira","HRK":"Croatian Kuna","HTG":"Haitian Gourde","HUF":"Hungarian Forint","IDR":"Indonesian Rupiah","ILS":"Israeli New Sheqel","IMP":"Manx pound","INR":"Indian Rupee","IQD":"Iraqi Dinar","IRR":"Iranian Rial","ISK":"Icelandic Kr\u00f3na","JEP":"Jersey Pound","JMD":"Jamaican Dollar","JOD":"Jordanian Dinar","JPY":"Japanese Yen","KES":"Kenyan Shilling","KGS":"Kyrgystani Som","KHR":"Cambodian Riel","KMF":"Comorian Franc","KPW":"North Korean Won","KRW":"South Korean Won","KWD":"Kuwaiti Dinar","KYD":"Cayman Islands Dollar","KZT":"Kazakhstani Tenge","LAK":"Laotian Kip","LBP":"Lebanese Pound","LKR":"Sri Lankan Rupee","LRD":"Liberian Dollar","LSL":"Lesotho Loti","LTL":"Lithuanian Litas","LVL":"Latvian Lats","LYD":"Libyan Dinar","MAD":"Moroccan Dirham","MDL":"Moldovan Leu","MGA":"Malagasy Ariary","MKD":"Macedonian Denar","MMK":"Myanma Kyat","MNT":"Mongolian Tugrik","MOP":"Macanese Pataca","MRO":"Mauritanian Ouguiya","MUR":"Mauritian Rupee","MVR":"Maldivian Rufiyaa","MWK":"Malawian Kwacha","MXN":"Mexican Peso","MYR":"Malaysian Ringgit","MZN":"Mozambican Metical","NAD":"Namibian Dollar","NGN":"Nigerian Naira","NIO":"Nicaraguan C\u00f3rdoba","NOK":"Norwegian Krone","NPR":"Nepalese Rupee","NZD":"New Zealand Dollar","OMR":"Omani Rial","PAB":"Panamanian Balboa","PEN":"Peruvian Nuevo Sol","PGK":"Papua New Guinean Kina","PHP":"Philippine Peso","PKR":"Pakistani Rupee","PLN":"Polish Zloty","PYG":"Paraguayan Guarani","QAR":"Qatari Rial","RON":"Romanian Leu","RSD":"Serbian Dinar","RUB":"Russian Ruble","RWF":"Rwandan Franc","SAR":"Saudi Riyal","SBD":"Solomon Islands Dollar","SCR":"Seychellois Rupee","SDG":"Sudanese Pound","SEK":"Swedish Krona","SGD":"Singapore Dollar","SHP":"Saint Helena Pound","SLL":"Sierra Leonean Leone","SOS":"Somali Shilling","SRD":"Surinamese Dollar","STD":"S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra","SVC":"Salvadoran Col\u00f3n","SYP":"Syrian Pound","SZL":"Swazi Lilangeni","THB":"Thai Baht","TJS":"Tajikistani Somoni","TMT":"Turkmenistani Manat","TND":"Tunisian Dinar","TOP":"Tongan Pa\u02bbanga","TRY":"Turkish Lira","TTD":"Trinidad and Tobago Dollar","TWD":"New Taiwan Dollar","TZS":"Tanzanian Shilling","UAH":"Ukrainian Hryvnia","UGX":"Ugandan Shilling","USD":"United States Dollar","UYU":"Uruguayan Peso","UZS":"Uzbekistan Som","VEF":"Venezuelan Bol\u00edvar Fuerte","VND":"Vietnamese Dong","VUV":"Vanuatu Vatu","WST":"Samoan Tala","XAF":"CFA Franc BEAC","XAG":"Silver (troy ounce)","XAU":"Gold (troy ounce)","XCD":"East Caribbean Dollar","XDR":"Special Drawing Rights","XOF":"CFA Franc BCEAO","XPF":"CFP Franc","YER":"Yemeni Rial","ZAR":"South African Rand","ZMK":"Zambian Kwacha (pre-2013)","ZMW":"Zambian Kwacha","ZWL":"Zimbabwean Dollar"}}
const rates = {"success":true,"timestamp":1566225066,"base":"EUR","date":"2019-08-19","rates":{"AED":4.077041,"AFN":86.977794,"ALL":121.070803,"AMD":528.225333,"ANG":1.980943,"AOA":401.813132,"ARS":60.869537,"AUD":1.637975,"AWG":1.997869,"AZN":1.892474,"BAM":1.954526,"BBD":2.240721,"BDT":93.755626,"BGN":1.955803,"BHD":0.418426,"BIF":2046.373109,"BMD":1.109927,"BND":1.498842,"BOB":7.663993,"BRL":4.480001,"BSD":1.109039,"BTC":0.000103,"BTN":76.48965,"BWP":12.310763,"BYN":2.286562,"BYR":21754.57663,"BZD":2.236946,"CAD":1.474383,"CDF":1848.028488,"CHF":1.088256,"CLF":0.028647,"CLP":790.45144,"CNY":7.82521,"COP":3805.940983,"CRC":630.732869,"CUC":1.109927,"CUP":29.413076,"CVE":110.270734,"CZK":25.770303,"DJF":197.256146,"DKK":7.458378,"DOP":56.789395,"DZD":133.119168,"EGP":18.454876,"ERN":16.649336,"ETB":32.410999,"EUR":1,"FJD":2.412432,"FKP":0.91559,"GBP":0.91559,"GEL":3.246577,"GGP":0.915689,"GHS":6.017254,"GIP":0.915546,"GMD":55.612937,"GNF":10197.84662,"GTQ":8.523023,"GYD":231.625189,"HKD":8.707162,"HNL":27.186575,"HRK":7.387347,"HTG":105.7622,"HUF":326.280889,"IDR":15819.628445,"ILS":3.910161,"IMP":0.915689,"INR":79.383076,"IQD":1324.19886,"IRR":46733.492442,"ISK":138.11938,"JEP":0.915689,"JMD":148.985214,"JOD":0.786936,"JPY":118.217238,"KES":114.666962,"KGS":77.455063,"KHR":4532.333001,"KMF":487.979381,"KPW":999.0012,"KRW":1343.145066,"KWD":0.337752,"KYD":0.92483,"KZT":429.586465,"LAK":9669.460835,"LBP":1676.933544,"LKR":196.945004,"LRD":225.314779,"LSL":16.926875,"LTL":3.277327,"LVL":0.671384,"LYD":1.563219,"MAD":10.660686,"MDL":19.617953,"MGA":4099.128226,"MKD":61.49386,"MMK":1691.304826,"MNT":2961.755988,"MOP":8.966715,"MRO":396.244101,"MUR":40.011216,"MVR":17.204175,"MWK":809.031623,"MXN":22.030771,"MYR":4.632505,"MZN":67.233901,"NAD":16.926291,"NGN":403.758088,"NIO":37.204957,"NOK":9.957103,"NPR":126.742413,"NZD":1.728534,"OMR":0.426822,"PAB":1.109095,"PEN":3.751669,"PGK":3.770753,"PHP":58.093765,"PKR":177.538462,"PLN":4.371172,"PYG":6790.369388,"QAR":4.041241,"RON":4.7304,"RSD":117.718974,"RUB":74.206402,"RWF":1019.44055,"SAR":4.163784,"SBD":9.125155,"SCR":15.166604,"SDG":50.073285,"SEK":10.72456,"SGD":1.537224,"SHP":1.466107,"SLL":10322.324485,"SOS":643.75787,"SRD":8.277855,"STD":23930.911136,"SVC":9.710921,"SYP":571.612631,"SZL":17.040701,"THB":34.24129,"TJS":10.467226,"TMT":3.884746,"TND":3.187268,"TOP":2.566928,"TRY":6.275269,"TTD":7.520258,"TWD":34.805069,"TZS":2551.384521,"UAH":27.954621,"UGX":4099.128164,"USD":1.109927,"UYU":40.176774,"UZS":10156.272355,"VEF":11.085404,"VND":25753.589481,"VUV":130.476189,"WST":2.956714,"XAF":655.412806,"XAG":0.065315,"XAU":0.000739,"XCD":2.999634,"XDR":0.809206,"XOF":655.533927,"XPF":119.162105,"YER":277.870484,"ZAR":17.117746,"ZMK":9990.678289,"ZMW":14.523371,"ZWL":357.396617}}
const historicRates = {"success":true,"timestamp":1563667199,"historical":true,"base":"EUR","date":"2019-07-20","rates":{"USD":1.1277}};

const buildURI = (obj) => {
  let uri = '';

  Object.keys(obj).forEach((key) => {
    if (key === 'endpoint') {
      uri = `http://data.fixer.io/api/${obj[key]}?access_key=${FixerKey}`;
    } else {
      uri += `&${key}=${obj[key]}`;
    }
  });

  return uri;
};

const FetchFixer = (uriParams, cbSucces, cbError) => {
  const uri = buildURI(uriParams);
  
  if (uriParams.endpoint === 'symbols') {
    return Promise.resolve(symbols).then(data => cbSucces(data));
  };

  if (uriParams.endpoint === 'latest') {
    return Promise.resolve(rates).then(data => cbSucces(data));
  };

  if (uriParams.endpoint === '2019-07-20') {
    return Promise.resolve(historicRates).then(data => cbSucces(data));
  };

  // return new Promise((resolve, reject) => {
  //   fetch(uri, { method: 'get' })
  //   .then(res => res.json())
  //   .then((data) => {
  //     // console.log(data);
  //     if (!data.success) {
  //       cbError(data.error);
  //       return;
  //     }
  //     resolve(data);
  //     cbSucces(data);
  //   })
  //   .catch(error => reject(error));
  // });
};

export default FetchFixer;
