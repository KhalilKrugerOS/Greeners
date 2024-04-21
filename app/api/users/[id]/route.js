import { connectToDB } from "../../../../utils/database";
import User from "../../../../models/user";

export const GET = async (request, { params }) => {
    try {
        connectToDB();
        const data = await User.findOne({ _id: params.id });
        if (!data) {
            throw new Error("User not found");
        }
        return new Response(JSON.strangify(data), { status: 200 });
    } catch (error) {
        return new Response("Could not fetch data for user with ID: " + params.id, {
            status: 404,
        });
    }
};
