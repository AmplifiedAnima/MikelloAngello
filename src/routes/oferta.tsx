import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/oferta')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/oferta"!</div>
}
