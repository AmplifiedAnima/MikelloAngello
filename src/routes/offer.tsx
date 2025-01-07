import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/offer')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/oferta"!</div>
}
