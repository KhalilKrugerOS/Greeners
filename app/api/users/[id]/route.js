import { connectToDB } from "../../../../utils/database";
import User from "../../../../models/user";

export const GET = async (request, { params }) => {
    try {
        connectToDB();
        const data = await User.findOne({ _id: params.id, email: params.email, picture: params.picture, username: params.username, joined: params.joined });
        if (!data) {
            throw new Error("User not found");
        }
        return new Response(data, { status: 200 });
    } catch (error) {
        return new Response("Could not fetch data for user with ID: " + params.id, {
            status: 404,
        });
    }
};
