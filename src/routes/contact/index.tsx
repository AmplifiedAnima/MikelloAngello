import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact/')({
  component: RouteComponent,
})

function RouteComponent() {
  console.log('Trying to render contact route')
  return <div className="my-48">Hello "/contact/"!</div>
}
