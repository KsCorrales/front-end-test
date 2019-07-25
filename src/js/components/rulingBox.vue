<template>
	<div  class="voting-box" :style="{ backgroundImage: 'url(' + ruling.picture + ')' }">
        <div class="voting-information">
            <div class="voting-status up"><i class="fas fa-thumbs-up"></i></div>
            <div class="name">
                {{ ruling.name }}
            </div>
            <div class="date">
                <b>{{ ruling.date }}</b> in <b>{{ ruling.area }}</b>
            </div>
            <div v-if="!ruling.voted" class="description">
                {{ ruling.description }}
            </div>
            <div v-else class="description">
                Thank you for voting!
            </div>
            <div v-if="!ruling.voted" class="vote-options">
                <div class="upvote" @click="upvote(ruling)"><i class="fas fa-thumbs-up"></i></div>
                <div class="downvote" @click="downvote(ruling)"><i class="fas fa-thumbs-down"></i></div>
                <div class="vote-now">Vote now</div>
            </div>

            <div v-else class="vote-options">
                <div class="vote-now" @click="voteAgain(ruling)">Vote again</div>
            </div>
        </div>

        <div class="votes-progress">
            <div class="progress-bar" :style=" { width: calcPercentage(ruling.upvotes, ruling.downvotes) + '%' }"></div>
            <div class="remaining"></div>
            <span class="upvotes-percentage"><i class="fas fa-thumbs-up"></i> {{ calcPercentage(ruling.upvotes, ruling.downvotes) }}%</span>
            <span class="downvotes-percentage">{{ calcPercentage(ruling.downvotes, ruling.upvotes) }}%<i class="fas fa-thumbs-down"></i></span>
        </div>
        <div class="voting-box-shadow"></div>
    </div>
</template>

<script>
	import Helpers from '../helpers';

	export default {
		props: {
			ruling: Object,
		},

		methods: {
			calcPercentage: Helpers.calcPercentage,
			upvote: Helpers.upvote,
            downvote: Helpers.downvote,
            voteAgain: Helpers.voteAgain,
		}
	}
</script>