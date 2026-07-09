

export default async function page() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const user = await res.json()
  return (
    <div>
        {
            user.map((u:any)=>(
                <p key={u.id}>{u.name }$$</p>
                
            ))
        }
    </div>
  )
}

