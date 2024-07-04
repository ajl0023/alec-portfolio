<script>
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
</script>

<div class="wrapper mt-20 w-full">
	<div class="header-container">
		<h2 class="text-blue2 font-semibold text-lg mb-5">About Me</h2>
		<div
			class="main-content-container flex text-white text-sm text-thin justify-between text-xs leading-5"
		>
			<div class="main-content w-[33%]">
				<p class="mb-5">
					Originally from Beijing, Alec Wang is an actor based in Los Angeles, California. Having
					come to the US when he was 3, Alec is fluent in English and Mandarin. He has worked on
					stage (middle school through UCSB and Peking University), and on screen (HBO's Westworld).
					​ Alec is inspired by roles and filmmakers whose messages and stories transcend cultures
					and boundaries.
				</p>
				<p>
					Alec is inspired by roles and filmmakers whose messages and stories transcend cultures and
					boundaries.
				</p>
			</div>
			<div class="info-container">
				<ul>
					<li>Height: 6"1</li>
					<li>Eye Color: Brown</li>
					<li>Hair Color: Black</li>
					<li>Location: Los Angeles, CA</li>
				</ul>
			</div>
			<div class="main-image-container max-w-60">
				<enhanced:img src="$lib/images/Headshot Recent_edited.jpg" class="w-full block" alt=""
				></enhanced:img>
			</div>
		</div>
	</div>
	<button class="bg-white px-3 py-2 text-xs hover:bg-blue2 transition-all"
		>Download Full Resume</button
	>
	<div class="divider h-[3px] bg-blue2 mt-10"></div>
	<div class="exp-section-wrapper mt-10 space-y-20">
		{#each exp_items as item}
			<div class="exp-container font-semibold text-blue2 flex justify-between">
				<div class="category-container">
					<h4 class="text-xl">{item.category}</h4>
				</div>
				<div class="role-desc-container space-y-4 justify-start w-1/3">
					{#each item.detailed_exp as role}
						<ul class="text-sm font-normal">
							<li class="text-white">{role.title}</li>
							{#if role.role}
								<li class="text-blue2">{role.role}</li>
							{/if}
						</ul>
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<div class="skills-container mt-40">
		<div class="font-semibold text-blue2 flex justify-between">
			<h4 class="text-xl">Special Skills</h4>

			<div class="justify-start w-1/3 text-sm font-normal text-white">
				<p>
					Native Mandarin and English, Improv Experience, British Accent, Stage Combat Training,
					Meisner Technique, Advanced Pianist/Keyboardist
				</p>
			</div>
		</div>
	</div>
</div>
