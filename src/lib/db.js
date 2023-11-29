import { createClient } from 'redis';

const client = createClient({
    password: process.env.CLIENT_PASSWORD,
    socket: {
        host: process.env.CLIENT_HOST,
        port: process.env.CLIENT_PORT
    }
});
client.on('error', err => console.log('Redis Client Error', err))
if (!client.isOpen) {
    client.connect();
}

export { client }