import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from 'path';
import { User } from "./entities/User";

export default {
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    user: 'postgres',
    password: 'tnekf',
    dbName: 'lireddit',
    type: 'postgresql',
    entities: [Post, User],
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];