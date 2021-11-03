"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let Customer = class Customer {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Customer.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Customer.prototype, "nameOrganization", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Customer.prototype, "phoneNumber", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Customer.prototype, "financialDebt", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.User, user => user.customers),
    __metadata("design:type", user_entity_1.User)
], Customer.prototype, "user", void 0);
Customer = __decorate([
    typeorm_1.Entity('customers')
], Customer);
exports.Customer = Customer;
//# sourceMappingURL=customer.entity.js.map