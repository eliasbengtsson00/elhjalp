import {defineField, defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'intro',
      title: 'Intro Copy',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'teamSectionHeading',
      title: 'Team Section Heading',
      description: 'e.g. "Medarbetare"',
      type: 'string',
    }),
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'teamMember'}]}],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Contact Page'}
    },
  },
})
