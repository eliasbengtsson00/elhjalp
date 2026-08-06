import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'companyDetails',
      title: 'Company Details',
      type: 'object',
      fields: [
        defineField({name: 'address', title: 'Address', type: 'text', rows: 2}),
        defineField({name: 'orgNumber', title: 'Organization Number', type: 'string'}),
      ],
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'object',
      fields: [
        defineField({name: 'phone', title: 'Phone', type: 'string'}),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (Rule) => Rule.email(),
        }),
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{type: 'socialLink'}],
    }),
    defineField({
      name: 'registryUrl',
      title: 'Registry URL',
      description: 'Link to the Elsäkerhetsverket "Kolla elföretaget" registration.',
      type: 'url',
    }),
    defineField({
      name: 'geo',
      title: 'Geo Coordinates',
      type: 'object',
      fields: [
        defineField({name: 'lat', title: 'Latitude', type: 'number'}),
        defineField({name: 'lng', title: 'Longitude', type: 'number'}),
      ],
    }),
    defineField({
      name: 'openingHours',
      title: 'Opening Hours',
      type: 'array',
      of: [{type: 'openingHoursSpec'}],
    }),
    defineField({
      name: 'trustBadgeImage',
      title: 'Trust Badge Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'ctaFallbackText',
      title: 'CTA Fallback Text',
      description:
        'Shared "can\'t find what you need? contact us" copy shown on the services pages.',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
