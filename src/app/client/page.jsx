'use client'

import { useState, useEffect } from 'react'

const Home = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		const getUsers = async () => {
			const res = await fetch('https://jsonplaceholder.typicode.com/users')

			if (!res.ok) throw new Error('Failed to fetch data')

			setData(await res.json())
		}

		getUsers()
	}, [])

	return (
		<main className='h-screen flex items-center justify-center'>
			{data.map(user => (
				<p key={user.id}>{user.name}</p>
			))}
		</main>
	)
}

export default Home
