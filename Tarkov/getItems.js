//import { request, gql } from 'graphql-request'
const request = require('graphql-request');
const gql = require('graphql-request');


const query = gql`
{
    itemsByName(name: "m855a1"){
        id
        name
        shortName
    }
}
`
request('https://api.tarkov.dev/graphql', query).then((data)=> console.log(data))