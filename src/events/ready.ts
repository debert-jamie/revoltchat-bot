import { Presence } from "revolt-api/types/Users";
import { Event } from "../interfaces/event";
import { text } from "../config.json";

export const event: Event = {
    name: "ready",
    run: async function(client) {
        console.log(`${client.user?.username} is ready!`);
        client.users.edit({
            status: {
                text: text,
                presence: Presence.Online,
            },
        });
    },
};