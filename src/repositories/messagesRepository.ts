import { Service } from "typedi";

interface User {
    name: string;
}

@Service()
export default class MessagesRepository {
    private readonly users: User[] = [{ name: "Emily" }, { name: "John" }, { name: "Jane" }];

    async getAllUsers(): Promise<User[]> {
        return this.users;
    }
}
