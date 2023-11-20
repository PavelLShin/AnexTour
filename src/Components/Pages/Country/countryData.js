import Andorra from './img/Andorra.png'
import Abkhazia from './img/Abkhazia.png'
import Armenia from './img/Armenia.png'
import Aruba from './img/Aruba.png'

import Brazil from './img/Brazil.png'
import Belgium from './img/Belgium.png'

import Hungray from './img/Hungray.png'
import Vietnam from './img/Vietnam.png'
import Venesuella from './img/Venesuella.png'

import Israel from './img/Israel.png'
import Italy from './img/Italy.png'
import Spain from './img/Spain.png'

import Quatar from './img/Quatar.png'
import Kipr from './img/Kipr.png'
import China from './img/China.png'
import CostaRica from './img/CostaRica.png'
import Cuba from './img/Cuba.png'

import Panama from './img/Panama.png'
import Portugal from './img/Portugal.png'
import Peru from './img/Peru.png'

import SA from './img/SA.png'
import Singapur from './img/Singapur.png'
import Serbia from './img/Serbia.png'

import Thailand from './img/Thailand.png'
import Tunisia from './img/Tunisia.png'
import Turkey from './img/Turkey.png'

import Nepal from './img/Nepal.png'
import Netherlands from './img/Netherlands.png'

const dataCountry = [
  {
    img: Andorra,
    nameCountry: 'Андорра',
    title: 'Виза, без сертификата',
    font: 'A',
    popular: false,
    slug: 'Андорра',
  },
  {
    img: Abkhazia,
    nameCountry: 'Абхазия',
    title: 'Без виз, без сертификата',
    font: 'A',
    popular: false,
    slug: 'Абхазия',
  },
  {
    img: Armenia,
    nameCountry: 'Армения',
    title: 'Без виз, без сертификата',
    font: 'A',
    popular: false,
    slug: 'Армения',
  },
  {
    img: Aruba,
    nameCountry: 'Аруба',
    title: 'Виза, без сертификата',
    font: 'A',
    popular: false,
    slug: 'Аруба',
  },

  {
    img: Belgium,
    nameCountry: 'Бельгия',
    title: 'Виза, без сертификата',
    font: 'Б',
    popular: false,
    slug: 'Бельгия',
  },

  {
    img: Brazil,
    nameCountry: 'Бразилия',
    title: 'Виза, без сертификата',
    font: 'Б',
    popular: false,
    slug: 'Бразилия',
  },

  {
    img: Venesuella,
    nameCountry: 'Венесуэла',
    title: 'Виза, без сертификата',
    font: 'В',
    popular: false,
    slug: 'Венесуэла',
  },

  {
    img: Hungray,
    nameCountry: 'Венгрия',
    title: 'Виза, без сертификата',
    font: 'В',
    popular: false,
    slug: 'Венгрия',
  },
  {
    img: Vietnam,
    nameCountry: 'Вьетнам',
    title: 'Без виз, без сертификата',
    font: 'В',
    popular: false,
    slug: 'Вьетнам',
  },

  {
    img: Israel,
    nameCountry: 'Израиль',
    title: 'Виза, без сертификата',
    font: 'И',
    popular: false,
    slug: 'Израиль',
  },

  {
    img: Spain,
    nameCountry: 'Испания',
    title: 'Без виз, без сертификата',
    font: 'И',
    popular: true,
    slug: 'Испания',
  },
  {
    img: Italy,
    nameCountry: 'Италия',
    title: 'Без виз, без сертификата',
    font: 'И',
    popular: false,
    slug: 'Италия',
  },
  {
    img: Quatar,
    nameCountry: 'Катар',
    title: 'Без виз, без сертификата',
    font: 'К',
    popular: false,
    slug: 'Катар',
  },

  {
    img: Kipr,
    nameCountry: 'Кипр',
    title: 'Виза, без сертификата',
    font: 'К',
    popular: false,
    slug: 'Кипр',
  },
  {
    img: China,
    nameCountry: 'Китай',
    title: 'Виза, без сертификата',
    font: 'К',
    popular: false,
    slug: 'Китай',
  },
  {
    img: CostaRica,
    nameCountry: 'Коста-Рика',
    title: 'Без виз, без сертификата',
    font: 'К',
    popular: false,
    slug: 'Коста-Рика',
  },
  {
    img: Cuba,
    nameCountry: 'Куба',
    title: 'Без виз, без сертификата',
    font: 'К',
    popular: true,
    slug: 'Куба',
  },

  {
    img: Peru,
    nameCountry: 'Перу',
    title: 'Виза, без сертификата',
    font: 'П',
    popular: false,
    slug: 'Перу',
  },
  {
    img: Panama,
    nameCountry: 'Панама',
    title: 'Без виз, без сертификата',
    font: 'П',
    popular: false,
    slug: 'Панама',
  },
  {
    img: Portugal,
    nameCountry: 'Португалия',
    title: 'Виза, без сертификата',
    font: 'П',
    popular: true,
    slug: 'Португалия',
  },

  {
    img: Serbia,
    nameCountry: 'Сербия',
    title: 'Виза, без сертификата',
    font: 'С',
    popular: true,
    slug: 'Сербия',
  },
  {
    img: SA,
    nameCountry: 'Саудовская Аравия',
    title: 'Виза, без сертификата',
    font: 'С',
    popular: false,
    slug: 'Саудовская Аравия',
  },
  {
    img: Singapur,
    nameCountry: 'Сингапур',
    title: 'Виза, без сертификата',
    font: 'С',
    popular: false,
    slug: 'Сингапур',
  },

  {
    img: Turkey,
    nameCountry: 'Турция',
    title: 'Без виз, без сертификата',
    font: 'Т',
    popular: true,
    slug: 'Турция',
  },
  {
    img: Thailand,
    nameCountry: 'Таиланд',
    title: 'Без виз, без сертификата',
    font: 'Т',
    popular: true,
    slug: 'Таиланд',
  },
  {
    img: Tunisia,
    nameCountry: 'Тунис',
    title: 'Без виз, без сертификата',
    font: 'Т',
    popular: false,
    slug: 'Тунис',
  },
  {
    img: Nepal,
    nameCountry: 'Непал',
    title: 'Без виз, без сертификата',
    font: 'Н',
    opular: false,
    slug: 'Непал',
  },
  {
    img: Netherlands,
    nameCountry: 'Нидерланды',
    title: 'Без виз, без сертификата',
    font: 'Н',
    opular: false,
    slug: 'Нидерланды',
  },
]
export default dataCountry
