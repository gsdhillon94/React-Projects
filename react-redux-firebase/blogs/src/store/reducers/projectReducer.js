const initialState = {
  blogs: [
    {
      id: 1,
      title: "Title one",
      content: "Here is the content of blog one.",
      firstName: "PersonOneFirstName",
      lastName: "PersonOneLastName",
      posted_date: " Date one",
      email: "someone@something.com",
    },
    {
      id: 2,
      title: "Title two",
      content: "Here is the content of blog two.",
      firstName: "PersontwoFirstName",
      lastName: "PersonTwoLastName",
      posted_date: " Date two",
      email: "someone@something.com",
    },
    {
      id: 3,
      title: "Title three",
      content: "Here is the content of blog three.",
      firstName: "PersonThreeFirstName",
      lastName: "PersonThreeLastName",
      posted_date: " Date three",
      email: "someone@something.com",
    },
  ],
};
const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_BLOG":
      console.log("blog created", action.blog);
      return state;
    case "ERROR":
      console.log("Error", action.err);
      return state;
    default:
      return state;
  }
};
export default projectReducer;
