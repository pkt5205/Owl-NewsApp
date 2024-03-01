import React, { Component } from 'react'
import NewsItems from './NewsItems'



export default class News extends Component {

    


    articles = [


    ]

    constructor() {
        super()
        this.state = {
            articles: this.articles,
            page: 1
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=820ed1e8ade741a493aef3992c8f524b&page=1"
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })

    }

    handlePrevious= async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=820ed1e8ade741a493aef3992c8f524b&page=${this.state.page - 1}`
        let data = await fetch(url)
        let parsedData = await data.json()
        

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })

    }

     handleNext= async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=820ed1e8ade741a493aef3992c8f524b&page=${this.state.page + 1}`
        let data = await fetch(url)
        let parsedData = await data.json()
        

        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })

    }


    render() {
        return (
            <div>
                <div className='container my-4'>
                    <h1>Owl News - Top Headlines</h1>
                    <div className='row'>
                        {this.state.articles.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                <NewsItems title={element.title} desc={element.description} imageUrl={element.urlToImage ? element.urlToImage : "https://images.theconversation.com/files/496157/original/file-20221118-11-3hmo7a.jpg?ixlib=rb-1.1.0&rect=3%2C6%2C2130%2C1596&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                    <div className='row d-flex justify-content-between mt-3'>
                        <button disabled={this.state.page <=1} type="button" class="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
                        <button type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                    </div>

                </div>
            </div>
        )
    }
}
