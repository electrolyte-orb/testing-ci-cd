import { Navbar } from '@components';
import { useState } from 'react';

function App() {
	const [name, setName] = useState("")
	return (
		<>
			<Navbar />
			<div className="p-5 text-xl">
				<input className='border border-gray-400 px-4 py-1 rounded-lg' type="text" value={name} onChange={(e) => setName(e.target.value)}/>
				<div>Hello {name}</div>
			</div>
		</>
	);
}

export default App;
