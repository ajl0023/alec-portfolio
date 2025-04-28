<script>
	import data from './data.json';

	import TranslationText from '../../lib/components/TranslationText.svelte';

	let exp_items = [
		{
			category: 'Television',
			detailed_exp: [
				{
					title: 'NBC | Law & Order: Organized Crime | 2023',
					role: 'Guest Star'
				},
				{
					title: 'HBO | Westworld | 2022',
					role: 'Guest Star'
				}
			]
		},
		{
			category: 'Features',
			detailed_exp: [
				{
					title: 'Short Film | Chunghwa Smoke | 2022',
					role: 'Lead'
				},
				{
					title: "Short Film | Lion's Head | 2022",
					role: 'Lead'
				},
				{
					title: 'Short Film | Father | 2021',
					role: 'Lead'
				},
				{
					title: 'Short Film | Endless Summer | 2021',
					role: 'Lead'
				}
			]
		},
		{
			category: 'Stage',
			detailed_exp: [
				{
					title: 'Peking University Theater | Peking University 120th Anniversary Gala | 2018',
					role: 'Host'
				},
				{
					title: 'UCSB Theater and Dance | Hamlet | 2018',
					role: 'Hamlet'
				},
				{
					title: "UCSB Theater and Dance | Kafka's Jackals and Arabs | 2017",
					role: 'Head Jackal'
				}
			]
		},
		{
			category: 'Commercials',
			detailed_exp: [
				{
					title: 'List Available Upon Request'
				}
			]
		}
	];

	async function downloadFile() {
		const fileUrl =
			'https://res.cloudinary.com/dz5oxdy9x/image/upload/v1745809755/ALEC_WANG_Recent_Resume_1_odsfxx.pdf';
		const response = await fetch(fileUrl);
		const blob = await response.blob();
		const url = URL.createObjectURL(blob);

		const a = document.createElement('a');
		a.href = url;
		a.download = 'resume.pdf';
		document.body.appendChild(a);
		a.click();

		URL.revokeObjectURL(url);
		document.body.removeChild(a);
	}
</script>

<div class="wrapper mt-10 sm:mt-20 w-full">
	<div class="header-container">
		<h2 class="text-blue2 font-semibold text-lg mb-5 text-center sm:text-left">
			<TranslationText text="{data['about_title']}" />
		</h2>
		<div
			class="main-content-container flex flex-col-reverse sm:justify-between text-white text-sm text-thin text-xs leading-5 w-full sm:flex-row"
		>
			<div class="content-wrapper">
				<div class="text-content px-5 sm:flex sm:p-0 sm:flex-row-reverse sm:justify-between">
					<div class="info-container mb-4 mt-8 sm:m-10 sm:mt-0">
						<ul>
							<li>
								<TranslationText text="{data['height']}" />
							</li>
							<li>
								<TranslationText text="{data['eye_color']}" />
							</li>
							<li><TranslationText text="{data['hair_color']}" /></li>
							<li><TranslationText text="{data['location']}" /></li>
						</ul>
					</div>
					<div class="main-content sm:w-[33%]">
						<p class="whitespace-pre-wrap">
							<TranslationText text="{data['bio_1']}" />
						</p>
						<p>
							<TranslationText text="{data['bio_2']}" />
						</p>
					</div>
				</div>
				<button
					on:click="{downloadFile}"
					class="bg-white px-3 py-2 text-xs hover:bg-blue2 transition-all mt-5 text-black sm:ml-0 ml-5"
					>Download Full Resume</button
				>
			</div>
			<div class="aspect-wrapper max-w-[400px] w-full sm:m-0 m-auto min-w-[200px]">
				<div class="main-image-container sm:m-0 pb-[117.75%] relative">
					<img
						src="$lib/images/headshot_final.jpg"
						class="w-full h-full object-cover absolute inset-0 object-top"
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>

	<div class="divider h-[2px] bg-blue2 mt-10"></div>
	<div class="exp-section-wrapper mt-10 space-y-20">
		{#each data.experience as item}
			<div
				class="exp-container font-semibold text-blue2 flex sm:justify-between flex-col items-center sm:flex-row
				sm:items-start
				"
			>
				<div class="category-container">
					<h4 class="text-xl mb-5 sm:mb-0">
						<TranslationText text="{item.category}" />
					</h4>
				</div>
				<div class="role-desc-container space-y-4 justify-start sm:w-1/3 w-full">
					{#each item.detailed_exp as role}
						<ul class="text-sm font-normal">
							<li class="text-white">
								<TranslationText text="{role.title}" />
							</li>
							{#if role.role}
								<li class="text-blue2">
									<TranslationText text="{role.role}" />
								</li>
							{/if}
						</ul>
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<div class="skills-container mt-40 hidden">
		<div class="font-semibold text-blue2 flex justify-between flex-col sm:flex-row">
			<h4 class="text-xl mb-5 sm:mb-0 text-center sm:text-left">Special Skills</h4>

			<div class="justify-start sm:w-1/3 text-sm font-normal text-white">
				<p>
					Native Mandarin and English, Improv Experience, British Accent, Stage Combat Training,
					Meisner Technique, Advanced Pianist/Keyboardist
				</p>
			</div>
		</div>
	</div>
</div>
