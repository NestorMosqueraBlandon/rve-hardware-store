import gql from "graphql-tag";

export const LOAD_POST = gql`
    query post($slug: String!){
        getPost(slug: $slug){
            id
            title
            sanitizedHtml
            category
            slug
            createdAt
            image
            userphoto
            username

        }
    }
`