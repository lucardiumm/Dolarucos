export async function POST(req: Request) {
    return Response.json({
        text: 'pa ti chama',
    }, {
        status: 200,
    })
}