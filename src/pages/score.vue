<template>
    <section>
        <div class="backToHome" @click="goBackHome">
            <svg t="1590053790250" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2055" width="200" height="200"><path d="M426.666667 384V213.333333l-298.666667 298.666667 298.666667 298.666667v-174.933334c213.333333 0 362.666667 68.266667 469.333333 217.6-42.666667-213.333333-170.666667-426.666667-469.333333-469.333333z" p-id="2056" fill="#f4ea2a"></path></svg>
        </div>
        <header>
           <div class="header_point">
               <span>{{totalScore}}</span>
               <span>分!</span>
           </div>
            <div class="header_word">
                {{pingjia}}
            </div>
        </header>
        <main>
            <div class="share_item" @click="shareIsShow=true">
            </div>
        </main>
        <div class="title">
            关注葡萄之家，获取答案。
        </div>
        <footer >

        </footer>
        <div class="share_container" v-show="shareIsShow" @click="shareIsShow=false">
            <img src="../images/5-2.png" alt="">
        </div>
    </section>
</template>

<script>
    import '../style/score.css';
    import {mapState} from 'vuex';
    export default {
        name: "score",
        data(){
            return{
                rightAnswer: [2, 7, 12, 13, 18], //正确答案
                scoreTipsArr:['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！'],
                score:0,  //初始分数为0
                shareIsShow:false,
            }
        },
        computed:{
          ...mapState(['answerid']),
            //对比答案和记录客户答案的数组，计算分数
            totalScore(){  //computed方法要加return
                this.rightAnswer.forEach((item,index)=>{
                    if(item==this.answerid[index]){
                        this.score+=20;
                    }
                });
                return this.score;
            },
            //根据分数获取对应的评价
            pingjia(){
              if(this.score===0){
                  return '你这考的什么玩意!回家种田去吧'
              }
              let index=Math.floor(this.score/20)-1;
              return this.scoreTipsArr[index];
            }
        },
        methods:{
            goBackHome(){
                this.$router.push('/home')
            }
        },
        mounted(){
            // console.log(this.answerid)
            // this.rightAnswer.forEach((item,index)=>{
            //     if(item==this.answerid[index]){
            //         this.score+=20;
            //     }
            // })
        }


    }
</script>

<style scoped>


</style>
