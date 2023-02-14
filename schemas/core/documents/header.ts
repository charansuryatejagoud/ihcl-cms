import { MdViewHeadline } from "react-icons/md";
export default {
  title: 'Header',
  name: 'header',
  type: 'document',
  icon: MdViewHeadline,
  initialValue: {
    variant: 'default',
  },
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Variant',
      name: 'variant',
      type: 'string',
      options: {
        list: [
          { title: 'mobile-default', value: 'mobile-default', },
          {title: 'default', value: 'default'}
        ],
      },
    },
    {
      name: "largeVariant",
      title: "Large Variant",
      type: "string",
      options: {
        list: [{title: 'default-1', value: 'default-1',}],
      },
    
    },
    {
      title: 'Path',
      name: 'path',
      type: 'string',
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
    },
    {
      title: 'Secondary Logo',
      name: 'secondaryLogo',
      type: 'image',
    },
    {
      title: 'Nav Items',
      name: 'navItems',
      type: 'array',
  of: [{ type: 'navigationItem' }],
    },
    {
      title: 'Login List',
      name: 'loginList',
      type: 'array',
      of: [{ type: 'navigationItem', }],
    },
    {  
        title: 'Cart Icon',
        name: 'cartIcon',
        type: 'array',
        of: [{ type: 'object',
    fields:[
        {
            title: 'Primary Cart Icon',
            name: 'primaryCartIcon',
            type: 'image'   
        },
        {
            title: 'Secondary Cart Icon',
            name: 'secondaryCartIcon',
            type: 'image'
        }
    ]
    }]
},
{  
  title: 'Profile Icon',
  name: 'profileIcon',
  type: 'array',
  of: [{ type: 'object',
fields:[
  {
      title: 'Primary Profile Icon',
      name: 'primaryProfileIcon',
      type: 'image'   
  },
  {
      title: 'Secondary Profile Icon',
      name: 'secondaryProfileIcon',
      type: 'image'
  }
]
}]
},
{
    name:"primaryAction",
    title:"Primary Action",
    type:"navigationItem"
},
{
    name:"secondaryAction",
    title:"Secondary Action",
    type:"navigationItem"
}
  ]
}