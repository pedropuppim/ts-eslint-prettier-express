import { Request, Response } from "express";
import { Service } from "typedi";
import { Controller, Get } from "routing-controllers";
import MessagesRepository from "@repositories/messagesRepository";

@Controller("/messages")
@Service()
export default class MessagesController {
    constructor(private readonly messagesRepository: MessagesRepository) {}

    @Get("/")
    list = async (_request: Request, response: Response) => {
        return { data: "messages" };
    };
}
