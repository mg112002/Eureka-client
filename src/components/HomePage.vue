<template>
  <div>
    <el-carousel class="crsl" :interval="4000" height="30em" indicator-position="inside">
      <el-carousel-item><img src="@/../public/img2.jpg" alt="blog"/></el-carousel-item>
      <el-carousel-item><img src="@/../public/img3.jpg" alt="blog" /></el-carousel-item>
      <el-carousel-item><img src="@/../public/img4.jpg" alt="blog" /></el-carousel-item>
    </el-carousel>
    <div class="info">
      <div class="qna">
        <h2>Why Blogging?</h2>
        <p>Blogs are informal articles written for the purpose of showing thought leadership and expertise on a topic. They are
          a great way to generate fresh content on a website and provide a catalyst for email marketing, social media promotion to
          drive search traffic to websites.</p>
          <p>Blogging for the business also helps it get discovered via social media. Every time a new article is created, we're
          creating content that people can share on social networks — Twitter, LinkedIn, Facebook, etc.</p>
      </div>
      <div class="image">
        <img src="@/../public/why.jpg" alt="why blog?">
      </div>
    </div>
    <div class="info tech">
      <div class="image">
        <img src="@/../public/tech.jpg" alt="tech blogs">
      </div>
      <div class="qna">
        <h2>Tech Blogs</h2>
        <p>Technical blogging paves a way for you to share and showcase your knowledge, technical experiences and related arenas
        through words. The words we express through our writing forms a part of communication skills.</p>
        <p>Both personally and professionally, being a part of a network always helps. With technical blogging, you become the part
        and parcel of the community of writers who are passionately writing and updating us with a plethora of know-how on
        ventured and unexplored areas. Writing gives an immediate insight into the nuggets inside our knowledge bank.</p>
      </div>
    </div>
    <hr class="dotted" >
    <div class="feature">
      <div class="feature-img">
        <img src="@/../public/Newsletter.jpg" alt="newsletter">
      </div>
      <div class="feature-content">
        <h2>Newsletter Sign Up</h2>
        <p>Newsletter SignUp is a feature provided by us in which one can sign up for the newsletter with their interests and get notified on new blog post of their interest. </p>
        <p>A newsletter is a printed or electronic report containing news concerning the activities of a business or an
        organization that is sent to its members, customers, employees or other subscribers. Newsletters generally contain one
        main topic of interest to its recipients.</p>
      </div>
    </div>
    <div id="about">
      <div class="icon-container">
        <i class="el-icon-mobile icon"></i>
        <p>+91 9594590500</p>
      </div>
      <div class="icon-container">
        <i class="el-icon-message icon"></i>
        <p>mg900500@gmail.com</p>
      </div>
      <div class="icon-container">
        <i class="el-icon-position icon"></i>
        <p>Navi Mumbai, Maharashtra, India</p>
      </div>
    </div>
    <div class="footer">
      <p>&copy; Mangalam Gupta - 2023</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
img{
  width: 100%;
  height: 100%;
}
h2{
  font-size:45px;
  text-align: center;
}
.el-icon-mobile{
  font-weight: 100;
}
.icon{
  font-size: 15rem;
  /* font-weight: 100; */
}
.info{
  display: flex;
  margin: 3% 10%
}
.qna{
  width:60%;
  height: 100%;
}
p{
  text-align: justify;
  line-height: 1.5;
  width: 95%;
  font-weight: bold;
}
.image{
  display: flex;
  width: 38%;
  height: 100%;
  margin: auto;
}

.feature-img{
  width: 60%;
  margin: auto;
}
.feature-img:hover{
  transform: scale(1.2);
  transition-duration: 1.5s;
}
.feature-content{
  margin: 3% 10%;
}
.image:hover{
  transform: scale(0.85);
  transition-duration: 1.5s;
}
#about{
  display: flex;
  justify-content: space-around;
  border: 1px solid;
  border-radius: 15px;
  margin: 3%;
}
#about p{
  text-align: center;
  line-height: 1;
}
.crsl{
  z-index: 0;
}
.footer{
  padding: 1%;
  background-color:#4d67ff;
  border-left: 1px solid white;
}
.footer p{
  color: white;
  text-align: center;
}
.dotted{
  width: 5%;
  margin: 5% auto;
  border-top: 5px dotted;
}
@media only screen and (max-width: 775px) {
  .info{
    display: block;
  }
  .image{
    display: block;
    margin: auto;
    width: 60%;
  }
  .qna{
    display: block;
    width: 95%;
    margin: auto;
  }
  .feature-content{
    margin: 2%;
  }
  
  .tech{
    display: flex;
    flex-direction: column-reverse;
  }
  .dotted{
    margin: 10% auto;
  }
}

@media screen and (max-width:960px) {
  #about {
      flex-direction: column;
    }
 
    .icon {
      display:flex;
      justify-content: center;
    }
}
</style>