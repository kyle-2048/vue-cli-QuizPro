<template>
    <section>
        <header class="header_container">
            <div class="header_nav" v-if="parentComponent=='home'">
                {{level}}
            </div>
            <div class="header_nav" v-if="parentComponent=='item'">
                题目{{itemNum}}
            </div>
        </header>
        <main class="main_container">
            <div class="content_home " v-if="parentComponent=='home'">

            </div>
            <div class="content_item " v-if="parentComponent=='item'">
                <div class="topic_title">
                    {{itemDetail[itemNum-1].topic_name}}
                </div>
                <ul>
                    <li v-for="(data,index) in itemDetail[itemNum-1].topic_answer" :key="index" @click="choose(index,data.topic_answer_id)">
                        <span class="option_style" v-bind:class="{'hasChoosed':index===chooseNum}" >{{returnOption(index)}}</span>
                        {{data.answer_name}}
                    </li>
                </ul>
            </div>
        </main>
        <button class="button">
            <div class="button_home" v-if="parentComponent=='home'" @click="turnItem">

            </div>
            <div class="button_item " v-if="parentComponent=='item'">
                <div class="next_item " v-if="itemNum<itemDetail.length" @click="nextItem"></div>
                <div class="submit_item " v-else @click="submitItem"></div>
            </div>
        </button>
    </section>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    import '../style/itemContainer.css'
    export default {
        name: "itemContainer",
        props:['parentComponent'],
        data(){
            return{
                chooseNum:null,
                chooseId:null,
                timer:null,
                alltime:0,
            }
        },
        computed:{
            ...mapState([  //可以将store的state的状态注册到本组件，方便调用
                'level',//第几周
                'itemNum', //第几题
                'itemDetail',//题目详情
                'answerid',
                'allTime' //总共用时
            ]),

        },
        methods:{
            ...mapMutations([
                'addNum', //可以将store的mutations方法注册到本组件，方便调用
                'initializeData',
                // 'startTimeMutation'
            ]),
            turnItem(){
                this.$router.push('item');
                this.initializeChoose();
            },
            //根据index返回所在的是选项几
            returnOption:index=>{
                switch (index) {
                    case 0:return 'A';
                    case 1:return 'B';
                    case 2:return 'C';
                    case 3:return 'D'
                }
            },
            choose(index,id){
                this.chooseNum=index;
                this.chooseId=id;
            },
            nextItem(){
                if(this.chooseNum!==null){
                    this.addNum(this.chooseId);
                    this.chooseNum=null;
                    this.chooseId=null;
                    console.log(this.answerid);
                    console.log(this.itemNum);
                }else{
                    alert('请选择你的答案')
                }
            },
            initializeChoose(){
                this.chooseNum=null;
                this.chooseId=null;
            },
            submitItem(){
                this.$router.push('score')
                this.addNum(this.chooseId);
            }
        },
        mounted(){
            console.log(this.itemDetail)
        },
        created(){
            console.log(33)
            if(this.parentComponent==='home'){
                this.initializeData();
            }
            console.log(this.allTime)
        },



    }
</script>

<style scoped>

</style>
