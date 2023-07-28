async function getUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')

	if (!res.ok) throw new Error('Failed to fetch data')

	return res.json()
}

export default async function Home() {
	const data = await getUsers()

	return (
		<main className='h-screen flex items-center justify-center'>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
		</main>
	)
}
