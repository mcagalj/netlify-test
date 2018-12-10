export default [
  {
    text: "Home",
    path: "/"
  },
  {
    text: "Second page",
    path: "/second-page"
  },
  {
    text: "Blog",
    path: "/blog"
  },
  {
    text: "About",
    path: "/about"
  },
  {
    text: "Private",
    path: "/private"
  },
  // Private routes
  {
    text: "Dashboard",
    path: "/private/dashboard",
    private: true
  },
  {
    text: "Personal pages",
    path: "/private/personal",
    private: true
  }
];
