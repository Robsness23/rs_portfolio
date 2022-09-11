import './Contact.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { contact } from '../../portfolio'

const Contact = () => {
  if (!contact.email) return null
  const { social } = contact

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      
      {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                target='_blank'
                rel='noreferrer'
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}


      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>

            {social.linkedin && (
              <a
                href={social.linkedin}
                target='_blank'
                rel='noreferrer'
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
    </section>
  )
}

export default Contact
