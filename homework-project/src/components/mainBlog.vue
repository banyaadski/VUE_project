<template>
    <div id="#app">
        <div class="main package">
            <div class="mainLeft ">
                <div v-if="kitchen" class="mainLeft_upper">
                    <h1 class="mainLeft_h1">
                        {{ leftH1 }}
                    </h1>
                    <img class="mainLeft_img" src="../assets/img/left_up.jpg" alt="">
                    <p class="mainLeft_p">
                        {{ leftP }}
                    </p>
                </div>


                <div v-if="bedroom" class="mainLeft_upper">
                    <h1 class="mainLeft_h1">
                        Design sprints are great
                    </h1>
                    <p class="mainLeft_p">
                        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to
                        popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered.
                    </p>
                    <p class="mainLeft_p">
                        1 Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered.</p>
                    <p class="mainLeft_p">2 Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                        available, but the
                        majority have suffered.</p>
                    <p class="mainLeft_p">3 Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                        available, but the
                        majority have suffered.</p>
                    <img class="mainLeft_img" src="../assets/img/Image.jpg" alt="">
                    <p class="mainLeft_p">
                        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to
                        popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered.
                    </p>
                </div>
                <div class="mainLeft_middle">
                    <img class="mainLeft_middle_img" src="../assets/img/Quotes.jpg" alt="">
                </div>
            </div>
            <div class="mainRight">
                <h1 class="mainRight_h1">Tags</h1>
                <button @click="kitchenbtn()" class="mainRight_btn">Kitchen</button>
                <button @click="bedroombtn()" class="mainRight_btn">Bedroom</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VUEMainBlog',

    data() {
        return {
            leftH1: "Let’s Get Solution for Building Construction Work",
            leftP: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            kitchen: true,
            bedroom: false
        };
    },

    mounted() {

    },

    methods: {
        kitchenbtn() {
            this.kitchen = !this.kitchen;
            this.bedroom = !this.bedroom
        },
        bedroombtn() {
            this.bedroom = !this.bedroom;
            this.kitchen = !this.kitchen;

        }

    },
};
</script>

<style lang="scss" scoped>
.main {
    display: flex;
    justify-content: center;
    padding-top: 120px;
}

.mainRight {
    &_h1 {
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 31px;
        letter-spacing: 0.02em;
        text-align: left;
        width: 53px;
        height: 31px

    }

    &_btn {
        width: 132px;
        height: 41px;
        padding: 9px 30px 9px 30px;
        border-radius: 10px;
        gap: 10px;
        font-family: Jost;
        font-size: 18px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0.02em;
        text-align: center;

    }
}

.mainLeft {
    &_h1 {
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 63px;
        letter-spacing: 0.02em;
        text-align: left;
        width: 684px;
        height: 126px
    }

    &_p {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        width: 799px;
        height: 236px
    }

    &_img {
        width: 799px;
        height: 539px;
        border-radius: 60px;

    }

}</style>