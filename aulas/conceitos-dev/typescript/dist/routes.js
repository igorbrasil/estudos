"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        name: "igor",
        email: "igorsbr@gmail.com",
        password: "dfsdfsdf",
        techs: ["node", "java", { title: "teste", experience: 100 }],
    });
    return response.json(user);
}
exports.helloWorld = helloWorld;
