export default{
    name:"portableText",
    title:"Portable Text",
    type:"document",
    fields:[
        {
            name:"blockContent",
            title:"Block Content",
            type:"array",
            of:[
                {
                    type:"test"
                }
            ]
        }
    ]
}