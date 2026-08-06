import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({name: 'heading', title: 'Heading', type: 'string'}),
        defineField({name: 'subtext', title: 'Subtext', type: 'text', rows: 3}),
        defineField({
          name: 'ctas',
          title: 'Call to Actions',
          type: 'array',
          of: [{type: 'cta'}],
          validation: (Rule) => Rule.max(2),
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {hotspot: true},
        }),
      ],
    }),
    defineField({
      name: 'faqItems',
      title: 'FAQ Items',
      type: 'array',
      of: [{type: 'faqItem'}],
    }),
    defineField({
      name: 'serviceAreas',
      title: 'Service Areas',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'seoText',
      title: 'SEO Text',
      description: 'Discreet marketing/SEO paragraph shown near the bottom of the homepage.',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'contactHeading',
      title: 'Contact Heading',
      type: 'string',
    }),
    defineField({
      name: 'contactCopy',
      title: 'Contact Copy',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'featuredServices',
      title: 'Featured Services',
      description: 'Services shown in the homepage grid, in this order.',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'service'}]}],
      validation: (Rule) => Rule.max(3),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Home Page'}
    },
  },
})
