export const schemaTypes = [
  {
    name: 'team',
    type: 'document',
    title: 'Team',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'designation',
        type: 'string',
        title: 'Designation',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
      },
      {
        name: 'DateOfYear',
        type: 'number',
        title: 'doy',
      },
    ],
  },
]
