import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
	return (
		<div>
			<Contact
				name={'Celia Oprea'}
				avatar={'https://avatars1.githubusercontent.com/u/48388482?s=460&v=4'}
				online={false}
				star={false}
			/>
			<Contact name={'Irina Rego'} avatar={''} online={true} star={true} />
			<Contact
				name={'Reiki Ken'}
				avatar={'https://www.reikiken.com/wp-content/uploads/2018/08/5-Who-is-Reiki-Ken-584x800.jpg'}
				online={true}
				star={true}
			/>
		</div>
	);
}

export default App;
