import { gql } from "@apollo/client";


export const GET_CLIENTS = gql`
    query GET_CLIENTS{
        clients {
            id
            name
            email
            phone
          }
    }
`