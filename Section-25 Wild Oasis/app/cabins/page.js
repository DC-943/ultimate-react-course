import Counter from "@/app/_components/Counter"

export default function Page() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users")
  // const data = await res.json()

  console.log(data)
  return (
    <div>
      <h1>Cabins pages</h1>
      {/* <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Counter users={data} /> */}
    </div>
  )
}
