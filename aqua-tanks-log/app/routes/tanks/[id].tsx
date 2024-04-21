import { createRoute } from "honox/factory";

export default createRoute(async(c)=>{
    const { id } = c.req.param()
    const tank = await c.get("prisma").tank.findUnique({
        where:{
            id: Number(id)
        }
    })

    if(!tank) return c.render(<>水槽が見つかりません</>)

    return c.render(<>
        {tank?.title} { tank?.id}
    </>)
})