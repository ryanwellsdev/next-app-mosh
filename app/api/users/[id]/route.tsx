import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
    request: NextRequest,
    { params }: { params: { id: number } }) {
    // fetch data from db
    // if not found return 404 error
    // else return data
    if (params.id > 10)
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    return NextResponse.json({ id: 1, name: 'Ryan' })
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: number } }) {
    // Validate the request body
    // if the request body is invalid, return 400
    const body = await request.json()
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 })
    if (params.id > 10)
        // If Doesnt exist, return 404
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    // Otherwise Update return
    return NextResponse.json({ id: 1, name: body.name })
    // Return the updated user
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: number } }) {
    //fetch user from db
    //if user not found, 404 error
    //otherwise, we delete the user
    //return 200
    if (params.id > 10)
        return NextResponse.json({ error: 'User doesnt exist' }, { status: 404 })
    return NextResponse.json({});
}