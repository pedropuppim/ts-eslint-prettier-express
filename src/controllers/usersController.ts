import { Service } from "typedi";
import { Request, Response } from "express";
import { JsonController, Get, Post, Authorized } from "routing-controllers";
import UserRepository from "@repositories/userRepository";

@Service()
@JsonController("/users")
export default class UsersController {
    constructor(private readonly userRepository: UserRepository) {}

    @Authorized("Token")
    @Post("/")
    save(_request: Request, _response: Response) {
        return { message: "Save Users!" };
    }

    @Get("/")
    list = async (_request: Request, response: Response) => {
        return await this.userRepository.getAllUsers();
    };
}
