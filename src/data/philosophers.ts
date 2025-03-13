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
    influenced: ["Thales", "Anaksimandros", "Anaksimenes"],
    influence: [],
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
    influenced: ["Heraklitos", "Pisagor", "Ksenofanes"],
    influence: [],
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
    school: "Atomculuk",
    nationality: "Yunan",
    image: "/img/leukippos.jpg",
    bio: "Leukippos, Antik Yunan filozofu ve Atomculuk felsefesinin kurucusu olarak kabul edilir. Atom kavramını geliştirmiştir.",
    keyIdeas: [
      "Atomculuk",
      "Evrenin sonsuzluğu",
      "Rastlantısal evrim"
    ],
    influenced: ["Demokritos", "Epicurus", "Lucretius"],
    influence: [],
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
    influenced: ["Heraklitos", "Pisagor", "Parmenides", "Ksenofanes"],
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
    school: "Sofizm Okulu",
    nationality: "Yunan",
    image: "/img/protagoras.jpg",
    bio: "Protagoras, Yunan sofistlerinden biridir. İnsanın ölçüsü üzerine düşünceleriyle tanınır. 'İnsan her şeyin ölçüsüdür' sözüyle ünlüdür.",
    keyIdeas: [
      "İnsanın ölçüsü",
      "Bilgi ve gerçeklik",
      "İyi ve kötü"
    ],
    influenced: ["Parmenides", "Demokritos", "Elealı Zenon"],
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
    school: "Sofizm Okulu",
    nationality: "Yunan",
    image: "/img/gorgias.jpg",
    bio: "Gorgias, Yunan sofistlerinden biridir. Retorik ve dil felsefesi üzerine çalışmıştır. İkna ve inandırma sanatı üzerine düşünceleriyle tanınır.",
    keyIdeas: [
      "Retorik",
      "Hiç bir şey yoktur; bir şey varsa bile bilinemez; bilinse bile başkalarına bildirilemez.",
    ],
    influenced: ["Empedokles", "Parmenides", "Elealı Zenon"],
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
    influenced: ["Leukippos", "Parmenides", "Samoslu Melissus"],
    influence: [],
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
    influenced: ["Parmenides", "Elealı Zeno"],
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
    image: "/img/antisthenes.jpg",
    bio: "Antisthenes, Atina'da doğmuş Antik Yunan filozofudur. Sokrates'in öğrencisi ve Kinikler okulunun kurucusudur. İnsanın doğal yaşam tarzını savunmuştur.",
    keyIdeas: [
      "Doğal yaşam tarzı",
      "Mutluluk, erdemli yaşamda bulunur",
      "İhtiyaçlarla sınırlı yaşam"
    ],
    influenced: ["Zenon", "Kleanthes", "Ksenokrates"],
    influence: [],
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
    movement: "Kinikler",
    nationality: "Yunan",
    image: "/img/aristippos.jpg",
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
    image: "/img/platon.jpg",
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
    influenced: ["Krates", "Zenon", "Kleanthes"],
    influence: [],
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
    influenced: ["İbn Sina", "Aquinas", "Skolastik felsefe", "Modern bilim"],
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
    image: "/img/epiktetos.jpg",
    bio: "Epiktetos, Antik Roma Stoacı filozofudur. Stoacı felsefenin en önemli temsilcilerinden biridir. İç huzur ve özgürlük üzerine düşünceleriyle tanınır.",
    keyIdeas: [
      "Kendi iç huzurunu bul",
      "Kendi içsel özgürlüğünü kazan",
      "Kendi içsel huzurunu koru"
    ],
    influenced: ["Montaigne", "Nietzsche", "Emerson"],
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
    influenced: ["Montaigne", "Nietzsche", "Emerson"],
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
    influenced: ["Aquinas", "Dante", "Chaucer"],
    influence: [],
    book: [

    ],
    icons: []
  }
];
