const affixes = [
  {
    _id: "650ec530779cb2a77d91de5a",
    name: "ex+",
  },
  {
    _id: "5ff05f0dec33d6674335e41f",
    name: "+āt",
    description:
      "%bAr müdevver ta ile yapılan dişil adlarda kullanılan çoğul ekidir. Türkçede bazen eril Arapça sözcüklere (maruzat, vb.), hatta Arapça olmayan sözcüklere (erat, gidişat) eklenmiştir.",
    language: {
      _id: "5fef82841678a972d94724ae",
    },
    timeCreated: "2021-01-02T11:54:38.664Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 3,
  },
  {
    _id: "5ff05f0dec33d6674335e4b9",
    name: "+an",
    description:
      "%bAr zarf eki. Elif üzerine tenvinli esre ile yazılır. Türkçede çoğu zaman uzun ā şeklinde okunur. %imeselā, %iadetā, %ifarazā.",
    language: {
      _id: "5fef82841678a972d94724ae",
    },
    timeCreated: "2021-01-02T11:54:47.277Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 191,
  },
  {
    _id: "5ff05f0dec33d6674335e4ba",
    name: "+ī",
    description:
      "%bAr ve %bFa nisbet eki. Dişil sözcüklerde doğrudan gövdeye eklenir (%ihicret > %ihicrī). Son radikali ya veya vav olan sözcüklerde +awī biçimini alır (%iAli > %iAlawī, %iMusa > %iMusawī). Dişil hali +īya(t) olup, bu ekle yapılan dişil nisbet sıfatları geç devir Osmanlı Türkçesinde sıklıkla bağımsız ad yapımında kullanılmıştır (%ibahriye, %idahiliye, %ituhafiye).",
    language: {
      _id: "5fef82841678a972d94724ae",
    },
    timeCreated: "2021-01-02T11:54:47.332Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 192,
  },
  {
    _id: "5ff05f0dec33d6674335e4bd",
    name: "+ayn",
    description: "%bAr tesniye (dual, ikil) eki. Bir çift nesne bildirir.",
    language: {
      _id: "5fef82841678a972d94724ae",
    },
    timeCreated: "2021-01-02T11:54:47.508Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 197,
  },
  {
    _id: "5ff05f0dec33d6674335e509",
    name: "+īya(t)2",
    description:
      "%bAr ve %bFa nisbet eki. Dişil sözcüklerde doğrudan gövdeye eklenir (%ihicret > %ihicrī). Son radikali ya veya vav olan sözcüklerde +awī biçimini alır (%iAli > %iAlawī, %iMusa > %iMusawī). Dişil hali +īya(t) olup, bu ekle yapılan dişil nisbet sıfatları geç devir Osmanlı Türkçesinde sıklıkla bağımsız ad yapımında kullanılmıştır (%ibahriye, %idahiliye, %ituhafiye).",
    language: {
      _id: "5fef82841678a972d94724ae",
    },
    timeCreated: "2021-01-02T11:54:51.716Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 275,
  },
  {
    _id: "5ff05f0dec33d6674335e50a",
    name: "+īya(t)1",
    description:
      '%bAr +ī ekiyle yapılan nisbet sıfatının dişili, özellikle geç Osmanlı döneminde kolektif adlar (narenciye, kırtasiye) ve kurum ve disiplin adları (hariciye, dahiliye, intaniye) yapımında kullanılmıştır. Birkaç örnekte "bir tür iş için harcanan para veya malzeme" anlamı görülür (ardiye, hammaliye). Final t sesi Türkçede düşürülür, ancak masdar işlevine sahip türevlerde korunur. Karş. +īya(t)2 eki.',
    language: {
      _id: "5fef82841678a972d94724ae",
    },
    timeCreated: "2021-01-02T11:54:51.770Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 277,
  },
  {
    _id: "5ff05f0dec33d6674335e50b",
    name: "+īyāt",
    description:
      "%bAr +ī ekiyle yapılan nisbet sıfatının dişil çoğulu, ilmi ve fikri disiplin ifade eden kolektif adlar inşa etmekte kullanılmıştır.  ",
    language: {
      _id: "5fef82841678a972d94724ae",
    },
    timeCreated: "2021-01-02T11:54:51.825Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 278,
  },
  {
    _id: "614835ec91869e57a9822bc3",
    name: "+ūn",
    description: "",
    language: {
      _id: "5fef82841678a972d94724ae",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "631641adad79e3a4e4742397",
    name: "mā+",
    language: {
      _id: "5fef82841678a972d94724ae",
    },
    description: '"Ne" anlamında soru edatıdır. ',
    timeCreated: "2022-09-05T18:36:29.881Z",
    timeUpdated: "2022-09-05T18:36:29.881Z",
  },
  {
    _id: "6147edd391869e57a9822b82",
    name: "ā+",
    description: "",
    language: {
      _id: "5fef82841678a972d94724b1",
    },
    timeCreated: "2021-09-19T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "6147f3c491869e57a9822b89",
    name: "apa+",
    description: "",
    language: {
      _id: "5fef82841678a972d94724b1",
    },
    timeCreated: "2021-09-19T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "6147f45691869e57a9822b8c",
    name: "avi+",
    description: "",
    language: {
      _id: "5fef82841678a972d94724b1",
    },
    timeCreated: "2021-09-19T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "6148157291869e57a9822b90",
    name: "ham+",
    description: "",
    language: {
      _id: "5fef82841678a972d94724b1",
    },
    timeCreated: "2021-09-19T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "6148209491869e57a9822b93",
    name: "paiti+",
    description: "",
    language: {
      _id: "5fef82841678a972d94724b1",
    },
    timeCreated: "2021-09-19T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "614824ad91869e57a9822b9a",
    name: "a+",
    description: "",
    language: {
      _id: "5fef82841678a972d94724b1",
    },
    timeCreated: "2021-09-19T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "5ff05f0dec33d6674335e4bb",
    name: "+ing",
    description:
      "%bİng fiilden eylem adı üretir. Germen dillerinde soy ve topluluk adları inşa eden +ing ekinin İngilizcede özel anlam kazanmış biçimidir (karş. king, faşing).",
    language: {
      _id: "5fef82851678a972d94724c3",
    },
    timeCreated: "2021-01-02T11:54:47.396Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 195,
  },
  {
    _id: "5ff05f0dec33d6674335e4d8",
    name: "+er",
    description:
      "%bİng fiilden fail adı üretir. %bLat +arius ve +ator fail eklerinin Fransızcada aldığı +ier/+ière biçiminden İngilizceye aktarılmıştır.",
    language: {
      _id: "5fef82851678a972d94724c3",
    },
    timeCreated: "2021-01-02T11:54:49.004Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 226,
  },
  {
    _id: "5ff05f0dec33d6674335e4eb",
    name: "+less",
    description:
      "%bİng adlarda yokluk bildirir. Türkçeye 1980’lerden önce alınan örneklerde +les, sonrakilerde +less yazılır. ● %bAlm +los biçimi Türkçede tek örnekte görülür.",
    language: {
      _id: "5fef82851678a972d94724c3",
    },
    timeCreated: "2021-01-02T11:54:50.051Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 245,
  },
  {
    _id: "6148247491869e57a9822b99",
    name: "un+",
    description: "",
    language: {
      _id: "5fef82851678a972d94724c3",
    },
    timeCreated: "2021-09-19T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "5ff05f0dec33d6674335e4e0",
    name: "+in°2",
    description:
      "%bİt küçültme eki +ino/+ina muhtemelen %bLat sıfat yapım eki olan +inus/+ina’dan evrilmiştir. %bTü bazı örnekler Fransızcalaştırılmış biçimden adapte edilmiştir.",
    language: {
      _id: "5fef82861678a972d94724c8",
    },
    timeCreated: "2021-01-02T11:54:49.444Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 234,
  },
  {
    _id: "5ff05f0dec33d6674335e48e",
    name: "+et°",
    description:
      "Romans dillerinde küçültme ekidir. Halk Latincesinden %bFr eril +et ve dişil +ette, %bİt +ett°, %bVen ve %bİsp +et° biçimlerine evrilmiştir. İngilizcede Fransız kökenli sözcüklerden analoji yoluyla birkaç türev üretmiştir (nugget, socket). Ender olarak fiillerden nesne adı yapar (etiket, puset). ● İtalyancadan Türkçeye direkt alıntılarda +ete veya +eta, fakat diğer diller üzerinden alıntılarda +etto görülür.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:44.886Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 143,
  },
  {
    _id: "5ff05f0dec33d6674335e490",
    name: "+(t)or",
    description:
      "%bLat %i+or eki %i+(t)° perfekt ekiyle birlikte kullanıldığında fiilden fail adı üretir (%iagere-actor, %imouere-motor). Fiilin şimdiki zaman köküne eklendiğinde nitelik ve durum bildiren eylem adı üretir (%ivalere-valor, %ierrare-error). Bunun örnekleri için %i+or maddesine bakınız. ● Fransızcada %i+teur (/tör/) biçimini alır. İngilizcede +tor tercih edilir. Türkçede eskiden %i+tör ile yazılan bazı alıntılar, İngilizce etkisiyle %i+tor şekline dönme eğilimi gösterirler (%imotör &gt; %imotor).",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:45.006Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 145,
  },
  {
    _id: "5ff05f0dec33d6674335e491",
    name: "+ment°",
    description:
      "Fiilden soyut eylem adı yapan %bYun %i+ma(t)° ekinin Latince eşdeğeridir. Fransızca, İngilizce ve Almancada %i+ment yazılır fakat ilkinde /maŋ/, diğer ikisinde /ment/ telaffuz edilir (eleman, segman < %bFr fakat element < %bAlm, segment < %bİng). %bİt %i+mento biçimi kullanılır.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:45.061Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 146,
  },
  {
    _id: "5ff05f0dec33d6674335e494",
    name: "+ul°",
    description:
      "%bLat küçültme eki. %bLat +ul° (%imodulus, %icellula, %icapitulum), +icul° (%iarticulus, %ipeniculus) ve +ell° (%icalamella, %ipisellum) şeklinde görülen ek, a) adların küçük veya sevimli halini, b) soyut bir fikrin somut örneğini ifade eder. Latince kökü mevcut olmayan bazı örnekler Hintavrupa anadiline (%inebula “bulut”, %iregula “cetvel”, %ioculus “göz”) veya kaynağı meçhul alıntılara (%itabula “masa”, %iinsula “ada”) dayanır. Modern Avrupa dillerinde üretken değildir.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:45.227Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 212,
  },
  {
    _id: "5ff05f0dec33d6674335e496",
    name: "+ent°",
    description:
      "%bLat fiilin praesens kökünden fail adı üretir. Fiil gövdesi a ile biten tematik fiillerde +ans, +ant-, diğer hallerde +ens, +ent- biçimini alır. Fransızcada eril +ant ve +ent yazılır, her iki halde /aŋ/ telaffuz edilir. Türkçeye Fransızcadan alınan örneklerde genellikle +an (ancak %bFr dişil sözcüklerde +ant ve +ent), İngilizce ve Almancadan alınan örneklerde +ant ve +ent, İtalyancadan alınan örneklerde +ente kullanılır.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:45.336Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 153,
  },
  {
    _id: "5ff05f0dec33d6674335e499",
    name: "ad+",
    description:
      "%bLat bir şeye yönelme veya katılma bildiren edat ve fiil öneki. Ünlülerden önce ad+ şeklini alır; ünsüzlere asimile edilir ( %iaf-fixus, %iag-gressus, %iac-centus, %iap-pendere, %ias-similare). ● İtalyanca ve Fransızcada işlektir; %bİt %ia, %bFr %ià biçimini alır. * %bHAvr %i*ad yönelme edatından evrilmiştir. %bİng %iat ve %ito, %bAlm %izu, %bFa %iā+ eşdeğeridir.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:45.511Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 158,
  },
  {
    _id: "5ff05f0dec33d6674335e49b",
    name: "ab+",
    description:
      "%bLat (bir şeyden veya yerden) ayrılma, uzaklaşma, sapma, bozulma bildiren edat ve fiil öneki. /p/, /t/, /k/ önseslerinden önce %iabs+ biçimini alır (ör: %iabs-tractus ). ● %bHAvr %i*apo- ayrılma edatından evrilmiştir. %bEYun %iapó, %bİng %iof ve %ioff, %bAlm %iauf; %bSans %iápa-, %bAve %iapa- eşdeğerdir.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:45.620Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 161,
  },
  {
    _id: "5ff05f0dec33d6674335e49e",
    name: "con+",
    description:
      "%bLat işteşlik, karşılıklılık, bir beraber ve eşit olma, yerle bir olma, sıkışma ve yığışma bildiren edat ve fiil öneki. Anlam alanı %bTü %i+Iş- işteşlik ekiyle örtüşür. Ünlülerden önce %ico+ biçimini alır (%ico-itus) . /l/, /m/, /r/ önseslerine asimile edilir (%icol-ligere, %icor-rectus). Dudak ünsüzlerinden önce %icom+ biçimini alır (%icom-bustus). ● Türkçeye Yunanca üzerinden alınan en erken örneklerde %igü+ (%igümrük, %igüverte), İtalyancadan alınan bazı erken örneklerde %iku+ (%ikumanya, %ikumandan, %ikumpanya) görülür.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:45.786Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 164,
  },
  {
    _id: "5ff05f0dec33d6674335e4a4",
    name: "in+1",
    description:
      "%bLat bir yerde veya bir şeyin içinde olma, içe yönelme bildiren edat ve fiil öneki. /l/, /m/, /n/, /r/ ön seslerinden önce asimile edilir (%iil-luminare, %iir-ritare); dudak sessizlerinden önce %iim+ biçimini alır (%iim-battere). Bazı %bFr türevlerde %ien+ ve em+ biçimleri kullanılır. Türkçeye Fransızcadan alınmış örneklerde %iin+ yerine %ien+ (%iinstrument >%ienstrüman) ve %ien+ yerine %ian+ (%ienquête > %ianket) yazılır. * %bHAvr içeri ve aşağı hareket bildiren %i*en- edatından evrilmiştir. %bYun %ien, %bİng %iin, %bAlm %iin ve %iein eşdeğeridir.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:46.112Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 170,
  },
  {
    _id: "5ff05f0dec33d6674335e4a5",
    name: "in+2",
    description:
      "%bLat olumsuzluk ve yoksunluk öneki. /l/, /m/, /r/ önseslerine asimile edilir  (%iir-rationalis). Dudak sessizlerinden önce im+ biçimini alır (%iim-potentia). Türkçeye Fransızcadan alınan örneklerde en+ ve em+ telaffuzu ve yazımı tercih edilir (%iindirecte > %iendirekt). Ancak yakın dönemde İngilizce etkisiyle oluşan örneklerde in+ ve im+ görülür (%iimmün, %iindividüel). ● %bHAvr %*ne olumsuzluk edatının sıfır basamağından evrilmiştir. %bYun %ian-, %bGer %iun+ ve %bFa %ina+ eşdeğeridir.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:46.166Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 171,
  },
  {
    _id: "5ff05f0dec33d6674335e4a8",
    name: "prae+",
    description:
      'Öne yönelme, önde veya önce olma bildiren edat ve fiil öneki. %bFr %ipré ve %bİng %ipre-/prae- biçimlerini alır. Fransızca ve İngilizce önek modern dönemde sadece "önce" anlamında üretkendir. %bHAvr %i*prei- biçimi, %i*per (ön) kökünün sıfır basamağından +ei ekiyle türemiştir. %bLat %iper ve %ipro, %bYun %ipró, %ipara ve %iperi, %bİng %ifor ve %ifore, %bAlm %ivor, %bFa %ifer+ ve %iper+ edatları eş kökenlidir.',
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:46.334Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 174,
  },
  {
    _id: "5ff05f0dec33d6674335e4aa",
    name: "pro+1",
    description:
      "%bLat önde ve ileride olma, öne yönelme, bir şeyin lehine veya uğruna olma, bir şeyin yerine geçme bildiren edat ve fiil öneki. Modern Fransızca ve İngilizcede kısmen üretkendir. %bHAvr %i*per edatının sıfırıncı basamağından +o ekiyle üretilmiştir. %bYun %ipró edatıyla eş kökenli ve kısmen eş anlamlıdır.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:46.443Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 176,
  },
  {
    _id: "5ff05f0dec33d6674335e4ae",
    name: "per+1",
    description:
      "%bLat önce olma, ileri gitme, geçme, varma, tamamlama, içinden geçip çıkma bildiren edat ve fiil öneki. Latinceden Fransızcaya halk dili vasıtasıyla gelen türevlerde %ipar biçimi görülür ( %lpardon, %lpardösü, %lparfe, %lparfüm, %lparkur vb.); edebî dil yoluyla alınan sözcüklerde %iper+ korunur ( %lperfeksiyon, %lperformans vb.) ● %bHAvr %i*per (ön, ileri) edatının devamıdır. %bLat %iprae ve %ipro, %bYun %ipró, %ipara ve %iperi, %bİng %ifor ve %ifore, %bAlm %ivor, %bFa %ifer+ ve %iper+ edatları eş kökenlidir.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:46.659Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 180,
  },
  {
    _id: "5ff05f0dec33d6674335e4b0",
    name: "re+",
    description:
      "%bLat geri gelme, geri tepme, yineleme, yansıma, yankılanma bildiren edat ve fiil öneki. Fransızca alıntılarda %ire+ veya %iré+ biçimini alır. Bunlardan ilki Türkçede genellikle %irö+ şeklinde yazılırken ikincisinde ve İngilizceden alınan biçimlerde %ire+ tercih edilir. Modern Fransızca ve İngilizcede işlektir. İngilizce türevlerde “yeniden” anlamı ağır basar.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:46.769Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 182,
  },
  {
    _id: "5ff05f0dec33d6674335e4b1",
    name: "sub+",
    description:
      "%bLat altta veya aşağıda olma, aşağıya inme bildiren edat ve fiil öneki. Önseste /p/, /k/ seslerinden önce assimile edilir ( %isuc-cedere, %isup-positus). Fransızcaya halk dilinden aktarılan Latince sözcüklerde ve Fransızca yeni türevlerde %isou+ şeklini alır. ● %bHAvr %i*supo edatından evrilmiştir. %bEYun %ihypo+, %bAve %iupa+, %bSans %iúpa, %bAlm %iob (alt, aşağı) biçimleri eş kökenli ve kısmen eş anlamlıdır.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:46.824Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 183,
  },
  {
    _id: "5ff05f0dec33d6674335e4b2",
    name: "ob+",
    description:
      "%bLat yakın veya yüz yüze veya karşı karşıya olma, direnme, zorla yapma bildiren edat ve fiil öneki. /p/ /f/ ve /k/ önsesten önce assimile edilir (%iop-positus, %ioc-cultus). %bHAvr %i*epi- edatından evrilmiştir. %bEYun %iepi- eşdeğerdir.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:46.878Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 184,
  },
  {
    _id: "5ff05f0dec33d6674335e4b6",
    name: "se+",
    description:
      "Erken Latince ayrılma, ayrı olma, yalnız olma belirten fiil öneki. Klasik dönemde üretken değildir. Muhtemelen %iswe > %ise (kendi) zamirinden evrilmiştir.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:47.115Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 188,
  },
  {
    _id: "5ff05f0dec33d6674335e4bc",
    name: "+al°",
    description:
      "İsimlerden izafet sıfatı üretir. %bFr uyarlamalarda çoğu zaman +el biçimini alır. İngilizcede daima +al kullanılır (%bFr formel, criminel, naturel; %bİng formal, criminal, natural). ● %bFr örneklerden esinlenen %bYTü +Al ekiyle Türkçe özgün türevler yaratılmıştır (finansal, sektörel).",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:47.455Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 196,
  },
  {
    _id: "5ff05f0dec33d6674335e4c8",
    name: "+(t)orium",
    description:
      "Geç devir Latincede fiilin perfekt eki %i+(t)° ile birlikte mekân adı türetmekte kullanılmıştır. Romans dillerinde doğrudan fiil köküne %i+orium eklendiği görülür (%ikulvar, %ipisuar). Fransızcada %i+oire yazılır ve /uar/ telaffuz edilir. İtalyancada %i+orio kullanılır.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:48.123Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 210,
  },
  {
    _id: "5ff05f0dec33d6674335e4c9",
    name: "+(t)rix",
    description:
      "%bLat +(t)or ekiyle yapılan fail adının dişisini verir. %bFr aktarımlarda +rice yazılır, /ris/ telaffuz edilir.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:48.177Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 211,
  },
  {
    _id: "5ff05f0dec33d6674335e4cb",
    name: "+(t)ura",
    description:
      "%bLat fiilden soyut eylem ve nesne adı üretir. Latincede hemen her zaman %i+()t° perfekt ekiyle birlikte kullanılır. Buna karşılık Romans dillerinde üretilen geç örneklerde, çoğu zaman fiil köküne doğrudan +ura eklenir (%bFr %ibordure, %igravure, %icoupure; %bİt %icondura). ● %bFr biçimler +ure yazılır ve /ür/ telaffuz edilir. Türkçeye İtalyanca ve erken Fransızca alıntılarda +ura (%inatura, %ifatura, %imanifatura), 1880-1890'lardan geç alıntılarda ise +ür kullanılır.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:48.287Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 213,
  },
  {
    _id: "5ff05f0dec33d6674335e4cc",
    name: "+(t)ion",
    description:
      "%bLat fiilden eylem, durum ve zümre adı yapan işlek bir ektir. Bellibaşlı Batı dillerinde halen üretkendir. ● Örneklerin ezici çoğunluğunda, %i+()t° perfekt eki ile birlikte %i+tion kullanılır. Fakat nadiren fiil köküne ve hatta sıfata %i+ion eklendiği görülür (%ilegere-legion, %ialluere-alluvion, %icommunis-communion). Şimdiki zaman kökü -d,-t veya -m ile sonlanan fiillerde %i+sion şeklini alır (%ividere-vision; %imittere-mission, %ipremere-pression). ● Gerek %i+tion, gerek %i+sion biçimleri Fransızcada /sion/, İngilizcede /şın/ telaffuz edilirler. ● %bTü örneklerin çoğu Fransızcadan alınmıştır. İngilizceden alıntılanan sözcüklerde de kural olarak Fransız telaffuzu kullanılır (%ikombinasyon, %iinteraksiyon, %iidentifikasyon…). İngilizce telaffuz sadece bir iki marjinal örnekte görülür.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:48.341Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 214,
  },
  {
    _id: "5ff05f0dec33d6674335e4cd",
    name: "+itas",
    description:
      "%bLat sıfatlardan soyut eylem adı üretir. Fransızcada %i+ité, İngilizcede %i+ity, Almancada %i+ität yazımları kullanılır. Türkçe kullanımda, İngilizceden alıntı olan sözcüklerde dahi Fransızca kaynaklı %i+ite tercih edilir (%ifizibilite, %ifasilite, %ikredibilite…). Türkçe eşdeğeri +lIk takısıdır.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:48.406Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 215,
  },
  {
    _id: "5ff05f0dec33d6674335e4cf",
    name: "+()t°",
    description:
      "%bLat fiilin perfekt kökü genel kural olarak şimdiki zaman (praesens) köküne eklenen %i+t° ekiyle inşa edilir. ● Masdar eki %i+are alan birinci çekim sınıfı fiillerin perfekt fiil-sıfatı eril %i+atus, dişil %i+ata, nötr %i+atum biçimindedir (%icomplicatus, %iportata, %iapparatum). Ekler Fransızcaya eril/nötr %i+é ve dişil %i+ée şeklinde aktarılırlar. Kültür dilinden aktarılan bazı örneklerde %i+at (eril) ve %i+ade (dişil) görülür. %bİt %i+ato ve %i+ata, İber dillerinde %i+ado ve %i+ada kullanılır. ● Masdar eki %i+ire alan ikinci sınıf %bLat fiiller %i+itus, %i+ita, %i+itum kullanırlar. Masdarı %i+ere şeklinde olan üçüncü sınıf fiillerde genellikle tematik ünlü yoktur (%iscribere-scriptus, %iagere-actus, %iexperiri-expertus); sözcük bir dizi fonetik bozulmaya uğrayabilir (%iire-itus).",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:48.514Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 217,
  },
  {
    _id: "5ff05f0dec33d6674335e4d0",
    name: "+(t)iv°",
    description:
      "Fiilin perfekt kökünü inşa eden %i+(t)° ekiyle birlikte nispet ve aidiyet sıfatı üretir (%inegare-negativus, %iagere-activus, %ifingere-fictivus).\nFransızcada eril sıfatta %i+if, dişil sıfatta %i+ive şeklini alır (%inégatif, %inégative). İngilizcede cinsiyet ayrımı gözetmeden %i+ive kullanılır. %bTü alıntılarda genel kural olarak %i+if tercih edilmiştir. Ancak son yıllarda İngilizcenin etkisiyle bazı sözcüklerde +iv görülmektedir (naiv, motiv, otomotiv…).",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:48.569Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 218,
  },
  {
    _id: "5ff05f0dec33d6674335e4d2",
    name: "+ari°",
    description:
      "Eril +arius biçimi Latince adlardan ve bazı fiillerden fail adı (caballarius, bancarius, proletarius), nötr +arium biçimi mekân ve araç adları (aquarium, clavarium, seminarium) üretirler. Eril ve dişil +aris, nötr +are şekilleri sıfat inşa eder (popularis, vulgaris, militaris). ● Avam dili ve Ortaçağ Latincesinde çok yaygın bir yapı birimidir. %bİt +ario, %bFr +aire ve +ier/+ière biçimleri kullanılır. İngilizceye %bFr +ier biçiminden adapte edildikten sonra bağımsız işlev kazanan +er eki ayrıca gösterildi. Lütfen +er2 maddesine bakınız. ● Aynı ek, sayılardan sıfat ve nesne adı üretir: binary, denarius, sextarius.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:48.678Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 220,
  },
  {
    _id: "5ff05f0dec33d6674335e4d3",
    name: "+do",
    description: "%bLat fiilden ad yapım ekidir.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:48.732Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 221,
  },
  {
    _id: "5ff05f0dec33d6674335e4d5",
    name: "+ell°",
    description:
      "Geç dönem ve avam Latincesinde +ellus/+ella/+ellum ve +icellus... son derece yaygın küçültme ekleridir. %bFr +elle, %bİt +ella/+ello, %bİsp +illa/+illo biçimleri kullanılır.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:48.840Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 223,
  },
  {
    _id: "5ff05f0dec33d6674335e4d6",
    name: "+end°",
    description:
      "Fiilden uygunluk ve gereklilik bildiren ad (gerundive) üretir. Türkçe karşılığı +AcAk ekidir: legendum “okuyacak şey”, referendum “başvuracak konu”. Fransızca uyarlamalarda /aŋd/ telaffuz edilir; %bLat ekler genellikle korunur.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:48.894Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 224,
  },
  {
    _id: "5ff05f0dec33d6674335e4d7",
    name: "+entia",
    description:
      "%bLat +ent° ile inşa edilen fail adından soyut eylem adı üretir. %bFr +ance ve +ence, %bİt +enza, %bİsp +encia biçimlerine evrilmiştir. İngilizce yazımda, Eski Fransızcadan alınmış +ence veya +ency biçimleri tercih edilir (%bFr %idifférance = %bİng %idifference; %bFr %ivalence = %bİng %ivalency).",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:48.950Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 225,
  },
  {
    _id: "5ff05f0dec33d6674335e4d9",
    name: "+esc-",
    description:
      "%bLat fiil ekinde “bir şeye dönüşme, +lAşmA” (to become) anlamı verir. Romans dillerinde “gibi ama tam değil, +ImsI” anlamı veren sıfatlar üretmiştir.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:49.058Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 227,
  },
  {
    _id: "5ff05f0dec33d6674335e4da",
    name: "+ia",
    description:
      "%bYun sıfattan ve fail adından soyut eylem adı üretir. Fransızcada genellikle +ie yazılır ve /i/ okunur. Türkçede genellikle bu sesletim ve Fransızcada bunun getirdiği fonetik bozulmalar benimsenmiştir (demokrat &gt; demokrasi, monark &gt; monarşi…). ● Doğrudan Yunancadan (asfalya, angarya), İtalyanca ve Almancadan (prehistorya, sepya) alınan sözcüklerde ve Fransızcadan erken alıntılarda (fantazya, komedya, tracedya) +ya görülür. %bAr üzerinden alınan sözcüklerde +ya ve +a/e biçimleri kullanılır (coğrafya, safsata, felsefe).",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:49.113Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 228,
  },
  {
    _id: "5ff05f0dec33d6674335e4db",
    name: "+ic°",
    description:
      "%bYun +ik° ekinin Latinceye adapte edilmiş biçimidir. Modern dillerde üretkendir. Daha fazla örnek için +ik° ekine bakınız.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:49.167Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 229,
  },
  {
    _id: "5ff05f0dec33d6674335e4dc",
    name: "+icul°",
    description: "%bLat küçültme ekidir. Örnekler için +ul° maddesine bakınız.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:49.221Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 230,
  },
  {
    _id: "5ff05f0dec33d6674335e4dd",
    name: "+id°",
    description:
      "%bLat fiilden benzerlik sıfatları üretir: liquere “akmak”, liquidus “akışkan”. %bFr +ide biçimini alır. Türkçe yazımda TDK’nın tesis ettiği +it standardı son yıllarda +id lehine bozulmaktadır.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:49.277Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 231,
  },
  {
    _id: "5ff05f0dec33d6674335e4de",
    name: "+im°",
    description:
      "%bLat sıfatın abartı (superlativ) ekidir: minus “küçük”, minimus “en küçük”. /k/ ve /g/ sesiyle biten köklerde +simus biçimini alır: magnus “büyük”, maximus (< mag-simus) “en büyük.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:49.332Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 232,
  },
  {
    _id: "5ff05f0dec33d6674335e4df",
    name: "+in°",
    description:
      "%bLat +inus/+ina/+inum eki adlardan aidiyet ve benzerlik sıfatları üretir. Dişil +ina biçimi, o niteliğe sahip nesne ve zümre adları yapımında kullanılmıştır.\n%bFr eril +in (/eŋ/) ve dişil +ine (/in/) biçimleri kullanılır. Türkçeye bunlar sırasıyla +en (maskülen, basen) ve +in (pisin, vitrin) olarak yansırlar. ● Dişil +ina ve %bFr +ine formu Orta çağlardan itibaren çok sayıda ticari ürün ve özellikle kumaş cinsi adı, daha yakın dönemde ise kimyasal madde adları üretmekte kullanılmıştır.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:49.386Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 233,
  },
  {
    _id: "5ff05f0dec33d6674335e4e1",
    name: "+ior",
    description:
      "%bLat komparativ ekidir. Sıfatların kıyas halini verir. Fransızcada +ieur (/iyör/) biçimini alır.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:49.500Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 235,
  },
  {
    _id: "5ff05f0dec33d6674335e4e8",
    name: "+itis",
    description:
      "Tıp Latincesinde hastalık adları, özellikle iltihaplı hastalık adları yapımında kullanılır. %bFr +ite (/it/) biçimi Türkçede benimsenmiştir.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:49.885Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 242,
  },
  {
    _id: "5ff05f0dec33d6674335e4e9",
    name: "+ium",
    description:
      "%bLat nötr eki. 1. Genellikle mensubiyet bildiren +ius ekli sıfatlardan soyut eylem adı yapar (servitium, studium, imperium), 2. bazı makam, topluluk ve yer adları inşa eder (collegium, officium, Latium, palatium), 3. %bYun +ion küçültme ekinin çevirisidir (stadium, criterium, cranium, podium). Fransızcada bu ek sessiz +e’ye dönüşür, Türkçe alıntılarda tamamen kaybolur. ● Modern dönemde, kimyacı Humphrey Davy’nin açtığı yolda, kimyasal element adları yapımında kullanılmıştır. Bunlar Türkçede +(i)yum ekini korurlar.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:49.940Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 243,
  },
  {
    _id: "5ff05f0dec33d6674335e4ec",
    name: "+men",
    description:
      "%bLat fiilden soyut eylem adları yapan arkaik bir ektir. Başka bir ekle tamamlandığında +min- şeklini alır. ● Fransızcada sessiz e ile eril +me ve dişil +mine biçimleri kullanılır. Türkçeye ilki sadece +m (rejim, salam, volüm), ikincisi +min (albümin) olarak yansır.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:50.107Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 246,
  },
  {
    _id: "5ff05f0dec33d6674335e4ee",
    name: "+on",
    description:
      "Geç dönem halk Latincesinde büyütme ekidir. Adların büyüğünü ve kabasını belirtir. %bİt %i+one biçimi üretkenlik gösterirken %bFr %i+on biçimi daha çok halk ağızları ve Güney lehçeleriyle sınırlı kalmıştır.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:50.221Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 248,
  },
  {
    _id: "5ff05f0dec33d6674335e4ef",
    name: "+os°",
    description:
      "Ad ve fiillerden, eril +osus, dişil +osa, nötr +osum şeklini alan sıfatlar üretir. %bTü +li eşdeğeridir (callosus “nasırlı”, nebulosus “bulutlu”). ● Fransızcada eril +eux, dişil +euse biçimini alır. Bu sonuncusu, orijinal işlevinden bağımsız olarak, her türlü kadın meslek adı üretiminde kullanılmıştır.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:50.275Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 249,
  },
  {
    _id: "5ff05f0dec33d6674335e4f4",
    name: "ambi+",
    description:
      "Her iki yanda, sağlı sollu olma bildiren edat ve önek. %bYun amphi+ eşdeğeridir.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:50.548Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 254,
  },
  {
    _id: "5ff05f0dec33d6674335e4f7",
    name: "de+",
    description:
      "Bir yerden veya bir şeyden ayrılma bildiren Latince edat ve fiil öneki. Bir bütünden kısım veya pay ayrılması anlamını içerir. Halk Latincesinde ve Romans dillerinde, adlardan yoksunluk ve olumsuzluk bildiren fiiller türetmekte kullanılmıştır.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:50.711Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 257,
  },
  {
    _id: "5ff05f0dec33d6674335e4f8",
    name: "dis+",
    description:
      "İkiye ayrılma bildiren %bLat fiil öneki. %bFr ve %bİng kullanımda bazen ayrışma bildiren de+ öntakısıyla birleşmiştir. Ünlülerden ve p, t, k, s ünsüzlerinden önce %idis+, f ünsüzünden önce %idif+, diğer hallerde %idī+ kullanılır.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:50.765Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 258,
  },
  {
    _id: "5ff05f0dec33d6674335e4fb",
    name: "inter+",
    description:
      "İçinde veya (iki şeyin) arasında olma bildiren edat ve fiil öneki. Latinceden Fransızcaya alınmış sözcüklerde inter+ yazılır, /eŋter/ telaffuz edilir (enternasyonal, enteresan). Fransızcada türetilmiş sözcüklerde genellikle entre+ yazılır ve /aŋtr/ telaffuz edilir (antrepo, antrikot). Türkçede genellikle Fransız telaffuzu izlenir, ancak İngilizceden alınan veya İngilizce telaffuzdan etkilenen örneklerde inter+ kullanılır.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:50.929Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 261,
  },
  {
    _id: "5ff05f0dec33d6674335e4fc",
    name: "super+",
    description:
      "%bLat edat ve önek. Üstte olma bildirir. %bFr türevlerde %isur+ kullanılır, /sür/ telaffuz edilir. %bİt türevlerde %isopra+ kullanılır.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:50.984Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 262,
  },
  {
    _id: "5ff05f0dec33d6674335e4fd",
    name: "trans+",
    description:
      "%bLat ötede olma veya karşıya geçme bildiren edat ve fiil öneki. %bOLat ve %bİt örneklerde %itra+ biçimi kullanılır.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:51.040Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 263,
  },
  {
    _id: "61481c9991869e57a9822b91",
    name: "ex+",
    description:
      "%bLat (bir şeyden veya yerden) çıkma, dışa yönelme, ayrılma bildiren edat ve fiil öneki. Ünlülerden ve /p/, /t/, /k/, /h/ önsesten önce %iex+, /f/ önsesten önce %ief+, diğer hallerde %ie+ biçimini alır. %bFr türevlerde %ié-, %bİt türevlerde ünsüzden önce %is- şeklini alır. ● %bHAvr %i*eghs- çıkma edatından evrilmiştir. %bEYun %iek, %bFa %iaz, %bSlav %iiz eşdeğeridir.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-09-19T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "614826bf91869e57a9822b9f",
    name: "+an°",
    description: "",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "6148271591869e57a9822ba0",
    name: "+an-3",
    description: "",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "614833d191869e57a9822bbc",
    name: "+or",
    description: "",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "6148348591869e57a9822bbe",
    name: "+(t)-",
    description: "",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "614834c891869e57a9822bbf",
    name: "+(t)°",
    description: "",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "6148350f91869e57a9822bc0",
    name: "+()t",
    description: "",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "6148361a91869e57a9822bc4",
    name: "+()ura",
    description: "",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "5ff05f0dec33d6674335e4ce",
    name: "+()bilis",
    description:
      "%bLat fiilden yapabilirlik bildiren sıfat üretir. Sonu +a temalı fiillerde %i+abilis, diğerlerinde genellikle %i+ibilis, bazı örneklerde sadece %i+ilis kullanılır. %bFr ve %bİng %i+able, %i+ible ve %i+ile biçimlerini alır.",
    language: {
      _id: "5fef82861678a972d94724d5",
    },
    timeCreated: "2021-01-02T11:54:48.460Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 216,
  },
  {
    _id: "5ff05f0dec33d6674335e49f",
    name: "vi+",
    description:
      'Eski İranca ayrılma, öte yanda olma, karşı karşıya olma belirten edat ve fiil öneki. Modern Farsçada tüm örnekler wi > gwi > gu evrimine uğramıştır ( %ivināth > %igunāh). Modern dilde işlek değildir; varolan türevler Orta Farsçadan devralınmıştır. ● Aynı Hintavrupa kökünden Aynı kökten %bAlm %iwider, %bİng %iwith- edatları "ayrılma, karşıt olma" bildirir ( %iwithhold, %iwithdraw, %iwithstand gibi kelimelerde).',
    language: {
      _id: "5fef82881678a972d94724eb",
    },
    timeCreated: "2021-01-02T11:54:45.840Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 165,
  },
  {
    _id: "5ff05f0dec33d6674335e4ad",
    name: "per+2",
    description:
      "%bFa bir şeyin yanında, etrafında, çevresinde olma bildiren fiil öneki. %bEFa %ipar- ve %bAve %ipairi- biçiminden evrilmiştir. Modern Farsçada işlek değildir. Mevcut örneklerin tümü Eski ve Orta Farsçadan devralınmıştır. ● %bHAvr yönelme bildiren %i*per- edatının türevidir. %bLat %iper ve %iprae, %bYun %ipró, %ipara ve %iperi, %bİng %ifor ve %ifore, %bAlm %ivor edatları eş kökenlidir.",
    language: {
      _id: "5fef82881678a972d94724eb",
    },
    timeCreated: "2021-01-02T11:54:46.605Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 179,
  },
  {
    _id: "5ff05f0dec33d6674335e4b4",
    name: "gu+",
    description:
      '%bEFA ve %bOFA %ivi- biçiminden evrilmiş %bFa önek. Ayrılma, öte yanda olma, karşı karşıya olma belirtir. Modern Farsçada işlek değildir. Varolan türevler Orta Farsçadan devralınmıştır. ● Aynı Hintavrupa kökünden Aynı kökten %bAlm %iwider, %bİng %iwith- edatları "ayrılma, karşıt olma" bildirir ( %iwithhold, %iwithdraw, %iwithstand gibi kelimelerde).',
    language: {
      _id: "5fef82881678a972d94724eb",
    },
    timeCreated: "2021-01-02T11:54:47.007Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 186,
  },
  {
    _id: "5ff05f0dec33d6674335e4b5",
    name: "fra+",
    description:
      "Eski İranca öne ve ileriye hareket bildiren fiil öneki. %bEYun %ipró ve %bLat %ipro, %bSans %iprá-, %bİng %ifore, %bAlm %ivor eşdeğeridir. Modern Farsçada genellikle %ifar- biçimini alır. Modern dilde işlek değildir.",
    language: {
      _id: "5fef82881678a972d94724eb",
    },
    timeCreated: "2021-01-02T11:54:47.061Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 187,
  },
  {
    _id: "5ff05f0dec33d6674335e4b7",
    name: "ni+",
    description:
      "Eski İranca aşağıya doğru hareket bildiren edat ve fiil öneki. Modern Farsçada üretken değildir. Varolan örnekler Orta ve Eski Farsçadan aktarılmıştır. ● %bHAvr %i*en edatının sıfır basamağından +ei- ekiyle üretilmiştir. %bSans %inítaram, %bAlm %inieder, %bİng %inether (aşağı doğru) edatlarıyla eş kökenlidir.",
    language: {
      _id: "5fef82881678a972d94724eb",
    },
    timeCreated: "2021-01-02T11:54:47.169Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 189,
  },
  {
    _id: "5ff05f0dec33d6674335e4c5",
    name: "+anda",
    description:
      "Fiilin muzari köküne eklenen +and şimdiki zaman etken fiil-sıfatı (active participle) üretir: %imānend “benzeyen”, %iχwānend “şarkı söyleyen”. +a eki sıfattan ad üretir: %iχwānende “şarkıcı”.",
    language: {
      _id: "5fef82881678a972d94724eb",
    },
    timeCreated: "2021-01-02T11:54:47.959Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 207,
  },
  {
    _id: "5ff05f0dec33d6674335e4c6",
    name: "+iş",
    description:
      "%bFa fiilden eylem adı üretir. %bTü +iş masdar ekinin anlamca eşdeğeridir: sitāyiş “övgü, övüş”, cünbiş “oynayış”, serzeniş “başa kakma”. %bOFa +işn biçiminden evrilmiştir.",
    language: {
      _id: "5fef82881678a972d94724eb",
    },
    timeCreated: "2021-01-02T11:54:48.013Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 208,
  },
  {
    _id: "5ff05f0dec33d6674335e4c7",
    name: "+a",
    description:
      "Fiilin mazi köküne eklendiğinde edilgen fiil-sıfatı (perfect/passive participle) üretir: %iāşufte “yoldan çıkmış”, %iavīze “asılmış”, bende “bağlanmış, bağlı”, %iguzīde “seçilmiş”, %inā-dīde “görülmemiş”, ser-gerde “başı dönmüş”, %itaχte “biçilmiş”, %izāde “doğmuş”, %izede “darbe yemiş”. ● Eylem adına ve sıfata eklendiğinde nesne adı üretir; nesne adına eklendiğinde “o nesneye benzer nesne” anlamı verir: %ihafta “yedili süre”, %ipāye “ayaklık”, %ipence “beşli şey, el”, %işīre “meyve sütü”, %izebāne “dil gibi şey, terazi dili”. ● Orta Farsçada bu ek %i+ag veya %i+ak şeklinde yazılır. 10. yy’dan önce Arapçaya geçmiş olan Farsça sözcüklerde genellikle +ac ve nadiren +ak (%irevāc, %ifirūzac, %ienmüzec, %ikūsac “köse”; %ibūtak “pota”, %irevāk “koridor”), Ermeniceye alınmış olan sözcüklerde +ag yazılır.",
    language: {
      _id: "5fef82881678a972d94724eb",
    },
    timeCreated: "2021-01-02T11:54:48.068Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 209,
  },
  {
    _id: "5ff05f0dec33d6674335e508",
    name: "+and",
    description:
      "Fiilin muzari köküne eklenen +and şimdiki zaman etken fiil-sıfatı (active participle) üretir: %imānend “benzeyen”, %iχwānend “şarkı söyleyen”.",
    language: {
      _id: "5fef82881678a972d94724eb",
    },
    timeCreated: "2021-01-02T11:54:51.662Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 274,
  },
  {
    _id: "5ff05f0dec33d6674335e51f",
    name: "+īn",
    description: "",
    language: {
      _id: "5fef82881678a972d94724eb",
    },
    timeCreated: "2021-01-02T11:54:52.947Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 298,
  },
  {
    _id: "6147f7cc91869e57a9822b8f",
    name: "bar+",
    description: "",
    language: {
      _id: "5fef82881678a972d94724eb",
    },
    timeCreated: "2021-09-19T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "6148204691869e57a9822b92",
    name: "nā+",
    description: "",
    language: {
      _id: "5fef82881678a972d94724eb",
    },
    timeCreated: "2021-09-19T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "6148254991869e57a9822b9c",
    name: "+ak",
    description:
      "Farsça küçültme ekidir. Eski Türkçe, Kürtçe ve Ermenicede aynı şekil ve aynı anlamda kullanılır.",
    language: {
      _id: "5fef82881678a972d94724eb",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "6148279a91869e57a9822ba1",
    name: "+ān",
    description: "",
    language: {
      _id: "5fef82881678a972d94724eb",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "614827f491869e57a9822ba2",
    name: "+ā(n)",
    description: "",
    language: {
      _id: "5fef82881678a972d94724eb",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "6148284f91869e57a9822ba3",
    name: "+ān3",
    description: "",
    language: {
      _id: "5fef82881678a972d94724eb",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 308,
  },
  {
    _id: "614828d291869e57a9822ba4",
    name: "+āne",
    description: "",
    language: {
      _id: "5fef82881678a972d94724eb",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "61482bcf91869e57a9822baa",
    name: "+ça",
    description: "",
    language: {
      _id: "5fef82881678a972d94724eb",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "61482bfd91869e57a9822bab",
    name: "+ça3",
    description: "",
    language: {
      _id: "5fef82881678a972d94724eb",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "614835a591869e57a9822bc2",
    name: "+tar",
    description: "",
    language: {
      _id: "5fef82881678a972d94724eb",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 307,
  },
  {
    _id: "5ff05f0dec33d6674335e4d1",
    name: "+age",
    description:
      "Ad ve fiilden eylem adı üretir. Halk Latincesindeki +aticum bileşik takısından, %bFr +age (/aj/), %bİt +aggio, %bİsp +aje biçimlerine evrilmiştir. %bİng örneklerin tümü Fransızcadan alınmış veya Fransızcaya benzetmek suretiyle kullanılmıştır.",
    language: {
      _id: "5fef82881678a972d94724ee",
    },
    timeCreated: "2021-01-02T11:54:48.624Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 219,
  },
  {
    _id: "5ff05f0dec33d6674335e4d4",
    name: "+é",
    description:
      "%bFr edilgen perfekt fiil sıfatı (participe passé) yapım ekidir. %bLat +a- ekli tematik fiillerin eril perfekt fiil-sıfatını inşa eden +atus/+atum biçiminden evrilmiştir. %bLat agitatus, eliminatus, passatus = %bFr agité, eliminé, passé = %bİng agitated, eliminated, past. %bTü telaffuzda +er masdar ekinden ayırt edilmez.\n%bLat +ata ekiyle yapılan dişil fiil sıfatları Fransızcada +ée yazılır fakat eril biçimden farksız telaffuz edilirler. Çoğu örnekte dişil sıfat soyut eylem adı olarak kullanılır (entrée “giriş”, assemblée “toplantı”, tournée “döngü”).",
    language: {
      _id: "5fef82881678a972d94724ee",
    },
    timeCreated: "2021-01-02T11:54:48.786Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 222,
  },
  {
    _id: "5ff05f0dec33d6674335e4e2",
    name: "+ise-",
    description:
      "%bFr ve %bİng adlardan fiil yapar. %bYun +izō fiil yapım ekinden evrilmiştir. Daha fazla örnek için +izō maddesine bakınız.",
    language: {
      _id: "5fef82881678a972d94724ee",
    },
    timeCreated: "2021-01-02T11:54:49.554Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 236,
  },
  {
    _id: "5ff05f0dec33d6674335e4e7",
    name: "+ite",
    description:
      "%bYun birkaç örnekten hareketle modern dillerde mineral adları üretmekte kullanılmıştır. Türkçede Fransızca telaffuza uygun olarak +it yazılır.",
    language: {
      _id: "5fef82881678a972d94724ee",
    },
    timeCreated: "2021-01-02T11:54:49.825Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 241,
  },
  {
    _id: "5ff05f0dec33d6674335e4f0",
    name: "+ose",
    description:
      "Kimyada şeker adları yapımında kullanılır. %bLat +osus/+osum ekinin özel işlev kazanmış biçimidir.",
    language: {
      _id: "5fef82881678a972d94724ee",
    },
    timeCreated: "2021-01-02T11:54:50.330Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 250,
  },
  {
    _id: "5ff05f0dec33d6674335e4f3",
    name: "à+",
    description:
      "Yönelme bildiren %bLat ad edatının %bFr ve %bİt biçimidir. Le/la eril ve dişil edatıyla birlikte %bFr au ve à la, %bİt al ve alla biçimlerini alır.",
    language: {
      _id: "5fef82881678a972d94724ee",
    },
    timeCreated: "2021-01-02T11:54:50.493Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 253,
  },
  {
    _id: "6148233f91869e57a9822b95",
    name: "pre+",
    description: "",
    language: {
      _id: "5fef82881678a972d94724ee",
    },
    timeCreated: "2021-09-19T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "6148238591869e57a9822b96",
    name: "ültra+",
    description: "",
    language: {
      _id: "5fef82881678a972d94724ee",
    },
    timeCreated: "2021-09-19T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "614823b791869e57a9822b97",
    name: "po+",
    description: "",
    language: {
      _id: "5fef82891678a972d9472501",
    },
    timeCreated: "2021-09-19T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "5ff05f0dec33d6674335e48f",
    name: "+ik°",
    description:
      "%bYun ad ve fiillerden izafet sıfatı üretir. Klasik dönem Latincesinde +ic- şeklinde benimsenmiş ve üretken olmuştur. %bFr +ique, %bİng +ic ve %bAlm +isch biçimlerinde halen üretkendir. Aynı ekin dişil +ikē ve nötr çoğul +ika biçimleri soyut etkinlik ve meslek adları üretirler (%imathēmatikē, %iphysikē/physika, %idialektikē, %imousikē). Bu türevler için %bFr +ique, %bİng +ics (%imathematics, %iphysics, %idialectics, fakat %imusic), %bAlm +ik biçimleri kullanılır. %bYun ek +icus, +ica, +icum biçiminde Latincede benimsenmiş ve sıklıkla kullanılmıştır (%iclassicus, %ifanaticus, %irusticus). Modern Batı dillerinde halen üretken olup, Yunanca ve Latince dışındaki köklerde de kullanılmaktadır (%igotik, %isosyetik).",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:44.951Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 144,
  },
  {
    _id: "5ff05f0dec33d6674335e492",
    name: "+tēr",
    description:
      "%bYun +tēr ve cins ekleriyle +tros, +tra, +tron biçimlerinde fiilden alet adı (%icharaktēr, %imétron, %ipsaltēr), meslek adı (%iiátros) ve mekân adı (%ikylistra, %ithéatron) üretir. %bHAvr +tēr ve +tro- yapım ekinin refleksidir. Yunancada kökü mevcut olmayan bazı türevlerin Hintavrupa Anadilinden miras olduğu varsayılabilir (%iastēr, %igastēr, %imétron).",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:45.117Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 147,
  },
  {
    _id: "5ff05f0dec33d6674335e493",
    name: "+ma(t)°",
    description:
      "%bYun fiilden eylem adı üretir. Nominatif +ma, ancak herhangi bir takı aldığı zaman +mat- biçimini alır (%idogma > %idogmat-, %iaksioma > %iaksiomat-, %idema > %idemat-). Hintavrupa Anadilindeki -mn̥- ekinin refleksidir. Fiil kökü Yunancada mevcut olmayan bazı türevlerin Pre-Yunancadan veya Hintavrupa Anadilinden kalıntı oldukları varsayılabilir (Örnek: %ionýma “isim”, %isēma “işaret”, %ihaíma “kan”, %ikóma “uyku”, %isōma “gövde”).",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:45.172Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 149,
  },
  {
    _id: "5ff05f0dec33d6674335e495",
    name: "+sis",
    description:
      "%bYun fiilden eylem adı yapar. %bFr alıntılarda +se şeklini alır; sert sessizi izleyen hallerde /s/, aksi halde /z/ telaffuz edilir: %bYun %isynthésis > %bFr %isynthèse > %bTü %isentez, %bYun %ibásis > %bFr %ibase > %bTü %ibaz; fakat %bYun %iellípsis > %bFr %iellipse > %bTü %ielips. İngilizceden alıntılarda +sis biçimi korunur: %imimesis, %ipraksis, %isinopsis. ● %i+sis ekli sözcüğe başka bir takı eklendiğinde +is düşer ve s sesi t’ye dönüşür (%ianalysis-analitik, %iellipsis-eliptik, %imimesis-mimetik, %iparenthesis-parantetik). Ancak gövdesi tek heceli olan sözcüklerde bu kural bazen uygulanmaz (%ibaz, %idoz, %ipoz…).",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:45.280Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 151,
  },
  {
    _id: "5ff05f0dec33d6674335e497",
    name: "+arion",
    description:
      "%bYun küçültme ekidir. Geç klasik dönemde ve Bizans Yunancasında çok sık kullanılır. Fiilden, sıfattan ve soyut kavramdan somut nesne ve nümune adı üretir. Kullanımda +on hecesi genellikle düşürülür. Çoğulu +aria şeklini alır.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:45.403Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 154,
  },
  {
    _id: "5ff05f0dec33d6674335e498",
    name: "+ion",
    description:
      "%bEYun küçültme ekidir. Fiilden, sıfattan ve soyut kavramdan somut nesne ve nümune adı üretir. %bTü +çA ekine tekabül eder. ● Türkçe sesletimde +ion eki çoğu örnekte tamamen kaybolur. Bazı örneklerde +ia ve +akia çoğul biçimi kullanılır (mydion > çoğ. mydia > %bTr midya > midye).",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:45.457Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 155,
  },
  {
    _id: "5ff05f0dec33d6674335e49a",
    name: "a(n)+",
    description:
      "%bYun olumsuzluk ve yoksunluk öneki. Ünsüzlerden önce %ia+, ünlülerden önce %ian+ biçimini alır (%ia-morphós, %ian-arχaía). ● %bHAvr %i*ne olumsuzluk edatının sıfır basamağından evrilmiştir. %bLat %iin+, %bGer %iun+, %bFa %inā+, %bErm %ian+, %bSlav %ine+ eşdeğeridir.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:45.566Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 160,
  },
  {
    _id: "5ff05f0dec33d6674335e49c",
    name: "ana+",
    description: "Yukarı veya eskiye yönelme bildiren %bEYun edat ve önek.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:45.674Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 162,
  },
  {
    _id: "5ff05f0dec33d6674335e49d",
    name: "apo+",
    description:
      "%bYun (bir şeyden veya yerden) ayrılma, uzaklaşma ve kapatma bildiren edat ve fiil öneki. Ünlüden önce %iap+, pneuma'dan önce %iaph+ (/af/) biçimini alır (%iapo-hóros > %iaphóros). ● %bHAvr %i*apo- ayrılma edatından evrilmiştir. %bLat %iab, %bİng %iof, %ioff, %bAlm %iauf; %bSans %iápa-, %bAve %iapa-  eşdeğerdir. %bİng %iafter edatı bunun bileşik halidir.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:45.732Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 163,
  },
  {
    _id: "5ff05f0dec33d6674335e4a0",
    name: "dia+",
    description:
      "%bYun iki ayrı yöne gitme, ikiye bölünme, çapraz olma, aykırı olma, bir şeyi bir yandan öbürüne katetme bildiren edat ve fiil öneki. %bEYun %idyó, %idi- (iki) sayı sıfatının özel işlev kazanmış halidir. Anlam bakımından %bİng %ithrough, %bAlm %idurch, %bFr %ipar eşdeğeridir.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:45.894Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 166,
  },
  {
    _id: "5ff05f0dec33d6674335e4a1",
    name: "eis+",
    description:
      "%bYun bir yerde veya bir şeyin içinde olma, içine girme, içe yönelme bildiren edat ve fiil öneki. /p/, /t/, /k/ seslerinden önce ünlüsünü kaybederek %is+ halini alır. %bLat %iin, %bİng %iin ve %bAlm %iein eşdeğeridir.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:45.950Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 167,
  },
  {
    _id: "5ff05f0dec33d6674335e4a2",
    name: "ek+",
    description:
      "%bYun (bir şeyden veya yerden) çıkma, dışa yönelme, ayrılma bildiren edat ve fiil öneki. %bHAvr %i*eghs- çıkma edatından evrilmiştir. %bLat %iex, %bFa %iaz, %bSlav %iiz eşdeğeridir.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:46.004Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 168,
  },
  {
    _id: "5ff05f0dec33d6674335e4a6",
    name: "kata+",
    description:
      "%bYun aşağıya doğru yönelme, kapsama, kaplama, örtme, ilgili olma bildiren edat ve fiil öneki. Ünlüden önce %ikat+ biçimini alır ( %ikat-iôn).",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:46.219Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 172,
  },
  {
    _id: "5ff05f0dec33d6674335e4a7",
    name: "en+",
    description:
      "%bYun içeri girme, içe yönelme bildiren edat ve fiil öneki. Dudak ünsüzlerinden önce %iem+ biçimini alır ( %iem-bállizō, %iem-physema). Türkçeye Fransızcadan alınan bazı örneklerde /an/ ve /am/ telaffuzu kullanılır ( %iemblème > %i/amblem/). * %bHAvr %i*en edatından evrilmiştir. %bLat ve %bİng %iin+ ve %bAlm %iein+ eşdeğeridir.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:46.273Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 173,
  },
  {
    _id: "5ff05f0dec33d6674335e4ab",
    name: "pro+2",
    description:
      "%bYun önce veya önde olma, tercih etme (öne koyma) bildiren edat ve fiil öneki. %bHAvr %i*per edatının sıfırıncı basamağından +o ekiyle üretilmiştir. %bLat %ipro edatıyla eş kökenli ve kısmen eş anlamlıdır.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:46.497Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 177,
  },
  {
    _id: "5ff05f0dec33d6674335e4ac",
    name: "peri+",
    description:
      "%bYun etrafını dönme, etrafında olma, bir şeye dair olma bildiren edat ve fiil öneki. %bHAvr %i*per edatının e basamağından +i ekiyle üretilmiştir. %bEFa %ipari = %bAve %ipairi- edatıyla eş kökenli ve eş anlamlıdır.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:46.550Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 178,
  },
  {
    _id: "5ff05f0dec33d6674335e4af",
    name: "syn+",
    description:
      "%bYun işteşlik, karşılıklılık, eşlik etme, bir ve beraber olma bildiren edat ve fiil öneki. Dudak ünsüzlerinden önce %isym+ biçimini alır (%isym-bolos, %isym-phonía). Önseste /s/ den önce son ünsüzünü yitirir (%isy-stéma). %bFr alıntılar ünlülerden önce /sin+/, ünsüzlerden önce /seŋ+/ olarak telaffuz edilir. %bTü örneklerin çoğu Fransızca telaffuza göre alınmıştır (%lsimetri, %lsinopsis, %lsempati, %lsendika). ● %bFa %iham+ ve %bLat %icon+ biçimleriyle eş anlamlı olmakla birlikte etimolojik ilişkisi muğlaktır.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:46.713Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 181,
  },
  {
    _id: "5ff05f0dec33d6674335e4b3",
    name: "epi+",
    description:
      "%bYun bir şeyin yakınında veya yanında veya üzerinde olma, peşinden gelme, bir şeye dair olma, belli bir zamanda olma, karşı olma bildiren edat ve fiil öneki. Ünlüden önce /i/ sesini kaybeder. Pneuma'dan önce %ieph+ biçimini alır (%ieph-élkō). ● %bLat %iob ile eş kökenli olmasına rağmen anlam yelpazesi farklıdır. %bİng %iup ve %iupon eşdeğeridir.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:46.954Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 185,
  },
  {
    _id: "5ff05f0dec33d6674335e4b8",
    name: "meta+",
    description:
      "%bYun birkaç şeyin arasında, beraber, yanısıra, sonra olma bildiren edat ve fiil öneki. %bHAvr %i*me- (orta, ara) edatından %i*+ti ekiyle üretilmiştir. %bAlm %imit ve %bİng %imid- edatlarıyla eş kökenlidir.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:47.224Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 190,
  },
  {
    _id: "5ff05f0dec33d6674335e4e3",
    name: "+isk°",
    description:
      "Klasik dönem %bYun küçültme ekidir. “Yetişmek, tekâmül etmek (to grow, to become)” anlamına gelen HAvr *-sko- fiil ekinin refleksidir. Karş. %bLat fiil eki +escere “+lAşmAk, bir şeye dönüşmek”.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:49.609Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 237,
  },
  {
    _id: "5ff05f0dec33d6674335e4e4",
    name: "+ism°",
    description:
      "%bYun eril +ismós ve nötr +ísma bileşik takıları, +izō veya +azō ekli tematik fiillerden (aphorizō, nomizō, monazō) eylem adı üretirler. Sonraki dönemde özellikle +ismós eki her türlü sözcüğe eklenerek meslek, alışkanlık ve mensupluk adları üretmekte kullanılmıştır. %bFr +isme, %bİng +ism, %bAlm +ismus biçimlerini alır. Modern dillerde son derece üretkendir. Türkçede 1920’lere dek +izma tercih edilmiş, ancak daha sonra +izm benimsenmiştir.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:49.663Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 238,
  },
  {
    _id: "5ff05f0dec33d6674335e4e5",
    name: "+ist°",
    description:
      "%bYun +istēs bileşik takısı, +izō ekli tematik fiillerden +t° partisip eki ilavesiyle eril fail adı üretir. %bLat +ista, %bFr +iste ve %bİng +ist biçiminde, modern dillerde her türlü ad ve fiilden fail ve mensup adları üretiminde kullanılmıştır. Türkçede, Fransızca ve İngilizceden alınan +ist biçimi standarttır. ● Yukarıda +ism- maddesinde listelenen sözcüklerden, hastalık adı belirtenler (albinizm, alkolizm, astigmatizm, kretenizm, otizm, raşitizm, vajinizm…) ve +ik ekli fail adından türetilenler (despotik, dogmatik, heretik, kritik, lirik, mistik, otantik, sinik…) dışında hepsi prensip olarak +ist takısıyla kullanılabilirler. ● Türkçede çalgıcı adları (gitarist, perküsyonist, piyanist, viyolonist…) ve diğer bazı meslek adları (anestezist, karikatürist, psikiyatrist) bu eki kullanır.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:49.718Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 239,
  },
  {
    _id: "5ff05f0dec33d6674335e4e6",
    name: "+istik°",
    description:
      "%bYun +izō ekli tematik fiillerden +t- ekiyle yapılan fail adı, +ikós ekiyle sıfata, +iká ekiyle mensubiyet veya meslek ve alışkanlık adına çevirilir. Türkçe karşılığı +lAyIcI ve +lAyIcIlIk olsa gerekir.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:49.771Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 240,
  },
  {
    _id: "5ff05f0dec33d6674335e4ea",
    name: "+izō",
    description:
      "+izō ve +azō şekillerinde, Yunanca adlardan fiil üretir. %bTü +lAmAk ekine tekabül eder. Fiil biçiminde Türkçeye direkt alıntı yoktur (belki kerteriz hariç). Ancak Yunancadan türeyen birçok sözcüğün gövdesinde z/s sesinin izi görülür (manaStır, nümiZmatik, vaftiZ). ● Batı dillerinde %bFr +iser ve %bİng +ise/+ize şekillerinde halen son derece üretkendir (%bFr démoraliser, politiser, galvaniser; %bİng hypnotize, sympathize, synchronize). ● Listedeki sözcüklerin her biri +izasyon ekiyle de Türkçede kullanılabilir (sterilizasyon, valorizasyon, vülgarizasyon).",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:49.996Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 244,
  },
  {
    _id: "5ff05f0dec33d6674335e4f1",
    name: "+ousa",
    description:
      "%bYun fiilin dişil failini (feminine present participle) verir. Yunancadan Türkçeye direkt alıntıda %i+usa, Fransızca üzerinden alıntılarda %i+üz ve %i+üs görülür.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:50.384Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 251,
  },
  {
    _id: "5ff05f0dec33d6674335e4f2",
    name: "+t°",
    description:
      "%bEYun +tós, +tḗ , +tón ekiyle yapılan fiil-sıfatı eyleme maruz kalan nesneyi (mef’ul) ya da eylem adını (masdar) bildirir.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:50.439Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 252,
  },
  {
    _id: "5ff05f0dec33d6674335e4f5",
    name: "amphi+",
    description:
      "Her iki yanda, sağlı sollu olma bildiren edat ve önek. %bLat ambi+ eşdeğeridir.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:50.602Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 255,
  },
  {
    _id: "5ff05f0dec33d6674335e4f6",
    name: "anti+",
    description:
      "%bYun karşı olma, yüz yüze gelme bildiren edat ve önek. Modern dillerde üretkendir.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:50.656Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 256,
  },
  {
    _id: "5ff05f0dec33d6674335e4f9",
    name: "hyper+",
    description:
      "Üstte veya yüksek olma bildiren %bYun edat ve önek. %bLat %isuper+ eşdeğeridir.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:50.819Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 259,
  },
  {
    _id: "5ff05f0dec33d6674335e4fa",
    name: "hypo+",
    description:
      "Altta veya alçak olma bildiren %bYun edat ve önek. %bLat %isub+, %bSans %iupa+ “alt, alttan” eşdeğeridir. Germencede aynı edat “alttan yukarıya yönelme” anlamı kazanmıştır: karş. %bAlm %iauf, %bİng %iup.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:50.875Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 260,
  },
  {
    _id: "5ff05f0dec33d6674335e520",
    name: "+osis",
    description:
      "%bYun adlara ve +o ekli türemiş fiillere eklenen -ωσις eki tıp dilinde maraz adları yapımında kullanılmıştır. Türkçeye Fransızcadan aktarılan +oz veya İngilizceden aktarılan +ozis/+osis kullanılır.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:53.001Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 299,
  },
  {
    _id: "6148229691869e57a9822b94",
    name: "para+1",
    description:
      "%bYun yanında olma, yanyana durma, benzer ve gibi olma, aslı veya gerçeği olmama bildiren edat ve fiil öneki. %bHAvr %i*per edatının sıfırıncı basamağından +(h)a- ekiyle türemiştir.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-09-19T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "6148332291869e57a9822bba",
    name: "+men°",
    description: "%bYun fiilden edilgen şimdiki zaman fiil-sıfatı inşa eder.",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-09-19T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "61d6d4c97a6063cfd58f0ff4",
    name: "+akion",
    description: "",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:45.403Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "61d6dd397a6063cfd58f0ff5",
    name: "+ēr",
    description: "",
    language: {
      _id: "5fef828a1678a972d9472515",
    },
    timeCreated: "2021-01-02T11:54:45.403Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "5ff05f0dec33d6674335e41d",
    name: "+A",
    description:
      "%bETü ve erken %bTTü fiilden yön ve zaman zarfı üretir (gece “geç vakitte”, yaka “yanda”, yaŋa “tekrardan”). +I ve +U ekleriyle eş işleve sahiptir. ● %bTTü yara ve yaygara örnekleri yapıca muğlaktır. Buraya ait oldukları kuşkuludur. ● %bYTü fiillerden ve hatta sıfattan (%iilke) her türlü anlama gelebilecek sözcükler üretiminde kullanılmıştır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:38.556Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 1,
  },
  {
    _id: "5ff05f0dec33d6674335e41e",
    name: "+(g)A-",
    description:
      "%bETü isim ve sıfattan fiil üretiminde en sık kullanılan yapım ekidir. +lA- ve +tA- ekleriyle eş işleve sahiptir. Bileşik örnekler için +An-, +Ar-, +Aş-, +At- maddelerine bakınız. ● %bETü +gA- ekli örneklerin birçoğu +Ig ekli partisiplerden türetilmiştir (elig > elge-, kurığ > kurğa-, tatığ > tatğa-). Ancak diğer örneklerde +gA- eki primer yapıda görünür (kez > kerge-, ésiz > esirge-). ● %bTTü /g/ sesi erir. Erken döneme ait az sayıda örnek dışında üretken bir ek değildir. ● %bYTü +Ak, +Am, +An, +Aş, +At gibi bileşikleri sıklıkla kullanılmış fakat +A- ekiyle yeni fiil üretilmemiştir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:38.610Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 2,
  },
  {
    _id: "5ff05f0dec33d6674335e421",
    name: "+(g)Aç",
    description:
      "Fiil ekidir. +(g)A- fiil yapım eki ile belki +Iş partisip ekinin varyant bir biçiminin bileşiminden ibarettir. %bETü ve %bTTü +(g)Uç biçimi de kullanılır (%ibıçguç, %iolturguç “sandalye”, %iosguç). Her iki halde araç isimleri yapar. %bTTü çoğu örnekte +Aç şeklini alır. %bTTü bakraç örneğinde ada eklenmiş görünür. %bTTü %igüleç anlam bakımından kuşkuludur; %bTTü %iutangaç buraya ait değildir. %bYTü ayrım gözetmeksizin +Aç veya +gAç şeklinde, ada veya fiile eklenir. Alet adı, özne adı (%isüreç) veya keyfi herhangi bir anlam (%idoğaç) üretir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:38.772Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 5,
  },
  {
    _id: "5ff05f0dec33d6674335e422",
    name: "+(g)An-",
    description:
      "Fiil ekidir. %bTTü erken dönemde fiillerden alışkanlık ve süreklilik bildiren sıfat yapar (%isorağan, %iakağan, %isöyleğen vb.). ● %bYTü aynı anlamda sıfat (%idurağan, %isüreğen) ve ad (%igezegen) yapımında kullanılmıştır. ● %iYatağan örneği belki sonses +t ile biten bazı köklere eklenen menşei belirsiz /a/ sesiyle (karş. %itutam) %bETü +gAn ekinin bileşiminden ibarettir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:38.827Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 6,
  },
  {
    _id: "5ff05f0dec33d6674335e423",
    name: "+AgU",
    description:
      "%bETü az sayıda örnekte görülen fiil ekidir. İşlevi açık değildir. İki örnekte alet adı (%ibukağı, %ikarağı, %ikaşağı), bir örnekte hastalık adı (%isakağı) yapar. İlk iki örnekte muhtemelen parazitik bir /a/ ilavesiyle +gU eki sözkonusudur.  %iKırağı sözcüğündeki ek muhtemelen farklıdır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:38.885Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 7,
  },
  {
    _id: "5ff05f0dec33d6674335e424",
    name: "+AgU2",
    description:
      "%bETü sayılara ve çokluk bildiren adlara eklenerek kolektif tekil adlar yapar. Ör. %iikigü = ikili, çift. %bETü işlektir. %bTTü ve %bYTü işlek değildir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:38.940Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 8,
  },
  {
    _id: "5ff05f0dec33d6674335e425",
    name: "+AgUl",
    description:
      "%bMoğ eylem  adı yapan ektir. Moğolcadan veya Moğol Türkçesinden alınan iki sözcükte geçer.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:38.996Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 9,
  },
  {
    _id: "5ff05f0dec33d6674335e426",
    name: "+Ak",
    description:
      "%bETü ad ve sıfat küçültme ekidir. %bFa küçültme eki +ak ile eş sesli olup, bazı örneklerde etkileşim yönü muğlaktır. %bTTü erken dönemden sonra üretken değildir. %bYTü birkaç örnekte canlandırılmıştır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:39.050Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 10,
  },
  {
    _id: "5ff05f0dec33d6674335e427",
    name: "+(g)Ak",
    description:
      "Partisip ekidir. %bETü geçişli fiillerden nesne adı, geçişsiz fiillerden özne ve eylem adı yapar. %bETü +gAk biçimi egemendir, ancak erken dönemden itibaren +Ak örnekleri  görülür (%içörek, %isakak, %iyürek). %bTTü /g/ sesi erir ve tüm örnekler +Ak olarak telaffuz edilir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:39.106Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 11,
  },
  {
    _id: "5ff05f0dec33d6674335e428",
    name: "+(g)Aş-",
    description:
      "Addan fiil üreten +(g)A- eki ile +Iş- işteşlik ekinin bileşiğidir. +Iş- maddesine bakınız.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:39.160Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 12,
  },
  {
    _id: "5ff05f0dec33d6674335e429",
    name: "+Al",
    description:
      "%bETü mevcut değildir. %bTTü iki örnek yapı ve işlev bakımından muğlaktır; muhtemelen +Il ekinin bir varyantı sözkonusudur. %bYTü adlardan (%isözel, %iyasal, %iyerel), sıfatlardan (%iilkel, %igenel), fiillerden (%idoğal, %isanal) sıfat yapımı için özgürce kullanılmıştır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:39.226Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 13,
  },
  {
    _id: "5ff05f0dec33d6674335e42a",
    name: "+Al-",
    description:
      "Addan fiil üreten +(g)A- eki ile +Il- edilgenlik ekinin bileşiğidir. %bETü örneği yoktur. %bTTü sıfatlardan geçişsiz fiil üretir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:39.281Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 14,
  },
  {
    _id: "5ff05f0dec33d6674335e42b",
    name: "+AlA-",
    description:
      "%bTTü halk ağızlarına özgü fiil eki. Kökende muhtemelen +Ak ile yapılmış deverbal ile +Al- denominalinin bileşimidir. Sürekli ve kararsız eylem bildiren fiiller inşa eder.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:39.336Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 15,
  },
  {
    _id: "5ff05f0dec33d6674335e42c",
    name: "+AlAk",
    description:
      "Fiil ekidir. %bETü tek örnek, Kaşgari’de %itopulğak şeklinde yazılıdır. %bTTü örneklerde küçük ürün ve mahluk adları (%ikozalak, %içiyelek, %igödelek) ve illet adları (%iasalak, %iyatalak) inşa eder. +AlAz biçimi de kullanılır (%igöbelez “küçük köpek”). %bYTü tek örneğin anlamı keyfidir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:39.391Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 16,
  },
  {
    _id: "5ff05f0dec33d6674335e42d",
    name: "+Uz",
    description:
      "%bETü yazılı dönemde üretkenliğini büyük ölçüde yitirmiş bir yapım eki olduğu anlaşılıyor. Örneklerin çoğu kuşkulu yapıda olmakla beraber partisip eki olduğu var sayılabilir. +Uz ve +Iz biçimlerinin aynı ek olmaması mümkündür. ● %bTTü birkaç örnekte rastlanan +Iz ekinin bununla alakalı olmaması ihtimali güçlüdür.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:39.454Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 17,
  },
  {
    _id: "5ff05f0dec33d6674335e42e",
    name: "+Uz-",
    description:
      "%bETü fiilden geçişli ve ettirgen fiil yapar. Eş işlevli olan +tUr- ekinin varyant biçimi olsa gerekir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:39.508Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 18,
  },
  {
    _id: "5ff05f0dec33d6674335e42f",
    name: "+Am",
    description:
      "İşlevsel açıdan +Im ekine eşdeğer fiil ekidir. %bETü sadece tutam ve belki %bTTü yordam örneklerinde geçer. Yeterli açıklaması yoktur. Her iki örnekte +t sonsesi izlemesi tesadüf olmayabilir. ● %bYTü fiil eki (%ibiçem, %idönem, %ikuram) ve ad eki (%igizem, %igörkem, %iönem) olarak belirgin herhangi bir işlevi olmaksızın kullanılmıştır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:39.566Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 19,
  },
  {
    _id: "5ff05f0dec33d6674335e430",
    name: "+(A)mAk",
    description:
      "Masdar eki olan +mAk’tan bağımsız partisip ekidir. Belki +mAlIk şeklinde analiz edilebilir (%iyemek < yemelik, %ibarmak < barmalık). %bETü fiilden araç ve yiyecek adları üretir. %bTTü kullanım alanı daha eklektiktir. %bTTü +AmAk biçimi muhtemelen aynı ekin varyantıdır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:39.620Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 21,
  },
  {
    _id: "5ff05f0dec33d6674335e431",
    name: "+mUk",
    description:
      "%bETü renk sıfatlarına eklenerek nesne adı üretir. %bTTü küçük nesne, kırıntı ve döküntü anlamına gelen adlar üretmiştir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:39.674Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 22,
  },
  {
    _id: "5ff05f0dec33d6674335e432",
    name: "+(g)An",
    description:
      "%bETü fiillerden özne adı (present participle) üreten +gAn eki %bTTü ikili bir gelişme göstererek, bir yanda özne belirten +An ekine (%igezen, %ikemiren), diğer yanda genellikle alışkanlık ve süreklilik bildiren +gAn/+AgAn ekine evrilmiştir (%igezegen, %ikemirgen). %bYTü +An, +gAn ve +Agan biçimleri fiillerden özne adı üretiminde kullanılmıştır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:39.728Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 23,
  },
  {
    _id: "5ff05f0dec33d6674335e433",
    name: "+An2",
    description:
      "%bETü arkaik çoğul ekidir. %bETü öncesi dönemde işlekliğini yitirdiği anlaşılıyor. %bETü çok sayıda örnekten üçü günümüze gelmiştir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:39.782Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 25,
  },
  {
    _id: "5ff05f0dec33d6674335e434",
    name: "+AnAk",
    description:
      "%bTTü +(A)mak ekinin varyant biçimidir. %bTTü ve %bYTü fiilden araç adları ve diğer partisipler yapar.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:39.836Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 27,
  },
  {
    _id: "5ff05f0dec33d6674335e435",
    name: "+AsI",
    description:
      "Muhtemelen +sA- desideratif fiil yapım ekiyle +I(g) partisip ekinin bileşiğidir. %bTTü fiilden gelecek zaman ortacı veya fiilde belirtilen eyleme yarar nesne adı yapar. Anlamca %bTTü +AcAk eki  eşdeğeridir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:39.889Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 31,
  },
  {
    _id: "5ff05f0dec33d6674335e437",
    name: "+At-",
    description:
      "Addan fiil üreten +A- eki ile +It- geçişlilik ekinin bileşiğidir; geçişli fiil üretir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:40.006Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 34,
  },
  {
    _id: "5ff05f0dec33d6674335e438",
    name: "+Av",
    description:
      "%bETü +Ig ekinin Kıpçak ve Çağatay lehçelerinde -A ile biten fiil gövdelerine eklenmiş biçimidir. %bTTü örneği yoktur. %bYTü fiilden serbest çağrışım yoluyla çeşitli adlar yapımında kullanılmıştır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:40.061Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 35,
  },
  {
    _id: "5ff05f0dec33d6674335e439",
    name: "+(g)Ay",
    description:
      "%bETü adlardan sıfat üreten +gAy eki (%iilgey, %ioŋay, %iyokay, %iögey), %bTTü örneklerde /g/ sesini kaybeder. %bYTü fiile (%ibükey, %ideney, %idüşey, %iolay, %ionay, %iuzay, %iyapay, %iyatay), ada (%iortay, %itugay, %iyüzey) ve sıfata (%idikey, %idüzey) eklenerek her türlü sözcük üretiminde kullanılmıştır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:40.115Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 36,
  },
  {
    _id: "5ff05f0dec33d6674335e43b",
    name: "+çA",
    description:
      "%bETü adlara küçültme anlamı verir; sıfatlardan nesne adı yapar. %bETü işlektir. %bTTü geç dönemde işlekliğini yitirmiş ve +çIk eki ön plana çıkmıştır. ● %bFa ve %bTü küçültme ekleri +Ak, +çA ve +çAk özdeşliği dikkat çekicidir. ● %bYTü isim ve fiillere serbestçe eklenen +çA ekinin buraya mı yoksa zarf yapan +çA2 ekine mi ait olduğu her zaman anlaşılamaz.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:40.222Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 38,
  },
  {
    _id: "5ff05f0dec33d6674335e43c",
    name: "+çA2",
    description:
      "%bETü ve %bTTü sıfattan nicelik zarfları üretir. Dil adları üreten +çA eki buradan evrilmiştir (%iTürkçe, %iÇince, %ihıbırca).",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:40.278Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 39,
  },
  {
    _id: "5ff05f0dec33d6674335e43d",
    name: "+IçA",
    description:
      "%bSırp králitsa “kral eşi veya kadın hükümdar” adından adapte edilerek Türkçe türevler yapımında kullanılmıştır. ● %bTTü ses uyumuna tabi değilken %bYTü tanrıça örneğinde ses uyumu gözetilmiştir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:40.340Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 40,
  },
  {
    _id: "5ff05f0dec33d6674335e43e",
    name: "+çAk",
    description:
      "%bETü ve %bTTü ad ve sıfat ekidir. Soyut ad ve sıfattan somut nesne veya alet adı yapar (%iocak, %igerçek, %ioyuncak). Küçültme anlamı verir (böcek, kolçak, yumurcak). ● %bTTü işlev belirten sıfat-fiil eki olan +AcAk bu ekten türemiş ve 15. yy'dan sonra gelecek zaman çekim eki olarak kullanılmıştır. ",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:40.393Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 41,
  },
  {
    _id: "5ff05f0dec33d6674335e43f",
    name: "+çI",
    description:
      "Her dönemde addan ve fiilden meslek ve alışkanlık adları yapan çok işlek ektir. %bTTü modern dönemde ada eklendiğinde +çI, fiile eklendiğinde +(y)IcI biçimini alır. %bYTü %iöğrenci örneğinde bu kural gözardı edilmiştir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:40.448Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 43,
  },
  {
    _id: "5ff05f0dec33d6674335e440",
    name: "+çIl",
    description:
      'Ad ekidir. %bTTü eski örneklerde "avlayıcı" anlamı taşır (%ibalıkçıl “balık avlayan”, %itavşancıl “tavşan avlayan"). %iAdamcıl sözcüğünün geçirdiği şaşırtıcı anlam evrimi etkisiyle  %bYTü “seven” anlamında kullanılmıştır (%ibencil, %ievcil, %iinsancıl). %bYTü %iöncül örneğinde işlevi meçhuldür.',
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:40.503Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 44,
  },
  {
    _id: "5ff05f0dec33d6674335e441",
    name: "+çIn",
    description: "%bETü ve %bTTü alacalı ve belirsiz renk sıfatları yapar.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:40.557Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 45,
  },
  {
    _id: "5ff05f0dec33d6674335e442",
    name: "+çUk",
    description:
      "%bETü ve %bTTü küçültme adları yapar. %bTTü 17. yy'dan sonra küçük ses uyumuna tabi olarak +çIk biçimini almıştır. ● Halen çok işlek olduğu için çoğu türevler gösterilmedi.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:40.612Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 46,
  },
  {
    _id: "5ff05f0dec33d6674335e443",
    name: "+dA",
    description: "%bTTü ad çekim ekidir. Nadiren ad yapımında kullanılmıştır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:40.666Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 47,
  },
  {
    _id: "5ff05f0dec33d6674335e444",
    name: "+dA-",
    description:
      "%bETü addan fiil üretir. Benzer işlevli +(g)A-, +lA- ve +sA- eklerinden çok daha ender görülür. %bTTü işlek değildir. ● %bYTü sapta- fiilinin yapısı muammadır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:40.720Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 48,
  },
  {
    _id: "5ff05f0dec33d6674335e445",
    name: "+dA-2",
    description:
      "%bTTü onomatope ekidir. Çift heceli onomatopelerden fiil üretir. Halen işlek bir ek olduğu için çoğu örneklere yer verilmedi (%ifısılda-, %igurulda-, %işakırda-, %iparılda-, %itıkırda-).",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:40.774Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 49,
  },
  {
    _id: "5ff05f0dec33d6674335e446",
    name: "+dAm",
    description:
      "%bETü adlardan benzeti sıfatları yapan ektir (%ierdem “er gibi”, %iteŋridem “tanrısal”, %ibirdem “beraber”). %bTTü geç dönemde beliren iki fiil türevi (%iyordam, %iyöndem) ayrı yapıda olup muhtemelen +dA- fiil yapım eki ile +Im masdar ekinin bileşiğidir. %bYTü tek örnek %bFr %iagenda sözcüğünden serbest çağrışım yoluyla üretilmiştir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:40.830Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 50,
  },
  {
    _id: "5ff05f0dec33d6674335e447",
    name: "+dAş",
    description:
      "%bTTü ve %bYTü adlardan ortaklık ve paylaşım adları yapar. Yapıca muğlak olan %bETü %ikadaş/kardaş sözcüğünden analoji yoluyla üretilmiş olması muhtemeldir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:40.885Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 51,
  },
  {
    _id: "5ff05f0dec33d6674335e448",
    name: "+dI",
    description:
      "Geçmiş zaman çekim eki %bTTü ve %bYTü az sayıda örnekte partisip yapımında kullanılmıştır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:40.939Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 52,
  },
  {
    _id: "5ff05f0dec33d6674335e449",
    name: "+dU",
    description:
      "%bETü tek örnek çok şüphelidir. %bTTü örneklerde +dI geçmiş zaman ekiyle birleştirilemez.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:40.994Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 53,
  },
  {
    _id: "5ff05f0dec33d6674335e44a",
    name: "+dUrUk",
    description:
      "%bETü adlardan araç ve kuşam isimleri yapar. Örneklerin birçoğu daha sonra +dUk ve +dAk biçimine evrilmiştir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:41.056Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 54,
  },
  {
    _id: "5ff05f0dec33d6674335e44b",
    name: "+gA",
    description:
      "%bETü ve %bTTü fiilden ad ve sıfat üretir. %bTTü sonseste -l, -n, -r içeren köklerde /g/ sesi korunur (%ibilge, %igölge, %iyonga, %ikavurga), diğer hallerde düşer (%ikısga > kısa, %iyinçge > %iince, %ikovga > %ikova, %iyumurtga > %iyumurta). %bETü +gU ekiyle yapılmış bazı sözcükler (%isüpürgü, %isakırgu) %bTTü +gA biçimini almıştır (%isüpürgü > %isüpürge, %isakırgu > %isakırga). %bYTü fiilden, addan ve sıfattan (%igenelge) belirgin bir işlev gözetmeksizin ad yapımında kullanılmıştır. %bYTü bazı sözcüklerde %bTTü süpürge sözcüğünden esinlendiği anlaşılan +ArgA eki kullanılır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:41.114Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 55,
  },
  {
    _id: "5ff05f0dec33d6674335e44c",
    name: "+gU",
    description:
      "Partisip ekidir. %bETü geçişli fiillerden nesne adı (%iiçkü, %ivergü) ve alet adı (%ibıçku, %ibilegü, %iközegü, %isüngü), geçişsiz fiillerden özne ve eylem adı (%ibügü, %ikaygu, %iyanku) yapar. %bTTü üretkendir. 17. yy'dan sonra küçük ses uyumuna tabi olarak +gI/+gU biçimini alır. %bYTü yoğun olarak kullanılmıştır. Bir örnekte sıfattan isim (%idışkı) bir örnekte isimden sıfat (%iözgü) yapar.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:41.168Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 57,
  },
  {
    _id: "5ff05f0dec33d6674335e44d",
    name: "+gIn",
    description:
      "Partisip ekidir. %bETü ve %bTTü geçişli fiillerden nesne adı (%ibıçkın, %idizgin, %idüzgün, %isalgın, %isürgün), geçişsiz fiillerden özne veya eylem adı (%iargın, %idurgun, %ikaçkın, %iengin, %iyangın) yapar. %bTTü ve %bYTü üretkendir. 17. yy'dan sonra küçük ses uyumuna tabi olarak +gIn/gUn biçimini alır. %bYTü iki örnekte (%ibilgin, %ietkin) geçişli fiilden özne adı yapımında kullanılması keyfidir. Ada eklendiği iki örnekte (%iiçkin, %iözgün) işlevi belirsizdir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:41.222Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 58,
  },
  {
    _id: "5ff05f0dec33d6674335e44e",
    name: "+gAn2",
    description:
      "%bETü adlardan bitki ve meyve adları (%ituturgan, %içıbıgan, %ikümürgen, %isargan) inşa eden bu ek Erdal’a göre +(g)An  aktif partisip ekinden ayrı düşünülmelidir (OTWF 1.85).",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:41.284Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 59,
  },
  {
    _id: "5ff05f0dec33d6674335e44f",
    name: "+oş",
    description:
      "Genellikle çocuk dilinden gelen sözcüklere eklenen küçültme ekidir. Argoda aşağılama anlamıyla kullanılır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:41.339Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 69,
  },
  {
    _id: "5ff05f0dec33d6674335e451",
    name: "+I-",
    description:
      "%bETü bir dizi örnekte sonseste –z içeren ad ve sıfatlardan (%ikez, %iöz, %ikutuz, %isékiz, %isemiz, %iyavız, %iyulduz ve bir olasılıkla %igöz), +rI- (nadiren +rU-) ekli fiiller üretildiği görülür. Bu dönüşümün tatmin edici bir açıklaması yapılamamıştır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:41.447Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 71,
  },
  {
    _id: "5ff05f0dec33d6674335e452",
    name: "+Iç",
    description: "%bETü küçültme ekidir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:41.507Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 72,
  },
  {
    _id: "5ff05f0dec33d6674335e453",
    name: "+I(g)",
    description:
      "%bETü çok yaygın partisip ekidir. Geçişli fiilden nesne adı (%idizi, %iörtü, %iköprü, %itörpü, %iyapı), geçişsiz fiilden özne ve eylem adı (%iacı, %iölçü, %işaşı, %itat, %itın) üretir. Bazı örneklerde benzeti sıfatı işlevi kazanmıştır (%ikatı, %ikoyu, %iduru). %bTTü erken dönemden sonra işlek değildir. %bYTü yeniden canlandırılmıştır. ● %bETü –n ile sonlanan fiil köklerinde ünlü erir, –ŋ (/nğ/) bileşik sesi elde edilir. Bu ses %bTTü İstanbul lehçesinde /n/ olarak telaffuz edilir; önceki ünlü bazen inceltilir (%iyunığ > %iyuŋ > %i yün, %itınığ > %itıŋ > %itin) ● %bTTü /g/ sesi kaybolur; sadece tek heceli birkaç örnekte (%ibağ, %iög) korunur. %bETü örneklerin bazılarında da /g/ erimiştir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:41.562Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 73,
  },
  {
    _id: "5ff05f0dec33d6674335e454",
    name: "+lAk",
    description:
      "+lA- fiil yapım ekiyle +Uk/+Ik partisip ekinin bileşiğidir. Çok sayıda örnek +Uk maddesinde gösterildi. Buradaki birkaç örnekte, kusur sıfatları inşa eden bağımsız bir ek olma eğilimi görülür.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:41.617Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 74,
  },
  {
    _id: "5ff05f0dec33d6674335e455",
    name: "+kI",
    description:
      "Zarftan sıfat üreten +ki eki, günümüzün aksine %bETü ve erken %bTTü ses uyumuna tabidir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:41.672Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 75,
  },
  {
    _id: "5ff05f0dec33d6674335e456",
    name: "+Ik",
    description:
      "%bETü birkaç örnekte görülen küçültme ekidir. +Ak küçültme ekinin fonetik bir varyantı olsa gerekir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:41.726Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 76,
  },
  {
    _id: "5ff05f0dec33d6674335e457",
    name: "+Ik-",
    description:
      "Ad ve fiil ekidir. %bETü ve erken %bTTü adlardan (%ibirik-, %ibuŋuk-, %ikéçik-, %ikirik-, %itarık-, %itersik-) ve geçişli fiillerden (%iaçık-, %iérik-, %ikork-, %isézik-, %iburk-) geçişsiz veya dönüşlü fiiller yapar. +In- ekiyle aynı işleve sahiptir. %bTTü 14. yy'dan sonra üretken değildir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:41.806Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 77,
  },
  {
    _id: "5ff05f0dec33d6674335e458",
    name: "+kIr-",
    description:
      "%bETü insan ve hayvan sesi ifade eden ünlemlerden fiil yapar. Örneklerin çoğunda bağımsız kök kaydedilmemiştir. %bTTü örneklerin tümü 16. yy’dan eskidir. %iÖksür- (< %iöskür-) ve ona kıyasla üretilen birkaç örnekte (%iaksır-, %itıksır-) s/k metatezi görülür.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:41.860Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 78,
  },
  {
    _id: "5ff05f0dec33d6674335e459",
    name: "+Il",
    description:
      "%bETü örneklerin hemen hepsinde kök ve yapı muğlaktır (%iosal, %iamıl, %iınal, %iyaval, %iıdıl, %ikısıl, %itükel, %isigil). %bTTü iki örnek, yansıma seslere ait ayrı bir işlevi düşündürürler. Karş %iIl2. ● %bYTü ad (%iadıl, %ibuzul), sıfat (%içoğul, %iyabanıl) ve fiillerden (%iokul, %ikoşul) sıfat üretmek için serbestçe kullanılmıştır. A ile sonlanan köklere ulanan ekin %bYTü +Il mı, eş işlevli +Al mı olduğu anlaşılamaz (%iöznel, %iyasal). Bu örnekler +Al maddesi altında listelendi.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:41.914Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 79,
  },
  {
    _id: "5ff05f0dec33d6674335e45a",
    name: "+Il-",
    description:
      "Fiil ekidir. %bETü ve %bTTü geçişli fiilleri edilgen yapar. Sadece yakın dönemde halk ağızlarından alınan kaykıl-örneğinde geçişsiz fiile eklenmiştir. ● %bTTü sonseste –l içeren fiillerde +In- biçimini alır (bölün-, salın-, kalın-, delin-). ● Halen çok işlek olduğu için sadece maddebaşı olan türevler gösterildi.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:41.969Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 80,
  },
  {
    _id: "5ff05f0dec33d6674335e45b",
    name: "+Il2",
    description:
      '%bETü ve %bTTü belirsiz ve alaca renk adları yapımında kullanılır. %bTTü onomatopelere eklenerek "belirsiz ve oynak ses" anlamı veren +Il/+Ir eki (%icıvıl, %ifırıl, %işakır) muhtemelen aynı ektir.',
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:42.023Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 81,
  },
  {
    _id: "5ff05f0dec33d6674335e45c",
    name: "+tIk",
    description: "%bETü küçültme ekidir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:42.083Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 82,
  },
  {
    _id: "5ff05f0dec33d6674335e45d",
    name: "+Im",
    description:
      '%bETü ve %bTTü fiilden eylem adı üretir. Bazı örneklerde "bir kerelik eylem" anlamı vardır (%iadım, %idurum, %iverim). Bazen partisip eki işlevi görür; geçişli fiillerden nesne adı (%idilim, %isırım, %iüzüm, %iyem), geçişsiz fiillerden özne adı (%isalkım, %itulum) üretir. %bTTü yerleşik teamülün tersine %bYTü ünlü ile sonlanan fiillerde +m kullanılmıştır (%ieylem, %iikilem, %iistem, %iişlem, %ikavram, %isöylem). %bYTü bazı örneklerde ad ve sıfata eklenmesi keyfidir (%ibirim, %ikalıtım). ● Halen son derece işlek olduğundan az sayıda örnek gösterildi.',
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:42.138Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 83,
  },
  {
    _id: "5ff05f0dec33d6674335e45e",
    name: "+In",
    description:
      "%bETü geçişli fiillerden nesne adı, geçişsiz fiillerden özne ve eylem adı yapar. +Im ekinin fonetik ikizidir. ● %bETü çok yaygındır. %bTTü belki en erken dönemden sonra işlek değildir. %bYTü yeniden canlandırılarak her türlü fiilden her türlü ad yapımında kullanılmıştır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:42.197Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 85,
  },
  {
    _id: "5ff05f0dec33d6674335e45f",
    name: "+In-",
    description:
      "Geçişli ve geçişsiz fiillerden dönüşlü (reflexive) fiil yapar. %bTTü sonseste –l içeren fiillere edilgenlik işlevi verir. %bTTü az sayıda türevde sıfat veya isimden fiil yapar (düşün-, incin-, yutkun-). ● Halen aktif bir yapım eki olduğu için bazı türevler gösterilmedi.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:42.250Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 86,
  },
  {
    _id: "5ff05f0dec33d6674335e460",
    name: "+(In)ç",
    description:
      "Fiil ekidir. +In- dönüşlülük ekiyle, eylem adı ve fiil-sıfatı yapan +Iş ekinin bileşik halidir. %iSevinç < %isevin-iş, %idinç < %idin-iş. Türevler eylem adı (%isevinç, %iinanç, %iutanç) veya edilgen fiil-sıfatı (%ikorkunç, %igülünç) anlamı taşır. %bYTü keyfi olarak ada (%iilginç) ve dönüşlü anlamı olmayan fiillere (%iistenç) eklenmiştir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:42.304Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 88,
  },
  {
    _id: "5ff05f0dec33d6674335e461",
    name: "+(In)tI",
    description:
      "Fiil ekidir. %bTTü her zaman +In- dönüşlülük ekiyle birlikte kullanılır. 16. yy’dan itibaren görülür; 17. ve 18. yy’larda son derece işlektir. ● %bTTü belirti, ürperti gibi birkaç örnekten hareketle %bYTü bağımsız bir +tI eki olarak yorumlanmıştır (+Ig ekine bakınız).",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:42.359Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 89,
  },
  {
    _id: "5ff05f0dec33d6674335e462",
    name: "+Ip",
    description:
      "%bETü ve %bTTü bağlaç fiil eki muhtemelen arkaik bir partisip ekinden evrilmiştir. %bETü türevlerde +mIş ekiyle eş işlevli görünür: %ialp = almış, %içöp = çöğmiş, %itolp = tolmış.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:42.413Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 90,
  },
  {
    _id: "5ff05f0dec33d6674335e463",
    name: "+Ir-",
    description:
      "%bETü az sayıda fiilde görülen bu yapı biriminin işlevi açık değildir. +Il- fiil yapım ekinin varyant biçimi olduğu düşünülebilir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:42.478Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 92,
  },
  {
    _id: "5ff05f0dec33d6674335e464",
    name: "+IrkU",
    description: "",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:42.532Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 93,
  },
  {
    _id: "5ff05f0dec33d6674335e465",
    name: "+IrgA-",
    description:
      "%bTTü tek örnekte görülen fiil yapım ekinin yapısı açık değildir. %bYTü örnek analoji yoluyla inşa edilmiştir. %bETü %iesirge- fiili buraya ait değildir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:42.586Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 94,
  },
  {
    _id: "5ff05f0dec33d6674335e466",
    name: "+Iş",
    description:
      "%bETü ve %bTTü fiillerden eylem adı yapar. Geçişli fiillerden nesne, geçişsiz fiillerin özne adı yapar. %bETü türevlerde sesli-egemendir, yani ünlü ile sonlanan köklerde /I/ ünlüsünü çoğu zaman korur (%ialka- > %ialkış, %ikarga- > %ikargış). OTWF-I.262. Buna karşılık %bTTü türevlerde (%isavaş, %igüreş, %ibağdaş, %iuğraş) tema korunmuştur.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:42.640Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 95,
  },
  {
    _id: "5ff05f0dec33d6674335e467",
    name: "+Iş-",
    description:
      "Geçişli fiillere karşılıklılık (%içalış-, %itartış-, %itutuş-, %ididiş-, %igüreş-, %iuğraş-, %idalaş-, %itanış-, %iyarış-, %iulaş-), geçişsiz fiillere dönüşlülük (%ikarış-, %ideğiş-, %iyetiş-, %igeliş-) anlamı verir. -A ile sonlanan tematik fiillerde +Aş biçimini alır. Sonseste -n, -r, -l içeren örneklerde bazen ş > ç görülür (%isürç-, %isırç-ga, %iölç-).",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:42.697Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 96,
  },
  {
    _id: "5ff05f0dec33d6674335e468",
    name: "+IştIr-",
    description:
      "İşteşlik fiilinin ettirgeni (faktitif) bazı %bTTü örneklerde süreklilik ve zıt yönlere devinim bildiren geçişli fiiller yapar (%ikırıştır-, %ikoşuştur-, %isavuştur-, %igeçiştir-). %bYTü %ieleştir- fiilinde işlevi muğlaktır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:42.752Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 97,
  },
  {
    _id: "5ff05f0dec33d6674335e469",
    name: "+It-",
    description:
      "%bETü geçişsiz fiilden geçişli, geçişli fiilden ettirgen (faktitif) fiil yapar. %bTTü ender olarak geçişsiz fiiller de (%ikırıt-, %isapıt-, %isürt-) üretir. Modern dönemde nadiren kullanılmıştır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:42.806Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 99,
  },
  {
    _id: "5ff05f0dec33d6674335e46a",
    name: "+Iz",
    description:
      "Sadece %iikiz sözcüğünde formatif karakterini koruyan bu yapı ögesinin arkaik bir ikil (tesniye) eki olduğu savunulmuştur. Karş. %igöz, %idiz vb.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:42.860Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 101,
  },
  {
    _id: "5ff05f0dec33d6674335e46b",
    name: "+kA",
    description:
      "%bETü adın yönelme hali (+e hali, dativ) ekidir. Az sayıda örnekte yapım eki işlevi kazanmıştır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:42.916Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 104,
  },
  {
    _id: "5ff05f0dec33d6674335e46c",
    name: "+lA-",
    description:
      "Türkçenin her döneminde son derece işlek bir yapım ekidir. Ad ve sıfatlardan fiil üretir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:42.970Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 105,
  },
  {
    _id: "5ff05f0dec33d6674335e46d",
    name: "+lAn",
    description:
      "Vahşi hayvan isimleri üretir. %bÇin %ilon “ejderha” sözcüğü ile ilgili olabileceği ileri sürülmüştür.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:43.025Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 106,
  },
  {
    _id: "5ff05f0dec33d6674335e46e",
    name: "+lAn-",
    description:
      'Addan fiil üreten +lA- eki ile +In- dönüşlülük ekinin bileşiğidir; "edinme" veya "haline gelme" anlamı ifade eden geçişsiz fiiller üretir. Sadece +lA- ekinin tek başına kullanılmadığı birkaç örnek gösterildi.',
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:43.079Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 107,
  },
  {
    _id: "5ff05f0dec33d6674335e46f",
    name: "+lAş-",
    description:
      'Addan fiil üreten +lA- eki ile +Iş- dönüşlülük ekinin bileşiğidir; "haline gelme" anlamı ifade eden geçişsiz fiiller üretir. Sadece +lA- ekinin tek başına kullanılmadığı birkaç örnek gösterildi.',
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:43.133Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 108,
  },
  {
    _id: "5ff05f0dec33d6674335e470",
    name: "+lAyU",
    description: "%bETü ve erken %bTTü ad ve sıfatlardan zarf yapar.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:43.188Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 109,
  },
  {
    _id: "5ff05f0dec33d6674335e471",
    name: "+mAcA",
    description: "",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:43.243Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 110,
  },
  {
    _id: "5ff05f0dec33d6674335e472",
    name: "+lI(g)",
    description:
      '1) Adlardan sahiplik (yaralı, ölümlü, görevli) veya aidiyet (Ankaralı) bildiren sıfat inşa eder. Muhtemelen +lA- fiil yapım eki ile +Ig partisip ekinin bileşiğidir. %bETü +lIg biçimi, %bTTü /g/ sesini kaybederek fakat onun etkisiyle oluşan yuvarlaklaşmayı koruyarak +lU şeklini almıştır. 17. yy’dan sonra küçük ses uyumu gereğince +lI biçimine evrilmiştir. Sayısız örnekten çok azı sözlükte maddebaşı olarak gösterildi. 2) Fiil köküne eklendiği %iyazılı, %iverili gibi örneklerde edilgen fiile yapım ekine ekli +Ig partisip eki olarak değerlendirilebilir. Ör: yazıl-ı(ğ) "yazılmış". ',
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:43.304Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 111,
  },
  {
    _id: "5ff05f0dec33d6674335e473",
    name: "+lIk",
    description:
      "Her dönemde işlek ad ve sıfat ekidir. %bETü ve %bTTü sıfatlardan soyut ad (%iazlık, %igüzellik, %ikaraŋulık), adlardan işlev belirten ad (%igözlük, %icibinlik, %iiplik, %iterlik) yapar. %bYTü her türlü çekim ekli kelimeye eklenmiştir (%iazınlık, %iduyarlık, %iondalık).",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:43.359Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 112,
  },
  {
    _id: "5ff05f0dec33d6674335e474",
    name: "+mA",
    description:
      "%bETü, %bTTü ve %bYTü işlek fiil ekidir. Eylem adı üretir. Geçişli fiillerden nesne adı (%idondurma, %ikapatma, %ikıyma, %iyarma, %ibesleme) yapar. ● Halen aktif bir yapım eki olduğu için çoğu türevler gösterilmedi.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:43.413Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 113,
  },
  {
    _id: "5ff05f0dec33d6674335e475",
    name: "+mAç",
    description:
      "%bETü örneklerde yemek adı inşa eder; muhtemelen aş “yemek” sözcüğünün fonetik bir varyantıdır. %bTTü örneklerde +mA masdar ekiyle aynı işleve sahiptir. Sonseste –n içeren fiillerde dissimilasyon yoluyla +mbAç biçimini alır (%i*dolanmaç > %idolambaç, %i*saklanmaç > %isaklambaç). %bYTü %idemeç örneği benzersizdir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:43.480Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 302,
  },
  {
    _id: "5ff05f0dec33d6674335e476",
    name: "+mAç2",
    description:
      "%bETü az sayıda örnekte addan meslek adı üretir. %iSığırtmaç sözcüğündeki /t/ sesi düşündürücüdür.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:43.535Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 115,
  },
  {
    _id: "5ff05f0dec33d6674335e477",
    name: "+mAl",
    description:
      "%bTTü %isağmal sözcüğünde görülen ek Doerfer'e göre %bMoğ edilgen ortaç yapan +mAl ekidir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:43.615Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 116,
  },
  {
    _id: "5ff05f0dec33d6674335e478",
    name: "+mAn",
    description:
      "%bETü örneklerde +In- +gAn > +ŋan biçiminden evrilmiş bileşik partisip ekidir. +gAn ekiyle eş işleve sahiptir. %bTTü %ikocaman, %ikodaman, %iTürkman örneklerinde %bFa +mān “gibi, benzer” bileşenini yansıtır. Belki %ikocaman örneğinden analoji yoluyla %bTTü “bir şeyin irisi ve kabası” anlamına gelen türevler yapılmıştır (%iazman, %itoraman, %işişman). %bAlm ve %bİng meslek adları yapan man/mann ekinden ilhamla yaratılan %bYTü türevleri (%iuzman = %iFachmann) desteklemek amacıyla çeşitli teoriler üretilmiştir. %iEtmen ve %ikatman örneklerinde işlevi muammadır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:43.670Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 117,
  },
  {
    _id: "5ff05f0dec33d6674335e479",
    name: "+mAz",
    description:
      "Geniş zaman olumsuz eki %bTTü birkaç örnekte bağımsız leksem üretmiştir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:43.730Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 118,
  },
  {
    _id: "5ff05f0dec33d6674335e47a",
    name: "+mUr",
    description:
      "%iYağmur ve %içamur sözcüklerinde görülen ekin niteliği açık değildir. %bETü %ikömür sözcüğü de buraya ait olsa gerekir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:43.790Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 120,
  },
  {
    _id: "5ff05f0dec33d6674335e47b",
    name: "+mIş",
    description:
      "Sadece %ialtmış ve %iyetmiş sayı adlarında görülen bu ek, +mIş perfekt eki olmasa gerekir. Arpad & Berta‘ya göre sıra sayıları üreten +Inç < ● +mInç ekinin ses değişimine uğramış biçimidir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:43.845Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 121,
  },
  {
    _id: "5ff05f0dec33d6674335e47c",
    name: "+oz",
    description:
      "19. yy'dan itibaren delilik veya akılsızlık ifade eden argo sözcükler yapan ek. Muhtemelen %bYun %isalós (saloz) sözcüğünden analoji yoluyla üretilmiştir. Bazı örneklerde +loz görülür.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:43.902Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 122,
  },
  {
    _id: "5ff05f0dec33d6674335e47d",
    name: "+rA",
    description:
      "%bETü geç dönem ve %bOTü ad ve sıfatlardan yön zarfları üretir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:43.958Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 123,
  },
  {
    _id: "5ff05f0dec33d6674335e47e",
    name: "+sA-",
    description:
      "%bETü ve %bTTü ad ve sıfatlardan, dileme ve yönelme (desiderative) anlamı veren fiiller üretir. Bağımsız bir fiil olan %isa- “sanmak, saymak” fiilinden evrilmiş olduğu varsayılmalıdır. %bETü +ImsIn- fiil eki ayrı yapıda olduğu halde %bTTü +ImsA- biçimiyle kaynaşmıştır. %bYTü +ImsA- eki herhangi bir işlev farkı olmaksızın +sA- yerine kullanılmıştır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:44.012Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 125,
  },
  {
    _id: "5ff05f0dec33d6674335e47f",
    name: "+sAl",
    description:
      "%bETü ve %bTTü örneği yoktur. %bYTü fiil ve adlardan sıfat yapar. Muhtemelen %bFr %iuniversel (evrensel) sözcüğünün son hecesinden serbest çağrışım yoluyla türetilmiştir. ● Halen işlek olduğu için türevlerin çoğu gösterilmedi.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:44.066Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 126,
  },
  {
    _id: "5ff05f0dec33d6674335e480",
    name: "+sI",
    description:
      "%bTTü birkaç nadir ve kuşkulu örnekten hareketle %bYTü benzeti sıfatları inşa eder.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:44.120Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 127,
  },
  {
    _id: "5ff05f0dec33d6674335e481",
    name: "+sIl",
    description:
      "%bTTü sadece %iyoksul sözcüğünde rastlanan ekin kaynağı ve işlevi belirsizdir. %bYTü %ivarsıl analoji yoluyla türetilmiştir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:44.174Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 128,
  },
  {
    _id: "5ff05f0dec33d6674335e482",
    name: "+sIn-",
    description:
      'Ad ekidir. %bTTü birkaç örnekte "gibi yapmak" anlamında fiil yapar. %bETü ayrı ek olarak mevcut değildir. Ancak %bETü aynı işleve sahip olan +ImsIn- fiil ekinin, fiil adı yapan +Im ekiyle bu ekten oluştuğu düşünülebilir.',
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:44.229Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 129,
  },
  {
    _id: "5ff05f0dec33d6674335e483",
    name: "+sIz",
    description:
      "%bETü adlardan yoksunluk sıfatı, sıfatlardan ise zıt anlamlı sıfat yapar. İkinci kullanımı %bTTü enderdir. ● %bETü +sIz ekinden türetilen fiiller +sIrA- biçimini alır (%ikutsıra- = kutsuz olmak, %iküçsire- = güçsüz kalmak, %ikagansıra- = kağansız olmak). ● Halen aktif bir yapım eki olduğu için çoğu türevler gösterilmedi.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:44.283Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 130,
  },
  {
    _id: "5ff05f0dec33d6674335e484",
    name: "+sUk",
    description:
      "%bETü on kadar örnekte görülen ad ekinin işlevi belirsizdir. Bkz. Erdal %rOTWF 1.157. %bETü %ibağarsuk ve %isıŋarsuk “at sağrısı” biçimlerinin yanında %ikuruğsak  “kursak” sözcüğünün eş yapıda olduğu var sayılabilir. %bTTü %isümsük sözcüğü buraya ait olamaz.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:44.337Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 131,
  },
  {
    _id: "5ff05f0dec33d6674335e485",
    name: "+t",
    description: "Ani ve sert bitiş bildiren onomatope ekidir.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:44.392Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 132,
  },
  {
    _id: "5ff05f0dec33d6674335e487",
    name: "+tI",
    description:
      "%bTTü onomatope ekidir. +Il ve +Ir uzantısıyla yapılan iki heceli ses yansıma sözcüklerine eklenerek eylem adı yapar. ● Türkçede ayrıca fiile eklenen bir +tI ekinin varlığı kuşkuludur. Karş. +dU, +I.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:44.506Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 134,
  },
  {
    _id: "5ff05f0dec33d6674335e488",
    name: "+tUr-",
    description:
      "%bETü ve %bTTü geçişsiz fiilden geçişli, geçişli fiilden ettirgen fiil yapar. Geçişli fiilden ender olarak geçişsiz fiil yaptığı görülür (%ialdır-, %isaldır-). %bTTü 17. yy'dan sonra küçük ses uyumuna tabidir. Halen aktif bir yapım eki olduğu için çoğu türevler gösterilmedi.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:44.560Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 136,
  },
  {
    _id: "5ff05f0dec33d6674335e489",
    name: "+Uk",
    description:
      "Eş anlamlı olan +Ig ile beraber %bETü en yaygın partisip ekidir. +(g)A- ekli tematik fiillerde ünlüsünü kaybederek +(g)Ak biçimini alır. –n ve –r veya ünlü ile sonlanan fiillerde ünlüsünü kaybeder (%ierk, %ibark, %isık, %isak, %iyok). %bETü çoğu Oğuz lehçesine ait birkaç örnekte +Ik görülür. Ayrıca birkaç örnekte +gUk kullanılmıştır. %bTTü 17. yy’dan itibaren küçük ünlü uyumu gereğince +Ik/+Uk biçimini alır. ● Halen üretken bir ek olduğundan çoğu türevler gösterilmedi.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:44.615Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 137,
  },
  {
    _id: "5ff05f0dec33d6674335e48a",
    name: "+U-",
    description:
      "%bETü ad ve sıfatlardan fiil yapar. Kıpçak ve Oğuz lehçelerinde /A/ sesine dönüşür (%iboşu- > %iboşa-, %itörü- > %itöre-).",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:44.669Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 138,
  },
  {
    _id: "5ff05f0dec33d6674335e48b",
    name: "+Um",
    description:
      "Birinci tekil şahıs iyelik eki %bOTü döneminde soyluluk unvanlarına eklenerek özellikle soylu kadınlara hitap şekli olarak kullanılmıştır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:44.723Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 139,
  },
  {
    _id: "5ff05f0dec33d6674335e48c",
    name: "+It",
    description:
      "Sadece %bETü unvan ve soyluluk sıfatlarında görülen çoğul ekidir (%ibég > %ibégit, %itégin > %itégit, fakat %ialp > %ialpagut). Doerfer’e göre Moğolcadan alıntıdır. +n ekiyle tekil ve +t ekiyle çoğul olan insan adları Moğolcada standarttır. Ör: %icigen çoğ. %iciget  “kızın veya kız kardeşin çocuğu”.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:44.777Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 141,
  },
  {
    _id: "5ff05f0dec33d6674335e48d",
    name: "+Ut",
    description:
      "%bETü partisip ekidir. %bTTü 17. yy'dan sonra küçük ses uyumuna tabi olarak +It biçimini almıştır. %bETü +Ur- sonsesli fiillerde genellikle hece düşmesi görülür (%içaşur- > %içaşut, %ikavur- > %ikavut; ancak %iadır- > %iadırt, %iyogur- > %iyogurt). %bYTü her türlü fiil (%ianıt, %idikit, %ikalıt, %ikonut, %ikoşut, %iyapıt, %iyazıt), ad (%iboyut, %idölüt, %iözüt), sıfat (%isomut) ve edattan (%ikarşıt) her türlü anlama gelebilecek ad ve sıfat yapmakta kullanılmıştır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:44.832Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 142,
  },
  {
    _id: "5ff05f0dec33d6674335e4fe",
    name: "+AcAk",
    description:
      "15. yy’dan sonra %bTTü gelecek zaman çekim eki işlevini kazanan ek, kökeninde işlev ve yönelim bildiren fiil-sıfatı (gerundive) ekidir. %bTTü birkaç türevde halen bu işlevin izi görülür.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:51.114Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 264,
  },
  {
    _id: "5ff05f0dec33d6674335e4ff",
    name: "+()r",
    description:
      "Geniş zaman çekim eki ender olarak bağımsız ad yapımında kullanılmıştır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:51.169Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 265,
  },
  {
    _id: "5ff05f0dec33d6674335e500",
    name: "+(g)Ar-",
    description:
      "%bETü renk adlarından geçişsiz fiil üretir (%iağar-, %isarğar-, %ikızğar-, %iköger-). Diğer adlardan geçişli fiil üretir (%ibaşğar-, %ikutğar-,  %ioŋar-, %isuvğar-).",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:51.223Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 266,
  },
  {
    _id: "5ff05f0dec33d6674335e501",
    name: "+(g)ArU",
    description:
      "%bETü sıfatlardan yön zarfı inşa eder. +rU ekli örneklerde hece düşmesi barizdir. %bTTü /g/ sesi düşer ve son ünlü daralır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:51.277Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 267,
  },
  {
    _id: "5ff05f0dec33d6674335e502",
    name: "+(g)Iç",
    description:
      "%bTTü fiillerden özne ve eylem adı yapar. Olasılıkla +Iş veya +mIş partisip ekinin varyant bir biçimidir (%ibaşlangıç = başlamış?, %ibilgiç = bilmiş?).",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:51.331Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 268,
  },
  {
    _id: "5ff05f0dec33d6674335e503",
    name: "+(g)Uç",
    description: "+(g)Aç maddesine bakınız.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:51.391Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 269,
  },
  {
    _id: "5ff05f0dec33d6674335e504",
    name: "+(g)Uk",
    description:
      "%bETü +Uk partisip ekinin varyant biçimidir. +Uk maddesine bakınız.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:51.445Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 270,
  },
  {
    _id: "5ff05f0dec33d6674335e505",
    name: "+(g)Ur-",
    description:
      "%bETü fiilden geçişli ve ettirgen (faktitif) fiil üretir. %bTTü /g/ sesi düşer. 17. yy’dan sonra küçük ses uyumu uyarınca +Ir-/+Ur- biçimini alır. %bETü %ikar-, %ikır- ve %itur- gibi tek heceli bazı fiillerin arkaik devirde bu ekle inşa edilmiş olması mümkün görünüyor.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:51.499Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 271,
  },
  {
    _id: "5ff05f0dec33d6674335e506",
    name: "+(I)n",
    description:
      "%bETü ad ve sıfatlardan zaman ve mekân zarfı üretir. Çoğu zaman +In, bazen +An biçimi kullanılır. Zarf daha sonra bazı örneklerde sıfat (%iuzun) veya ad (%iöğün) işlevi kazanmıştır. %bTTü nadiren +In, çoğu zaman +lAyIn biçimi tercih edilmiştir (%iöğleyin > %iöğlen).",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:51.553Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 272,
  },
  {
    _id: "5ff05f0dec33d6674335e507",
    name: "+tAy",
    description:
      "%bMoğ %iquralday (kurultay) sözcüğünden esinlenen bu ek %bYTü kurum ve toplantı adları yapımında kullanılmıştır.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-01-02T11:54:51.607Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
    id_depr: 273,
  },
  {
    _id: "614825e391869e57a9822b9d",
    name: "+AlgA",
    description: "",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "6148262791869e57a9822b9e",
    name: "+An-",
    description: "",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "61482a8791869e57a9822ba6",
    name: "+ArgA",
    description: "",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "61482aef91869e57a9822ba7",
    name: "+At2",
    description:
      "%bYTü birkaç örnekte görülen bu ek muhtemelen addan fiil üreten +A- ile +Ut partisip ekinin bileşimidir. %iÖz > %iöz-e-mek > %iöze-t. ",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "61482ca191869e57a9822bac",
    name: "+çAl",
    description: "",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "61482ce991869e57a9822bad",
    name: "+dAk",
    description: "",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "61482d4e91869e57a9822baf",
    name: "+(g)ArU-",
    description: "",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "6148301091869e57a9822bb6",
    name: "+ImsA-",
    description: "+sA- maddesine bakınız.",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "6148338191869e57a9822bbb",
    name: "+(n)Az",
    description:
      "%bTTü geç birkaç örnekte fiilden yapıca muğlak adlar üretir. %bYTü bağnaz %bTTü kurnaz örneğinden analoji yoluyla türetilmiştir",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "6148342591869e57a9822bbd",
    name: "+sI-",
    description: "",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
  {
    _id: "6148354891869e57a9822bc1",
    name: "+tA-",
    description: "",
    language: {
      _id: "5fef828d1678a972d9472539",
    },
    timeCreated: "2021-09-20T00:00:00.000Z",
    timeUpdated: "1970-01-01T00:00:00.000Z",
  },
];
module.exports = affixes;
