import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
import AddButton from '../islands/addButton'

const className = css`
  font-family: sans-serif;
`

export default createRoute(async (c) => {

  const tanks = await c.get("prisma").tank.findMany()
  return c.render(
    <div class={className}>
      <h1>Your anks</h1>
      <ul>
        {
          tanks.map(tank => <li>{tank.title}{tank.id}</li>)
        }
      </ul>
      <AddButton />
    </div>,
  )
})
