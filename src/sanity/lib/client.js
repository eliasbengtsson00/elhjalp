import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disabled: revalidation is handled via next-sanity/live + the webhook, so we read straight from the API
  stega: {
    studioUrl: '/studio',
  },
})
