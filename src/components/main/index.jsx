import React, { Component } from 'react';
import { ReactComponent as Character } from '../../assets/img-character.svg';
import { ReactComponent as Floor } from '../../assets/img-floor.svg';
import { ReactComponent as Sombra } from '../../assets/img-sombra.svg';
import { ReactComponent as ImgBackground } from '../../assets/img-background.svg';
import { ReactComponent as Blob } from '../../assets/blob-1.svg';
import { ReactComponent as BlobBorder } from '../../assets/rectangle.svg';
import { ReactComponent as Rectangle35 } from '../../assets/rectangle-35.svg';

import './style.css';


class Main extends Component {


    _handlePageDevs() {

    }

    render() {
        return (
            <section>
                <div className='main-texto'>
                    <h2>O maior banco de devs do Brasil</h2>

                    <p>Não importa se front ou back end, fazer networking é muito importante.
                        Faça parte da maior comunidade de desenvolvedores brasileiros.</p>

                    <button
                        type='button'
                        
                        onClick={(event) => {
                            event.preventDefault();
                            this._handlePageDevs();
                            
                        }}
                    >
                        Entre agora
                    </button>
                    <div className='borda-botao'></div>

                </div>

                <div>
                    <Rectangle35 className='rectangle-35' />
                </div>

                <div>
                    <Blob className='blob' />
                </div>

                <div>
                    <BlobBorder className='blobBorder' />
                </div>

                <div>
                    <ImgBackground className='imgBackground' />
                </div>

                <div>
                    <Floor className='floor' />
                </div>

                <div>
                    <Character className='character' />
                </div>

                <div>
                    <Sombra className='sombra' />
                </div>

            </section>
        );
    }
}

export default Main;
