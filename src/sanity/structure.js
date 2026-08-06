// https://www.sanity.io/docs/structure-builder-cheat-sheet

// Types that should only ever have a single instance, edited in place
// rather than listed/created like a normal document collection.
export const SINGLETON_TYPES = [
  {id: 'siteSettings', title: 'Site Settings'},
  {id: 'homePage', title: 'Home Page'},
  {id: 'aboutPage', title: 'About Page'},
  {id: 'contactPage', title: 'Contact Page'},
]

export const singletonIds = new Set(SINGLETON_TYPES.map((s) => s.id))

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      ...SINGLETON_TYPES.map(({id, title}) =>
        S.listItem()
          .title(title)
          .id(id)
          .child(S.document().schemaType(id).documentId(id)),
      ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !singletonIds.has(listItem.getId()),
      ),
    ])
