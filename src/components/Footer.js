import React from 'react'
import {ReactComponent as GithubLogo} from '../assets/GitHub-Mark.svg'
import {ReactComponent as LinkedinLogo} from '../assets/LinkedIn_Logo.svg'
import {ReactComponent as Email} from '../assets/Envelope.svg'

function Footer() {
    return (
        <footer>
                <nav className='contact-icons-container'>
                <a className="contact-link" href='https://github.com/tikagan'>
                    <GithubLogo />
                </a>
                <a className="contact-link" href='https://www.linkedin.com/in/kritika-ganapathy-61893014b/'>
                    <LinkedinLogo />
                </a>
                <a className="contact-link" href='mailto:ganapathy.kritika@gmail.com'>
                    <Email />
                </a>
                </nav>
            </footer>
    )
}
export default Footer