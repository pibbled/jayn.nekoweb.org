function openBlog() {
  document.getElementById("blogpage").style.visibility = "visible";
  document.getElementById("blogpage").style.opacity = 1;
  document.getElementById("main").style.filter = "blur(10px)"
}
function closeBlog() {
  document.getElementById("blogpage").style.visibility = "hidden";
  document.getElementById("blogpage").style.opacity = 0;
  document.getElementById("main").style.filter = "blur(0px)";
}
function blogGit() {
  openBlog();
  document.getElementById("blogheader").innerHTML = '<h1 class="blogheader">learning git for the first time as a mediocre front-end developer</h1>'
}
