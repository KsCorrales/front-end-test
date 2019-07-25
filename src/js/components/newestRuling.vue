<template>
	<div class="newest-voting">
        <div class="wrapper">
            <p class="introduction">What's your opinion on</p>
            <h2 class="title">{{newestRuling.name}}?</h2>
            <p class="description">{{newestRuling.description}}</p>
            <div class="information">[W] <a href="#">More information</a></div>
            <h3 class="vote-box-title">What's Your Veredict?</h3>
        </div>
        
        <div class="vote-box">
            <div class="like" @click="upvote(newestRuling)">
                <i v-if="!newestRuling.voted" class="fas fa-thumbs-up"></i>
                <span v-else>{{ calcPercentage(newestRuling.upvotes, newestRuling.downvotes) }}%</span>
            </div>
            <div class="dislike" @click="downvote(newestRuling)">
                <i v-if="!newestRuling.voted" class="fas fa-thumbs-down"></i>
                <span v-else>{{ calcPercentage(newestRuling.downvotes, newestRuling.upvotes) }}%</span>
            </div>
        </div>
    </div>
</template>

<script>
	import Helpers from '../helpers';

	export default {
		props: {
			newestRuling: Object,
		},

		methods: {
				calcPercentage: Helpers.calcPercentage,
				upvote: Helpers.upvote,
	            downvote: Helpers.downvote,
		},
	}
</script>