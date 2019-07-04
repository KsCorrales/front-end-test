var app = new Vue({
    el: '#app',
    data: {
        newestRuling: null,
        previousRuling: null,
    },

    mounted() {
    	this.initData();
    },

    methods: {
    	initData() {
    		if(localStorage.getItem('newestRuling')) {
    			this.newestRuling = JSON.parse(localStorage.getItem('newestRuling'));
    		}else {
    			this.setupNewestRuling();
    		}

    		if(localStorage.getItem('previousRuling')) {
    			this.previousRuling = JSON.parse(localStorage.getItem('previousRuling'));
    		}else {
    			this.setupPreviousRuling();
    		}
    	},

    	upvote(ruling) {
    		if(!ruling.voted)
	    		ruling.upvotes++;
	    		ruling.voted = true;
	    		this.updateRuling(ruling);
    	},

    	downvote(ruling) {
    		if(!ruling.voted)
    			ruling.downvotes++;
    			ruling.voted = true;
    			this.updateRuling(ruling);
    	},

    	voteAgain(ruling) {
    		ruling.voted = false;
    		this.updateRuling(ruling);
    	},

    	updateRuling(ruling) {
    		console.log(ruling);
    		if(ruling.id == 0) {
    			localStorage.setItem('newestRuling', JSON.stringify(this.newestRuling));
    			console.log(localStorage.getItem('newestRuling'), this.newestRuling)
    		}else {
    			localStorage.setItem('previousRuling', JSON.stringify(this.previousRuling));
    		}
    	},

    	setupNewestRuling() {
    		this.newestRuling = {
    			id: 0,
	        	name: "Pope Francis",
	        	description: "He's talking tough on clergy sexual abuse, but is he just another papal perver protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)",
	        	link: 'http://google.com', // here should be the url of "more information link"
	        	upvotes: 5,
	        	downvotes: 0,
	        	voted: false,
	        };

	        localStorage.setItem('newestRuling', JSON.stringify(this.newestRuling));
    	},

    	setupPreviousRuling() {
    		this.previousRuling = [
	        	{
	        		id: 1,
	        		name: "Kanye West",
		        	description: "Vestibulum diam ante, portitor a odio eget, rhoncus neque. Aenean eu velit libero.",
		        	date: '1 month ago',
		        	area: 'Entertainment',
		        	link: 'http://google.com', // here should be the url of "more information link"
		        	upvotes: 30,
		        	downvotes: 14,
		        	picture: 'images/kanye-west.png',
		        	voted: false,
	        	},
	        	{
	        		id: 2,
	        		name: "Mark Zuckerberg",
		        	description: "Vestibulum diam ante, portitor a odio eget, rhoncus neque. Aenean eu velit libero.",
		        	date: '1 month ago',
		        	area: 'Business',
		        	link: 'http://google.com', // here should be the url of "more information link"
		        	upvotes: 15,
		        	downvotes: 25,
		        	picture: 'images/mark-zuckerberg.png',
		        	voted: false,
	        	},
	        	{
	        		id: 3,
	        		name: "Cristina Fernández de Kirchner",
		        	description: "Vestibulum diam ante, portitor a odio eget, rhoncus neque. Aenean eu velit libero.",
		        	date: '1 month ago',
		        	area: 'Politics',
		        	link: 'http://google.com', // here should be the url of "more information link"
		        	upvotes: 19,
		        	downvotes: 43,
		        	picture: 'images/cristina-fernandez.png',
		        	voted: false,
	        	},
	        	{
	        		id: 4,
	        		name: "Malala Yousafzai",
		        	description: "Vestibulum diam ante, portitor a odio eget, rhoncus neque. Aenean eu velit libero.",
		        	date: '1 month ago',
		        	area: 'Entertainment',
		        	link: 'http://google.com', // here should be the url of "more information link"
		        	upvotes: 72,
		        	downvotes: 51,
		        	picture: 'images/malala-yousafzai.png',
		        	voted: false,
	        	},
	        ];

	        localStorage.setItem('previousRuling', JSON.stringify(this.previousRuling));
    	},

    	calcPercentage(votesToCalc, otherVotes) {
    		let total = votesToCalc + otherVotes;
    		let percentage = (votesToCalc / total) * 100;

    		return percentage.toFixed(1);
    	},
    },
})