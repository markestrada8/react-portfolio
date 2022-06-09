import React, { Component } from 'react';
import PortfolioItem from './portfolio-item'
import axios from 'axios';

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []
        };
        this.handleFilter = this.handleFilter.bind(this);

    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    getPortfolioItems() {
        axios
            .get("https://markestrada.devcamp.space/portfolio/portfolio_items")
            .then(response => {
                // console.log("Response Data", response);
                this.setState({
                    data: response.data.portfolio_items
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    portfolioItems() {
        //Data needed:
        //background image
        //logo
        //id
        //description
        return this.state.data.map(item => {

            return <PortfolioItem
                key={item.id}
                item={item}
            // url={item.url}
            // slug={item.id}
            />;
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }

        return (

            <div className="portfolio-items-wrapper">
                <button className="btn" onClick={() => this.handleFilter("eCommerce")}>
                    eCommerce
                </button>
                <button className="btn" onClick={() => this.handleFilter("Scheduling")}>
                    Scheduling
                </button>
                <button className="btn" onClick={() => this.handleFilter("Enterprise")}>
                    Enterprise
                </button>

                {this.portfolioItems()}
            </div>


        )
    }
}
