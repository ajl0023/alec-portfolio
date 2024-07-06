<script>
	let email = '';
	let message = '';
	let subject = '';
	let name = '';

	async function handleSubmit(event) {
		event.preventDefault();
		const myForm = event.target;

		const formData = new FormData(myForm);

		fetch('/contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData).toString()
		})
			.then(() => console.log('Form successfully submitted'))
			.catch((error) => alert(error));
	}
</script>

<div
	class="wrapper flex w-full justify-between mt-10 sm:flex-row flex-col items-center sm:items-start"
>
	<div class="contact-info text-white max-w-sm">
		<h2 class="font-semibold text-blue2 mb-10 text-xl text-center sm:text-start">Contact Me</h2>
		<div class="info-container mb-4 sm:mb-0">
			<p>626-354-9322</p>
			<p>alecwangla@gmail.com</p>
		</div>
	</div>
	<form
		on:submit="{handleSubmit}"
		class="sm:w-1/2 w-full px-5 sm:px-0"
		name="contact"
		method="post"
		data-netlify="true"
	>
		<input type="hidden" name="form-name" value="contact" />

		<div class="relative z-0 w-full mb-5 group">
			<input
				bind:value="{name}"
				type="text"
				name="name"
				id="name"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				required
			/>
			<label
				for="name"
				class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Name</label
			>
		</div>

		<div class="relative z-0 w-full mb-5 group">
			<input
				bind:value="{subject}"
				type="text"
				name="subject"
				id="subject"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				required
			/>
			<label
				for="subject"
				class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Subject</label
			>
		</div>

		<div class="relative z-0 w-full mb-5 group">
			<input
				bind:value="{email}"
				type="email"
				name="email"
				id="email"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				required
			/>
			<label
				for="email"
				class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Email</label
			>
		</div>

		<div class="relative z-0 w-full mb-5 group">
			<textarea
				bind:value="{message}"
				name="message"
				id="message"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				required
				rows="4"></textarea>
			<label
				for="message"
				class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Message</label
			>
		</div>

		<button
			type="submit"
			class="text-black bg-blue2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>Submit</button
		>
	</form>
</div>
