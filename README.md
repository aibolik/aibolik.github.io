![Logo of the aibolik.github.io](https://raw.githubusercontent.com/aibolik/aibolik.github.io/master-v3/site-logo.png)

# My personal website v3

> Active development is in progress

This is my third iteration of personal website. Under the hood I use [GatsbyJS](https://www.gatsbyjs.org/), [ReactJS](https://reactjs.org/) and [Contentful](https://contenful.com) for API based Content Management System. 

[Here is a link](https://elastic-bhabha-78ee1e.netlify.com/) to preview site on netlify.

## Motivation

I started to realize that I want to write and teach some stuff that I know. So I managed to start (tech) blogging and started writing on [Medium](https://medium.com/@aibolkussain) and [dev.to](https://dev.to/aibolik). Then I realized that I also have [my own website](https://aibolik.github.io), hosted on GitHub Pages. At front that was just a Jekyll theme and my markdown content. Since I am a FrontEnd/JavaScript(I actually like considering myself as a full stack 😀) developer, I must create website on my own and it should coinside with my stack. Therefore I've chosen a stack listed before and managed eventually to do it.

## Installing

Run `yarn install` to install all dependencies.

### Initial Configuration

Currently there is no configuration, but more to come.

## Developing

In order to start developing and run it on localhost run `yarn develop`(after all dependencies have installed). Then you can go to [localhost:8000](http://localhost:8000) to see the project. Addtionally [localhost:8000/___graphql](http://localhost:8000/___graphql) is available from where you can make *GraphQL* queries.

### Building

If you run `yarn build` you will get optimized build in `public/` folder.

### Deploying / Publishing

The project is deployed freely on Netlify [here](https://elastic-bhabha-78ee1e.netlify.com/).

## Features

The list of features I want to have to be ready to replace current website:
- [x] Implemented design as in my XD project(Will share later)
- [x] Responsive Design(mobile and tablet+)
- [x] Integration with Contenful
- [x] Blog Articles built from Contenful
- [x] Articles supporting rich markdown
- [x] Syntax highlighting
- [x] About page
- [x] Sign Up form for Newsletters
- [x] Google Analytics - need to check on prod
- [ ] CI integration(CirlceCI or other) to deploy to GitHub pages
- [x] SiteMap

Other features those are not critical for release:
- [ ] Projects page
- [ ] Newsletters page
- [ ] Courses page
- [ ] Disqus integration
- [ ] SEO optimization
- [ ] What I've learnt section
- [ ] Division of exploring posts by category/tags
- [ ] Post views
- [ ] Post upvoting
- [ ] Archive of posts
- [ ] RSS feed
- [ ] Suggested/Related posts
- [ ] Web App Manifest - using `gatsby-plugin-manifest`
- [ ] PWA - using `gatsby-plugin-offline`

## Configuration

Nothing to configure for now