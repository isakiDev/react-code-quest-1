import { useEffect } from "react"
import { useDraws } from "../../draws"

export const DrawsAdminPage = () => {
  const { onGetDraws, draws } = useDraws()

  useEffect(() => {
    onGetDraws()
  }, [])

  return (
    <section>
      {
        draws?.map(draw => <h1>{draw.name}</h1>)
      }
    </section>
  )
}
