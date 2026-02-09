import type { CollectionConfig } from 'payload'

export const SupportPages: CollectionConfig = {
  slug: 'support-pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'category', '_status', 'updatedAt'],
  },
  versions: {
    drafts: true, // adds _status: draft|published
  },
  access: {
    read: ({ req }) => {
      // Public can read ONLY published content
      const isLoggedIn = Boolean(req.user)
      if (isLoggedIn) return true

      return {
        _status: { equals: 'published' },
      }
    },
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'support-categories',
      required: true,
    },
    { name: 'order', type: 'number', defaultValue: 0 },
    {
      name: 'body',
      type: 'textarea', // easiest: store Markdown here
      required: true,
      admin: { description: 'Write Markdown (recommended for Starlight).' },
    },
  ],
}
