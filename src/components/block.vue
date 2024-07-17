<template>
    <div id="background-rental">
      <Transition name="slide-fade-right" appear>
        <div class="block">
          <div class="title"><h1>{{title}}</h1></div>
          <div class="content"><p>{{content}}</p></div>
        </div>
      </Transition>
    </div>
  </template>
  
  <script>
    export default {
        name: 'rental-page',
    }
  </script>
  
  <style scoped>
    .block {
      position: relative;
      margin: 32px;
      border: 3px solid #600026;
      background-color: rgba(0, 0, 0, 0.9);
      border-radius: 20px;
      width: 30%; 
      height: 17.5%;
      h1 {
        font-size: 24px;
        margin: 0;
      }
    }
    .title {
      padding: 12px;
    }
    .block-prices {
      overflow: hidden;
      margin-left: 25%;
      p {
        float: left;
        width: 50%;
        margin: 0 0 16px 0;
        font-size: 18px;
      }
    }

    #bottom-text {
      position: absolute;
      text-align: right;
      font-size: 11px;
      bottom: 0;
      right: 0;
      margin: 6px;
      margin-right: 12px;
    }
  
    @media screen and (min-width: 480px) and (max-width: 800px)  {
      #background-rental { 
        height: 100%;
        background-size: cover;
      }
      .rental-block {
        margin: 7.5% 5%;
        border: 2px solid #600026;
        width: 90%; 
        height: 25%;
        h1 {
          font-size: 16px;
          margin: 0;
        }
      }
      .block-prices {
        margin-left: 25%;
        p {
          float: left;
          width: 50%;
          margin: 0 0 8px 0;
          font-size: 14px;
        }
      }
      #bottom-text {
        font-size: 6px;
      }
    }
  
    @media screen and (min-width: 480px) and (min-height:300px) and (max-height:800px)
    {
      .rental-block {
        height: 40%;
      }
    }
  </style>