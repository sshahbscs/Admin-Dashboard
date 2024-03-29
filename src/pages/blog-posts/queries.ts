import gql from "graphql-tag";

export const POST_CREATE_MUTATION = gql`
    mutation PostCreate($input: CreateOneBlogPostInput!) {
        createOneBlogPost(input: $input) {
            id
            title
            status
            categoryId
            category {
                id
                title
            }
            content
        }
    }
`;

export const POST_EDIT_MUTATION = gql`
    mutation PostEdit($input: UpdateOneBlogPostInput!) {
        updateOneBlogPost(input: $input) {
            id
            title
            status
            categoryId
            category {
                id
                title
            }
            content
        }
    }
`;

export const POSTS_LIST_QUERY = gql`
    query BlogPostsList(
        $paging: OffsetPaging!
        $filter: BlogPostFilter
        $sorting: [BlogPostSort!]!
    ) {
        blogPosts(paging: $paging, filter: $filter, sorting: $sorting) {
            nodes {
                id
                title
                categoryId
                category {
                    id
                    title
                }
                status
                content
                createdAt
            }
            totalCount
        }
    }
`;

export const POST_SHOW_QUERY = gql`
    query PostShow($id: ID!) {
        blogPost(id: $id) {
            id
            title
            status
            categoryId
            category {
                id
                title
            }
            content
            createdAt
        }
    }
`;

export const CATEGORIES_SELECT_QUERY = gql`
    query CategoriesSelect($filter: CategoryFilter!) {
        categories(filter: $filter) {
            nodes {
                id
                title
            }
        }
    }
`;
