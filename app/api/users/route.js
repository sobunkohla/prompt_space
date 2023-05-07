export async function GET(request) {
// Handle GET request from /api/users
// Retrieves users from the database or any data source
const users = [
    {id:1 , name: 'John'},
    {id:2 , name: 'Jane'},
    {id:3 , name: 'Mary'},
]
// send users as a response 
    return new Response(JSON.stringify(users))
}