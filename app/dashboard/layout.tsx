
type Props = {
    children: React.ReactNode
}

export default function Dashboardlayout({children,}: Props) {
  return (
    <div>
        <h2>Dashboard Layout</h2>
      {children}
    </div>
  )
}
