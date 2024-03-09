export const PUT_QUOTE = 'PUT_QUOTE'
export const GET_ALL_BLOGS = 'GET_ALL_BLOGS'

export const putQuote = (quote: string) => ({
    type: PUT_QUOTE,
    payload: quote
})

export const getAllBlogs = (blogs: []) => ({
    type: GET_ALL_BLOGS,
    payload: blogs
})