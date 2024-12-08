import React from 'react'
import './Third.scss'
import Start from '../../assets/img/start.jpg'
import Prettywoman from '../../assets/img/prettywoman.jpg'
import Prettywomantwo from '../../assets/img/prettywomantwo.jpg'
import Beauty from '../../assets/img/beauty.jpg'
import Theend from '../../assets/img/theend.jpg'

const Third = () => {
    return (
        <div className='third'>
            <div className='container'>
                <div className='third__body'>
                    <div className='third__start'>
                        <img src={Start} alt='Start' />
                    </div>
                    <div className='third__titles'>ВСПОМНИТЬ ВСЕ (1990) ПЕРЕУБЕЖДЕНИЕ КУЭЙДА</div>
                    <div className='third__from'>
                        <div className='third__video'>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/w6GrnOxiGtk?si=kO2ihT3dZsY3ktnt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className='third__row'>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__photo'>
                                    <img src={Prettywoman} alt='Prettywoman' />
                                </div>
                            </div>
                        </div>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__photo'>
                                    <img src={Prettywomantwo} alt='Prettywomantwo' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='third__row'>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__photo'>
                                    <img src={Beauty} alt='Beauty' />
                                </div>
                            </div>
                        </div>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__text'>У Шэрон Стоун есть свое мнение о том, в чем заключается суть красоты. «По-настоящему красивая женщина всегда добра и к другим женщинам, и к людям вообще. Она не приемлет соперничества, интриг и подлостей», — говорит она.</div>
                            </div>
                        </div>
                    </div>
                    <div className='third__start'>
                        <img src={Theend} alt='Theend' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Third