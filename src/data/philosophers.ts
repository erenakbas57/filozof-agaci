import { BookAIcon, Bookmark, ExternalLink } from "lucide-react";
import { PiNumberSevenBold } from "react-icons/pi";
import { TbLetterSSmall } from "react-icons/tb";

export interface Book {
  title: string;
  image: string;
  description: string;
}

export interface Philosopher {
  id: string;
  name?: string;
  birthYear?: number;
  deathYear?: number | null;
  period?: string;
  movement?: string;
  school?: string;
  nationality?: string;
  image?: string;
  bio?: string;
  keyIdeas?: string[];
  influenced?: string[];
  influence?: string[];
  book?: Book[];
  icons?: {
    icon?: any;
    color?: string;
  }[];
}

export const philosophers: Philosopher[] = [
  {
    id: "650",
    name: undefined,
    birthYear: -650,
    bio: "MÖ 650"
  },
  {
    id: "-470",
    name: undefined,
    birthYear: -470,
    bio: "SOKRATES"
  },
  {
    id: "0",
    name: undefined,
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
    school: "Yedi Bilge",
    nationality: "Yunan",
    image: "/img/solon.jpg",
    bio: "7 Bilgeden biriydi. Solon, Atina'da doğmuş bir devlet adamı, hukukçu ve şairdir. Atina'da toplumsal ve siyasi reformlar yapmıştır.",
    keyIdeas: [],
    influenced: [],
    influence: [],
    book: [],

    icons: [
      {
        icon: PiNumberSevenBold,
        color: "bg-green-600",
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
    school: "Yedi Bilge",
    nationality: "Yunan",
    image: "/img/pittakos.jpg",
    bio: "Pittakos, eski bir Midilli askeri generali ve Yunanistan'ın Yedi Bilgesinden biriydi.",
    keyIdeas: [],
    influenced: [],
    influence: [],
    book: [],
    icons: [
      {
        icon: PiNumberSevenBold,
        color: "bg-green-600",
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
    school: "Yedi Bilge",
    nationality: "Korint",
    image: "/img/periandros.jpg",
    bio: "7 Bilgeden biriydi. Korinthos tiranıydı. Üretimi ve ticareti destekledi, köle satın almayı yasakladı. Onun zamanında Korinthos görülmemiş bir refah düzeyine ulaşmıştı. Bütün bu olumlu çabalarına karşın zalim bir yönetici olarak tanınmıştı.",
    keyIdeas: [],
    influenced: [],
    influence: [],
    book: [],
    icons: [
      {
        icon: PiNumberSevenBold,
        color: "bg-green-600",
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
    school: "Milet Okulu",
    nationality: "Yunan",
    image: "/img/thales.jpg",
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
        icon: PiNumberSevenBold,
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
    school: "Milet Okulu",
    nationality: "Milet",
    image: "/img/anaksimandros.jpg",
    bio: "Anaksimandros, Miletoslu bir Yunan filozofudur. Thales'in öğrencisi ve halefidir. Evrenin temel maddesini sınırsızı olarak tanımlamıştır.",
    keyIdeas: [
      "Sınırsız, evrenin temel maddesidir.",
      "Evrenin sınırsız ve sonsuz olduğu"
    ],
    influenced: [],
    influence: ["Thales"],
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
    school: "",
    nationality: "Sparta",
    image: "/img/khilon.jpg",
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
        icon: PiNumberSevenBold,
        color: "bg-green-600",
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
    school: "",
    nationality: "Priene",
    image: "/img/bias.jpg",
    bio: "Bias, 7 Bilgeden biridir.  Hukukçu Bias çok iyi bir söylevciymiş, ancak sözü sanat yapanların tersine yalnızca doğrular adına konuşurmuş.",
    keyIdeas: [],
    influenced: [],
    influence: [],
    book: [],
    icons: [
      {
        icon: PiNumberSevenBold,
        color: "bg-green-600",
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
    school: "",
    nationality: "Lindos",
    image: "/img/kleobulos.jpg",
    bio: "Kleobulos, Yedi Bilge'den biri",
    keyIdeas: [],
    influenced: [],
    influence: [],
    book: [],
    icons: [
      {
        icon: PiNumberSevenBold,
        color: "bg-green-600",
      }
    ]
  },

  {
    id: "anakharsis",
    name: "Anakharsis",
    birthYear: -600,
    deathYear: -550,
    period: "Antik Çağ",
    movement: "Sokrates Öncesi Felsefe",
    school: "",
    nationality: "İskit",
    image: "/img/anakharsis.jpg",
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
    school: "Milet Okulu",
    nationality: "Milet",
    image: "/img/anaksimenes.jpg",
    bio: "Anaksimenes, doğa filozofu ve geleneksel olarak Batı dünyasının ilk filozofları kabul edilen Miletos'lu üç düşünürün sonuncusudur. Thales'in öğrencisidir. Hava'nın evrenin temel maddesi olduğunu savunmuştur.",
    keyIdeas: [
      "Tüm canlıların ruhu vardır",
      "Hava, evrenin temel maddesidir",
    ],
    influenced: [],
    influence: ["Thales"],
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
    school: "Elea Okulu",
    nationality: "Kolofon",
    image: "/img/ksenofanes.jpg",
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
    school: "Pisagorculuk",
    nationality: "Yunan",
    image: "/img/pythagoras.jpg",
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
    school: "Efes Okulu",
    nationality: "Yunan",
    image: "/img/heraklitos.jpg",
    bio: "Heraklitos, Efesli bir Yunan filozofudur. 'Aynı nehire iki kez hem giriyoruz hem girmiyoruz' sözüyle tanınır. Değişim ve dönüşüm üzerine düşünceleriyle ünlüdür.",
    keyIdeas: [
      "Her şey akar",
      "Değişim ve dönüşüm",
      "Çelişki ve uyum"
    ],
    influenced: [],
    influence: ["Thales", "Anaksimandros", "Anaksimenes"],
    book: [
      {
        title: "Fragmanlar",
        image: "/img/heraklitos.jpg",
        description: "Heraklitos'un günümüze ulaşan İngilizce fragmanları."
      }
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
    movement: "Varlık Felsefesi, Rasyonalizm, Determinizm",
    school: "Elea Okulu",
    nationality: "Yunan",
    image: "/img/parmenides.jpg",
    bio: "Parmenides, Elea'da doğmuş Antik Yunan filozofudur. Varlık ve yokluk, değişim ve sabitlik gibi konular üzerine düşünmüş ve varlık felsefesinin temellerini atmıştır.",
    keyIdeas: [
      "Evrende değişen hiçbir şey yoktur",
      "Varlık ve yokluk",
      "Değişim ve sabitlik",
      "Varlık, değişmezdir",
      "Varlık var olandır, hiçlik ya da var olamayan ise var değildir."
    ],
    influenced: [],
    influence: ["Heraklitos", "Pisagor", "Ksenofanes"],
    book: [
      {
        title: "Doğa Üzerine",
        image: "/img/parmenides.jpg",
        description: "Günümüze sadece Fragmanlar olarak İngilizce eserleri ulaşmıştır."
      }
    ],
    icons: []
  },
  {
    id: "anaksagoras",
    name: "Anaksagoras",
    birthYear: -500,
    deathYear: -428,
    period: "Antik Çağ",
    movement: "İyon Felsefesi",
    school: "Çoğulculuk Okulu",
    nationality: "Yunan",
    image: "/img/anaksagoras.jpg",
    bio: "Anaksagoras, Clazomenae'de doğmuş bir Yunan filozofudur. Felsefesinde evrenin temel maddesini akıl olarak tanımlamıştır.",
    keyIdeas: [
      "Akıl, evrenin temel maddesidir.",
      "Evrenin düzeni ve akıl tarafından yönetildiği"
    ],
    influenced: [],
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
    school: "Atomculuk",
    nationality: "Yunan",
    image: "/img/leukippos.jpg",
    bio: "Leukippos, Antik Yunan filozofu ve Atomculuk felsefesinin kurucusu olarak kabul edilir. Atom kavramını geliştirmiştir.",
    keyIdeas: [
      "Atomculuk",
      "Evrenin sonsuzluğu",
      "Rastlantısal evrim"
    ],
    influenced: [],
    influence: ["Demokritos", "Epicurus", "Lucretius"],
    book: [
      {
        title: "Atomcu Felsefe Fragmanları",
        image: "/img/leukippos.jpg",
        description: "Demokritos ile Leukippos'un Atomcu Felsefe Fragmanları."
      }
    ],
    icons: []
  },
  {
    id: "pherekydes",
    name: "Pherekydes",
    birthYear: -580,
    deathYear: -520,
    period: "Antik Çağ",
    movement: "Sokrates Öncesi Felsefe",
    school: "",
    nationality: "Samos",
    image: "/img/pherekydes.jpg", // fotoğrafı yok eklenecek
    bio: "Pherekydes, Samoslu bir Yunan filozofudur. Bazi kaynaklarda 7 bilgeden biri olarak anılır. Pisagor'un öğretmeni olduğu söylenir.",
    keyIdeas: [],
    influenced: [],
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
    movement: "",
    school: "",
    nationality: "Yunan",
    image: "/img/empedokles.jpg",
    bio: "Empedokles, Antik Yunan filozofu ve doğa bilimcidir. Dört element teorisini geliştirmiştir. Evrenin temel maddesini dört element olarak tanımlamıştır.",
    keyIdeas: [
      "Dört element teorisi",
      "Sevgi ve nefret",
      "Evrenin sonsuzluğu"
    ],
    influenced: [],
    influence: ["Heraklitos", "Pisagor", "Parmenides", "Ksenofanes"],
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
    school: "Sofizm Okulu",
    nationality: "Yunan",
    image: "/img/protagoras.jpg",
    bio: "Protagoras, Yunan sofistlerinden biridir. İnsanın ölçüsü üzerine düşünceleriyle tanınır. 'İnsan her şeyin ölçüsüdür' sözüyle ünlüdür.",
    keyIdeas: [
      "İnsanın ölçüsü",
      "Bilgi ve gerçeklik",
      "İyi ve kötü"
    ],
    influenced: [],
    influence: ["Parmenides", "Demokritos", "Elealı Zenon"],
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
    school: "Sofizm Okulu",
    nationality: "Yunan",
    image: "/img/gorgias.jpg",
    bio: "Gorgias, Yunan sofistlerinden biridir. Retorik ve dil felsefesi üzerine çalışmıştır. İkna ve inandırma sanatı üzerine düşünceleriyle tanınır.",
    keyIdeas: [
      "Retorik",
      "Hiç bir şey yoktur; bir şey varsa bile bilinemez; bilinse bile başkalarına bildirilemez.",
    ],
    influenced: [],
    influence: ["Empedokles", "Parmenides", "Elealı Zenon"],
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
    school: "Klasik Yunan Okulu",
    nationality: "Yunan",
    image: "/img/sokrates.jpg",
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
    movement: "Atomculuk, Materyalizm",
    school: "Atomculuk Okulu",
    nationality: "Yunan",
    image: "/img/demokritos.jpg",
    bio: "Demokritos, Antik Yunan filozofu ve doğa bilimcidir. Atomculuk felsefesinin kurucusu olarak kabul edilir. Atom kavramını geliştirmiştir.",
    keyIdeas: [
      "Atomculuk",
      "Evrenin sonsuzluğu",
      "Rastlantısal evrim"
    ],
    influenced: [],
    influence: ["Leukippos", "Parmenides", "Samoslu Melissus"],
    book: [],
    icons: []
  },
  {
    id: "theophrastus",
    name: "Theophrastus",
    birthYear: -371,
    deathYear: -287,
    period: "Antik Çağ",
    movement: "Peripatetikler, Botanik",
    school: "",
    nationality: "Yunan",
    image: "/img/theophrastus.jpg",
    bio: "Theophrastus, Eresoslu bir Yunan filozof ve doğa bilimcidir. Aristoteles'in öğrencisidir. Bitki bilimi ve botanik alanında çalışmıştır.",
    keyIdeas: [],
    influenced: [],
    influence: [],
    book: [],
    icons: []
  },
  {
    id: "melissus",
    name: "Melissus",
    birthYear: -490,
    deathYear: -430,
    period: "Antik Çağ",
    movement: "Elea Okulu",
    school: "Elea Okulu",
    nationality: "Yunan",
    image: "/img/melissus.jpg",
    bio: "Melissus, Elea Okulu'ndan bir Yunan filozofudur. Parmenides'in öğrencisidir. Varlık ve yokluk, değişim ve sabitlik gibi konular üzerine düşünmüş ve varlık felsefesinin temellerini atmıştır.",
    keyIdeas: [
      "Oluş bir kuruntuysa, evrenin nasıl yaratıldığını araştırmak boşuna,"
    ],
    influenced: [],
    influence: ["Parmenides", "Elealı Zeno"],
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
    school: "Kinikler Okulu",
    nationality: "Yunan",
    image: "/img/antisthenes.jpg",
    bio: "Antisthenes, Atina'da doğmuş Antik Yunan filozofudur. Sokrates'in öğrencisi ve Kinikler okulunun kurucusudur. İnsanın doğal yaşam tarzını savunmuştur.",
    keyIdeas: [
      "Doğal yaşam tarzı",
      "Mutluluk, erdemli yaşamda bulunur",
      "İhtiyaçlarla sınırlı yaşam"
    ],
    influenced: ["Diyojen", "Krates", "Kbrıslı Zenon"],
    influence: ["Gorgias", "Sokrates"],
    book: [
      {
        title: "Kinik Felsefe Fragmanları",
        image: "/book/kinik_felsefe_fragmanlari.jpg",
        description: "Diyojen ve Antisthenes'in Kinik Felsefe Fragmanları"
      },
    ],
    icons: [
      {
        icon: TbLetterSSmall,
        color: "bg-yellow-300",
      },
      {
        icon: BookAIcon,
        color: "bg-green-300",
      }
    ]
  },
  {
    id: "aristippos",
    name: "Aristippos",
    birthYear: -435,
    deathYear: -356,
    period: "Antik Çağ",
    movement: "Hedonizm",
    school: "Kirene Okulu",
    nationality: "Yunan",
    image: "/img/aristippos.jpg",
    bio: "Aristippos, Antik Yunan filozofu ve Kirene okulunun kurucusu olan Sokrates'in öğrencisidir. Aristippos, hazcılık felsefesini benimsemiştir.",
    keyIdeas: [
      "Hazcılık",
      "Mutluluk, hazda bulunur",
      "İhtiyaçlarla sınırlı yaşam"
    ],
    influenced: [],
    influence: ["Sokrates"],
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
    image: "/img/platon.jpg",
    bio: "Platon, Atina'da soylu bir ailede doğmuş Antik Yunan filozofudur. Sokrates'in öğrencisi ve Aristoteles'in hocasıdır. Akademi'yi kurmuş ve diyalog formunda birçok eser yazmıştır. İdealar kuramı ile ünlüdür.",
    keyIdeas: [
      "İdealar kuramı",
      "Mağara alegorisi",
      "İdeal devlet",
      "Ruh kuramı"
    ],
    influenced: [],
    influence: [],
    book: [
      {
        title: "Alkibiades", 
        image: "/book/platon_alkibiades.jpeg",
        description: ""
      },
      {
        title: "Büyük Hippias",
        image: "/book/platon_buyuk_hippias.jpeg",
        description: ""
      },
      {
        title: "Devlet Adamı",
        image: "/book/platon_devlet_adami.jpeg",
        description: ""
      },
      {
        title: "Devlet",
        image: "/book/platon_devlet.jpeg",
        description: ""
      },
      {
        title: "Euthydemos",
        image: "/book/platon_euthydemos.jpg",
        description: ""
      },
      {
        title: "Euthyphron",
        image: "/book/platon_euthyphron.jpg",
        description: ""
      },
      {
        title: "Gorgias",
        image: "/book/platon_gorgias.jpeg",
        description: ""
      },
      {
        title: "Hipparkos ",
        image: "/book/platon_hipparkos.jpg",
        description: ""
      },      
      {
        title: "İon",
        image: "/book/platon_ion.jpg",
        description: ""
      },
      {
        title: "Kratylos",
        image: "/book/platon_kratylos.jpg",
        description: ""
      },
      {
        title: "Kriton",
        image: "/book/platon_kriton.jpg",
        description: ""
      },
      {
        title: "Küçük Hippias",
        image: "/book/platon_kucuk_hippias.jpg",
        description: ""
      },

    ],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-green-300",
      },
      {
        icon: TbLetterSSmall,
        color: "bg-yellow-300",
      },
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
    image: "/img/diyojen.jpg",
    bio: "Diyojen, Sinoplu bir filozof ve Kinikler okulunun kurucusudur. Kinik felsefesini yaşayarak öğreten ilk filozoftur. Atina'da felsefi düşüncelerini sergilemiştir.",
    keyIdeas: [
      "Doğal yaşam tarzı",
      "Mutluluk, erdemli yaşamda bulunur",
      "İhtiyaçlarla sınırlı yaşam"
    ],
    influenced: [],
    influence: ["Antisthenes"],
    book: [],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-green-300",
      },
    ]
  },
  {
    id: "aristotle",
    name: "Aristoteles",
    birthYear: -384,
    deathYear: -322,
    period: "Antik Çağ",
    movement: "Aristotelesçilik",
    school: "",
    nationality: "Yunan",
    image: "/img/aristoteles.jpg",
    bio: "Aristoteles, Antik Yunan filozofu, Platon'un öğrencisi ve Büyük İskender'in eğitmenidir. Mantık, fizik, metafizik, etik, politika, biyoloji ve edebiyat gibi birçok alanda eserler vermiştir. Sistematik düşüncesiyle bilinir.",
    keyIdeas: [
      "Madde ve form",
      "Dört neden",
      "Altın orta",
      "Mantık sistemi"
    ],
    influenced: [],
    influence: [],
    book: [
      {
        title: "Metafizik",
        image: "/img/aristoteles.jpg",
        description: "Aristoteles'in Metafizik adlı eseri, varlık felsefesi üzerine düşüncelerini içerir."
      },
      {
        title: "Nikomakhos'a Etik",
        image: "/img/aristoteles.jpg",
        description: "Aristoteles'in etik felsefesi üzerine yazdığı eserlerden biridir."
      },
      {
        title: "Politika",
        image: "/img/aristoteles.jpg",
        description: "Aristoteles'in politik felsefesi üzerine yazdığı eserlerden biridir."
      },

    ],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-green-300",
      },
      {
        icon: TbLetterSSmall,
        color: "bg-yellow-300",
      },
    ]
  },
  {
    id: "epikur",
    name: "Epikur",
    birthYear: -341,
    deathYear: -270,
    period: "Antik Çağ",
    movement: "Epikürcülük",
    school: "Epikürcüler",
    nationality: "Yunan",
    image: "/img/epikur.jpg",
    bio: "Epikur, Antik Yunan filozofu ve Epikürcüler okulunun kurucusudur. Mutluluk ve haz üzerine düşünceleriyle tanınır. Epikürcülük, hazcılık felsefesini benimsemiştir.",
    keyIdeas: [
      "Mutluluk, hazda bulunur",
      "Hazcılık",
      "Dostluk ve dostluk ilişkileri"
    ],
    influenced: [],
    influence: [],
    book: [
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
    image: "/img/hrisippos.jpg",
    bio: "Hrisippos, Antik Yunan Stoacı filozofudur. Stoacı felsefenin en önemli temsilcilerinden biridir. Mantık ve etik üzerine düşünceleriyle tanınır.",
    keyIdeas: [
      "Mantık ve etik",
      "Mantık sistemi",
      "Erdem ve erdemli yaşam"
    ],
    influenced: [],
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
    image: "/img/epiktetos.jpg",
    bio: "Epiktetos, Antik Roma Stoacı filozofudur. Stoacı felsefenin en önemli temsilcilerinden biridir. İç huzur ve özgürlük üzerine düşünceleriyle tanınır.",
    keyIdeas: [
      "Kendi iç huzurunu bul",
      "Kendi içsel özgürlüğünü kazan",
      "Kendi içsel huzurunu koru"
    ],
    influenced: [],
    influence: [],
    book: [
      {
        "title": "Enkheiridion",
        "image": "/img/epiktetos.jpg",
        description: "Epiktetos'un Enkheiridion adlı eseri, Stoacı felsefenin temel prensiplerini içerir."
      }
    ],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-green-300",
      },

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
    image: "/img/aurelius.jpg",
    bio: "Marcus Aurelius, Roma İmparatorluğu'nun son büyük Stoacı filozofudur. Meditations adlı eseri ile tanınır. İmparatorluk döneminde yaşamıştır.",
    keyIdeas: [
      "Kendini kontrol et",
      "Kendi iç huzurunu bul",
      "Kendine yönelik çalışma"
    ],
    influenced: [],
    influence: [],
    book: [
      {
        title: "Meditasyonlar",
        image: "/img/aurelius.jpg",
        description: "Marcus Aurelius'un Meditations adlı eseri, Stoacı felsefenin temel prensiplerini içerir."
      }
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
    image: "/img/boethius.jpg",
    bio: "Boethius, Roma İmparatorluğu'nun son dönemlerinde yaşamış bir filozof ve devlet adamıdır. Felsefe ve teoloji alanlarında eserler vermiştir.",
    keyIdeas: [
      "Kader ve özgürlük",
      "Tanrı'nın varlığı",
      "İyi ve kötü"
    ],
    influenced: [],
    influence: [],
    book: [

    ],
    icons: []
  },

















  {
    id: "leonardo-da-vinci",
    name: "Leonardo da Vinci",
    birthYear: 1452,
    deathYear: 1519,
    period: "Rönesans",
    movement: "Rönesans Hümanizmi",
    nationality: "İtalyan",
    image: "/img/da-vinci.jpg",
    bio: "Leonardo da Vinci, Rönesans döneminin en önemli sanatçılarından ve bilim insanlarından biridir. Sanat, anatomi, mühendislik ve bilim alanlarında önemli katkılar yapmıştır.",
    keyIdeas: [
      "Sanat ve bilim bir bütündür",
      "Doğayı gözlemleyerek öğren",
      "Bilgiye sınır koyma"
    ],
    influenced: ["Michelangelo", "Galileo Galilei", "Francis Bacon"],
    influence: ["Platon", "Aristoteles"],
    book: [],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-blue-300",
      }
    ]
  },
  {
    id: "niccolo-machiavelli",
    name: "Niccolò Machiavelli",
    birthYear: 1469,
    deathYear: 1527,
    period: "Rönesans",
    movement: "Siyaset Felsefesi",
    nationality: "İtalyan",
    image: "/img/machiavelli.jpg",
    bio: "Niccolò Machiavelli, Rönesans döneminin önemli siyaset düşünürlerindendir. 'Prens' adlı eseriyle siyaset biliminin temellerini atmıştır. Realist bir yaklaşımla iktidar ve siyaset üzerine analizler yapmıştır.",
    keyIdeas: [
      "Amaca ulaşmak için her yol mubahtır",
      "Gerçekçi siyaset analizi",
      "İktidarın doğası"
    ],
    influenced: ["Thomas Hobbes", "Jean-Jacques Rousseau", "Friedrich Nietzsche"],
    influence: ["Platon", "Aristoteles", "Cicero"],
    book: [],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-red-300",
      }
    ]
  },
  {
    id: "francis-bacon",
    name: "Francis Bacon",
    birthYear: 1561,
    deathYear: 1626,
    period: "Aydınlanma",
    movement: "Bilimsel Yöntem",
    nationality: "İngiliz",
    image: "/img/bacon.jpg",
    bio: "Francis Bacon, bilimsel yöntemin öncülerindendir. Deney ve gözleme dayalı bilgi anlayışını savunmuştur. 'Novum Organum' adlı eseriyle bilim felsefesine katkıda bulunmuştur.",
    keyIdeas: [
      "Bilimsel yöntem",
      "Deney ve gözlem",
      "Bilginin gücü"
    ],
    influenced: ["John Locke", "Isaac Newton", "René Descartes"],
    influence: ["Aristoteles", "Platon"],
    book: [],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-green-300",
      }
    ]
  },
  {
    id: "voltaire",
    name: "Voltaire",
    birthYear: 1694,
    deathYear: 1778,
    period: "Aydınlanma",
    movement: "Aydınlanma Felsefesi",
    nationality: "Fransız",
    image: "/img/voltaire.jpg",
    bio: "Voltaire, Aydınlanma döneminin önde gelen düşünürlerindendir. Din, özgürlük ve insan hakları üzerine yazılar yazmıştır. Eleştirel düşünce ve hoşgörüyü savunmuştur.",
    keyIdeas: [
      "Hoşgörü",
      "Eleştirel düşünce",
      "Din ve özgürlük"
    ],
    influenced: ["Jean-Jacques Rousseau", "Thomas Paine", "Immanuel Kant"],
    influence: ["John Locke", "Montaigne"],
    book: [],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-yellow-300",
      }
    ]
  },
  {
    id: "david-hume",
    name: "David Hume",
    birthYear: 1711,
    deathYear: 1776,
    period: "Aydınlanma",
    movement: "Empirizm",
    nationality: "İskoç",
    image: "/img/hume.jpg",
    bio: "David Hume, empirizmin önemli temsilcilerindendir. Bilginin deneyimden geldiğini savunmuş ve nedensellik kavramını sorgulamıştır. Ahlak ve din felsefesi üzerine de çalışmalar yapmıştır.",
    keyIdeas: [
      "Empirizm",
      "Nedensellik eleştirisi",
      "Ahlak felsefesi"
    ],
    influenced: ["Immanuel Kant", "Adam Smith", "John Stuart Mill"],
    influence: ["John Locke", "George Berkeley"],
    book: [],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-purple-300",
      }
    ]
  },
  {
    id: "denis-diderot",
    name: "Denis Diderot",
    birthYear: 1713,
    deathYear: 1784,
    period: "Aydınlanma",
    movement: "Ansiklopedist",
    nationality: "Fransız",
    image: "/img/diderot.jpg",
    bio: "Denis Diderot, Aydınlanma döneminin önemli düşünürlerindendir. 'Ansiklopedi' projesiyle bilgiyi yaymayı amaçlamıştır. Materyalist ve ateist görüşleriyle tanınır.",
    keyIdeas: [
      "Ansiklopedi projesi",
      "Materyalizm",
      "Ateizm"
    ],
    influenced: ["Jean-Jacques Rousseau", "Voltaire", "Karl Marx"],
    influence: ["John Locke", "Francis Bacon"],
    book: [],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-indigo-300",
      }
    ]
  },
  {
    id: "jean-jacques-rousseau",
    name: "Jean-Jacques Rousseau",
    birthYear: 1712,
    deathYear: 1778,
    period: "Aydınlanma",
    movement: "Toplum Sözleşmesi",
    nationality: "Fransız",
    image: "/img/rousseau.jpg",
    bio: "Jean-Jacques Rousseau, toplum sözleşmesi teorisiyle tanınan bir filozoftur. İnsan doğası, eğitim ve siyaset üzerine önemli eserler vermiştir. 'Toplum Sözleşmesi' adlı eseri modern demokrasi teorisine katkıda bulunmuştur.",
    keyIdeas: [
      "Toplum sözleşmesi",
      "İnsan doğası",
      "Eğitim felsefesi"
    ],
    influenced: ["Immanuel Kant", "Karl Marx", "Friedrich Nietzsche"],
    influence: ["John Locke", "Thomas Hobbes"],
    book: [],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-pink-300",
      }
    ]
  },
  {
    id: "john-locke",
    name: "John Locke",
    birthYear: 1632,
    deathYear: 1704,
    period: "Aydınlanma",
    movement: "Empirizm",
    nationality: "İngiliz",
    image: "/img/locke.jpg",
    bio: "John Locke, empirizmin kurucularındandır. Bilginin deneyimden geldiğini savunmuştur. Siyaset felsefesinde 'doğal haklar' ve 'toplum sözleşmesi' kavramlarını geliştirmiştir.",
    keyIdeas: [
      "Empirizm",
      "Doğal haklar",
      "Toplum sözleşmesi"
    ],
    influenced: ["Voltaire", "Jean-Jacques Rousseau", "David Hume"],
    influence: ["Aristoteles", "Thomas Hobbes"],
    book: [],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-blue-300",
      }
    ]
  },
  {
    id: "baruch-spinoza",
    name: "Baruch Spinoza",
    birthYear: 1632,
    deathYear: 1677,
    period: "Aydınlanma",
    movement: "Rasyonalizm",
    nationality: "Hollandalı",
    image: "/img/spinoza.jpg",
    bio: "Baruch Spinoza, rasyonalist bir filozoftur. Tanrı ve doğa arasında bir birlik olduğunu savunmuştur. 'Etika' adlı eseriyle etik ve metafizik üzerine önemli katkılar yapmıştır.",
    keyIdeas: [
      "Rasyonalizm",
      "Tanrı ve doğa birliği",
      "Etik"
    ],
    influenced: ["Gottfried Wilhelm Leibniz", "Friedrich Nietzsche", "Albert Einstein"],
    influence: ["René Descartes", "Platon"],
    book: [],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-green-300",
      }
    ]
  },
  {
    id: "blaise-pascal",
    name: "Blaise Pascal",
    birthYear: 1623,
    deathYear: 1662,
    period: "Aydınlanma",
    movement: "Matematik ve Felsefe",
    nationality: "Fransız",
    image: "/img/pascal.jpg",
    bio: "Blaise Pascal, matematik ve felsefe alanlarında önemli katkılar yapmıştır. 'Pascal'ın Bahsi' adlı argümanıyla tanınır. Din ve bilim arasındaki ilişki üzerine düşünceler geliştirmiştir.",
    keyIdeas: [
      "Pascal'ın Bahsi",
      "Matematiksel düşünce",
      "Din ve bilim"
    ],
    influenced: ["René Descartes", "Voltaire", "Søren Kierkegaard"],
    influence: ["Augustinus", "Montaigne"],
    book: [],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-red-300",
      }
    ]
  },
  {
    id: "michel-de-montaigne",
    name: "Michel de Montaigne",
    birthYear: 1533,
    deathYear: 1592,
    period: "Rönesans",
    movement: "Hümanizm",
    nationality: "Fransız",
    image: "/img/montaigne.jpg",
    bio: "Michel de Montaigne, deneme türünün kurucusu olarak kabul edilir. İnsan doğası, ahlak ve toplum üzerine düşüncelerini 'Denemeler' adlı eserinde toplamıştır. Şüpheci bir yaklaşım benimsemiştir.",
    keyIdeas: [
      "Deneme türü",
      "Şüphecilik",
      "İnsan doğası"
    ],
    influenced: ["René Descartes", "Blaise Pascal", "Voltaire"],
    influence: ["Seneca", "Plutarkhos"],
    book: [],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-yellow-300",
      }
    ]
  },


  {
    id: "rene-descartes",
    name: "René Descartes",
    birthYear: 1596,
    deathYear: 1650,
    period: "Yeni Çağ",
    movement: "Rasyonalizm",
    nationality: "Fransa",
    image: "/img/descartes.jpg",
    bio: "René Descartes, modern felsefenin babası olarak bilinir. 'Düşünüyorum, öyleyse varım' sözüyle ünlüdür.",
    keyIdeas: [
      "Metodik şüphe",
      "Düşünüyorum, öyleyse varım",
      "Akılcılık"
    ],
    influenced: [],
    influence: [],
    book: [
      {
        title: "Meditasyonlar",
        image: "/img/descartes.jpg",
        description: "Descartes'in metafizik ve epistemoloji üzerine yazdığı felsefi eseridir."
      }
    ],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-blue-300",
      }
    ]
  },
  {
    id: "immanuel-kant",
    name: "Immanuel Kant",
    birthYear: 1724,
    deathYear: 1804,
    period: "Aydınlanma Çağı",
    movement: "Transandantal Idealizm",
    nationality: "Almanya",
    image: "/img/kant.jpg",
    bio: "Immanuel Kant, modern felsefenin en önemli figürlerinden biridir. Saf Aklın Eleştirisi adlı eseri ile tanınır.",
    keyIdeas: [
      "A priori bilgi",
      "Transandantal idealizm",
      "Ahlak yasası"
    ],
    influenced: [],
    influence: [],
    book: [
      {
        title: "Saf Aklın Eleştirisi",
        image: "/img/kant.jpg",
        description: "Kant'ın bilgi ve metafizik üzerine yazdığı en ünlü eseridir."
      }
    ],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-yellow-300",
      }
    ]
  },
  {
    id: "arthur-schopenhauer",
    name: "Arthur Schopenhauer",
    birthYear: 1788,
    deathYear: 1860,
    period: "19. Yüzyıl",
    movement: "Pessimizm, İdealizm",
    nationality: "Almanya",
    image: "/img/arthur-schopenhauer.jpg",
    bio: "Arthur Schopenhauer, irade ve temsil kavramları üzerine yoğunlaşan filozoflardan biridir.",
    keyIdeas: [
      "İrade ve temsil",
      "Hayat acıdır",
      "Sanat ve estetik"
    ],
    influenced: [],
    influence: [],
    book: [
      {
        title: "İrade ve Tasarım Olarak Dünya",
        image: "/img/schopenhauer.jpg",
        description: "Schopenhauer'in en önemli felsefi eseridir."
      }
    ],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-red-300",
      }
    ]
  },
  {
    id: "friedrich-nietzsche",
    name: "Friedrich Nietzsche",
    birthYear: 1844,
    deathYear: 1900,
    period: "19. Yüzyıl",
    movement: "Varoluşçuluk, Nihilizm",
    nationality: "Almanya",
    image: "/img/nietzsche.jpg",
    bio: "Friedrich Nietzsche, nihilizm ve güç istenci kavramlarıyla tanınan filozoflardan biridir.",
    keyIdeas: [
      "Tanrı öldü",
      "Güç istenci",
      "Üst insan"
    ],
    influenced: [],
    influence: [],
    book: [
      {
        title: "Böyle Buyurdu Zerdüşt",
        image: "/img/nietzsche.jpg",
        description: "Nietzsche'nin felsefi ve edebi eseridir."
      }
    ],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-purple-300",
      }
    ]
  },
  {
    id: "jean-paul-sartre",
    name: "Jean-Paul Sartre",
    birthYear: 1905,
    deathYear: 1980,
    period: "20. Yüzyıl",
    movement: "Varoluşçuluk",
    nationality: "Fransa",
    image: "/img/sartre.jpg",
    bio: "Jean-Paul Sartre, varoluşçuluk felsefesinin en önemli isimlerinden biridir.",
    keyIdeas: [
      "Varoluş özden önce gelir",
      "İnsan özgürlüğe mahkumdur",
      "Kendini gerçekleştirme"
    ],
    influenced: [],
    influence: [],
    book: [
      {
        title: "Varlık ve Hiçlik",
        image: "/img/sartre.jpg",
        description: "Sartre'ın varoluşçuluk üzerine yazdığı en önemli eserlerinden biridir."
      }
    ],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-orange-300",
      }
    ]
  },
  {
    id: "saint-augustine",
    name: "Saint Augustinus",
    birthYear: 354,
    deathYear: 430,
    period: "Orta Çağ",
    movement: "Hristiyan Felsefesi",
    nationality: "Roma",
    image: "/img/augustinus.jpg",
    bio: "Saint Augustinus, Batı Hristiyan felsefesinin en önemli düşünürlerinden biridir.",
    keyIdeas: [
      "Tanrı’nın varlığı",
      "İman ve akıl",
      "Özgür irade"
    ],
    influenced: [],
    influence: [],
    book: [
      {
        title: "İtiraflar",
        image: "/img/augustinus.jpg",
        description: "Augustinus'un otobiyografik felsefi eseri."
      }
    ],
    icons: [
      {
        icon: BookAIcon,
        color: "bg-teal-300",
      }
    ]
  }




];
