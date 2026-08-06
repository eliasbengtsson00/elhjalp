import {defineField, defineType} from 'sanity'

const DAYS = [
  {title: 'Måndag', value: 'monday'},
  {title: 'Tisdag', value: 'tuesday'},
  {title: 'Onsdag', value: 'wednesday'},
  {title: 'Torsdag', value: 'thursday'},
  {title: 'Fredag', value: 'friday'},
  {title: 'Lördag', value: 'saturday'},
  {title: 'Söndag', value: 'sunday'},
]

export const openingHoursSpec = defineType({
  name: 'openingHoursSpec',
  title: 'Opening Hours',
  type: 'object',
  fields: [
    defineField({
      name: 'days',
      title: 'Days',
      type: 'array',
      of: [{type: 'string'}],
      options: {list: DAYS},
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'opens',
      title: 'Opens',
      description: 'e.g. 09:00',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'closes',
      title: 'Closes',
      description: 'e.g. 18:00',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {opens: 'opens', closes: 'closes'},
    prepare({opens, closes}) {
      return {title: `${opens ?? '?'} – ${closes ?? '?'}`}
    },
  },
})
