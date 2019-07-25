<template>
    <div>
        <div class="main" >
            <div class="top-shadow"></div>
            <header>
                <div class="left">
                    <h1>Rule of Thumb</h1>
                </div>
                <div class="right">
                    <nav>
                        <ul>
                            <li><a href="#">Past Trials</a></li>
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">Log in / Sign Up</a></li>
                            <li><a href="#"><i class="fas fa-search"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div class="container">
                <div class="blur"></div>

                <newest-ruling v-if="newestRuling" :newestRuling="newestRuling"></newest-ruling>

                <div class="clearfix">
                </div>
            </div>

            <div class="closing">
                <div class="progress">
                    CLOSING IN
                </div>
                <div class="remaining">
                    22 DAYS
                </div>
            </div>
        </div>

        <div class="content">
            <div class="panel">
                <p class="title">Speak out. Be heard. <br> <span class="strong">Be counted</span></p>
                <p class="message">Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It's easy: You share your opinion, we analyze and put the data in a public report.</p>
                <div class="close"><i class="fas fa-times"></i></div>
            </div>

            <h2>Previous Rulings</h2>

            <div class="voting-container">

                <ruling-box v-for="ruling in previousRulings" :ruling="ruling"></ruling-box>

            </div>

            <div class="submit-name-container">
                <div class="text">
                    Is there anyone else you would want us to add?
                </div>
                <div class="submit">
                    <button>Submit a Name</button>
                </div>
            </div>

            <div class="line-divider"></div>

            <footer>
                <div class="left">
                    <a href="#">Terms and conditions</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Contact Us</a>
                </div>

                <div class="right">
                    <a href="#">Follow Us</a>
                    <a href="#"><i class="fab fa-facebook-square"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
    import Helpers from '../helpers';

    export default {
        data() {
            return {
                newestRuling: null,
                previousRulings: null,
            }
        },

        mounted() {
            this.initData();

            window.event.$on('voted', function (ruling) {
                this.updateRuling(ruling);
            }.bind(this));
        },

        methods: {
            calcPercentage: Helpers.calcPercentage, 
            upvote: Helpers.upvote,
            downvote: Helpers.downvote,

            initData() {
                if(localStorage.getItem('newestRuling')) {
                    this.newestRuling = JSON.parse(localStorage.getItem('newestRuling'));
                }else {
                    this.setupNewestRuling();
                }

                if(localStorage.getItem('previousRulings')) {
                    this.previousRulings = JSON.parse(localStorage.getItem('previousRulings'));
                }else {
                    this.setupPreviousRulings();
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

            setupPreviousRulings() {
                this.previousRulings = [
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

                localStorage.setItem('previousRulings', JSON.stringify(this.previousRulings));
            },

            updateRuling(ruling) {
                if(ruling.id == 0) {
                    localStorage.setItem('newestRuling', JSON.stringify(this.newestRuling));
                }else {
                    localStorage.setItem('previousRulings', JSON.stringify(this.previousRulings));
                }
            }
        },
    }
</script>