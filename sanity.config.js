'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.jsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {singletonIds, structure} from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  document: {
    // Singleton types are edited via their fixed structure.js list items,
    // so exclude them from the global "+ New document" creation menu.
    newDocumentOptions: (prev) =>
      prev.filter((templateItem) => !singletonIds.has(templateItem.templateId)),
    // Singletons must always exist exactly once: block 'delete' and
    // 'duplicate' so editors can't remove the only instance or spawn a
    // second one outside the fixed structure.js list item.
    actions: (prev, {schemaType}) =>
      singletonIds.has(schemaType)
        ? prev.filter((action) => !['delete', 'duplicate'].includes(action.action))
        : prev,
  },
})
