<template>
    <div class="container">
        <div class="page-content">
            <!-- <section class="editor">
        <h1></h1>
      </section> -->
            <section class="img" v-for="item in contentImage">
                <a href="javascript:;">
                    <img :src="item" alt="">
                </a>
            </section>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            contentImage: [
                'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/wx1WRpGD3850MQnWlJnad4eb/original-2.jpg.avif',
                'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/DoBrmR7Vlwx1DAwkN8wbGZKL/original-2.png.avif',
                'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/o4a0bwXWNWDaPVwDYGgE1yzv/original-2.jpg.avif',
                'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/41brG7JDYpa8RJLa3xW5ywvg/original-2.jpg.avif',
                'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/DoBrmR7Vlwxqqbq6N8wbGZKL/original-2.png.avif',
                'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/1LPZao453vWxMBk6lQAR86mM/1200x-2.jpg.avif',
                'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/zRo4LO6m3A48aVwjYpr2d90e/original-2.jpg.avif',
                'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/zXOMxVeg3VXweKE9N8aGjDkP/original-2.jpg.avif',
                'https://img.1shop.tw/k3xVqyrnXN21jJRBZKbomdGD/w560gEeAloXPP6yxNOqrx1ab/original-2.png.avif',
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.page-content {
    margin-bottom: 50px;
    width: 100%;

    .img {
        img {
            width: 100%;
        }
    }

    .editor {
        padding: 20px;
        background-color: #fff;

        h1 {
            margin: 10px 0;
            height: 55px;
        }
    }
}
</style>