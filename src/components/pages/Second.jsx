import React from 'react'
import './Second.scss'
import Sharon from '../../assets/img/sharon.jpg'
import Advetisementtwo from '../../assets/img/advetisementtwo.jpg'
import Basar from '../../assets/img/basar.jpg'
import Words from '../../assets/img/words.jpg'
import Finishtwo from '../../assets/img/finishtwo.jpg'

const Second = () => {
    return (
        <div className='second'>
            <div className='container'>
                <div className='second__body'>
                    <div className='second__sharon'>
                        <img src={Sharon} alt='Sharon' />
                    </div>
                    <div className='second__subtitle'>Шэрон Стоун не раз участвовала в рекламных кампаниях известных брендов.</div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Advetisementtwo} alt='Advetisement two' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'> Дерзкая, сексуальная и яркая – именно такой привыкли видеть Шэрон Стоун ее поклонники. Шэрон Стоун воплощает собой представление о современной женщине, на которую и ориентированы все коллекции ...</div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Basar} alt='Basar' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Words} alt='Words' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='second__titles'>Голливудская звезда стала лицом французского бренда очков Alain Afflelou</div>
                    <div className='second__from'>
                        <div className='second__video'>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/i2uMMw24mxQ?si=Q0Wxap4URsP_Fhx1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className='second__sharon'>
                        <img src={Finishtwo} alt='Finish page two' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second