const NavigationSidebar = () => {
    return(`
      <div class="list-group">
      <a href="index.html" class="list-group-item list-group-item-action ">
          <i class="fa-brands fa-twitter"></i>
      </a>
      <a href="../navigation.html" class="list-group-item list-group-item-action ">
          <i class="fa-solid fa-house"></i>
          <span class="d-none d-xl-inline-block float-left ">Home</span>
      </a>
      <a href="../explore/index.html" class="list-group-item list-group-item-action active">
          <i class="fa-solid fa-hashtag"></i>
          <span class="d-none d-xl-inline-block">
              Explore
          </span>
      </a>
      <a href="../notification.html" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-bell"></i>
          <span class="d-none d-xl-inline-block float-left ">Notifications</span>

      </a>
      <a href="#" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-envelope"></i>
          <span class="d-none d-xl-inline-block">
              Messages
          </span>
      </a>
      <a href="../bookmarks/index.html" class="list-group-item list-group-item-action ">
          <i class="fa-solid fa-bookmark"></i>
          <span class="d-none d-xl-inline-block">
              Bookmarks
          </span>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-list"></i>
          <span class="d-none d-xl-inline-block">
              Lists
          </span>
      </a>
      <a href="../profile.html" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-user"></i>
          <span class="d-none d-xl-inline-block">
              Profile
          </span>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-plus"></i>
          <span class="d-none d-xl-inline-block">
              More
          </span>
      </a>
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
   }

$('#wd-navbar').append(NavigationSidebar)

export default NavigationSidebar;