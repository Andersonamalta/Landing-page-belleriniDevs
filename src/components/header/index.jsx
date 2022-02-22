import React, { Component } from 'react';
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Discord } from '../../assets/discord.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './style.css';

const linkedinLink = "https://www.linkedin.com/authwall?trk=gf&trkInfo=AQFTJkQmXOZhMwAAAX8R6AowDKVXwlHk8Fnw70UfnkOFZQ3-jzQ5H9MWhSWshFjWgpTBnIXmWDSM16nJvAwit7je4X4futwEUeoBnjFlBpJw2ycV4ZauXpheFUD4jqofNbegC8A=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fcomunidadeballerini%2F";
const facebookLink = "https://www.facebook.com";
const discordLink = "https://discord.com/invite/ballerini";

class Header extends Component {

    render() {
        return (
            <section className='principal'>

                <div className='logo-social'>
                    <a href={linkedinLink} target="_blank" rel='noreferrer noopener'><Linkedin className='linkedin' /></a>
                    <a href={facebookLink} target="_blank" rel='noreferrer noopener'><Facebook className='facebook' /></a>
                    <a href={discordLink} target="_blank" rel='noreferrer noopener'><Discord className='discord' /></a>
                </div>

                <div className='logo-principal'>
                    <Logo className="logo" />
                    <label className='logo-nome'><a href='/'>Ballerini Devs</a></label>
                </div>

            </section>
        );
    }
}

export default Header;