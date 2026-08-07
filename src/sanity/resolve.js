import {defineLocations} from 'sanity/presentation'

// Maps each document type to the frontend route(s) it renders on, so
// clicking a document in the Studio opens the right page in Presentation.
export const locations = {
  homePage: defineLocations({
    select: {},
    resolve: () => ({
      locations: [{title: 'Hemsida', href: '/'}],
    }),
  }),
  aboutPage: defineLocations({
    select: {},
    resolve: () => ({
      locations: [{title: 'Om oss', href: '/om-oss'}],
    }),
  }),
  contactPage: defineLocations({
    select: {},
    resolve: () => ({
      locations: [{title: 'Kontakt', href: '/kontakt'}],
    }),
  }),
  // Affects the global header/footer/JSON-LD on every page, so surface all
  // top-level routes rather than a single location.
  siteSettings: defineLocations({
    select: {},
    resolve: () => ({
      locations: [
        {title: 'Hemsida', href: '/'},
        {title: 'Tjänster', href: '/tjanster'},
        {title: 'Om oss', href: '/om-oss'},
        {title: 'Kontakt', href: '/kontakt'},
      ],
    }),
  }),
  service: defineLocations({
    select: {title: 'title', slug: 'slug.current'},
    resolve: (doc) => ({
      locations: [
        {
          title: doc?.title ?? 'Namnlös tjänst',
          href: `/tjanster/${doc?.slug ?? ''}`,
        },
        {title: 'Alla tjänster', href: '/tjanster'},
      ],
    }),
  }),
  teamMember: defineLocations({
    select: {name: 'name'},
    resolve: (doc) => ({
      locations: [{title: doc?.name ?? 'Medarbetare', href: '/kontakt'}],
    }),
  }),
}
