import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BlogItem from '../blog/blog-item'
import axios from 'axios';

class Blog extends Component {
    constructor() {
        super();

        this.state = {
            blogItems: []
        }

        this.getBlogItems = this.getBlogItems.bind(this)
        this.activateInfiniteScroll();
    }

    activateInfiniteScroll() {
        window.onscroll = () => {
            console.log("scrolling")
        }
    }

    getBlogItems() {
        axios.get('https://markestrada.devcamp.space/portfolio/portfolio_blogs', { withCredentials: true })
            .then(response => {
                this.setState({
                    blogItems: response.data.portfolio_blogs
                })
            }).catch(error => {
                console.log("getBlogItems error", error)
            });
    }

    componentDidMount() {
        this.getBlogItems();
    }

    render() {
        const blogRecords = this.state.blogItems.map(blogItem => {
            return <BlogItem key={blogItem.id} blogItem={blogItem} />
        })


        return (
            <div className="blog-container">
                <div className="content-container">
                    {blogRecords}
                </div>
            </div>
        )

    }
}

export default Blog;
