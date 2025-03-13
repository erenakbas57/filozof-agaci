import { BookAIcon, Bookmark, ExternalLink } from "lucide-react";

export interface Philosopher {
  id: string;
  name?: string;
  birthYear?: number;
  deathYear?: number | null;
  period?: string;
  movement?: string;
  nationality?: string;
  image?: string;
  bio?: string;
  keyIdeas?: string[];
  influenced?: string[];
  influence?: string[];
  book?: string[];
  icons?: {
    icon?: any;
    color?: string;
  }[];
}

export const philosophers: Philosopher[] = [
  {
    id: "650",
    name: null,
    birthYear: -650,
    bio: "MÖ 650"
  },
  {
    id: "-470",
    name: null,
    birthYear: -470,
    bio: "SOKRATES"
  },
  {
    id: "0",
    name: null,
    birthYear: 0,
    bio: "İSA"
  },




















  {
    id: "solon",
    name: "Solon",
    birthYear: -640,
    deathYear: -560,
    period: "Antik Çağ",
    movement: "Sokrates Öncesi Felsefe",
    nationality: "Yunan",
    image: "img/solon.jpg",
    bio: "7 Bilgeden biriydi. Solon, Atina'da doğmuş bir devlet adamı, hukukçu ve şairdir. Atina'da toplumsal ve siyasi reformlar yapmıştır.",
    keyIdeas: [],
    influenced: [],
    influence: [],
    book: [],

    icons: [
      {
        icon: Bookmark,
        color: "bg-red-600",
      }
    ]
  },

  {
    id: "pittakos",
    name: "Pittakos",
    birthYear: -640,
    deathYear: -568,
    period: "Antik Çağ",
    movement: "Sokrates Öncesi Felsefe",
    nationality: "Yunan",
    image: "img/pittakos.jpg",
    bio: "Pittakos, eski bir Midilli askeri generali ve Yunanistan'ın Yedi Bilgesinden biriydi.",
    keyIdeas: [],
    influenced: [],
    influence: [],
    book: [],
    icons: [
      {
        icon: Bookmark,
        color: "bg-red-600",
      }
    ]
  },
  {
    id: "periandros",
    name: "Periandros",
    birthYear: -630,
    deathYear: -585,
    period: "Antik Çağ",
    movement: "Sokrates Öncesi Felsefe",
    nationality: "Korint",
    image: "img/periandros.jpg",
    bio: "7 Bilgeden biriydi. Korinthos tiranıydı. Üretimi ve ticareti destekledi, köle satın almayı yasakladı. Onun zamanında Korinthos görülmemiş bir refah düzeyine ulaşmıştı. Bütün bu olumlu çabalarına karşın zalim bir yönetici olarak tanınmıştı.",
    keyIdeas: [],
    influenced: [],
    influence: [],
    book: [],
    icons: [
      {
        icon: Bookmark,
        color: "bg-red-600",
      }
    ]
  },
  {
    id: "thales",
    name: "Thales",
    birthYear: -624,
    deathYear: -546,
    period: "Antik Çağ",
    movement: "Sokrates Öncesi Felsefe",
    nationality: "Yunan",
    image: "img/thales.jpg",
    bio: "Miletli Thales, İyonya'nın Milet şehrinde doğmuş bir antik Yunan matematikçi, astronom ve Sokrates öncesi filozof. Thales, İyonya Aydınlanması'nın başlatıcısı ve Antik Yunan'ın kurucu isimlerinden biri olarak kabul edilen Yedi Bilge'den biridir.",
    keyIdeas: [
      "Su, evrenin temel maddesidir.",
      "Doğa olaylarını doğa kanunlarıyla açıklamak",
    ],
    influenced: [],
    influence: [],
    book: [],
    icons: [
      {
        icon: Bookmark,
        color: "bg-red-600",
      }
    ]
  },
  {
    id: "anaksimandros",
    name: "Anaksimandros",
    birthYear: -610,
    deathYear: -546,
    period: "Antik Çağ",
    movement: "Sokrates Öncesi Felsefe",
    nationality: "Milet",
    image: "img/anaksimandros.jpg",
    bio: "Anaksimandros, Miletoslu bir Yunan filozofudur. Thales'in öğrencisi ve halefidir. Evrenin temel maddesini sınırsızı olarak tanımlamıştır.",
    keyIdeas: [
      "Sınırsız, evrenin temel maddesidir.",
      "Evrenin sınırsız ve sonsuz olduğu"
    ],
    influenced: ["Thales"],
    influence: [],
    book: [],
    icons: []
  },
  {
    id: "khilon",
    name: "Khilon",
    birthYear: -600,
    deathYear: -520,
    period: "Antik Çağ",
    movement: "Sokrates Öncesi Felsefe",
    nationality: "Sparta",
    image: "img/khilon.jpg",
    bio: "Yedi Bilge'den biri olup, Damagetes’in oğludur.",
    keyIdeas: [
      "Kendi kendini kontrol et",
      "Bir kişinin kendisini bilmesi, hayatını iyi yaşamasının ilk adımıdır"
    ],
    influenced: [],
    influence: [],
    book: [],
    icons: [
      {
        icon: Bookmark,
        color: "bg-red-600",
      }
    ]
  },
  {
    id: "bias",
    name: "Bias",
    birthYear: -600,
    deathYear: -530,
    period: "Antik Çağ",
    movement: "Sokrates Öncesi Felsefe",
    nationality: "Priene",
    image: "img/bias.jpg",
    bio: "Bias, 7 Bilgeden biridir.  Hukukçu Bias çok iyi bir söylevciymiş, ancak sözü sanat yapanların tersine yalnızca doğrular adına konuşurmuş.",
    keyIdeas: [],
    influenced: [],
    influence: [],
    book: [],
    icons: [
      {
        icon: Bookmark,
        color: "bg-red-600",
      }
    ]
  },
  {
    id: "kleobulos",
    name: "Kleobulos",
    birthYear: -630,
    deathYear: -530,
    period: "Antik Çağ",
    movement: "Sokrates Öncesi Felsefe",
    nationality: "Lindos",
    image: "img/kleobulos.jpg",
    bio: "Kleobulos, Yedi Bilge'den biri",
    keyIdeas: [],
    influenced: [],
    influence: [],
    book: [],
    icons: [
      {
        icon: Bookmark,
        color: "bg-red-600",
      }
    ]
  },
  {
    id: "theophrastus",
    name: "Theophrastus",
    birthYear: -371,
    deathYear: -287,
    period: "Antik Çağ",
    movement: "Peripatetikler",
    nationality: "Yunan",
    image: "img/theophrastus.jpg",
    bio: "Theophrastus, Eresoslu bir Yunan filozof ve doğa bilimcidir. Aristoteles'in öğrencisidir. Bitki bilimi ve botanik alanında çalışmıştır.",
    keyIdeas: [],
    influenced: [],
    influence: [],
    book: [],
    icons: []
  },
  {
    id: "anakharsis",
    name: "Anakharsis",
    birthYear: -600,
    deathYear: -550,
    period: "Antik Çağ",
    movement: "Sokrates Öncesi Felsefe",
    nationality: "İskit",
    image: "img/anakharsis.jpg",
    bio: "Anakharsis, Antik Yunan'da bir filozof ve kültürel eleştirmen olarak bilinir. Yunan kültürünü sorgulayan düşünceleriyle tanınmıştır.",
    keyIdeas: [],
    influenced: [],
    influence: [],
    book: [],
    icons: []
  },
  {
    id: "anaksimenes",
    name: "Anaksimenes",
    birthYear: -585,
    deathYear: -525,
    period: "Antik Çağ",
    movement: "Sokrates Öncesi Felsefe",
    nationality: "Milet",
    image: "img/anaksimenes.jpg",
    bio: "Anaksimenes, doğa filozofu ve geleneksel olarak Batı dünyasının ilk filozofları kabul edilen Miletos'lu üç düşünürün sonuncusudur. Thales'in öğrencisidir. Hava'nın evrenin temel maddesi olduğunu savunmuştur.",
    keyIdeas: [
      "Tüm canlıların ruhu vardır",
      "Hava, evrenin temel maddesidir",
    ],
    influenced: ["Thales"],
    influence: [],
    book: [],
    icons: []
  },
  {
    id: "ksenofanes",
    name: "Ksenofanes",
    birthYear: -570,
    deathYear: -478,
    period: "Antik Çağ",
    movement: "Tektanrıcılık",
    nationality: "Kolofon",
    image: "img/ksenofanes.jpg",
    bio: "Ksenofanes, Antik Yunan filozofudur. Elea Okulu'nun kurucusu olarak kabul edilir. Geleneklere, dolayısıyla da Yunan sporcularının yüceltilmesine, kehanetlere ve özellikle de halkının insan biçimli çoktanrıcılık anlayışına karşı çıkmıştır.",
    keyIdeas: [
      "Tek tanrı inancı",
      "Tanrı, evren ve insan",
      "Tanrı, evrenin temel maddesidir",
    ],
    influenced: [],
    influence: [],
    book: [],
    icons: []
  },
  {
    id: "pythagoras",
    name: "Pythagoras",
    birthYear: -570,
    deathYear: -495,
    period: "Antik Çağ",
    movement: "Pisagorculuk",
    nationality: "Yunan",
    image: "img/pythagoras.jpg",
    bio: "Pythagoras, Antik Yunan matematikçi ve filozofudur. Matematik, müzik ve astronomi alanlarında çalışmıştır. Pythagoras Teoremi'ni keşfetmiştir.",
    keyIdeas: [],
    influenced: [],
    influence: [],
    book: [],
    icons: []
  },
  {
    id: "heraklitos",
    name: "Heraklitos",
    birthYear: -535,
    deathYear: -475,
    period: "Antik Çağ",
    movement: "Oluş ve Akış Felsefesi",
    nationality: "Yunan",
    image: "img/heraklitos.jpg",
    bio: "Heraklitos, Efesli bir Yunan filozofudur. 'Aynı nehire iki kez hem giriyoruz hem girmiyoruz' sözüyle tanınır. Değişim ve dönüşüm üzerine düşünceleriyle ünlüdür.",
    keyIdeas: [
      "Her şey akar",
      "Değişim ve dönüşüm",
      "Çelişki ve uyum"
    ],
    influenced: ["Thales", "Anaksimandros", "Anaksimenes"],
    influence: [],
    book: [
      "Fragmanlar",
    ],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-green-300",
      }
    ]
  },






































  {
    id: "parmenides",
    name: "Parmenides",
    birthYear: -515,
    deathYear: -460,
    period: "Antik Çağ",
    movement: "Varlık Felsefesi",
    nationality: "Yunan",
    image: "img/parmenides.jpg",
    bio: "Parmenides, Elea'da doğmuş Antik Yunan filozofudur. Varlık ve yokluk, değişim ve sabitlik gibi konular üzerine düşünmüş ve varlık felsefesinin temellerini atmıştır.",
    keyIdeas: [
      "Varlık ve yokluk",
      "Değişim ve sabitlik",
      "Varlık, değişmezdir"
    ],
    influenced: ["Heraklitos", "Pisagor", "Ksenofanes"],
    influence: [],
    book: [],
    icons: []
  },
  {
    id: "anaksagoras",
    name: "Anaksagoras",
    birthYear: -500,
    deathYear: -428,
    period: "Antik Çağ",
    movement: "İyon Felsefesi",
    nationality: "Yunan",
    image: "img/anaksagoras.jpg",
    bio: "Anaksagoras, Clazomenae'de doğmuş bir Yunan filozofudur. Felsefesinde evrenin temel maddesini akıl olarak tanımlamıştır.",
    keyIdeas: [
      "Akıl, evrenin temel maddesidir.",
      "Evrenin düzeni ve akıl tarafından yönetildiği"
    ],
    influenced: ["Platon", "Aristoteles"],
    influence: [],
    book: [],
    icons: []
  },
  {
    id: "leukippos",
    name: "Leukippos",
    birthYear: -500,
    deathYear: -440,
    period: "Antik Çağ",
    movement: "Atomculuk",
    nationality: "Yunan",
    image: "img/leukippos.jpg",
    bio: "Leukippos, Antik Yunan filozofu ve Atomculuk felsefesinin kurucusu olarak kabul edilir. Atom kavramını geliştirmiştir.",
    keyIdeas: [
      "Atomculuk",
      "Evrenin sonsuzluğu",
      "Rastlantısal evrim"
    ],
    influenced: ["Demokritos", "Epicurus", "Lucretius"],
    influence: [],
    book: [],
    icons: []
  },
  {
    id: "empedokles",
    name: "Empedokles",
    birthYear: -490,
    deathYear: -430,
    period: "Antik Çağ",
    movement: "İyon Felsefesi",
    nationality: "Yunan",
    image: "img/empedokles.jpg",
    bio: "Empedokles, Antik Yunan filozofu ve doğa bilimcidir. Dört element teorisini geliştirmiştir. Evrenin temel maddesini dört element olarak tanımlamıştır.",
    keyIdeas: [
      "Dört element teorisi",
      "Sevgi ve nefret",
      "Evrenin sonsuzluğu"
    ],
    influenced: ["Platon", "Aristoteles"],
    influence: [],
    book: [],
    icons: []
  },
  {
    id: "protagoras",
    name: "Protagoras",
    birthYear: -490,
    deathYear: -420,
    period: "Antik Çağ",
    movement: "Sofistler",
    nationality: "Yunan",
    image: "img/protagoras.jpg",
    bio: "Protagoras, Yunan sofistlerinden biridir. İnsanın ölçüsü üzerine düşünceleriyle tanınır. 'İnsan her şeyin ölçüsüdür' sözüyle ünlüdür.",
    keyIdeas: [
      "İnsanın ölçüsü",
      "Bilgi ve gerçeklik",
      "İyi ve kötü"
    ],
    influenced: ["Platon", "Aristoteles"],
    influence: [],
    book: [],
    icons: []
  },
  {
    id: "gorgias",
    name: "Gorgias",
    birthYear: -485,
    deathYear: -380,
    period: "Antik Çağ",
    movement: "Sofistler",
    nationality: "Yunan",
    image: "img/gorgias.jpg",
    bio: "Gorgias, Yunan sofistlerinden biridir. Retorik ve dil felsefesi üzerine çalışmıştır. İkna ve inandırma sanatı üzerine düşünceleriyle tanınır.",
    keyIdeas: [
      "Retorik",
      "Dil felsefesi",
      "İkna ve inandırma sanatı"
    ],
    influenced: ["Platon", "Aristoteles"],
    influence: [],
    book: [],
    icons: []
  },
  {
    id: "socrates",
    name: "Sokrates",
    birthYear: -469,
    deathYear: -399,
    period: "Antik Çağ",
    movement: "Klasik Yunan Felsefesi",
    nationality: "Yunan",
    image: "img/sokrates.jpg",
    bio: "Sokrates, Atina'da doğmuş bir Antik Yunan filozofudur. Batı felsefesinin kurucularından biri olarak kabul edilir. Hiçbir yazılı eser bırakmamıştır; öğretileri, öğrencisi Platon'un diyaloglarında aktarılmıştır. Sokrates'in felsefi yöntemi, sistematik sorgulama üzerine kuruluydu.",
    keyIdeas: [
      "Bilmediğini bilmek",
      "Sokratik yöntem",
      "Erdem bilgidir",
      "Kendini bil"
    ],
    influenced: [],
    influence: [],
    book: [],
    icons: []
  },
  {
    id: "demokritos",
    name: "Demokritos",
    birthYear: -460,
    deathYear: -370,
    period: "Antik Çağ",
    movement: "Atomculuk",
    nationality: "Yunan",
    image: "img/demokritos.jpg",
    bio: "Demokritos, Antik Yunan filozofu ve doğa bilimcidir. Atomculuk felsefesinin kurucusu olarak kabul edilir. Atom kavramını geliştirmiştir.",
    keyIdeas: [
      "Atomculuk",
      "Evrenin sonsuzluğu",
      "Rastlantısal evrim"
    ],
    influenced: ["Epikur", "Lucretius", "Gassendi"],
    influence: [],
    book: [],
    icons: []
  },
  {
    id: "antisthenes",
    name: "Antisthenes",
    birthYear: -445,
    deathYear: -365,
    period: "Antik Çağ",
    movement: "Kinikler",
    nationality: "Yunan",
    image: "img/antisthenes.jpg",
    bio: "Antisthenes, Atina'da doğmuş Antik Yunan filozofudur. Sokrates'in öğrencisi ve Kinikler okulunun kurucusudur. İnsanın doğal yaşam tarzını savunmuştur.",
    keyIdeas: [
      "Doğal yaşam tarzı",
      "Mutluluk, erdemli yaşamda bulunur",
      "İhtiyaçlarla sınırlı yaşam"
    ],
    influenced: ["Zenon", "Kleanthes", "Ksenokrates"],
    influence: [],
    book: [],
    icons: []
  },
  {
    id: "aristippos",
    name: "Aristippos",
    birthYear: -435,
    deathYear: -356,
    period: "Antik Çağ",
    movement: "Kinikler",
    nationality: "Yunan",
    image: "img/aristippos.jpg",
    bio: "Aristippos, Antik Yunan filozofu ve Kinikler okulunun kurucusu olan Sokrates'in öğrencisidir. Aristippos, hazcılık felsefesini benimsemiştir.",
    keyIdeas: [
      "Hazcılık",
      "Mutluluk, hazda bulunur",
      "İhtiyaçlarla sınırlı yaşam"
    ],
    influenced: ["Zenon", "Kleanthes", "Ksenokrates"],
    influence: [],
    book: [],
    icons: []
  },
  {
    id: "platon",
    name: "Platon",
    birthYear: -428,
    deathYear: -348,
    period: "Antik Çağ",
    movement: "Klasik Yunan Felsefesi",
    nationality: "Yunan",
    image: "img/platon.jpg",
    bio: "Platon, Atina'da soylu bir ailede doğmuş Antik Yunan filozofudur. Sokrates'in öğrencisi ve Aristoteles'in hocasıdır. Akademi'yi kurmuş ve diyalog formunda birçok eser yazmıştır. İdealar kuramı ile ünlüdür.",
    keyIdeas: [
      "İdealar kuramı",
      "Mağara alegorisi",
      "İdeal devlet",
      "Ruh kuramı"
    ],
    influenced: ["Aristoteles", "Plotinus", "Augustinus", "Batı Felsefesi"],
    influence: [],
    book: [
      "Sokrates'in Savunması",
      "Devlet",
      "Şölen",
    ],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-green-300",
      }
    ]
  },
  {
    id: "diyojen",
    name: "Diyojen",
    birthYear: -412,
    deathYear: -323,
    period: "Antik Çağ",
    movement : "Kinikler",
    nationality: "Sinop",
    image: "img/diyojen.jpg",
    bio: "Diyojen, Sinoplu bir filozof ve Kinikler okulunun kurucusudur. Kinik felsefesini yaşayarak öğreten ilk filozoftur. Atina'da felsefi düşüncelerini sergilemiştir.",
    keyIdeas: [
      "Doğal yaşam tarzı",
      "Mutluluk, erdemli yaşamda bulunur",
      "İhtiyaçlarla sınırlı yaşam"
    ],
    influenced: ["Krates", "Zenon", "Kleanthes"],
    influence: [],
    book: [],
    icons: []
  },
  {
    id: "aristotle",
    name: "Aristoteles",
    birthYear: -384,
    deathYear: -322,
    period: "Antik Çağ",
    movement: "Aristotelesçilik",
    nationality: "Yunan",
    image: "img/aristoteles.jpg",
    bio: "Aristoteles, Antik Yunan filozofu, Platon'un öğrencisi ve Büyük İskender'in eğitmenidir. Mantık, fizik, metafizik, etik, politika, biyoloji ve edebiyat gibi birçok alanda eserler vermiştir. Sistematik düşüncesiyle bilinir.",
    keyIdeas: [
      "Madde ve form",
      "Dört neden",
      "Altın orta",
      "Mantık sistemi"
    ],
    influenced: ["İbn Sina", "Aquinas", "Skolastik felsefe", "Modern bilim"],
    influence: [],
    book: [
      "Metafizik",
      "Nikomakhos'a Etik",
      "Fizik",
    ],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-green-300",
      }
    ]
  },
  {
    id: "epikur",
    name: "Epikur",
    birthYear: -341,
    deathYear: -270,
    period: "Antik Çağ",
    movement: "Epikürcülük",
    nationality: "Yunan",
    image: "img/epikur.jpg",
    bio: "Epikur, Antik Yunan filozofu ve Epikürcüler okulunun kurucusudur. Mutluluk ve haz üzerine düşünceleriyle tanınır. Epikürcülük, hazcılık felsefesini benimsemiştir.",
    keyIdeas: [
      "Mutluluk, hazda bulunur",
      "Hazcılık",
      "Dostluk ve dostluk ilişkileri"
    ],
    influenced: [],
    influence: [],
    book: [
      "Mektuplar",
      "Doğanın Yanılgıları"
    ],
    icons: []
  },
  {
    id: "hrisippos",
    name: "Hrisippos",
    birthYear: -271,
    deathYear: -180,
    period: "Antik Çağ",
    movement: "Stoacılar",
    nationality: "Yunan",
    image: "img/hrisippos.jpg",
    bio: "Hrisippos, Antik Yunan Stoacı filozofudur. Stoacı felsefenin en önemli temsilcilerinden biridir. Mantık ve etik üzerine düşünceleriyle tanınır.",
    keyIdeas: [
      "Mantık ve etik",
      "Mantık sistemi",
      "Erdem ve erdemli yaşam"
    ],
    influenced: ["Seneca", "Epiktetos", "Marcus Aurelius"],
    influence: [],
    book: [],
    icons: []
  },
  {
    id: "epiktetos",
    name: "Epiktetos",
    birthYear: 50,
    deathYear: 135,
    period: "Antik Çağ",
    movement: "Stoacılar",
    nationality: "Roma",
    image: "img/epiktetos.jpg",
    bio: "Epiktetos, Antik Roma Stoacı filozofudur. Stoacı felsefenin en önemli temsilcilerinden biridir. İç huzur ve özgürlük üzerine düşünceleriyle tanınır.",
    keyIdeas: [
      "Kendi iç huzurunu bul",
      "Kendi içsel özgürlüğünü kazan",
      "Kendi içsel huzurunu koru"
    ],
    influenced: ["Montaigne", "Nietzsche", "Emerson"],
    influence: [],
    book: [
      "Discourses",
      "Enchiridion"
    ],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-green-300",
      }
    ]
  },
  {
    id: "marcus-aurelius",
    name: "Marcus Aurelius",
    birthYear: 121,
    deathYear: 180,
    period: "Antik Çağ",
    movement: "Stoacılar",
    nationality: "Roma",
    image: "img/aurelius.jpg",
    bio: "Marcus Aurelius, Roma İmparatorluğu'nun son büyük Stoacı filozofudur. Meditations adlı eseri ile tanınır. İmparatorluk döneminde yaşamıştır.",
    keyIdeas: [
      "Kendini kontrol et",
      "Kendi iç huzurunu bul",
      "Kendine yönelik çalışma"
    ],
    influenced: ["Montaigne", "Nietzsche", "Emerson"],
    influence: [],
    book: [
      "Meditations"
    ],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-green-300",
      }
    ]
  },




  {
    id: "boethius",
    name: "Boethius",
    birthYear: 480,
    deathYear: 524,
    period: "Orta Çağ",
    movement: "Hristiyan Felsefesi",
    nationality: "Roma",
    image: "img/boethius.jpg",
    bio: "Boethius, Roma İmparatorluğu'nun son dönemlerinde yaşamış bir filozof ve devlet adamıdır. Felsefe ve teoloji alanlarında eserler vermiştir.",
    keyIdeas: [
      "Kader ve özgürlük",
      "Tanrı'nın varlığı",
      "İyi ve kötü"
    ],
    influenced: ["Aquinas", "Dante", "Chaucer"],
    influence: [],
    book: [
      "Consolation of Philosophy"
    ],
    icons: []
  }
];
