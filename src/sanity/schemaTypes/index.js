// Documents
import {service} from './service'
import {teamMember} from './team'
import {siteSettings} from './siteSettings'
import {homePage} from './homePage'
import {aboutPage} from './aboutPage'
import {contactPage} from './contactPage'

// Objects
import {seo} from './seo'
import {socialLink} from './socialLink'
import {openingHoursSpec} from './openingHoursSpec'
import {cta} from './cta'
import {faqItem} from './faqItem'

export const schema = {
  types: [
    // Documents
    service,
    teamMember,
    siteSettings,
    homePage,
    aboutPage,
    contactPage,
    // Objects
    seo,
    socialLink,
    openingHoursSpec,
    cta,
    faqItem,
  ],
}
