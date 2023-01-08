<template>
  <div>
    <el-carousel class="crsl" :interval="4000" height="23rem" indicator-position="inside">
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
        <img src="https://techinscribed.com/wp-content/uploads/2020/01/why-blog.png" alt="why blog?">
      </div>
    </div>
    <div class="info">
      <div class="image">
        <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/12/blog-examples.jpg" alt="tech blogs">
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
    <div class="feature">
      <div class="feature-img">
        <img src="https://www.sendinblue.com/wp-content/uploads/2020/02/how_to_create_a_newsletter.png" alt="newsletter">
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
        <p>+00 0000000000</p>
      </div>
      <div class="icon-container">
        <i class="el-icon-message icon"></i>
        <p>jane.doe@example.com</p>
        <p>john.doe@example.com</p>
      </div>
      <div class="icon-container">
        <i class="el-icon-position icon"></i>
        <p>Mumbai, Maharashtra, India</p>
      </div>
    </div>
    <div class="footer">
      &copy;MG - 2023
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
  text-align: center;
}
.icon{
  font-size: 15rem;
}
.info{
  margin: 3% 2%
}
.qna{
  width:60%;
  height: 100%;
  display:inline-block
}
p{
  text-align: justify;
  line-height: 1.5;
}
.image{
  display: inline-block;
  width: 38%;
  height: 100%;
  margin: 1%;
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
  padding: 2%;
  text-align: center;
  background-color:#8D9EFF;
  border-left: 1px solid white;
}
@media only screen and (max-width: 710px) {
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
}
</style>