import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    objectBlog: [],
    articleSelected : null, 
    theArticle : null
  },
  reducers: {
    setArticles: (state, { payload }) => {
      // console.log("Payload: ", payload);
      state.objectBlog = payload;
    },
    setArticleSelected: (state, { payload }) => {
      // console.log("Payload: ", payload);
      state.articleSelected = payload;
      let findOBject =  state.objectBlog.find((article)=> article.id === payload )
      state.theArticle = findOBject;
    },
  },
});

// export quis servira pour mes fonctions
export const { setArticles, setArticleSelected  } = blogSlice.actions;

export const getArticles = (state) => {
  // console.log("state in redux", state.auth.fetchAuth)
  return state.blog.objectBlog
}
export const getArticlesSelected = (state) => {
  // console.log("state in redux", state.auth.fetchAuth)
  return state.blog.articleSelected
}



export default blogSlice.reducer;
