import React from 'react'
import './Main.scss'
import Poster from '../../assets/img/poster.jpg'
import Joung from '../../assets/img/joung.jpg'
import Remember from '../../assets/img/rememberall.jpg'
import Basik from '../../assets/img/basikinstinkt.jpg'
import Advetisement from '../../assets/img/advetisement.jpg'

const Main = () => {
    return (
        <div className='main'>
            <div className='container'>
                <div className='main__body'>
                    <div className='main__poster'>
                        <img src={Poster} alt='Poster' />
                    </div>
                    <div className='main__subtitle'>Шэ́рон Вонн Сто́ун (англ. Sharon Vonne Stone; род. 10 марта 1958) — американская актриса, продюсер и бывшая модель. Лауреат премий «Золотой глобус» и «Эмми», а также номинантка на премию «Оскар».</div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Joung} alt='Joung' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Шэрон Стоун родилась и выросла в Мидвилле, штат Пенсильвания, и в 1975 году окончила среднюю школу. Вскоре она поступила в институт и параллельно, приняв участие в одном из конкурсов красоты, получила контракт с модельным агентством Форда, после чего отправилась покорять Париж и Милан.</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Покончив с карьерой модели, Стоун переехала в Нью-Йорк и вскоре дебютировала в ролях второго плана в картинах "Вспомнить всё", "Специалист", "Вне закона".</div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Remember} alt='Remember all' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Basik} alt='Basik instinkt' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Шэрон Стоун добилась наибольшей известности исполнением роли в фильме «Основной инстинкт», а в фильме «Казино» Мартина Скорсезе Стоун получила «Золотой глобус».</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__poster'>
                        <img src={Advetisement} alt='Advetisement' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main