"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entityes/user.entity");
exports.UserSchema = new typeorm_1.EntitySchema({
    name: 'User',
    target: user_entity_1.User,
    columns: {
        id: {
            type: Number,
        },
        name: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
        },
    },
    relations: {
        customers: {
            type: 'one-to-many',
            target: 'Customer',
        },
    },
});
//# sourceMappingURL=new.js.map