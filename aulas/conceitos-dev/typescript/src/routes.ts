import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "igor",
    email: "igorsbr@gmail.com",
    password: "dfsdfsdf",
    techs: ["node", "java", { title: "teste", experience: 100 }],
  });
  return response.json(user);
}
