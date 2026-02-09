import type { CollectionConfig } from 'payload'

export const SupportCategories: CollectionConfig = {
  slug: 'support-categories',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
}
