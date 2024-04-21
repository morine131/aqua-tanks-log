import { createRoute } from "honox/factory";

export const POST = createRoute(async(c)=>{
    await c.get("prisma").tank.create({
        data:{
            title: "new tank"
        }
    })

    return c.redirect("/")
})