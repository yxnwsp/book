<template>
  <div class="test" >
    <!-- <% if item.title = '尺寸' {%>
    <div>

      <p><% item.des[0]+item.des[1] %></p>
      <p><% item.des[2]%></p>
    </div>
    <%} else {%>
    <%=item.des %> -->
    <div class="item">

    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      currentDate: new Date(),
      list: [
        {
          title: '',
          img: '',
          desc: ''
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .test{
    .item{
      // padding: 20px;
      border-right: 1px solid #e6e6e6;
      border-bottom: 1px solid #e6e6e6;
      overflow: hidden;
    }
  }
</style>
