"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSchema = void 0;
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("./entityes/customer.entity");
exports.CustomerSchema = new typeorm_1.EntitySchema({
    name: 'Customer',
    target: customer_entity_1.Customer,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        nameOrganization: {
            type: String,
        },
        phoneNumber: {
            type: String,
        },
        financialDebt: {
            type: Number,
        },
    },
    relations: {
        user: {
            type: 'many-to-one',
            target: 'User',
        },
    },
});
//# sourceMappingURL=new_2.js.map