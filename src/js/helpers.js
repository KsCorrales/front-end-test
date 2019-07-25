class Helpers {
    static calcPercentage(votesToCalc, otherVotes) {
        let total = votesToCalc + otherVotes;
        let percentage = (votesToCalc / total) * 100;

        return percentage.toFixed(1);
    }

    static upvote(ruling) {
        if(!ruling.voted)
            ruling.upvotes++;
            ruling.voted = true;
            window.event.$emit('voted', ruling);
    }

    static downvote(ruling) {
        if(!ruling.voted)
            ruling.downvotes++;
            ruling.voted = true;
            window.event.$emit('voted', ruling);
    }

    static voteAgain(ruling) {
        ruling.voted = false;
        window.event.$emit('voted', ruling);
    }
}

export default Helpers;