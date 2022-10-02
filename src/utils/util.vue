<script>
import IconGithub from "../components/icons/IconGithub.vue";
import IconIg from "../components/icons/IconIg.vue";
import IconLinkedIn from "../components/icons/IconLinkedIn.vue";
import IconTwitter from "../components/icons/IconTwitter.vue";

export const tools = [
  {
    title: "Vscode",
  },
  {
    title: "IntelliJ Idea",
  },
  {
    title: "Sublime",
  },
  {
    title: "Postman",
  },
  {
    title: "DBeaver",
  },
  {
    title: "Postman",
  },
  {
    title: "Github",
  },
  {
    title: "Gitlab",
  },
];

export const frameWorkLibrary = [
  {
    title: "Vue Js",
  },
  {
    title: "React Js",
  },
  {
    title: "Tailwind",
  },
  {
    title: "Boostrap",
  },
  {
    title: "Material UI",
  },
  {
    title: "Chi",
  },
  {
    title: "Gorm",
  },
  {
    title: "Jwt",
  },
  {
    title: "Express Js",
  },
  {
    title: "Laravel",
  },
  {
    title: "SQL(MySQL, Postgre)",
  },
];

export const iconFooter = [
  {
    component: IconTwitter,
    url: '#'
  },
  {
    component: IconIg,
    url: 'https://www.instagram.com/jamilhamdihrp/?hl=id'
  },
  {
    component: IconLinkedIn,
    url: 'https://www.linkedin.com/in/jamil-hamdi-harahap-a0252b233/'
  },
  {
    component: IconGithub,
    url: 'https://github.com/jamilhamdiharahap'
  },
];

export const projek = [
  {
    title: 'Portofolio',
    desc: "Aplikasi berbasis web menggunakan vue js, aplikasi ini saya buat sebagai web portofolio.",
    path: 'p-3.png',
    tools: [{ name: 'Vue Js' }, { name: 'Tailwind' }],
    url: 'https://github.com/jamilhamdiharahap/portofolio-resume-vue'

  },
  {
    title: 'Toko makanan',
    desc: "Aplikasi berbasis web menggunakan react js yang di dalamnya terdapat fitur daftar makanan,keranjang pesanan, tujuan dibuatnya aplikasi ini untuk memenuhi tugas akhir pelatihan React js.",
    path: 'p-4.png',
    tools: [{ name: 'React Js' }, { name: 'ant design' }, { name: 'Axios' }, { name: 'Express Js' }],
    url: 'https://github.com/jamilhamdiharahap/reactJs-food'

  },
  {
    title: 'Jobs',
    desc: "Aplikasi berbasis web yang di dalamnya terdapat fitur fitur admin, user, tujuan dibuatnya aplikasi ini untuk memenuhi tugas akhir pelatihan PHP Lanjutan.",
    path: 'p-2.png',
    tools: [{ name: 'Laravel' }, { name: 'Boostrap' }],
    url: 'https://github.com/jamilhamdiharahap/laravel-7-jobs'
  },
];

export const projekSecond = [
  {
    title: 'Jasa Pengiriman',
    desc: "Aplikasi berbasis web yang di dalamnya terdapat fitur fitur cek ongkir, pengiriman, tujuan dibuatnya aplikasi ini untuk memenuhi tugas akhir pelatihan PHP fundamental.",
    path: 'p-1.png',
    tools: [{ name: 'Laravel' }, { name: 'Boostrap' }],
    url: 'https://github.com/jamilhamdiharahap/PHP-Native-Jasa-Pengiriman'
  },
  {
    title: 'Tiket',
    desc: "Projek berbasis API menggunkan router chi dan ORM gorm, tujuan dibuatnya aplikasi ini untuk memenuhi tugas akhir pelatihan Golang.",
    path: '',
    tools: [{ name: 'Golang' }, { name: 'Gorm' }, { name: 'Chi' }, { name: 'Redis' }, { name: 'Jwt' }],
    url: 'https://github.com/jamilhamdiharahap/buyT.com-Golang-'
  },
  {
    title: 'Shipping',
    desc: "Projek berbasis API menggunakan lumen dan jwt.",
    path: '',
    tools: [{ name: 'Lumen' }, { name: 'Jwt' }],
    url: '#'
  },
]


export const educations = [
  {
    major: 'Vue Js',
    school: 'Sinau Coding',
    year: 'September 2022 - Oktober 2022',
    desc: 'Aplikasi berbasis web yang di dalamnya terdapat fitur fitur cek ongkir, pengiriman, tujuan dibuatnya aplikasi ini untuk memenuhi tugas akhir pelatihan PHP fundamental.'

  },
  {
    major: 'Algorithms, Data Structures, Databases, Web, PHP, Laravel, Golang, and React',
    school: 'Pemberdayaan Umat Berkelanjutan',
    year: '2020 - 2022',
    desc: 'Aplikasi berbasis web yang di dalamnya terdapat fitur fitur cek ongkir, pengiriman, tujuan dibuatnya aplikasi ini untuk memenuhi tugas akhir pelatihan PHP fundamental.'
  },
  {
    major: 'D3 manajemen informatika',
    school: 'Universitas Nasional Pasim',
    year: '2020 - 2022',
    desc: 'Aplikasi berbasis web yang di dalamnya terdapat fitur fitur cek ongkir, pengiriman, tujuan dibuatnya aplikasi ini untuk memenuhi tugas akhir pelatihan PHP fundamental.'
  },
  {
    major: 'IPS',
    school: 'SMA Negeri 1 Batang Angkola',
    year: '2017 - 2020',
    desc: 'Aplikasi berbasis web yang di dalamnya terdapat fitur fitur cek ongkir, pengiriman, tujuan dibuatnya aplikasi ini untuk memenuhi tugas akhir pelatihan PHP fundamental.'
  },
  {
    major: '',
    school: 'Smp Negeri 1 Batang Angkola',
    year: '2014 - 2017',
    desc: 'Aplikasi berbasis web yang di dalamnya terdapat fitur fitur cek ongkir, pengiriman, tujuan dibuatnya aplikasi ini untuk memenuhi tugas akhir pelatihan PHP fundamental.'
  },
  {
    major: '',
    school: 'SD 101000 Muaratais',
    year: '2008 - 2014',
    desc: 'Aplikasi berbasis web yang di dalamnya terdapat fitur fitur cek ongkir, pengiriman, tujuan dibuatnya aplikasi ini untuk memenuhi tugas akhir pelatihan PHP fundamental.'
  },
];

export const experiences = [
  {
    role: "Algorithms and C Programming Instructor",
    organization: "Pemberdayaan Umat Berkelanjutan",
    year: 'September 2021 - January 2022',
    desc: 'Aplikasi berbasis web yang di dalamnya terdapat fitur fitur cek ongkir, pengiriman, tujuan dibuatnya aplikasi ini untuk memenuhi tugas akhir pelatihan PHP fundamental.'

  },
  {
    role: "Basisdata (mysql) and data structure (C) Instructor",
    organization: "Pemberdayaan Umat Berkelanjutan",
    year: 'January 2022 - May 2022',
    desc: 'Aplikasi berbasis web yang di dalamnya terdapat fitur fitur cek ongkir, pengiriman, tujuan dibuatnya aplikasi ini untuk memenuhi tugas akhir pelatihan PHP fundamental.'

  }
];

</script>