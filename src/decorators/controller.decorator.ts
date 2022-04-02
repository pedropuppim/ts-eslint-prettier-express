import { Router } from "express";
import Container from "typedi";
import { RouteDefinition } from "./model/RouteDefinition";

export const router = Router();

export const Controller = (prefix: string): ClassDecorator => {
    return (target: any) => {
        Reflect.defineMetadata("prefix", prefix, target);
        if (!Reflect.hasMetadata("routes", target)) {
            Reflect.defineMetadata("routes", [], target);
        }
        const routes: Array<RouteDefinition> = Reflect.getMetadata("routes", target);
        const instance: any = Container.get(target);
        routes.forEach((route: RouteDefinition) => {
            router[route.method](`${prefix}${route.path}`, instance[route.methodName].bind(instance));
            console.log(route.path);
        });
    };
};
